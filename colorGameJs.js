var colors = [];
var easy = false;
var solutoin;
var selector;
var pickedColorIndex;
var heading = document.querySelector('.header');
var squares = document.querySelectorAll('.square');
var solutionVisual = document.querySelector('.colorGoal');
var response = document.querySelector('.response');
var selectEasy = document.querySelector('.easy');
var selectHard = document.querySelector('.hard');
var recolor = document.querySelector('.recolor');

function difficultySelect(){
    if((this===selectEasy && !easy)||(this===selectHard && easy)){
        selectEasy.classList.toggle('selected');
        selectHard.classList.toggle('selected');
        easy = !easy;
    }
    setColors(squares);
}

function retreiveColor(){
    if(this.style.backgroundColor === solution){
        response.textContent = 'Correct!';
        recolor.textContent = 'Play Again?';
        changeColor(solution, this);
    }
    else{
        this.style.backgroundColor = 'inherit';
        response.textContent = 'Wrong!';
    }
}

function changeColor(color, square){
    for(var i =0; i< squares.length; i++){  
        if(squares[i] !== square)  
            squares[i].style.backgroundColor = color;
    }
    heading.style.backgroundColor = color;
}

function pickRandomIndex(selector){
    return Math.floor(Math.random()*selector);
}

function randomColorGenerator(){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetColors(){
    for(var i = 0; i<selector; i++){
        colors[i] = randomColorGenerator();
    }
}

function setInitialValues(){
    selector = (easy)? 3:6;
    pickedColorIndex = pickRandomIndex(selector);
    response.textContent = '';
    heading.style.backgroundColor = 'rgb(8, 142, 252)';
    recolor.textContent = 'New Colors';
}

function determineColorSelection(){
    for(var i =0; i< squares.length; i++){    
        squares[i].classList.remove('hidden'); 
        if(easy && i>2){
            squares[i].classList.add('hidden');
        }
        else{
            //Set Background
            squares[i].style.backgroundColor = colors[i];
            //Set Background
            squares[i].addEventListener('click', retreiveColor);
        }
    }
    solution = colors[pickedColorIndex];
    solutionVisual.textContent = solution;
}

function setColors(){
    setInitialValues();
    resetColors();
    determineColorSelection();
}

setColors();

recolor.addEventListener('click', setColors);
selectEasy.addEventListener('click', difficultySelect);
selectHard.addEventListener('click', difficultySelect);

