function Myinput({ label, name, type = 'text', value, onChange, placeholder = '' }) {
  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}
export default Myinput