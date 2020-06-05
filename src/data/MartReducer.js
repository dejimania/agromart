import { ActionTypes } from './Types';

export const martReducer = (storeData, action) => {
  switch(action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: [action.payload.dataType]
      };
    default:
      return storeData || {};
  }
}