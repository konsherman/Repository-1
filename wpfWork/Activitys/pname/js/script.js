//var charAt = ['Test','test2','test3'];
////console.log (charAt);
//
//if(charAt[1]==''){
//    //console.log('true');
//}else{
//    //console.log('false');
//}
//
//var intSet =[1,1,1,2,1,1,1,1,1,1,2,3,4,5,6,4,3]
//var intHoler = 0;
//var intProduct=1;
//var intSet2=[1,1,1,1,1,2,3,4,1,5]
//
//for(i=0;i<intSet.length;i++){
//
//    intHoler +=intSet[i];
//    intProduct*=intSet[i];
//    intHoler=intHoler+intSet[i];
//    //console.log(intProduct);
//}
////console.log(intHoler);
//
//function myFunction(someArray) {
//    var intHoler = 0;
//    for(i=0;i<intSet.length;i++){
//
//        intHoler +=intSet[i];
//        intProduct*=intSet[i];
//        intHoler=intHoler+intSet[i];
//        console.log(intProduct);
//    }
//
//    return intHoler;
//
//
//}
////console.log(myFunction(intSet2));
//
//function addTheStuff(num1,num2){
//    return 1+2;
//}
//
//
////console.log(addTheStuff(1,2));


function pornName(pornName){
    var n1=prompt("Enter the name of your first pet.");
    var n2=prompt("Enter the name of your street.");
    var endName=(n1+ " " + n2);
    console.log("Your official Porn Name is" + ", " + endName);
    var age=prompt("Enter the year of birth");
    var cYear= 2013 - age;

    if (cYear<21){
        console.log("You can't drink!");
    }
    else{
        console.log("You can drink!");
    }
    if (cYear<18){
        console.log("You cant Vote!");
    }else{
        console.log("You can Vote!");
    }
    if (n1==null || n1=="")
    {
        alert("You have to fill the boxes out!");
        location.reload(true);
    }


}
console.log(pornName());







