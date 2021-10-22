const Input = () => {
  return (
    <div className="col-md-4">
      <label htmlFor="validationServer01" className="form-label">First name</label>
      <input type="text" className="form-control is-valid" id="validationServer01" placeholder="name@example.com" defaultValue="" required />
    </div>
  );
}

export default Input;