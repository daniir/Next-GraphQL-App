import ProjectForm from "../../components/ProjectForm";


const createDataForm = {
  name: "",
  description: ""
}

export default function Create(){
    return (
      <ProjectForm formData={createDataForm}/>
    );
};