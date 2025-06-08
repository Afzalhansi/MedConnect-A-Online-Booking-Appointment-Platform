import React, { useState } from 'react'
import { assets } from '../assets/assets'


const MyProfile = () => {

  const [userData,setUserData] = useState({
    name: "Deepak Upare",
    image:assets.profile_pic,
    email: 'deepak123@gmail.com',
    phone: '+1 897656563353',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, India",
    },
    gender: 'Male',
    dob: '2000-01-20'
    })

    const[isEdit,serIsEdit] = useState(false)

  return (
    <div>
        <img src={userData.im} alt="" />
    {
      isEdit 
      ? <input type="text" />
      : <p>{userData.name}</p>
    }
    
    </div>
  )
}

export default MyProfile
