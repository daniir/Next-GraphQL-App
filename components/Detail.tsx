import { useState } from 'react';
import { ProjectWithTasksProp } from "../src/graphql/data/types";
import TaskForm from './TaskForm';
import TaskList from "./TaskList";

export default function Details({ project }: ProjectWithTasksProp){
    
    const { name, description } = project;
    const [add, setAdd] = useState<Boolean>(false);
    
    return (
      <div>
        <div className="text-center my-4">
          <h2>{name}</h2>
          <p className="text-muted">{description}</p>
        </div>
        <hr />
        <div className="row">
        <div className="col">
            {
              !add 
              ? (<TaskList project={project}/>)
              : (<TaskForm/>)
            }
            <br />
            <button
              className={!add ? "btn btn-primary" : "btn btn-dark"}
              onClick={() => setAdd(!add)}
            >
              { 
                !add 
                ? "Add new task "
                : "Regresar "
              }
              <i className={!add ? "bi bi-plus-circle" : "bi bi-x-circle"}></i>
            </button>
          </div>
        </div>
      </div>
    );
};