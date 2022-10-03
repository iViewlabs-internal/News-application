import { DATA, QUERY, DATE, SORTBY } from "../action/action";

const initial_state = {
  searchQuery: "",
  searchData: [],
  setDate: "",
  setSortBy: "",
};

export const searchReducer = (store = initial_state, action) => {
  switch (action.type) {
    case QUERY:
      return {
        ...store,
        searchQuery: action.payload,
      };
    case DATA:
      return {
        ...store,
        searchData: [...action.payload],
      };
    case DATE:
      return {
        ...store,
        setDate: action.payload,
      };
    case SORTBY:
      return {
        ...store,
        setSortBy: action.payload,
      };
    default:
      return {
        store,
      };
  }
};
