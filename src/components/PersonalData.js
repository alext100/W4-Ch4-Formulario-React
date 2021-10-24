import "./PersonalData.css";
import Input from "./Input";
import Button from "./Button"
import contextUserData from "./context";
import { useContext } from "react";

const PersonalData = () => {
  const { formStep, setFormStep, setUserInfo, userInfo } = useContext(contextUserData);

  const changeUserInfo = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  }

  const isDisabled = () => {
    if (userInfo.name === "" ||
      userInfo.lastName === "" ||
      userInfo.birthday === "" ||
      userInfo.email === "") {
      return true;
    }
    else
      return false;
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    changeUserInfo(event);
    setFormStep(formStep + 1);
  };

  return (
    <form className="row g-3 personal-data" onSubmit={onSubmitForm}>
      <Input value={userInfo.name} onChange={changeUserInfo} textContent={"First name"} placeholder={"John"} invalidFeedback={"Please provide a valid name."} required />
      <Input value={userInfo.lastName} onChange={changeUserInfo} textContent={"Last name"} placeholder={"Smith"} invalidFeedback={"Please provide a valid last name."} required />
      <Input value={userInfo.birthday} onChange={changeUserInfo} textContent={"Birthdate"} type={"date"} invalidFeedback={"Please provide a valid birthday."} required />
      <Input value={userInfo.email} onChange={changeUserInfo} textContent={"Email"} placeholder={"name@example.com"} invalidFeedback={"Please provide a valid email."} pattern={"[^ @]*@[^ @]*"} required />
      <Button buttonText={"Submit form"} disabled={isDisabled} actionOnClick={onSubmitForm} />
    </form>
  );
}
export default PersonalData;