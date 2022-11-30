import { DocumentNode } from 'graphql';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import Loader from './Loader';

type DataFormType = {
  formData: {
    id?: string,
    name: string,
    description?: string,
  },
  gqlMutation: DocumentNode
};

export default function ProjectForm({ formData, gqlMutation }: DataFormType){

  const { form, errorMsg, loading, handlerChange, handlerSubmit } =
    useForm(formData, gqlMutation);

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <form onSubmit={handlerSubmit}>
      <div className="text-center mt-5">
        <h1>Create a new project</h1>
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <i className="mx-2 bi bi-arrow-left-circle"></i>
            Back
          </a>
        </Link>
        <hr />
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Add a project name"
            id="formName"
            value={form.name}
            onChange={handlerChange}
          />
          <label htmlFor="formName">Name</label>
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            style={{ height: "100px", resize: 'none' }}
            name="description"
            id="formDescription"
            rows={3}
            value={form.description}
            onChange={handlerChange}
          ></textarea>
          <label htmlFor="formDescription">Description</label>
        </div>
        <div className='d-grid gap-2 my-3'>
          <button type="submit" className="btn btn-primary">
            {form.id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </form>
  );
};