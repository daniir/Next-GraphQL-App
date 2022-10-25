import { Dispatch, SetStateAction } from "react";

export type ServerSideIndex = {
    projects: [
        {
            id: string,
            name: string,
            description?: string,
            // tasks?:[
            //     {
            //         id: string,
            //         name: string,
            //         description: string
            //     }
            // ]
        },
    ],
    loading: boolean,
};

export type ProjectProp = {
    project: {
        id: string,
        name: string,
        description?: string,
    }
};

export type goToProps = {
    path: string,
    name: string,
}