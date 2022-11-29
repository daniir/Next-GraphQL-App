import { GET_PROJECT_WITH_TASKS } from '../../src/graphql/data/query';
import { ServerSideProject } from '../../src/graphql/data/types';
import Details from '../../components/Detail';
import { client } from '../../src/lib/apollo';

export default function Edit({ project, loading }: ServerSideProject){

    if (loading) return <p>...loading...</p>

    return(
        <Details project={project}/>
    )
};

export async function getServerSideProps({ query: { id } }) {
    const { data, loading } = await client.query({
        query: GET_PROJECT_WITH_TASKS,
        variables: { id }
    });

    return {
        props: {
            project: data.getProjectWithTask,
            loading
        }
    }
};