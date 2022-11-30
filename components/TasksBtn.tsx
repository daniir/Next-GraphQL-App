import { TaskProp } from "../src/graphql/data/types";
import DeleteBtn from "./DeleteBtn";
import StatusBtn from "./StatusBtn";

export default function TasksBtn({ tasks, projectId }: TaskProp){

  const { id, status } = tasks;

    return (
      <div>
        <DeleteBtn id={id} projectId={projectId}/>
        {
          !status 
          ? (<StatusBtn id={id} status={status} projectId={projectId}/>)
          : null
        }
      </div>
    );
};