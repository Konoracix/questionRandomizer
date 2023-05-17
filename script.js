function setColor(){
    // let colors = [
    //     '#ffadad',
    //     '#ffd6a5',
    //     '#fdffb6',
    //     '#caffbf',
    //     '#9bf6ff',
    //     '#a0c4ff',
    //     '#bdb2ff'
    // ];
    let colors = [
        '#aaf683',
        '#8093f1',
        '#ee6055',
        '#ffe45e',
        '#ffee93',
    ];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
} 

function viewSets(){
    document.getElementById('wynik').innerHTML = ""; 
    let textboxArray = document.getElementById('textarea').value.split('\n');
    let numberOfQuestions = document.getElementById('numberOfQuestions').value;
    let numberOfSets = document.getElementById('numberOfSets').value;

    let ans = document.getElementById('wynik');
    let strAns = '';

    let wasIt = false;

    let randomNumber;

    let numbersArray = [];

    if(numberOfQuestions == "" || numberOfSets == ""){
        document.getElementById('wynik').innerHTML = "<br> All fields must be completed!"; 
        return;
    }

    if(textboxArray.length < numberOfQuestions){
        document.getElementById('wynik').innerHTML = "<br> Number of questions is to low!"; 
        return;
    }
    if(numberOfQuestions < 1){
        document.getElementById('wynik').innerHTML = "<br> Number of questions must be at least one!"; 
        return;
    }
    if(numberOfSets < 1){
        document.getElementById('wynik').innerHTML = "<br> Number of sets must be at least one!"; 
        return;
    }
    for(let i = 0; i<numberOfSets; i++){
        strAns += `<ul><li>Zestaw nr. ${i+1}</li><ul>`
        for(let j = 0; j<numberOfQuestions; j++){
            randomNumber = Math.floor(Math.random() * textboxArray.length)
            numbersArray.forEach(element => {
               if(element == randomNumber){
                    wasIt = true
               }
            });
            if(wasIt){
                j--;
                wasIt = false;
                continue;
            }
            numbersArray.push(randomNumber);
            strAns += `<li>${textboxArray[randomNumber]}</li>`
        }
        strAns += `</ul></ul>`
        ans.innerHTML += strAns;
        strAns = ``;
        numbersArray = [];
    }
}