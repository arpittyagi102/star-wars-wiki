import dashboardImage from '../Assets/dashboard-image.png';

export default function Dashboard(){

    return (
      <>
        <div className="dashboard-card">
            <img src={dashboardImage} alt="Dashboard Image" className='dashboard-image'/>
            <h3 className='h4'>Welcome to Star Wars <br/>Dashboard</h3>
            <p className='p'>
                Star Wars is an American epic space opera multimedia franchise created by George Lucas, 
                which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
            </p>
        </div>
      </>
    )
  }