import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from '../src/graphql/queries/mutation';

type initialForm = {
    name: string,
    description?: string,
};

export const useForm = (
    initialForm: initialForm
) => {
    const [form, setForm] = useState<initialForm>(initialForm);
    const [CreateProject, { loading, error }] = useMutation(CREATE_PROJECT);

    const handlerChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(form);
            await CreateProject({
                variables: form
            })
        } catch (error) {
            console.error(error);
        }
    };

    return {
        form,
        handlerChange,
        handlerSubmit
    };
};