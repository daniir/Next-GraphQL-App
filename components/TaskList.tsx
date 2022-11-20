import { ProjectWithTasksProp, TaskObject } from "../src/graphql/data/types";
import TasksBtn from "./TasksBtn";

export default function TaskList({ project }: ProjectWithTasksProp){

    return (
      <ol className="list-group">
        {project.tasks ? (
          project.tasks?.map((t: TaskObject) => (
            <li key={t.id}
                className="list-group-item d-flex justify-content-between align-items-start">
              {t.name} <TasksBtn key={t.id} tasks={t}/>
            </li>
          ))
        ) : (
          <li className="list-group-item d-flex justify-content-between align-items-start">
            No task
          </li>
        )}
      </ol>
    );
};