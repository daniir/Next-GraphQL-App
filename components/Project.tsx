import { ProjectProp } from "../src/graphql/data/types";
import Card from "./Card";

export default function Project({project}: ProjectProp){
    return(
        <div className="row">
            <div className="col">
                <Card project={project}/>
            </div>
        </div>
    );
};