// let age = 18;
// let salary = 5000;
// let bonus = 500;

// if((age >= 18) && (salary >= 5000)) {
//     salary += bonus;
//     console.log('Your salary: R'.concat(salary))
//     ;
// }else{
//     console.log('please try again later');
// }

//outer if statment
// if(age >=18){
    //inner if statment
//     if(salary >= 5000){
//         salary += bonus;
//         console.log('Salary R:'.concat(salary))
//         ;
//     }else{
//         console.log('Your salary is less then R5000');
//     }
// }else{
//     console.log('Your not qualififed');
// }

// Collection
// let items = ['Banana', 'Mango', 'Orange', 'Laptop', 'Mouse',
// 'Keyboard'];
// Linking
// let ul = document.getElementById('items');
// items.forEach((e) =>{
//     ul.innerHTML += `
//     <li> ${e} </li>
//     `;


// });


let bestfriends = ['Jarred john Isaacs' , 'Mogamat Muddathir Dawood' , 'Marshalino Marcelo Jankowski', 'Abdus-Samad Charles' , 'Ikhlaas Mohhammed Rawoot' , ' Abdul Raees Benny ' , ' Dwayne Micheal Carter' , 'Gabriella Wilson' , 'Nikki Manaj ', 'j Cole' ];
let ul = document.getElementById('bestfriends');

// display the name
b1 = bestfriends[5];
 console.log(b1); 
 //displayes the characters of the name
b2 = bestfriends[5].length;
 console.log(b2);

bestfriends.forEach((e) =>{
    ul.innerHTML = `

    <li> ${b1} </li> 
    <li> ${b2} </li> 
    `
    ;
});


// // Load items to an ul
// items.forEach( (item) => {
//     ul.innerHTML += `
//     <li class='bgDarkCyan'>${item}</li>
//     `;
//     ul
// });








