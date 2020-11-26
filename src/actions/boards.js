let nextBoardId = 3;
const addBoard = (name, thumbnailPhoto) => {
  nextBoardId += 1;
  return {
    id: nextBoardId,
    payload: { name, thumbnailPhoto },
  };
};

export default addBoard;
