import AccessData from './components/AccessData';
import './App.css';
import contextUserData from './components/context';
import PersonalData from './components/PersonalData';
import Login from './components/Login';

function App() {
  const userInfoInitial = {
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    userName: "",
    password: "",
  }
  const userInfo = userInfoInitial;


  return (
    <>
      <contextUserData.Provider value={{ userInfo }}>
        <PersonalData />
        <AccessData />
      </contextUserData.Provider>
      <Login />
    </>
  );

}

export default App;
