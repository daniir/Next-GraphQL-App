import { DocumentNode } from 'graphql';
import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';

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
      <p>...Loading project data...</p>
    </div>
  ) : (
    <form onSubmit={handlerSubmit}>
      <div className="row justify-content-center">
        <div className="mb-3">
          <label htmlFor="formName" className="form-label">
            Name
          </label>
          <input
            className="form-control w-25"
            type="text"
            name="name"
            placeholder="Add a project name"
            id="formName"
            value={form.name}
            onChange={handlerChange}
          />
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
        </div>
        <div className="col align-self-center">
          <div className="mb-3">
            <label htmlFor="formDescription" className="form-label">
              Description
            </label>
            <textarea
              className="form-control w-50"
              name="description"
              id="formDescription"
              rows={3}
              value={form.description}
              onChange={handlerChange}
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            { form.id ? "Update" : "Create" }
          </button>
        </div>
      </div>
    </form>
  );
};