const updateSearchTerm = (state, action) => {
  if (state === undefined || state.searchTerm === undefined) {
    return {
      searchTerm: '',
    };
  }

  switch (action.type) {
    case 'TERM_ADDED':
      return {
        searchTerm: action.payload,
      };
    default:
      return state.searchTerm;
  }
};

export default updateSearchTerm;
