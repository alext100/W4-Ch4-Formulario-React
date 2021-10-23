import "./PersonalData.css";
import Input from "./Input";
import Button from "./Button"

const PersonalData = () => {
  //const { userInfo } = useContext(contextUserData);

  return (
    <form className="row g-3 personal-data">
      <Input textContent={"First name"} placeholder={"John"} invalidFeedback={"Please provide a valid name."} />
      <Input textContent={"Last name"} placeholder={"Smith"} invalidFeedback={"Please provide a valid last name."} />
      <Input textContent={"Birthdate"} type={"date"} placeholder={"05.10.1990"} invalidFeedback={"Please provide a valid birthday."} />
      <Input textContent={"Email"} placeholder={"name@example.com"} invalidFeedback={"Please provide a valid email."} />
      <Button buttonText={"Submit form"} />
    </form>
  );
}
export default PersonalData;