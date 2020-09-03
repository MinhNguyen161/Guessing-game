let answer = getRandomInt(0,100)
let history=[]
let amount = document.getElementById('input');
let guess = 5
document.getElementById("beta").innerHTML = 
`Guesses remaining: ${guess}`

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }
function check(){
    document.getElementById("demo").innerHTML = ""
    document.getElementById("demo-sen").innerHTML = ""

    if (guess == 0){
    amount.value =""
    document.getElementById("demo-sen").innerHTML = 
    "You are out of guesses haha! Nice try though"
    }
    else if(amount.value ===""){
        document.getElementById("demo-sen").innerHTML = 
        " You did not enter a number !"
    }
    else{
        am = amount.value
        if(am == answer){
            document.getElementById("title").innerHTML = 
            " You win !!!!!"
            answer = getRandomInt(0,100)
            guess =5
            amount.value =""
            history=[]
            document.getElementById("demo").innerHTML = ""
            document.getElementById("beta").innerHTML = ""
            document.getElementById("beta-sen").innerHTML = ""
            return
        }
        else{
            document.getElementById("beta-sen").innerHTML = ""

            if (am<0 || am>100){
                document.getElementById("beta-sen").innerHTML = 
                "Your number should be between 0 and 100! Try a different one"
            }
            else if(am > answer){
                document.getElementById("beta-sen").innerHTML = 
                "Your number is too high! Try a different one"
            }
            else if(am < answer){
                document.getElementById("beta-sen").innerHTML = 
                "Your number is too low! Try a different one"
            }

            history.push(am)
            guess--
            amount.value =""
            console.log(answer)
        }   
    }
    document.getElementById("demo").innerHTML = ""
    document.getElementById("beta").innerHTML = 
    `Guesses remaining: ${guess}`

    for (num in history){
        if(history[num]!==0){        
            document.getElementById("demo").innerHTML +=
            `<span>${history[num]}  </span>` 
        }
}
}
function reset(){
  answer = getRandomInt(0,100)
  guess =5
  amount.value =""
  history=[]
  document.getElementById("demo").innerHTML = ""
  document.getElementById("demo-sen").innerHTML = "You have been given another chance"
  document.getElementById("beta").innerHTML = ""
  document.getElementById("beta-sen").innerHTML = ""
  document.getElementById("title").innerHTML = ""


}
