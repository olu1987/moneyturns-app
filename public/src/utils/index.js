function getArrayElementIndexById(state, id) {
  let deleteIndex;
  state.map((el, index) => {
    if (el.id === id) {
      deleteIndex = index;
    }
    return deleteIndex;
  });
  return deleteIndex;
}

export {
  getArrayElementIndexById,
}