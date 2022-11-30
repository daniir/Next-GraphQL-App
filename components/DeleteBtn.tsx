import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../src/graphql/data/mutation';
import { GET_PROJECT_WITH_TASKS } from '../src/graphql/data/query';
import { TaskObject } from '../src/graphql/data/types';

type DeleteBtn = {
    id: string
    projectId: string
}

export default function DeleteBtn({ id, projectId }: DeleteBtn){

  const [deleteTask, { loading }] = useMutation(DELETE_TASK);

  const removeTask = async(id: string) => {
    await deleteTask({
      variables: { 
        id 
      },
      update(cache){
        const { getProjectWithTask }: any = cache.readQuery({
          query: GET_PROJECT_WITH_TASKS,
          variables: { id: projectId },
        });
        cache.writeQuery({
          query: GET_PROJECT_WITH_TASKS,
          data: {
            getProjectWithTask: {
              ...getProjectWithTask,
              tasks: getProjectWithTask.tasks.filter(
                (t: TaskObject) => t.id !== id
              )
            },
          },
        });
      },
    })
  };

    return (
      <button className="btn btn-danger btn-sm badge rounded-pill mx-2"
        onClick={() => removeTask(id)} disabled={loading}>
        <i className="bi bi-trash3"></i>
      </button>
    );
};