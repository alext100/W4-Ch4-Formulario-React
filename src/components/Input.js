const Input = ({ placeholder, textContent, invalidFeedback, type = "text" }) => {

  return (
    <div className="col-md-4">
      <label htmlFor="validation" className="form-label">{textContent}</label>
      <input type={type} className="form-control is-valid" id="validation" placeholder={placeholder} defaultValue="" required />
      <div className="invalid-feedback">{invalidFeedback}</div>
    </div>
  );
}

export default Input;