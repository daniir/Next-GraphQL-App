import { Dispatch, SetStateAction, useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from "../src/graphql/data/mutation";
import { GET_PROJECT_WITH_TASKS } from '../src/graphql/data/query';

type TaskFormProps = {
  projectId: string
  setAdd: Dispatch<SetStateAction<Boolean>>
}

export default function TaskForm({ projectId, setAdd }: TaskFormProps){

    const [name, setName] = useState<string>("");
    const [msgError, setMsgError] = useState<string>("");
    const [createTask, {loading}] = useMutation(CREATE_TASK);

    const handlerSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!name.trim()){
        setMsgError("Task name is required");
        return;
      }
      await createTask({
        variables: {
          projectId,
          name
        },
        update(cache, { data }){
          const { getProjectWithTask }: any = cache.readQuery({
            query: GET_PROJECT_WITH_TASKS,
            variables: { id: projectId },
          });
          console.log('Data: ', data);
          console.log('getProject: ', getProjectWithTask);
          cache.writeQuery({
            query: GET_PROJECT_WITH_TASKS,
            data: {
              getProjectWithTask: [getProjectWithTask.tasks.push(data.createTask)] 
            },
          });
        },
      });
      resetStates();
      setAdd(false);
    };

    const resetStates = () => {
      setName("");
      setMsgError("");
    };

    return (
      <form className="row g-3" onSubmit={handlerSubmit}>
        <div className="col-auto">
          <label htmlFor="title" className="visually-hidden">
            Task name
          </label>
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="title"
            value="Task name"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="tValue" className="visually-hidden">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          { msgError ? (<p className="text-danger">{msgError}</p>) : null }
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    );
};