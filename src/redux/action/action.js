export const QUERY = "QUERY";
export const DATA = "DATA";
export const DATE = "DATE";
export const SORTBY = "SORTBY";


export const searchQuery = (payload) => ({
  type: QUERY,
  payload,
});
export const searchData = (payload) => ({
  type: DATA,
  payload,
});
export const setDate = (payload) => ({
  type: DATE,
  payload,
});
export const setSortBy = (payload) => ({
  type: SORTBY,
  payload,
});
