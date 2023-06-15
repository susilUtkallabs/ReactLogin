import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { setLocalStorageData } from './utils/localStorage.utils';
import { LOCAL_STORAGE_USER_DATA } from './constants/constants';

const Signup = ({onFormSwitch, record, setRecord}) => {

    const [signUp, setSignUp] = useState({
        userName: "",
        email: "",
        phone: "",
        password:""
      });

    const handleInput = (e)=> {
        e.preventDefault();
        setSignUp((prev)=> {
            const signUpList = {...prev};
            signUpList[e.target.name] = e.target.value;
            return signUpList;
        });
    }

    const submitRegister = (e) => {
        e.preventDefault();
        const newRecord = {...signUp, id: uuid()};
        setRecord([...record, newRecord]);
        setSignUp({
            userName: "",
            email: "",
            phone: "",
            password:""
          });
          setLocalStorageData(LOCAL_STORAGE_USER_DATA , [...record, newRecord]);
    }

    return (
        <div>
            <form autoComplete='off' className='form'>
                <div className='control'>
                    <h1>
                        Sign Up
                    </h1>
                </div>
                <div className='control block-cube block-input'>
                    <input name='userName' placeholder='Name' value={signUp.userName} onChange={handleInput} type='text' required />
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
                    <input name='phone' placeholder='Phone Number' value={signUp.phone} onChange={handleInput}type='number' required />
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
                    <input name='email' placeholder='Email' type='email' value={signUp.email} onChange={handleInput} required />
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
                    <input name='password' placeholder='Password' type='password' value={signUp.password} onChange={handleInput} required />
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
                <button className='btn block-cube block-cube-hover' onClick={submitRegister}>
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
                        Sign Up
                    </div>
                </button>
            </form>
            <div>
                <button className='btnBorder' onClick={()=>{onFormSwitch('login')}}>Already have an account ? Login here</button>
            </div>
        </div>
    )
}

export default Signup;