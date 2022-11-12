import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../src/graphql/data/mutation';
import { GET_PROJECTS } from '../src/graphql/data/query';
import { ProjectObject } from '../src/graphql/data/types';

type initialData = {
    id?: string,
    name: string,
    description?: string,
};

export const useForm = (
    initialForm: initialData
) => {
    const [form, setForm] = useState<initialData>(initialForm);
    const [errorMsg, setErrorMsg] = useState<String>("");
    const [createProject, { loading }] = useMutation(CREATE_PROJECT);
    const [updateProject] = useMutation(UPDATE_PROJECT);

    const handlerCreateProject = async (form: initialData) => {
        await createProject({
            variables: {
                payload: form
            },
            update(cache, { data }){
              const { getProjects }: any = cache.readQuery({
                query: GET_PROJECTS,
              });
              cache.writeQuery({
                query: GET_PROJECTS,
                data: {
                  getProjects: [data.createProject, ...getProjects],
                },
              });
            },
        });
    };

    const handlerUpdateProject = async(form: initialData) => {
        const { id, name, description } = form;
        const payload = {
            name,
            description
        };
        await updateProject({
            variables: {
                id,
                payload,
            },
        });
    };

    const handlerChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!form.name.trim()){
            setErrorMsg('Name required');
            return;
        };

        try {
            if (form.id) {
                handlerUpdateProject(form);
            } else {
                handlerCreateProject(form);
                handlerReset();
            }
        } catch (error) {
            console.log(`handlerSubmit Error: ${error}`)
        }
    };

    const handlerReset = () => {
        setForm({
            name: '',
            description: '',
        });
        setErrorMsg('');
    };

    return {
        form,
        errorMsg,
        loading,
        handlerChange,
        handlerSubmit
    };
};