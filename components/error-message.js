function ErrorMessage({ message }) {
  return (
    <div className="error-validation">
      <p className="error-validation-text"> { message }</p>
    </div>
  )
}

export default ErrorMessage;