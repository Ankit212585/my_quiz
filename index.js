 var timer;
 var ele = document.getElementById('timer');
  (function(){
    var sec =  0;
    timer = setInterval(()=>{
        ele.innerHTML = '00:'+sec;
        sec++;
    }, 1000)
  })()

  function pause(){
    clearInterval(timer);
  }

  const question = [{
    "id":1,
    "answer":"Paris",
    "question":"What is the capital of France?",
    "options":["New York","London","Paris","Dublin"]
},
{
    "id":2,
    "answer":"Leonardo Da Vinci",
    "question":"Who painted the Mona Lisa?",
    "options":["Vincent Van Gogh","Pablo Picasso","Leonardo Da Vinci","Claude Monet"]
},
{
    "id":3,
    "answer":"Defense Against Dark Arts",
    "question":"Which class did Severus Snape always want to teach?",
    "options":["Potions","Charms","Defense Against Dark Arts","Transfiguration"]
},
{
    "id":4,
    "answer":"Ravenclaw",
    "question":"Which Hogwarts house did Moaning Myrtle belong in?",
    "options":["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]
},
{
    "id":5,
    "answer":"Herbology",
    "question":"What class did Neville end up teaching at Hogwarts?",
    "options":["Astronomy","Herbology","Charms","Muggle Studies"]
}
]

const quiz_list = document.querySelector('#quiz-list')
const submitbutton = document.querySelector('#submit-button')

const render_quiz = () =>{

    question.forEach((element,index)=>{

         const quizItem = document.createElement("li")

         quizItem.className = "quiz_Item"

         const border = document.createElement("hr")
         border.className = "solid_border"
         quizItem.innerHTML = `
         <p>Q${element.id}. ${element.question}</p>
         <ul>
         ${element.options.map(option=>
            `
            <li>
            <input type = "radio" name ="element${index}" value="${option}">${option} </li>`).join("")}
            <ul/>
         `
          quiz_list.appendChild(quizItem)
          quizItem.appendChild(border)
          
    })
}
render_quiz()

submitbutton.addEventListener("click",() =>{
    let score = 0
    question.forEach((element,index)=>{
        const selectedOption = document.querySelector(`input[name = "element${index}"]:checked`)
        if(selectedOption && selectedOption.value === element.answer){
            score++
        }
    })
    document.querySelector(".result-box").innerHTML = (`<p>score:<span><br/>${score}/${question.length}</span></p>`)
})
