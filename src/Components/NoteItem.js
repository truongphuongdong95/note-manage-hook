import React from 'react'
import { connect } from 'react-redux';
function NoteItem(props) {
  const notes = props.noteList;
  const changeEditStatus = props.changeEditStatus;
  const getEditData = props.getEditData;
  const getDeleteData = props.getDeleteData;
  const alertOn = props.alertOn;

  const twoActionEdit = () => {
    changeEditStatus();

    getEditData(notes);

  }

  const deleteData = () => {
    getDeleteData(notes.id);
    alertOn("Đã Xóa Note Thành Công");
  }

    return (
        <div className="card mb-2">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#noteList"
              aria-expanded="true"
              aria-controls={"#"+notes.id}
              href={"#"+notes.id}
            >
              {notes.noteTitle}
            </a>
          </h5>

          <div className="btn-group float-right">
            <button
              className="btn btn-outline-primary"
              onClick={() => twoActionEdit()}
            >
              Sua
            </button>
            <button className="btn btn-outline-primary" onClick={() => deleteData()}>Xoa</button>
          </div>
        </div>
        <div
          id={notes.id}
          className="collapse in"
          role="tabpanel"
          aria-labelledby="note1"
        >
          <div className="card-body">{notes.noteContent}</div>
        </div>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type:"CHANGE_EDIT_VIEW"})
    },
    getEditData : (editObj) => {
      dispatch({type:"GET_EDIT_DATA", editObj})
    },
    getDeleteData : (deleteId) => {
      dispatch({type:"GET_DELETE_DATA", deleteId})
    },
    alertOn: (infoAlert) => {
      dispatch({type:"ALERT_ON", infoAlert})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
