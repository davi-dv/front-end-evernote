import React, { Fragment,useState } from 'react';
import HeaderLogged from '../../components/header_logged'
import { Column } from "rbx";
import Notes from '../../components/notes'
import "../../styles/notes.scss";


const NotesScreen = () => {
 const [isOpen,setIsOpen] = useState(false)
 return(
  <Fragment>
     <HeaderLogged setIsOpen={setIsOpen}/>
     <Notes isOpen={isOpen} setIsOpen={setIsOpen}/>
  </Fragment>
 )
 };

export default NotesScreen;