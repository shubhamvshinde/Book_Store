import React from 'react'
import Bookstore from './Bookstore';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Loginpage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setphonenumber] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phonenumber: '',
    });

    const validateForm = () =>{
        let isValid = true;
        const newErrors = {
            username: '',
            email: '',
            phonenumber: '',
        };

        if(!username.trim()){
            newErrors.username='Username is Required';
            document.getElementById("username").style.border="2px solid red";
            isValid = false;
        }else if(username){
            document.getElementById("username").style.border="2px solid black";
        }
        if(!email.trim()){
            newErrors.email='Email is Required';
            document.getElementById("email").style.border="2px solid red";
            isValid = false;
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email=' Invalid email address';
            document.getElementById("email").style.border="2px solid red";
            isValid = false;
        }else if(email){
            document.getElementById("email").style.border="2px solid black";
        }
        if(!phonenumber.trim()){
            newErrors.phonenumber='Phone Number is Required';
            document.getElementById("phonenumber").style.border="2px solid red";
            isValid = false;
        }else if(!/^[0-9]{10}$/.test(phonenumber)){
            newErrors.phonenumber='Invalid Phone number';
            document.getElementById("phonenumber").style.border="2px solid red";
            isValid = false;
        }
        else if(phonenumber){
            document.getElementById('phonenumber').style.border="2px solid black";
        }
        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(validateForm()){
            console.log('login successfully');
            setIsLoggedIn(true);
        }
    }
    const [data, setData] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/books');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);
  
  //   console.log("datataattatat", data)
  return (
    <>
    {isLoggedIn ? (
        <Bookstore sendData={data} />
      )
      :
      (
        <div className='login-page'>
            <div className='login-form'>
                <h2 className='login-heading'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        {/* <label htmlFor='username'>User Name</label> */}
                        <input 
                            type='text'
                            id='username'
                            placeholder='Enter Username'
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                        {errors.username && <p className='error'>{errors.username}</p>}
                    </div>
                    <div className='form-group'>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input 
                            type='email'
                            id='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className='form-group'>
                        {/* <label htmlFor='phonenumber'>Phone Number</label> */}
                        <input 
                            type='text'
                            id='phonenumber'
                            placeholder='Enter Phone Number'
                            maxLength={10}
                            value={phonenumber}
                            onChange={(e)=> setphonenumber(e.target.value)}
                        />
                        {errors.phonenumber && <p className='error'>{errors.phonenumber}</p>}
                    </div>
                    <button type='submit'>Login</button>
                    <h4>If you dont have Acount ? Register Here</h4>
                </form>
            </div>
        </div>
      )
    }
    </>
  )
}

export default Loginpage ;
