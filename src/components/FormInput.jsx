const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="lable">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  )
}

export default FormInput
