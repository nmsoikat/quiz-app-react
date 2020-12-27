class MyState{
  getAllData(){
    return {
      profile:[
        { _id:'1', 
        name:'NM Soikat', 
        designation:'Front-End Developer', 
        email: 'nursaykat@gmail.com', 
        password:'12345', 
        picture:'/upload/me.jpg', 
        bio:"This letter is to express my interest in the job posted on your website for an experienced, detailed-oriented, front-end web developer. As you'll see, I have six years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript."},
        { _id:'2', 
        name:'Rohim', 
        designation:'Back-End Developer', 
        email: 'rohim@gmail.com', 
        password:'12345', 
        picture:'/upload/male-profile-avatar.jpg', 
        bio:"This letter is to express my interest in the job posted on your website for an experienced, detailed-oriented, front-end web developer. As you'll see, I have six years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript."}
      ],
      quiz:[
        {
          _id: '1',
          title:"This is first quiz",
          description: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex, alias reiciendis labore unde excepturi aspernatur velit ipsum quia officia illum aut minus accusamus veritatis quod laboriosam mollitia dolor aliquid?",
          questions:[
            {
              _id: '1',
              question: "Question 1",
              options: [
                { _id:1,value: "option 1"},
                {_id:2,value: "option 2"}
              ],
              answer: "option 1"
            },
            {
              _id: '2',
              question: "Question 2",
              options: [
                { _id:1,value: "option 1"},
                {_id:2,value: "option 2"}
              ],
              answer: "option 2"
            }
          ],
          author:{ _id:'1', name:'NM Soikat', designation:'Front-End Developer', email: 'nursaykat@gmail.com', password:'12345', picture:'/upload/me.jpg', 
          bio:"This letter is to express my interest in the job posted on your website for an experienced, detailed-oriented, front-end web developer. As you'll see, I have six years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript."}
        },
        {
          _id: '2',
          title:"This is second quiz",
          description: "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex, alias reiciendis labore unde excepturi aspernatur velit ipsum quia officia illum aut minus accusamus veritatis quod laboriosam mollitia dolor aliquid?",
          questions:[
            {
              _id: '1',
              question: "Question 1",
              options: [
                { _id:1,value: "option 1"},
                {_id:2,value: "option 2"}
              ],
              answer: "option 1"
            },
            {
              _id: '2',
              question: "Question 2",
              options: [
                { _id:1,value: "option 1"},
                {_id:2,value: "option 2"}
              ],
              answer: "option 2"
            }
          ],
          author:{ _id:'1', name:'NM Soikat', designation:'Front-End Developer', email: 'nursaykat@gmail.com', password:'12345', picture:'/upload/me.jpg', 
          bio:"This letter is to express my interest in the job posted on your website for an experienced, detailed-oriented, front-end web developer. As you'll see, I have six years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript."}
        },
        {
          _id: '3',
          title:"This is first quiz",
          description: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex, alias reiciendis labore unde excepturi aspernatur velit ipsum quia officia illum aut minus accusamus veritatis quod laboriosam mollitia dolor aliquid?",
          questions:[
            {
              _id: '1',
              question: "Question 1",
              options: [
                { _id:1,value: "option 1"},
                {_id:2,value: "option 2"}
              ],
              answer: "option 1"
            }
          ],
          author:{ _id:'2', name:'Rohim', designation:'Back-End Developer', email: 'rohim@gmail.com', password:'12345', picture:'/upload/male-profile-avatar.jpg', 
          bio:"This letter is to express my interest in the job posted on your website for an experienced, detailed-oriented, front-end web developer. As you'll see, I have six years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript."}
        }
      ]
    }
  }
}

export default new MyState