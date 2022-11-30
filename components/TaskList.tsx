import { ProjectWithTasksProp, TaskObject } from "../src/graphql/data/types";
import TasksBtn from "./TasksBtn";

export default function TaskList({ project }: ProjectWithTasksProp){

    return (
      <ol className="list-group">
        {project.tasks ? (
          project.tasks?.map((t: TaskObject) => (
            <li
              key={t.id}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <p className={`${t.status ? "text-decoration-line-through": null}`}>{t.name} </p>
              <TasksBtn key={t.id} tasks={t} projectId={project.id} />
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