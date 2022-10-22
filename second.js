
function addUser() {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);

    window.location="second.html";
    alert("Redirecting you to next page....")
}




question_turn="player1"
answer_turn="player2"


function check(){

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+ player2_name


    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+ player1_name;

    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;


    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+ player1_name;

    }

    document.getElementById("output").innerHTML=" ";
    




}

