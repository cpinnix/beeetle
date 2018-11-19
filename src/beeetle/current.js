let currentObject = null;
let currentId = 0;

export const setCurrentObject = newObject => {
  currentObject = newObject;
};

export const getCurrentObject = () => currentObject;

export const getCurrentObjectId = () => {
  const cid = currentId;
  currentId = currentId + 1;
  return cid;
};

export const clear = () => {
  currentObject = null;
  currentId = 0;
};
