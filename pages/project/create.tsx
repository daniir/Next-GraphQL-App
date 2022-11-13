import ProjectForm from "../../components/ProjectForm";
import { CREATE_PROJECT } from "../../src/graphql/data/mutation";


const createDataForm = {
  name: "",
  description: ""
}

export default function Create(){
    return (
      <ProjectForm formData={createDataForm} gqlMutation={CREATE_PROJECT}/>
    );
};