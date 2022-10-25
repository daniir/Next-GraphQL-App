import Link from "next/link";
import { ProjectProp } from "../src/graphql/data/types";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from "../src/graphql/data/mutation";

export default function Card({ project }: ProjectProp) {
  const [deleteProject] = useMutation(DELETE_PROJECT);

  const removeProject = async (id: string) => {
    await deleteProject({
      variables: {
        id,
      },
    });
  };

  return (
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
          <Link href={`/project/edit/${project.id}`}>
            <button
              className="btn btn-warning btn-sm"
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
          </Link>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeProject(project.id)}
          >
            <i className="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};