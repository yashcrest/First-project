
// {
//     function print (){
//         'use strict';
//         console.log(this);
//     }

//     print();
// }

// {
//     let name = prompt ("What is your name?");
//     name === "Yash" ? console.log("Correct") : console.log("Incorrect");
// }

// for loop  
// {
//     let d = document.getElementById("destination");
//     for (i=0; i < 10; i++){
//         for (k=i; k>=0; k--){
//             d.append(k + " ");
//         }
//         var br = document.createElement('br');
//         d.appendChild(br);
//     }
    
// }

// {
//     let names = ["Yash" , "Priscilla" , "Prerana" ];
//     names.length = 30;
//     names[43] = 33;  
//     let search = "Yash";
//     for ( i = 0; i <=names.length; i++){
//          if(names[i] === search){
//              console.log("The name " + search +" was found in " + i + " index");
//              break;
//          }
//     }
// }


// {
//     let numbers = [43, 34, 12 , 33, 6 ,99, 22, 89 ];
//     let largest = numbers[0];
//     for( i = 0; i < numbers.length; i++){
//        if(numbers[i] > largest){
//            largest = numbers[i];
//            break;
//        }
//     }
//     console.log("The largest number index is " + i );

// }

// algo to count average of number inside array. 
// {
//      let numbers = [ 12, 23 , 214];
//      numbers.length = 30;

//      let count = 0;
//      let total = 0;
//      for ( i=0; i < numbers.length; i++){
//          if ( numbers[i]!== undefined){
//             count++;
//             total += numbers[i];
//          }
//      }
//      let avg = total/ count;
//      console.log(avg); 
// }

// adding names into array 
// {
//     let names = [];

//     while(true){
//         let input = prompt("Lets add your name into the database");
//         if(input === "q" || input === null){
//             break;
//         }
//         names.push(input);
//         console.log(names);
//     }
// }

//for each Methods Array 
// {
    // let numbers = [
    //     [11, 10, 21, 33, 22],
    //     [26, 74, 77, 65, 67],
    //     [28, 34, 88, 98, 45]
    // ];

//     // for ( let i = 0; i < numbers.length; i++){
//     //     for ( let k = 0; k < numbers[i].length; k++){
//     //         console.log(numbers[i][k]);
//     //     }
//     // }

//     numbers.forEach(function(row){
//         row.forEach(function(col){
//             console.log(col);
//         });   
//         console.log("~~~~~~~~~");
//     });
// }

//  {
//      let startDate  = new Date(1945, 0 , 01);
//      let newDate = new Date();
//      let oneDay = 1000 * 60 * 60 * 24 ; 
//      let days = (newDate - startDate)/ oneDay;
//      console.log(days);

//  }


 // function 
 {
     function square (x){
         return x * x ;     
        }

        let a = 5;
        console.log(square(a));
 }

 


 

// // while loop 
// {
//     let i = 0;
//     while (i < 10){

//     }
// }

//do while loop
// {
//     let password;
//     do{
//         password = prompt("What is the passcode? ");

//     } while(password.toLowerCase() !== "let me in" );
// }  