import React from 'react'
import NoteItem from './NoteItem';
import {noteData} from './firebaseConnect';
import { useState,useEffect } from 'react';
function NoteList() {
  
    const [dataFirebase, setDataFirebase] = useState([]);

    const getData = () => {
      if(dataFirebase){
        return dataFirebase.map((value,key) => {
          return (<NoteItem key={key} noteList={value} />)
        })
      }
    }


    useEffect(() => {
      noteData.on('value', (notes) => {
        const arrayData = [];
        notes.forEach(element => {
          const key = element.key;
          const noteTitle = element.val().noteTitle;
          const noteContent = element.val().noteContent;
          arrayData.push({
            id:key,
            noteTitle:noteTitle,
            noteContent:noteContent
          });
        })
        setDataFirebase(arrayData);
      })
    }, [])

    return (
        <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {getData()}
         
        </div>
      </div>
    )
}

export default NoteList
