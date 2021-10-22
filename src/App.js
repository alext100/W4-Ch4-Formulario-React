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
  // console.log('userInfo: ', userInfo);

  return (
    <contextUserData.Provider value={{ userInfo }}>
      <PersonalData />
    </contextUserData.Provider>
  );

}

export default App;
