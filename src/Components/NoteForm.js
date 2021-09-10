import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
function NoteForm(props) {
  const [note, setNote] = useState({});
  const getData = props.getData;
  const addDataStore = props.addDataStore;
  const editDataStore = props.editDataStore;
  const itemEdit = props.itemEdit;
  const isEdit = props.isEdit;
  const addStatus = props.addStatus;
  const changeEditStatus = props.changeEditStatus;
  const alertOn = props.alertOn;

  const isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote((oldState)=>({
      ...oldState,
      [name]:value
    }))
  }

  const addData = (note) => {
    if(note.id)
    {
      editDataStore(note);
      changeEditStatus();
      alertOn("Đã Sửa Note Thành Công");
    }
    else{
      var item = {};

      item.noteTitle = note.noteTitle;
      item.noteContent = note.noteContent;
  
      // getData(item);
      addDataStore(item);
      changeEditStatus();
      alertOn("Đã Thêm Note Thành Công");
    }
  }

  useEffect(() => {
    if(itemEdit)
    {
      setNote(itemEdit)
    }
  }, [])

  const changeTitleForm = () =>{
    if(addStatus)
    {
      return "Thêm Note";
    }
    else{
      return "Sửa Note";
    }
  }

  return (
    <div className="col-4">
      <h4>{changeTitleForm()}</h4>
      <form>
        <div className="form-group">
          
          <input
            onChange={(e) => isChange(e)}
            type="text"
            name="noteTitle"
            id="noteTitle"
            className="form-control"
            placeholder="Tiêu đề note"
            aria-describedby="helpIdNoteTitle"
            defaultValue={itemEdit.noteTitle}
          />
          
        </div>
        <div className="form-group">
          
          <textarea
            onChange={(e) => isChange(e)}
            type="text"
            name="noteContent"
            id="noteContent"
            className="form-control"
            placeholder="Nội dung note"
            aria-describedby="helpIdNoteTitle"
            defaultValue={itemEdit.noteContent}
          />
        
        </div>
        <button type="reset" onClick={() => addData(note)} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    itemEdit: state.itemEdit,
    addStatus: state.isAdd
  }
}
//this.props.itemEdit
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type:"ADD_DATA",getItem})
    },
    editDataStore: (editItem) => {
      dispatch({type:"EDIT_DATA",editItem})
    },
    changeEditStatus: () => {
      dispatch({type:"CHANGE_EDIT_VIEW"})
    },
    alertOn: (infoAlert) => {
      dispatch({type:"ALERT_ON", infoAlert})
    },
    
  }
}
//this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

