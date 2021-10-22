const Button = ({ buttonText }) => {
  return (
    <div className="col-12">
      <button className="btn btn-primary" type="submit">{buttonText}</button>
    </div>
  );
}

export default Button;