function InputOption({name, inputType, option}){
  return (
    <label><input name={name} type={inputType} data-id={option._id}/>{option.value}</label>
  )
}

export default InputOption;