import AccessData from './components/AccessData';
import './App.css';
import contextUserData from './components/context';
import PersonalData from './components/PersonalData';

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
    /*     <contextUserData.Provider value={{ userInfo }}>
          <PersonalData />
        </contextUserData.Provider> */
    <AccessData />
  );

}

export default App;
