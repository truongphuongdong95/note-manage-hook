import "./../App.css";
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {noteData} from './firebaseConnect';
import { connect } from 'react-redux';
import AlertInfo from "./AlertInfo";
function App(props) {

  const isEdit = props.isEdit;

  const showFormEdit = () => {
    if(isEdit)
    {
      return <NoteForm />;
    }
  }

  return (
    <div>
        <Nav />
        <AlertInfo/>
        <div className="container">
          <div className="row">
            <NoteList />
            {showFormEdit()}
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


export default connect(mapStateToProps)(App)
