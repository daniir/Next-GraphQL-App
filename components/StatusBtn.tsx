import { useMutation } from '@apollo/client';
import { UPDATE_TASK_STATUS } from '../src/graphql/data/mutation';
import { GET_PROJECT_WITH_TASKS } from '../src/graphql/data/query';
import { TaskObject } from '../src/graphql/data/types';

type StatusBtn = {
    id: string
    status: boolean
    projectId: string
}

export default function StatusBtn({ id, status, projectId }: StatusBtn){

  const [updateTaskStatus, { loading }] = useMutation(UPDATE_TASK_STATUS);

  const updateStatus = async(status: Boolean) => {
    await updateTaskStatus({
      variables: {
        id,
        status
      },
      update(cache, { data }){
        const { getProjectWithTask }: any = cache.readQuery({
          query: GET_PROJECT_WITH_TASKS,
          variables: { id: projectId },
        });
        cache.writeQuery({
          query: GET_PROJECT_WITH_TASKS,
          data: {
            getProjectWithTask: {
              ...getProjectWithTask,
              tasks: getProjectWithTask.tasks.map(
                (t: TaskObject) => t.id === id ? data.updateTaskStatus : t
              )
            },
          },
        });
      },
    })
  };

  return (
    <button className="btn btn-success btn-sm badge rounded-pill"
      onClick={() => updateStatus(!status)} disabled={loading}>
      <i className="bi bi-check-circle"></i>
    </button>
  );
};