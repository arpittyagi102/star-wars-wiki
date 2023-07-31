import films from '../Assets/films.svg';
import caret from '../Assets/caret.svg';
import React,{ useState } from 'react';
import './styles.css'

export default function Display({ folderName, files}){

    const [isGrid, setIsGrid] = useState(true);

    return(
        <div className='display'>
            <div className='upper'>
                <h2>{folderName}</h2>
                <div className='buttons'>
                    <button className='btn active'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="View grid">
                                <path id="Vector" d="M7 5C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V9C5 9.53043 5.21071 10.0391 5.58579 10.4142C5.96086 10.7893 6.46957 11 7 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V7C11 6.46957 10.7893 5.96086 10.4142 5.58579C10.0391 5.21071 9.53043 5 9 5H7ZM7 13C6.46957 13 5.96086 13.2107 5.58579 13.5858C5.21071 13.9609 5 14.4696 5 15V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H9C9.53043 19 10.0391 18.7893 10.4142 18.4142C10.7893 18.0391 11 17.5304 11 17V15C11 14.4696 10.7893 13.9609 10.4142 13.5858C10.0391 13.2107 9.53043 13 9 13H7ZM13 7C13 6.46957 13.2107 5.96086 13.5858 5.58579C13.9609 5.21071 14.4696 5 15 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V9C19 9.53043 18.7893 10.0391 18.4142 10.4142C18.0391 10.7893 17.5304 11 17 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V7ZM13 15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H17C17.5304 13 18.0391 13.2107 18.4142 13.5858C18.7893 13.9609 19 14.4696 19 15V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H15C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17V15Z" fill="#696974"/>
                            </g>
                        </svg>
                    </button>
                    <button className='btn inactive'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g id="View list">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6C19 6.26522 18.8946 6.51957 18.7071 6.70711C18.5196 6.89464 18.2652 7 18 7H6C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6ZM5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H18C18.2652 9 18.5196 9.10536 18.7071 9.29289C18.8946 9.48043 19 9.73478 19 10C19 10.2652 18.8946 10.5196 18.7071 10.7071C18.5196 10.8946 18.2652 11 18 11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10ZM5 14C5 13.7348 5.10536 13.4804 5.29289 13.2929C5.48043 13.1054 5.73478 13 6 13H18C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14C19 14.2652 18.8946 14.5196 18.7071 14.7071C18.5196 14.8946 18.2652 15 18 15H6C5.73478 15 5.48043 14.8946 5.29289 14.7071C5.10536 14.5196 5 14.2652 5 14ZM5 18C5 17.7348 5.10536 17.4804 5.29289 17.2929C5.48043 17.1054 5.73478 17 6 17H18C18.2652 17 18.5196 17.1054 18.7071 17.2929C18.8946 17.4804 19 17.7348 19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18Z" fill="#DEDEDE"/>
                        </g>
                    </svg>
                    </button>
                </div>
            </div>

            <div className="display-wrapper">
                    {files.map((item) => {
                        return (
                            <Card data={item.title ?? item.name}/>
                    )})}
            </div>
        </div>
    )
}

function Card({ data }){
    return(
        <>
            <div className="files-card">
                <img src="https://picsum.photos/300/200" alt="random" className="card-cover"/>
                <div className="card-bottom">
                    <img src={films} alt='films' className='icon'/>
                    <div className='content'>{data}</div>
                    <img src={caret} alt='caret' className='caret-icon'/>
                </div>
            </div>
        </>
    )
}