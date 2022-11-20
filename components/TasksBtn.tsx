import { TaskProp } from "../src/graphql/data/types";
import DeleteBtn from "./DeleteBtn";
import StatusBtn from "./StatusBtn";

export default function TasksBtn({ tasks }: TaskProp){

  const { id, status } = tasks;

    return (
      <div>
        <DeleteBtn id={id}/>
        <StatusBtn status={status}/>
      </div>
    );
};