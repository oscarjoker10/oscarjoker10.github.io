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
var iscorrect=false;
var actualans="";
var isright;
var points=0;
function setup()
{
    var height = window.innerHeight*.97;
    var width = window.innerWidth*.99;
    createCanvas(width, height);
    randomQ=(int)(random(0, questions.length - 1));
    rquestion = questions[randomQ];
    rquestionTc=(int)(random(0, 2));
    rquestionT = questionType[rquestionTc];
  
    if (rquestionTc == 0) {
        rchoice.push(Canswers[randomQ]);
        actualans=Canswers[randomQ];
    }
    if (rquestionTc == 1) {
        rchoice.push(Sanswers[randomQ]);
        actualans=Sanswers[randomQ]
    }
    for(var t =0; t<3; t++)
        {
            
            rchoice.push(Canswers[(int)(random(0, Canswers.length-1))]);

        }
    
   // rchoice.push(Canswers[(int)(random(0, Canswers.length - 1))]);
   // rchoice.push(Canswers[(int)(random(0, Canswers.length - 1))]);
  
 
     shuffleC = shuffle(rchoice);
}
function reset()
{ 
    points=points+10;
    iscorrect=false;
    randomQ=(int)(random(0, questions.length - 1));
    rquestion = questions[randomQ];
    for(var h =0; h<=3;h++)
        {
            rchoice.splice(h);
        }
    rquestionTc=(int)(random(0, 2));
    rquestionT = questionType[rquestionTc];
    rchoice.push(Canswers[(int)(random(0, Canswers.length-1))]);
    rchoice.push(Canswers[(int)(random(0, Canswers.length - 1))]);
    rchoice.push(Canswers[(int)(random(0, Canswers.length - 1))]);
    if (rquestionTc == 0) {
        rchoice.push(Canswers[randomQ]);
        actualans=Canswers[randomQ];
    }
    if (rquestionTc == 1) {
        rchoice.push(Sanswers[randomQ]);
        actualans=Sanswers[randomQ];
    }
     shuffleC = shuffle(rchoice);
}

function draw()
{
   
    background(0);
    Question();
   // background(244, 248, 252);
   // line(mouseX, 0, mouseX, 100);
   // line(0, mouseY, 100, mouseY);
    answers();
}
function Question()
{
    textSize(100);
    text(rquestionT+" "+rquestion, (width/2)-170, height*.25);
  textSize(50);
    text("SCORE:: "+points,20,60);
    fill(0, 102, 153, 51);
    
  
    
}
function answers()
{
   
    if(shuffleC[0]==(actualans))
        {
    choices.push(new answer(.20, .30, shuffleC[0],true));
        }
        if(shuffleC[0]!=(actualans))
            {
        choices.push(new answer(.20, .30, shuffleC[0],false));
            }

        if(shuffleC[1]==(actualans))
            {
    choices.push(new answer(.60, .30, shuffleC[1],true));
    }
    if(shuffleC[1]!=(actualans))
        {
choices.push(new answer(.60, .30, shuffleC[1],false));
}

        if(shuffleC[2]==(actualans))
            {
    choices.push(new answer(.20, .60, shuffleC[2],true));
    }
    if(shuffleC[2]!=(actualans))
        {
choices.push(new answer(.20, .60, shuffleC[2],false));
}
        if(shuffleC[3]==(actualans))
            {
    choices.push(new answer(.60, .60, shuffleC[3],true));
            }
            if(shuffleC[3]!=(actualans))
                {
        choices.push(new answer(.60, .60, shuffleC[3],false));
                }
   

}
function answer(x,y,lol,correct)
{
    textSize(width*.08);
    fill(0, 0, 1000);
    if(mouseX>=width*x && mouseX<=(width*.20)+width*x)
        {
            if(mouseY>=height*y && mouseY<=(height*.20)+height*y )
                {
                    if(mouseIsPressed)
                        {
                            if(correct==true)
                                {
                    fill(0,200,0);
                   
                    reset();
                                }

                                 
                        }
                }
        }
    rect(width * x, height * y, width * .20, height * .20);
    
    fill(225);
   text(lol, (width * x), (height * y)+height*(.20));
   
}