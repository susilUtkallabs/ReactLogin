import React, { useState } from 'react';
import { getLocalStorageData } from './utils/localStorage.utils';
import { LOCAL_STORAGE_USER_DATA } from './constants/constants';

const Login = (props) => {
    const [login, setLogin] = useState({
        email: "",
        password:""
    });

    const handleLogin = (e)=>{
        e.preventDefault();
        setLogin((prev)=> {
            const loginList = {...prev};
            loginList[e.target.name] = e.target.value;
            return loginList;
        });
    }

    const submitLogin = (e)=>{
        e.preventDefault();
        const loggedUser = getLocalStorageData(LOCAL_STORAGE_USER_DATA);
        if(LOCAL_STORAGE_USER_DATA in localStorage){
           const validUser = loggedUser.find((obj)=> obj.email === login.email && obj.password === login.password);
            if(validUser){
                alert("Logged in successfully")
            }else{
                alert("Invalid email or password");
            }
        }
    }

    return (
        <div>
            <form autoComplete='off' className='form'>
                <div className='control'>
                    <h1>
                        Log In
                    </h1>
                </div>
                <div className='control block-cube block-input'>
                    <input name='email' placeholder='Email' type='email' value={login.email}    onChange={handleLogin} required />
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                </div>
                <div className='control block-cube block-input'>
                    <input name='password' placeholder='Password' type='password' value={login.password} onChange={handleLogin} required />
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                </div>
                <button className='btn block-cube block-cube-hover' type='button' onClick={submitLogin}>
                    <div className='bg-top'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='bg'>
                        <div className='bg-inner'></div>
                    </div>
                    <div className='text'>
                        Log In
                    </div>
                </button>
            </form>
            <div>
                <button className='btnBorder' onClick={()=> props.onFormSwitch('register')}>Don't have an account ? Register here</button>
            </div>
        </div>
    )
}

export default Login;