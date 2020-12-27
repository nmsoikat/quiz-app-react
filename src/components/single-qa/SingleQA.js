import InputOption from '../input-option/InputOption'


function SingleQA({questions}){
  return (
    questions.map(singleQuestion => 
    (
      <div className="single-question" key={singleQuestion._id}>
        <h2 className="single-question__question">{singleQuestion.question}</h2>
        <ul className="single-question__options-wrap">
          {singleQuestion.options.map(option => 
          (
            <li className="single-question__option" key={option._id}>
              <InputOption name="selectOption" inputType="radio" option={option}/>
            </li>
          )
          )}
        </ul>
        <h2 className="single-question__answer">{singleQuestion.answer}</h2>
    </div>
    ))
  )
}

export default SingleQA;