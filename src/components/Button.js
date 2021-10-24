const Button = ({ buttonText, className = "btn btn-primary", isDisabled }) => {
  return (
    <div className="col-12">
      <button className={className} type="submit" disabled={isDisabled}>{buttonText}</button>
    </div>
  );
}

export default Button;