const Checkbox = () => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
      <label className="form-check-label" htmlFor="disabledFieldsetCheck">
        Remember password
      </label>
    </div>
  );
}

export default Checkbox;