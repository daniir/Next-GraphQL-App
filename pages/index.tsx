import { useQuery } from '@apollo/client';
import GoTo from '../components/GoTo';
import Project from '../components/Project';
import { GET_PROJECTS } from '../src/graphql/data/query';
import { ProjectList, ProjectObject } from '../src/graphql/data/types';

export default function Index() {

  const { data, loading } = useQuery(GET_PROJECTS)

  if(loading) return <p>..loading...</p>

  const projects: ProjectList = data.getProjects;

  return (
    <div className="text-center mt-4">
      <h3>Project List</h3>
      <GoTo path="project/create" name="Add new project" />
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.length > 0 ? (
          projects.map((project: ProjectObject) => (
            <div className="col" key={project.id}>
              <Project project={project} />
            </div>
          ))
        ) : (
          <div
            className="alert alert-danger d-flex align-items-center mx-auto"
            role="alert"
          >
            <i className="bi bi-exclamation-circle"></i>
            <div className="mx-2"> Project list empty</div>
          </div>
        )}
      </div>
    </div>
  );
};