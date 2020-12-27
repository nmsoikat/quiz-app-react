function TextArea({label, rows, cols, inputStyle, inputPlaceholder, onBlurHandler, name,onChangeHandler,value}){

  return (
    <div className="form-group">
      <label className="d-block">
        {label} <br/>
        <textarea onChange={onChangeHandler} name={name} onBlur={onBlurHandler} rows={rows} cols={cols} className={inputStyle} placeholder={inputPlaceholder} value={value}></textarea>
      </label>
    </div>
  )
}

export default TextArea;