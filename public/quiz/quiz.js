questionsArray = [
    {
        question: "Whoe is the first Governor Genral Of Pakistan?",
        answer: "Quid-e-Azam",
        options: [
            "Iskandar Mirza",
            "Liaquat Ali Khan",
            "Quid-e-Azam",
            "None of the above",
        ]
    },
    {
        question: "Who is the first prime minister of Pakistan?",
        answer: "Liaquat Ali Khan",
        options: [
            "Khawaja Nazimuddin",
            "Chudhry Rehmat Ali",
            "Liaquat Ali Khan",
            "None of the above",
        ]
    },
    {
        question: "Pakistan was established in _______",
        answer: "14 August 1947",
        options: [
            "14 August 1947",
            "14 August 1957",
            "15 August 1948",
            "15 August 1947",
        ]
    },
    {
        question: "Total Land are od Pakistan is _______",
        answer: "881,913 km²",
        options: [
            "881,158 km²",
            "881,913 km²",
            "989,913 km²",
            "523,913 km²",
        ]
    },
    {
        question: "What is the old name of Pakistan",
        answer: "The Dominion of Pakistan",
        options: [
            "The State of Pakistan",
            "The Dominion of Pakistan",
            "Islamic Republic of Pakistan",
            "None of the above",
        ]
    },
    
    
    
    
    
]

function show_question(e){
    var question = document.getElementById("question")
    question.innerHTML = "Q" + (e+1) + ") " + questionsArray[e].question
    var opts = document.getElementsByClassName("opt")
    for(var i = 0; i < opts.length; i++){
        opts[i].innerHTML = questionsArray[e].options[i]
    }
    var optns = document.getElementsByName("opt")
    for(var i = 0; i < optns.length; i++){
        optns[i].value = questionsArray[e].options[i]
    }
}

var count = 0
var score = 0

function calc(){
    var opts = document.getElementsByName("opt")
    for(var i = 0; i < opts.length; i++){
        if(opts[i].checked){
            var ans = opts[i].value
            opts[i].checked = false
        }
    }
    if(ans == questionsArray[count].answer){
        score += 10
    }
}

function next_question(){
    var optns = document.getElementsByName("opt")
    var btn = document.getElementById("next_btn")
    var cond = false;
    for(var i = 0; i < optns.length; i++){
        if (optns[i].checked == true){
            cond = true
        }
    }
    if(cond){
    if(count < questionsArray.length-1){
        calc()
        count++
        show_question(count)
        }
        else{
            var name = localStorage.getItem('name') 
            calc()
            // alert( name+" have secured " + score + " marks")
            let data ={
                name : name,
                quizMarks : score
            }
            firebase.database().ref(`QuizMarks/${name+score}`).set(data)
            .then(()=>
            {
                alert( name+" have secured " + score + " marks")
                window.location.replace("../index.html")
                
           })
        }
    }
}
