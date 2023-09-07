import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {

  const[formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData( (prevData) => ({
        ...prevData,
          [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event) {
    event.preventDefault()

    if (formData.password!== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("Printing final data");
    console.log(finalData);
  }

  return (
    <div>
        <div 
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
          <button
          className={`${accountType === "student"
          ? 
          "bg-richblack-900 text-richblack-5" 
          :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 ease-linear`}
          onClick={() => setAccountType("student")}>
            Student
          </button>

          <button
          className={`${accountType === "instructor"
          ? 
          "bg-richblack-900 text-richblack-5" 
          :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 ease-linear`}
          onClick={() => setAccountType("instructor")}> 
            Instructor
          </button>
        </div>

        <form className='flex flex-col gap-y-4' onSubmit={submitHandler}>

          {/* FirstName and LastName div */}
          <div className='flex gap-x-4'>
            <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
              <input 
              required
              type="text" 
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first Name"
              value={formData.firstName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm'
              />
            </label>

            <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
              <input 
              required
              type="text" 
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last Name"
              value={formData.lastName}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm'
              />
            </label>
          </div>

          {/* Email Address */}
          <label>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
              <input 
              required
              type="email"  
              name="email"
              onChange={changeHandler}
              placeholder="Enter email address"
              value={formData.email}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm'
              />
          </label>

          {/* Password and Confirm Password div */}
          <div className='w-full flex gap-x-4'>
            <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
              <input 
                required
                type= {showPassword1 ? ("text") : ("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm'
              />
              <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword1((prev => !prev))}>
                {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
              </span>
            </label>

            <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
              <input
                required
                type= {showPassword2 ? ("text") : ("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-sm'
              />
              <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword2((prev => !prev))}>
                {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
              </span>
            </label>
          </div>
          
          {/* Create Account button */}
          <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' type="submit">Create Account</button>

        </form>
    </div>
  )
}

export default SignupForm