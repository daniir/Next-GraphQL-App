import { createContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({children}) => {
    const [isEdit, setIsEdit] = useState();

    return(
        <ProjectContext.Provider
            value={{
                isEdit,
                setIsEdit
            }}
        >
            {
                children
            }
        </ProjectContext.Provider>
    );
};

export default ProjectContext;