function setDice(){
    var dices = document.getElementsByClassName("dice");

    var result = Math.floor(Math.random()*6)+1;
    var result2  = Math.floor(Math.random()*6)+1;

    dices[0].querySelector("img").setAttribute("src","images/dice"+result+".png");
    dices[1].querySelector("img").setAttribute("src","images/dice"+result2+".png");

    if(result>result2){
        var winner = dices[0].querySelector("p").textContent;
        document.querySelector("h1").innerHTML = "<b>"+winner+"</b> wins!";
    }
    else if(result<result2){
        var winner = dices[1].querySelector("p").textContent;
        document.querySelector("h1").innerHTML = "<b>"+winner+"</b> wins!";
    }else{
        document.querySelector("h1").innerHTML = "Tie";
    }

    
}