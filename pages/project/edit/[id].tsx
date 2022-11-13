import { GET_PROJECT } from '../../../src/graphql/data/query';
import { ServerSideIndex } from '../../../src/graphql/data/types';
import { client } from '../../../src/lib/apollo';
import ProjectForm from '../../../components/ProjectForm';
import { UPDATE_PROJECT } from '../../../src/graphql/data/mutation';

export default function Edit({ project, loading }: ServerSideIndex){

    if (loading) return <p>...loading...</p>

    return(
        <ProjectForm formData={project} gqlMutation={UPDATE_PROJECT}/>
    )
};

export async function getServerSideProps({ query: { id }}){
    const { data, loading } = await client.query({
        query: GET_PROJECT,
        variables: { id }
    });

    return{
        props: {
            project: data.getProject,
            loading
        }
    }
};