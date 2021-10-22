const Checkbox = () => {
  return (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
      <label class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
      </label>
    </div>
  );
}

export default Checkbox;