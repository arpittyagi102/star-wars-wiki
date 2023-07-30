import React,{useState} from "react";
import Dashboard from "./Pages/Dashboard"
import './App.css';
import logo from './Assets/logo.png'
import Folder from "./Pages/Nav-folder";
import Display from "./Pages/Display";

export default function App(){

  const [active, setActive] = useState(null);
  const [files, setFiles] = useState([]);

  const getDataFromNavFolder = (data) => {
      setFiles(data);
  } 

  return (
    <>
      <div className="upper-bar">

          <img src={logo} width="72" alt="star wars logo" />
          
          <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.8555 12.9274L16.6666 15.7384L15.7383 16.6667L12.9273 13.8556C11.9166 14.6643 10.6347 15.148 9.2406 15.148C5.97974 15.148 3.33325 12.5015 3.33325 9.24067C3.33325 5.97982 5.97974 3.33333 9.2406 3.33333C12.5014 3.33333 15.1479 5.97982 15.1479 9.24067C15.1479 10.6348 14.6642 11.9166 13.8555 12.9274ZM12.5387 12.4404C13.3413 11.6132 13.8352 10.4849 13.8352 9.24067C13.8352 6.70215 11.7791 4.64607 9.2406 4.64607C6.70208 4.64607 4.64599 6.70215 4.64599 9.24067C4.64599 11.7792 6.70208 13.8353 9.2406 13.8353C10.4848 13.8353 11.6131 13.3414 12.4403 12.5387L12.5387 12.4404Z" fill="white"/>
            </svg>
            <input className='input' placeholder='Search'/>
          </div>
      </div>
      <div className="wrapper">
          <nav className='side-navbar'>
            {
              ['Films','People','Planets','Species','Starships','Vehicles'].map((item,key) => 
                { return( 
                    <Folder 
                        folderName={item} 
                        key={key} 
                        active={active} 
                        setActive={setActive} 
                        files={files} 
                        setFilesUpLift={getDataFromNavFolder}/>
                )})
            }
          </nav>

          <main className="main">
            { active ? ( 
              <Display folderName={active} files={files}/>
            ) : (
              <Dashboard/>
            )}
          </main>
      </div>
    </>
  )
}

