import Link from "next/link";
import { ProjectProp } from "../src/graphql/data/types";
import { useMutation } from '@apollo/client';
import { ProjectObject } from '../src/graphql/data/types';
import { DELETE_PROJECT } from "../src/graphql/data/mutation";
import { GET_PROJECTS } from "../src/graphql/data/query";

export default function Card({ project }: ProjectProp) {
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT);

  const removeProject = async (id: string) => {
    await deleteProject({
      variables: { id },
      update(cache){
        const { getProjects }: any = cache.readQuery({
          query: GET_PROJECTS
        });
        cache.writeQuery({
          query: GET_PROJECTS,
          data: {
            getProjects: getProjects.filter(
              (p: ProjectObject) => p.id !== id)
          }
        })
      }
    });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
        <Link href={`/project/${project.id}`}>
          <a style={{ textDecoration: "none" }}>
            Go to project
            <i className="mx-2 bi bi-arrow-right-circle"></i>
          </a>
        </Link>
      </div>
      <div className="card-footer">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-danger btn-sm"
            disabled={loading}
            onClick={() => removeProject(project.id)}
          >
            Delete project
            <i className="bi bi-trash2-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};