import Checkbox from "./Checkbox";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  return (
    <form className="personal-data">
      <Input textContent={"Username"} placeholder={"Username"} invalidFeedback={"Please provide a valid username."} />
      <Input textContent={"Password"} placeholder={"Password"} invalidFeedback={"Please provide a valid last name."} />
      <Checkbox />
      <div className="btn-toolbar md-2" role="group">
        <div className="btn-group me-2" role="group">
          <Button buttonText={"Back"} className={"btn btn-secondary"} />
          <Button buttonText={"Submit form"} className={"btn btn-primary"} />
        </div>
      </div>
    </form>
  );
}
export default Login;