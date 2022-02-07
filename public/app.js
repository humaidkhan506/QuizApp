function validate(){
    var input = document.getElementById("inp")
    var cond = false
    if(input.value != ""){
        cond = true
    }
    if(cond){
        localStorage.setItem('name',input.value)
        window.location.replace("quiz/quiz.html")
    }
}

function clearLocalStorage(){
    localStorage.clear();
}