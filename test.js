var questionType = ["cos", "sin"];
var choices = [];
var questions = ["π/2", "π/3", "π/4", "π/6", "0","2π/3", "3π/4", "5π/6", "π", "7π/6", "5π/4", "4π/3", "3π/2", "5π/3", "7π/4", "11π/6"];
var Canswers = ["0", "1/2", "√2/2", "√3/2", "1", "-1/2", "-√2/2", "-√3/2", "-1", "-1/2", "-√2/2", "-√3/2", "0", "1/2", "- √2/2", "√3/2"]
var Sanswers = ["1", "√3/2", "√2/2", "1/2", "0", "√3/2", "√2/2", "1/2", "0", "-1/2", "-√2/2", "-√3/2", "-1", "-√3/2", "-√2/2","-1/2"]
var rquestion;
var rchoice=[];
var randomQ;
var rquestionT;
var rquestionTc;
var shuffleC;
function setup()
{
    var height = window.innerHeight*.97;
    var width = window.innerWidth*.99;
    createCanvas(width, height);
    randomQ=(int)(random(0, questions.length - 1));
    rquestion = questions[randomQ];
    rquestionTc=(int)(random(0, 2));
    rquestionT = questionType[rquestionTc];
    rchoice.push(Canswers[(int)(random(0, Canswers.length-1))]);
    rchoice.push(Canswers[(int)(random(0, Canswers.length - 1))]);
    rchoice.push(Canswers[(int)(random(0, Canswers.length - 1))]);
    if (rquestionTc == 0) {
        rchoice.push(Canswers[randomQ]);
    }
    if (rquestionTc == 1) {
        rchoice.push(Sanswers[randomQ]);
    }
     shuffleC = shuffle(rchoice);
}
function draw()
{
   
    background(0);
    Question();
    answers();
}
function Question()
{
    textSize(100);
    text(rquestionT+" "+rquestion, (width/2)-170, height*.25);
    fill(0, 102, 153, 51);
    
  
    
}
function answers()
{
   
    
    choices.push(new answer(.20, .30, shuffleC[0]));
    choices.push(new answer(.60, .30, shuffleC[1]));
    choices.push(new answer(.20, .60, shuffleC[2]));
    choices.push(new answer(.60, .60, shuffleC[3]));
   

}
function answer(x,y,lol)
{
    fill(0, 0, 1000);
    rect(width * x, height * y, width * .20, height * .20);
  
    fill(225);
   text(lol, (width * x)+40, (height * y)+120);
   
}