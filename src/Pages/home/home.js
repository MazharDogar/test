import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './home.css'

const Home = () => {
  const [data, setData] = useState()

  useEffect(async () => {
    const { data } = await axios.get('https://randomuser.me/api/')
    console.log(data.results);
    setData(data.results)

    // console.log(data, "state data")
  }, [])
  return (
    <>
      <div className='container'>
        

          {data?.map((user) => (
            <div className='row justify-content-center profile_section py-5' style={{backgroundImage: `url(${user.picture.large})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
              
              <div className='col-6 personalInfo_sec'>
              <div className='overlay'></div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>First Name:</h4>
                  <span className='info'>{user.name.first}</span>
                </div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>Last Name:</h4>
                  <span className='info'>{user.name.last}</span>
                </div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>Gender:</h4>
                  <span className='info'>{user.gender}</span>
                </div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>Age:</h4>
                  <span className='info'>{user.dob.age}</span>
                </div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>Phone:</h4>
                  <span className='info'>{user.cell}</span>
                </div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>Address:</h4>
                  <span className='info'>{user.location.street.name},{user.location.city}, {user.location.country}</span>
                </div>
                <div className='info_div d-flex'>
                  <h4 className='info_heading'>Phone:</h4>
                  <span className='info'>{user.cell}</span>
                </div>
              </div>
              <div className='col-4 profileImg_sec d-flex align-items-center'>
            <img src={user.picture.large} alt='profile' className='profile_img img-fluid' ></img>
          </div>
            </div>

          ))}

          
      </div>
    </>
  )
}

export default Home