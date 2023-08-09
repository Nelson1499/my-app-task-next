"use client";
let value;
if (typeof window !== "undefined") {
  value = JSON.parse(localStorage.getItem("task"));
}
export const taskInitialState = value || [];

export const TASK_ACTION_TYPES = {
  ADD_TO_TASK: "ADD_TO_TASK",
  REMOVE_FROM_TASK: "REMOVE_FROM_TASK",
  CLEAR_TASK: "CLEAR_TASK",
  UPDATE_TASK: "UPDATE_TASK",
};

export const updateLocalStorage = (state) => {
  localStorage.setItem("task", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [TASK_ACTION_TYPES.ADD_TO_TASK]: (state, action) => {
    const newState = [
      ...state,
      {
        ...action.payload,
      },
    ];
    updateLocalStorage(newState);
    return newState;
  },
  [TASK_ACTION_TYPES.REMOVE_FROM_TASK]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [TASK_ACTION_TYPES.UPDATE_TASK]: (state, action) => {
    const { id } = action.payload;
    console.log(action.payload);
    const taskIndex = state.findIndex((item) => item.id === id);
    if (taskIndex >= 0) {
      const newState = [
        ...state.slice(0, taskIndex),
        {
          ...state[taskIndex],
          task: action.payload.task,
          priority: action.payload.priority,
        },
        ...state.slice(taskIndex + 1),
      ];
      updateLocalStorage(newState);
      return newState;
    }
  },
};

export const taskReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
