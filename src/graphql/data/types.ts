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

export type PorjectWithTasks = {
  id: string;
  name: string;
  description?: string;
  tasks?: [
    {
      id: string;
      name: string;
      description: string;
    }
  ];
};

export type ProjectObject = {
    id: string;
    name: string;
    description?: string;
}

export type ProjectProp = {
  project: {
    id: string;
    name: string;
    description?: string;
  };
};

export type goToProps = {
    path: string,
    name: string,
}