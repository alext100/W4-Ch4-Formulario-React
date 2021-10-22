import Input from "./Input";
import Button from "./Button";

const AccessData = () => {
  return (
    <form className="row g-3 personal-data">
      <Input textContent={"Username"} placeholder={"Username"} invalidFeedback={"Please provide a valid username."} />
      <Input textContent={"Password"} placeholder={"Password"} invalidFeedback={"Please provide a valid last name."} />
      <Input textContent={"Repeat password"} placeholder={"Password"} invalidFeedback={"Please provide a valid last name."} />
      <div className="btn-toolbar md-2" role="group">
        <div className="btn-group me-2" role="group">
          <Button buttonText={"Back"} className={"btn btn-secondary"} />
          <Button buttonText={"Submit form"} className={"btn btn-primary"} />
        </div>
      </div>
    </form>
  );
}

export default AccessData;