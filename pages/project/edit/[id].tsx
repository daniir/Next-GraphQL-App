import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../../src/graphql/data/query';
import { ServerSideIndex } from '../../../src/graphql/data/types';
import { client } from '../../../src/lib/apollo';
import ProjectForm from '../../../components/ProjectForm';

export default function Edit({ project, loading }: ServerSideIndex){

    // const router = useRouter();
    // const { id } = router.query;

    if (loading) return <p>...loading...</p>

    console.log('data: ', project);

    return(
        <ProjectForm formData={project}/>
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