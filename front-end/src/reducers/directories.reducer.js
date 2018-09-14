import {} from "../actions/types";

const initialState = {
  currentDirectory: null,
  directories: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}