import Link from "next/link";
import { ProjectProp } from "../src/graphql/data/types";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from "../src/graphql/data/mutation";
import { useContext } from "react";
import ProjectContext from "../context/ProjectProvider";

export default function Card({ project }: ProjectProp){

    const [deleteProject] =  useMutation(DELETE_PROJECT);
    const { isEdit, setIsEdit } = useContext(ProjectContext);

    const removeProject = (id: string) => {
      deleteProject({
        variables: {
          id
        },
      });
    };

    const editProject = (project: ProjectProp) => {
      setIsEdit(project);
    };

    return(
        <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <Link href={`/project/${project.id}`}>
            <a style={{ textDecoration: "none" }}>
              Manage project
              <i className="mx-2 bi bi-arrow-right-circle"></i>
            </a>
          </Link>
        </div>
        <div className="card-footer">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-warning btn-sm">
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button className="btn btn-danger btn-sm"
              onClick={() => removeProject(project.id)}>
              <i className="bi bi-trash2-fill"></i>
            </button>
          </div>
        </div>
      </div>
    );
};