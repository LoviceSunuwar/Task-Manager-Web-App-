const initialState = {
  projects: [],
  tasks: [],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLPROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "GETALLPROTASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADDPROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case "ADDTASKTOPROJECT":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "ADDTASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATETASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload.id
            ? { ...task, text: action.payload.update }
            : task
        ),
      };
    case "DELETETASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case "STARTED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload ? { ...task, status: "started" } : task
        ),
      };
    case "COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload ? { ...task, status: "completed" } : task
        ),
      };
    default:
      return state;
  }
};
