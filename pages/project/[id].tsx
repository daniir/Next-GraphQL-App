import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GET_PROJECT_WITH_TASKS } from '../../src/graphql/data/query';
import { useLazyQuery } from '@apollo/client';
import Details from '../../components/Detail';
import NotFound from '../../components/NotFound';
import Loader from '../../components/Loader';



export default function ProjectDetail(){

    const router = useRouter();
    const { id } = router.query;
    const [project, setProject] = useState();  
    const [getProjectWithTask, { loading, data }] = useLazyQuery(
        GET_PROJECT_WITH_TASKS,
        {
            variables: { id }
        }
    );

    useEffect(() => {
        if(data) {
            setProject(data.getProjectWithTask)
        } else {
            getProjectWithTask();
        }
    }, [data, getProjectWithTask])

    if (loading) return <Loader/>

    return(
        project
        ? <Details project={project}/>
        : <NotFound/>
    )
};