function InputBox({label, inputType, inputStyle, inputPlaceholder, keyPressHandler,onBlurHandler, name, onChangeHandler,value}){

  return (
    <div className="form-group">
      <label className="d-block">
        {label}{label ? <br/> : ''}
        <input onChange={onChangeHandler} name={name} onKeyPress={keyPressHandler} onBlur={onBlurHandler} type={inputType} className={inputStyle} placeholder={inputPlaceholder} value={value}/>
      </label>
    </div>
  )
}

export default InputBox;