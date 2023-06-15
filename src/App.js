import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { LOCAL_STORAGE_USER_DATA } from './constants/constants';
import { getLocalStorageData, setLocalStorageData } from './utils/localStorage.utils';

function App() {

  const [currentForm, setCurrentForm] = useState('login');
  const [record, setRecord] = useState([]);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  // useEffect(()=>{
  //   setLocalStorageData(LOCAL_STORAGE_USER_DATA , record);
  // },[record]);

  return (
    <div className='App'>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} record={record} /> : <Signup onFormSwitch={toggleForm} record={record} setRecord={setRecord} />
      }
    </div>
  );
}

export default App;
