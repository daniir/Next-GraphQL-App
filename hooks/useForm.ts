import React, { useState } from 'react';

type initialForm = {
    name: string,
    description?: string,
};

export const useForm = (
    initialForm: initialForm
) => {
    const [form, setForm] = useState<initialForm>(initialForm);

    const handlerChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form)
    };

    return {
        form,
        handlerChange,
        handlerSubmit
    };
};