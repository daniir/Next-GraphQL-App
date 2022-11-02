import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../src/graphql/data/query';

export default function Edit(){

    const router = useRouter();
    const { id } = router.query;

    const { data, loading } = useQuery(GET_PROJECT, {
        variables: { id } 
    });

    if (loading) return <p>...loading...</p>

    console.log('data: ', data.getProject);
    const { name, description } = data.getProject;

    return(
        <div>
            <p>Edit project id: {id}</p>
            <p>Edit project name: {name}</p>
            <p>Edit project description: {description}</p>
        </div>
    )
};