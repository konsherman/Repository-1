//Konner Sherman

//---------------------Personal Conditional---------------\\
var areYouReady= prompt("Are you ready? Type 'Yes' or 'No'");//Ive got the areyouready var set up so we can make sure you are ready.
var sec=86400;//here are the seconds for the formula
var days=365;//Here i have the days in a year because thats part of the formula




function secAge(){ //here is the function i have setup
    if (areYouReady=='Yes'){ // for my first if i set it up so if the person types yes, it will move them onto the next thing.
        var years=prompt("Enter How many Years Old You Are.")// this is the next thing ;)

    }
    else{
        alert(":(")// type anything other than yes, it will send them to the sad face :(! and end the whole thing.
    }
    if(years>0){  // if there anser for the age is anything >0 this 'if' runs, sec*days*years/
        console.log(sec*days*years);
    }




}

secAge(); //this is running the function.



//------Industry Conditional----------\\
var typeOfWork= prompt("Enter What type of work you did.(web,photo,music,farts)");
var hoursWorked=parseFloat (prompt("Enter how many hours you worked on your project."));
var webPay=40;
var photoPay=25;
var musicPay=75;
var fartPay=1000;

function whatUMade(){
    if(typeOfWork=="web"){
        console.log(webPay * hoursWorked+ "$" + " "+ "Thats how much you made for doing your webwork at 40 Dollars per hour!");


    }
    if(typeOfWork=="photo"){
        console.log(photoPay * hoursWorked+ "$" + " "+ "Thats how much you made for doing your Photo work at 25 Dollars per hour!");
    }
    if(typeOfWork=="music"){
        console.log(musicPay * hoursWorked+ "$" + " "+ "Thats how much you made for doing your music work at 75 Dollars per hour!");
    }

    if(typeOfWork=="farts"){
        console.log(fartPay * hoursWorked+ "$" + " "+ "Thats how much you made for farting at 100 Dollars per hour!");
    }




}

whatUMade();



//----------Wacky Conditional--------------\\
var hi= prompt("Enter Hi, dont try anything else but Hi....");
function haha(){

    if (hi=="Hi"){

        alert ("Good job");


    }
    else{
        alert("wrong");
        alert("wrong");
        alert("wrong");
        alert("wrong");
        alert("wrong");
        alert("wrong");
        alert("wrong");
        alert("wrong");
        alert("wrong");alert("wrong");alert("wrong");



    }
}

haha();




















