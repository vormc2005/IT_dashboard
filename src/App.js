import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from "./components/layout/AddBtn"
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import AddTechModal from "./components/Techs/AddTechModal"
import TechListModal from "./components/Techs/TechListModal"

const App= ()=> {

  useEffect(()=>{
    //initializes materialize javascript
    M.AutoInit();
  })

  return (
    <Fragment>
    <SearchBar />
    <div className="container">
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
      <Logs />
    </div>
    </Fragment>
  );
}

export default App;
