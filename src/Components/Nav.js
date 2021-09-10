import React from 'react'
import { connect } from 'react-redux';
function Nav(props) {
    const changeEditStatus = props.changeEditStatus;
    const changeAddStatus = props.changeAddStatus;
    const handleAdd = (e) => {
      e.preventDefault();
      changeEditStatus();
      changeAddStatus();
    }

    return (
        <nav
        className="navbar navbar-expand-sm navbar-dark mb-4"
        style={{ backgroundColor: "black" }}
      >
        <a className="navbar-brand" href="#">
          NOTE
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => handleAdd(e)}>
                Them moi
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
    changeAddStatus: () => {
      dispatch({type:"CHANGE_ADD_VIEW"})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
