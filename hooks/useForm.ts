import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from '../src/graphql/data/mutation';

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
    const [handlerProject, { loading, error }] = useMutation(CREATE_PROJECT);

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
            await handlerProject({
                variables: {
                    payload: form
                }
            });
    
            handlerReset();
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