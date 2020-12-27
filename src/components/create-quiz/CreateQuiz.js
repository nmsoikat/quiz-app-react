import react from 'react';
import classNames from 'classnames'
import {v4 as uuidv4} from 'uuid'

import InputBox from '../input/Input'
import TextArea from '../text-area/TextArea'

class CreateQuiz extends react.Component {

  constructor(){
    super();

    this.formRef = react.createRef();
  }
  
  state = {
    title: true,
    description: true,
    quizTemp:{
      title: 'This is dummy title',
      description: 'This is dummy description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus repudiandae repellat consequatur aliquam explicabo accusamus. Aliquid, sapiente! Exercitationem asperiores cupiditate numquam dolores explicabo corporis porro ipsam mollitia reiciendis libero?'
    },
    questions:[
      {
        question: "dummy question",
        options: [
          {
          _id:1,
          value: "option 1"
          },
          {
          _id:2,
          value: "option 2"
          }
      ],
        answer: "Option1"
      }
    ],
    optionCount:[{_id:uuidv4()},{_id:uuidv4()}]
  }

  
  clickHandler(event){
    this.setState({
      [event.target.dataset.name]: true
    })
  }

  onChangeHandler(event){
    let newQuiz = {...this.state.quizTemp};
    newQuiz[event.target.name] = event.target.value;

    this.setState({quizTemp: newQuiz})
  }

  keyPressHandler = (event) => {
    // console.log(event.key); // print text
    // console.log(event.charCode); // work will
    // console.log(event.keyCode); // always print 0
    if(event.charCode === 13){
      this.setState({title: false})
    }
  }

  onBlurHandler = (event) => {
    this.setState({[event.target.name]: false})
  }




  addInputBox(){
    this.setState((prev) => {
      let newOptions = [...prev.optionCount]

      if(newOptions.length <= 4){
        let option = {
          _id:uuidv4()
        }
        newOptions.push(option)
      }

      return {
        optionCount: newOptions
      }
    })
  }

  deleteInputBox(id){
    // console.log(id);
    this.setState((prev) => {
      let options = [...prev.optionCount]

      options = options.filter((option) => {
        return id !== option._id;
      })

      return {
        optionCount: options
      }
    })
  }

  singleQuestionSubmit = (event) => {
    event.preventDefault();
    const form = this.formRef.current;

    let options = [];  // all option
    let obj = {}; // single question data (question and options and answer)

    obj.question = form[0].value; // ADD question
    
    options.push(form[1].value) // option one // default
    options.push(form[2].value) // option two // default
    if(form[3].name === "options"){
      options.push(form[3].value) // option three
    }
    if(form[4].name === "options"){
      options.push(form[4].value) // option four
    }
    obj.options = options; // ADD options

    if(form[3].name === "answer" || form[4].name === "answer" || form[5].name === "answer")
      obj.answer = form[3].value; // ADD answer


    this.setState(prev => {
      let prev_questions = [...prev.questions];
      prev_questions.push(obj)
      return {
        questions: prev_questions
      }
    })

    console.log(this.state.questions);

    // console.log(questions);

    // console.log(this.formRef.current[0]);
    // [...this.formRef.current].map((field) => {
    //   if(field.type !== "submit"){
    //     console.log(field);
    //   }
    // })
  }

  render() {
    let {title, description} = this.state.quizTemp;

    return (
      <div className="create-quiz-wrap">
        <div className="container">
          <div className="quiz-info box-style">
            <div className="quiz-info__title">
              {
                this.state.title ? 
                <InputBox 
                keyPressHandler={this.keyPressHandler}
                onBlurHandler={this.onBlurHandler} 
                onChangeHandler={this.onChangeHandler.bind(this)}
                value={this.state.quizTemp.title}
                name="title"
                label="Quiz Title" 
                inputType="text" 
                inputStyle="form-control" 
                inputPlaceholder="Input Topic Title"/> 
                : <h2 onClick={this.clickHandler.bind(this)} data-name="title">{title}</h2>
              }
            </div>
            <div className="quiz-info__desc">
              {
                this.state.description ?
                <TextArea 
                onBlurHandler={this.onBlurHandler}
                onChangeHandler={this.onChangeHandler.bind(this)}
                value={this.state.quizTemp.description} 
                name="description"
                label="QuizDescription" 
                rows="10" 
                inputStyle="form-control" 
                inputPlaceholder="Enter some text for basic understand"/>
                : <p onClick={this.clickHandler.bind(this)} data-name="description">{description}</p>
              }              
            </div>
          </div>

          <div className="create-question-wrap box-style mt-5">
            <form onSubmit={this.singleQuestionSubmit} ref={this.formRef}>
              <div className="question">
                <InputBox 
                      // keyPressHandler={this.keyPressHandler}
                      // onBlurHandler={this.onBlurHandler} 
                      // onChangeHandler={this.onChangeHandler.bind(this)}
                      // value={this.state.quizTemp.title}
                      name="question"
                      label="Make Question" 
                      inputType="text" 
                      inputStyle="form-control" 
                      inputPlaceholder="Enter Your Question"/> 
              </div>
              <div className="options-wrap">
                {this.state.optionCount.map((item) => (
                  <div className="options" key={item._id} >
                    <InputBox
                      name="options"                   
                      inputType="text" 
                      inputStyle="form-control" 
                      inputPlaceholder="Option"
                    />
                    <span 
                      className={classNames("options__del-icon", {"d-none": this.state.optionCount.length < 3})} 
                      onClick={() => {this.deleteInputBox(item._id)}}>
                      <i className="fas fa-trash-alt"></i>
                      </span>
                    
                  </div>
                ))}
                {this.state.optionCount.length >= 4 ? '' : <span className="options__add mb-5" onClick={this.addInputBox.bind(this)}><i className="fas fa-plus"></i></span> }
              </div>
              <div className="answer">
              <InputBox 
                      // keyPressHandler={this.keyPressHandler}
                      // onBlurHandler={this.onBlurHandler} 
                      // onChangeHandler={this.onChangeHandler.bind(this)}
                      // value={this.state.quizTemp.title}
                      name="answer"
                      inputType="text" 
                      inputStyle="form-control" 
                      inputPlaceholder="Answer"/> 
              </div>
              <button className="btn btn-success" type="submit">Add to question</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateQuiz;