import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const AdminHome = () => {

  return (
    <div className='container-fluid'>
      
      <div className='row justify-content-evenly mt-4'>
        <div className='col-2'>
          <h2  className='left'>Admin&nbsp;Dashboard</h2>
        </div>
        <div className='col-2'></div>
        <div className='col-2'></div>
        <div className='col-2'></div>
      </div>
      
      <div className='row justify-content-evenly mt-4'>
        
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-warning rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><FaIcons.FaUniversity /></h1>
            <h4 className='mt-4'>Universities</h4>
          </div>
        </div>
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-primary rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><FaIcons.FaBook /></h1>
            <h4 className='mt-4'>Courses</h4>
          </div>
        </div>
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-success rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><IoIcons.IoMdPeople /></h1>
            <h4 className='mt-4'>Companies</h4>
          </div>
        </div>
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-danger rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><RiIcons.RiTimeFill /></h1>
            <h4 className='mt-4'>Exprience</h4>
          </div>
        </div>
      </div>

      <div className='row justify-content-evenly mt-4'>
        
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-warning rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><FaIcons.FaUniversity /></h1>
            <h4 className='mt-4'>Universities</h4>
          </div>
        </div>
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-primary rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><FaIcons.FaBook /></h1>
            <h4 className='mt-4'>Courses</h4>
          </div>
        </div>
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-success rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><IoIcons.IoMdPeople /></h1>
            <h4 className='mt-4'>Companies</h4>
          </div>
        </div>
        <div className='col-10 p-4 col-sm-5 col-lg-2 bg-danger rounded text-center mb-5'>
          <div className='mb-5'>
            <h1 className='mt-4'><RiIcons.RiTimeFill /></h1>
            <h4 className='mt-4'>Exprience</h4>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AdminHome
