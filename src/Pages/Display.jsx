import films from '../Assets/films.svg';
import caret from '../Assets/caret.svg';

export default function Display({ folderName, files}){
    return(
        <>
            <h2>{folderName}</h2>

            <div className="display-wrapper">
                    {files.map((item) => {
                        return (
                            <Card data={item.title ?? item.name}/>
                    )})}
            </div>
        </>
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