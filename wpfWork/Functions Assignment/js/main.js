
//------------Whacky-----------------------------------\\
var prompt2= prompt("Is the baby a boy or a girl?")//this is where people enter the sex of the baby, boy or girl
var prompt1= prompt("Enter your last name");// last name that the baby will get.
var boyName=['Tyrell','Jim','Jesse','Bob','Konner','Justin','Chris'];//list of boy names
var girlName=['Bri','Jan','Samantha','Jill'];//list of girl names
var checkbox = function checkBox(){
    if (prompt2,prompt1==null || prompt2,prompt1=="")
    {
        alert("Sex of the baby and Last Name must be filled out!");
        location.reload(true);
    }
}

function name(boyName,girlName){
    if(prompt2=='boy'){
        var randomName= Math.floor(Math.random() * boyName.length);
        return boyName[randomName]+ ' ' + prompt1;
    }
     else if(prompt2=='girl'){
        var randomName= Math.floor(Math.random() * girlName.length);
        return girlName[randomName]+ ' ' + prompt1;
    }




}
 //checkbox();
//console.log(name(boyName,girlName));

//-------------Personal------------------\\

var x = parseFloat(prompt('Enter a number between 1 and 5'));
var y = parseFloat(prompt('Enter number between 5 and 10'));

if (x > y) {
    result = "good job";
}
else {
    result = 'Bad job';
}


result = x > y ? "good job" : 'Bad Job';

console.log(result);


//---------------Industry-------------\\

// I CANT THINK OF ANYTHING ELSE!!!!!

