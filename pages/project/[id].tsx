import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GET_PROJECT_WITH_TASKS } from '../../src/graphql/data/query';
import { PorjectWithTasks } from '../../src/graphql/data/types';
import Details from '../../components/Detail';
import { client } from '../../src/lib/apollo';

export default function Edit(){

    const router = useRouter();
    const { id } = router.query;
    const [project, setProject] = useState<PorjectWithTasks>();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const res = async()=> {
            const { data, loading } = await client.query({
                query: GET_PROJECT_WITH_TASKS,
                variables: { id },
            });
            setProject(data.getProjectWithTask);
            setLoading(loading);
        };

        res();
    }, [id]);

    if (loading) return <p>...loading...</p>

    return(
        project 
        ? <Details project={project}/>
        : null
    )
};