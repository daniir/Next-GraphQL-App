export type ProjectList = [
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
];

export type ServerSideIndex = {
  project: ProjectObject,
  loading: boolean
};

export type ServerSideProject = {
  project: PorjectWithTasks,
  loading: boolean
};

export type PorjectWithTasks = {
  id: string;
  name: string;
  description?: string;
  tasks?: [
    {
      id: string;
      name: string;
      status: boolean;
    }
  ];
};

export type ProjectObject = {
    id: string;
    name: string;
    description?: string;
};

export type TaskObject = {
    id: string;
    name: string;
    status: boolean;
};

export type ProjectProp = {
  project: {
    id: string;
    name: string;
    description?: string;
  };
};

export type TaskProp = {
  projectId: string,
  tasks: {
    id: string;
    name: string;
    status: boolean;
  };
};

export type ProjectWithTasksProp = {
  project: {
    id: string;
    name: string;
    description?: string;
    tasks?: [
      {
        id: string;
        name: string;
        status: boolean;
      }
    ];
  };
};

export type goToProps = {
    path: string,
    name: string,
};