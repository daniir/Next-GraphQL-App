import GoTo from '../components/GoTo';
import Project from '../components/Project';
import { GET_PORJECTS } from '../src/graphql/data/query';
import { ServerSideIndex } from '../src/graphql/data/types';
import { client } from '../src/lib/apollo';

export default function Index({ projects, loading }: ServerSideIndex) {

  if(loading) return <p>..loading...</p>

  return(
    <div className="text-center mt-2">
      <h3>Project List</h3>
      <GoTo path='project/create' name='Add new project'/>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          projects.length > 0 ? (
            projects.map(
              project => (
                <div className="col" key={project.id}>
                <Project project={project}/>
              </div>
              )
            )
          ) : (
            <p>No projects</p>
          )
        }
      </div>
    </div>
  )
};

export async function getServerSideProps() {
  const { data, loading } = await client.query({
    query: GET_PORJECTS
  });

  return {
    props: {
      projects: data.getProjects,
      loading
    }
  }
};