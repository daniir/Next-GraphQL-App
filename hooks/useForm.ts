import React, { useState } from 'react';
import { DocumentNode, useMutation } from '@apollo/client';
import { CREATE_PROJECT, UPDATE_PROJECT } from '../src/graphql/data/mutation';
import { GET_PROJECTS } from '../src/graphql/data/query';
import { ProjectObject } from '../src/graphql/data/types';

type initialData = {
    id?: string,
    name: string,
    description?: string,
};

export const useForm = (
    initialForm: initialData,
    gqlMutation: DocumentNode
) => {
    const [form, setForm] = useState<initialData>(initialForm);
    const [errorMsg, setErrorMsg] = useState<String>("");
    const [handlerProject, { loading }] = useMutation(gqlMutation);

    const handlerCreateProject = async (form: initialData) => {
        await handlerProject({
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
                  getProjects: [...getProjects, data.createProject],
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
        await handlerProject({
            variables: {
                id,
                payload,
            },
            update(cache){
                const { getProjects }: any = cache.readQuery({
                    query: GET_PROJECTS,
                });
                cache.writeQuery({
                    query: GET_PROJECTS,
                    data: {
                        getProjects: getProjects.map(
                            (p: ProjectObject) => p.id === form.id ? form : p
                        )
                    }
                });
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