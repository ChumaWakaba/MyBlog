import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { authorAction } from '../Store';
import { useDispatch } from 'react-redux'


const Author = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsSignedUp(!isSignedUp);
  };

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "login") => {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, 
    {
      name: user.name,
      email: user.email,
      password: user.password,
    })
    .catch((err) => {
      console.log(err);
    })

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignedUp)
    {
      sendRequest("signup").then((data) => localStorage.setItem("userID", data.user._id)).then(()=>dispatch(authorAction.login())).then(()=>navigate("/blogs"));
    }
    else {
      sendRequest().then((data) => localStorage.setItem("userID", data.user._id)).then(()=>dispatch(authorAction.login())).then(()=>navigate("/blogs"));

    }
  };

  return (
    <div>
      <div className='max-w-lg w-full space-y-8 mx-auto'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-semibold text-gray-900'>{isSignedUp ? "Sign Up" : "Log in"}</h2>
        </div>
        <form className='mt-6 space-y-6' onSubmit={handleSubmit}>
          <div>
            {isSignedUp ? 
              (<div>
                <label htmlFor='name'>Name:</label>
                  <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    autoComplete='name' 
                    required 
                    value={user.name}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"              />
            </div>)
            : ( '' )} 
            <div>
              <label htmlFor='name'>Email:</label>
              <input 
                type='email' 
                id='email' 
                name='email' 
                autoComplete='email' 
                required 
                value={user.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                />
            </div>
            <div>
              <label htmlFor='name'>Password:</label>
              <input 
                type='password' 
                id='password' 
                name='password' 
                autoComplete='password' 
                required 
                value={user.password}
                onChange={handleChange}
                className=' appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg'
                />
            </div>
            <div>
              <button type='submit' 
              className='relative w-full flex justify-center mt-4 px-4 py-2 border-transparent bg-sky-200 hover:bg-sky-100 text-indigo-600 hover:text-indigo-400 focus:outline-none focus:underline'>{isSignedUp ? "Sign Up" : "Log in"}</button>
            </div>
            <div className='mt-4'>
              <button type='button' 
              className ='mt-4 px-4 py-2 text-lg text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline'
              onClick={handleToggle}>{isSignedUp 
                ? "Already have an account? Log in." 
                : "Don't have an account? Sign in."}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Author