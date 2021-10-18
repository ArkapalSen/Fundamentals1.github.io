//challange 1

//test case 1
const markMass = 78
const markHeight = 1.69
const johnMass = 92
const johnHeight = 1.95
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//test case 2
const markMass = 95
const markHeight = 1.88
const johnMass = 85
const johnHeight = 1.76
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//challange 2
if(markBMI > johnBMI){
    console.log(`Mark's BMI is higher than John's! Mark's
    BMI ${markBMI} is higher than John's ${johnBMI}! `)
}
else{
    console.log(`John's BMI is higher than Mark's! John's
    BMI ${johnBMI} is higher than Marks's ${markBMI}! `)
}

//challange 3
// //test 1
// const dolphinScore1 = 96
// const dolphinScore2 = 108
// const dolphinScore3 = 89
// const avgDolphinScore = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
// console.log(avgDolphinScore);
// const koalaScore1 = 96
// const koalaScore2 = 108
// const koalaScore3 = 89
// const avgKoalaScore = (koalaScore1+koalaScore2+koalaScore3)/3;
// console.log(avgKoalaScore);
// if(avgDolphinScore>avgKoalaScore){
//     console.log(`Dolphin's are the winner!`);
// }
// else if(avgDolphinScore<avgKoalaScore){
//     console.log(`Koala's are the winner!`);
// }
// else if(avgDolphinScore===avgKoalaScore){
//     console.log(`Match Drawn`);
// }

// //bonus 1
// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;
// const avgDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// console.log(avgDolphinScore);
// const koalaScore1 = 109;
// const koalaScore2 = 95;
// const koalaScore3 = 106;
// const avgKoalaScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// console.log(avgKoalaScore);
// const minScore = 100;
// if(avgDolphinScore > minScore){
//     if(avgDolphinScore > avgKoalaScore){
//         console.log(`Dolphins are the winner`)
//     }
// }
// if(avgKoalaScore > minScore){
//     if(avgKoalaScore > avgDolphinScore){
//         console.log(`Koalas are the winner`)
//     }
// }
// if((avgDolphinScore > minScore) && (avgKoalaScore > minScore))
// {
//     if(avgDolphinScore === avgKoalaScore){
//         console.log(`Match drawn`)
//     }
// }

// //challange 4
// // const bill = 275;
// // const bill = 40;
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// bill >= 50 && bill <= 300
//   ? console.log(
//       `The bill value is : ${bill}, the tip is : ${tip}, Final Bill is : ${
//         bill + tip
//       }`
//     )
//   : console.log(
//       `The bill value is : ${bill}, the tip is : ${tip}, Final Bill is : ${
//         bill + tip
//       }`
//     );
