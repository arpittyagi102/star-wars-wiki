import React,{ useState } from 'react'
import folder from '../Assets/folder.svg'
import caret from '../Assets/caret.svg'
import loader from '../Assets/loader.svg'
import films from '../Assets/films.svg'
/* import people from '../Assets/people.svg'
import planets from '../Assets/planets.svg'
import species from '../Assets/species.svg'
import starships from '../Assets/starships.svg'
import vehicles from '../Assets/vehicles.svg' */

export default function Folder({ folderName, active, setActive, setFilesUpLift }){

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadedAlready, setIsLoadedAlready] = useState(false);
    const [files, setFiles] = useState([]);
    const [activeFolderData, setActiveFolderData] = useState([]); 

    
    const handleClick = async (e) => {
        if(active === folderName){          // If the clicked folder is already active make it inactive
            setActive(null);
            return
        }
        if(isLoadedAlready){                // If the clicked folder data has been loaded once before don't load it again
            setActive(folderName);

            if (activeFolderData && activeFolderData.folderName === folderName) {
                setFilesUpLift(activeFolderData.data);
            }
            return
        }
        setIsLoading(true);
        setActive(folderName);
        const data = await fetch(`https://swapi.dev/api/${folderName.toLowerCase()}`)
        const json = await data.json();
        setIsLoading(false);
        setIsLoadedAlready(true)
        console.log(json)
        setFiles(json.results);
        setActiveFolderData({ folderName, data: json.results });
        setFilesUpLift(json.results);
    }
  
    return (
      <>
        <div className={`folder  ${active===folderName && "active"}`} onClick={handleClick}>
            <img src={folder} alt="folder" className='folder-icon'/>
            <div className='folder-name'>{folderName}</div>
            { isLoading ?
                ( <img src={loader} alt="caret" className='loading-icon'/> ) :
                ( <img src={caret} alt="caret" className='caret-icon'/> )}
        </div>
        <div className='children' style={{display:active!==folderName && 'none'}}> 
            { files.map((item,key) => {
                return(
                    <Files type={folderName} data={item} key={key}/>
                )
            })}
        </div>
      </>
    )
} 

function Files({type, data}){

    function handleClick(){
        console.log(data);
    }

    return(
        <div className='file' onClick={handleClick}>
            <img className='icon' src={films} alt='icons'/>
            <div className='data-name'>{data.title ?? data.name}</div>
            <img src={caret} alt="caret" className='caret-icon'/>
        </div>
    )
}