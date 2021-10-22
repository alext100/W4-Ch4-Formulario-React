const Button = ({ buttonText, className = "btn btn-primary" }) => {
  return (
    <div className="col-12">
      <button className={className} type="submit">{buttonText}</button>
    </div>
  );
}

export default Button;