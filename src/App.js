import AccessData from './components/AccessData';
import './App.css';
import contextUserData from './components/context';
import PersonalData from './components/PersonalData';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [formStep, setFormStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    userName: "",
    password: "",
  });

  return (
    <>
      <contextUserData.Provider value={{ formStep, setFormStep, setUserInfo, userInfo }}>
        {{
          1: <PersonalData />,
          2: <AccessData />,
          3: <Login />,
        }[formStep]}
      </contextUserData.Provider>
    </>
  );
}

export default App;
