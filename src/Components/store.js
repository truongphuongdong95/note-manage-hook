import { noteData } from "./firebaseConnect";

var redux = require("redux");

const noteInitialState = {
  isEdit: false,
  itemEdit: {},
  isAdd: false,
  showAlert: false,
  infoAlert:''
};
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      noteData.push(action.getItem);
      return state;
    case "CHANGE_EDIT_VIEW":
      return { ...state, isEdit: !state.isEdit };
    case "CHANGE_ADD_VIEW":
      return { ...state, isAdd: !state.isAdd };
    case "GET_EDIT_DATA":
      return { ...state, itemEdit: action.editObj };
    case "EDIT_DATA":
      noteData.child(action.editItem.id).update({
        noteTitle: action.editItem.noteTitle,
        noteContent: action.editItem.noteContent,
      });
      return { ...state, itemEdit: {} };
    case "GET_DELETE_DATA":
      noteData.child(action.deleteId).remove();
      return state;
    case "ALERT_ON":
      return { ...state, showAlert: true, infoAlert: action.infoAlert };
    case "ALERT_OFF":
      return { ...state, showAlert: false };

    default:
      return state;
  }
};

var store = redux.createStore(allReducer);

store.subscribe(function () {
  //console.log(JSON.stringify(store.getState()));
});
export default store;
