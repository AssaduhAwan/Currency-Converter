#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


const sleep =()=>{
  return new  Promise((res)=>{
    setTimeout(res,2000)
  });
}    

async function wellcome () { 
  let ranbowTitle = chalkAnimation.rainbow(`let's start CURRENCY CONVERTER hello `);
  await sleep(); 
  ranbowTitle .replace(`with NODE.JS INQUIRER and CHALK`); 
  await sleep();
  ranbowTitle.replace(`let enjoy  CURRENCY CONVERTER !!!`); 
  await sleep();
  ranbowTitle.stop()
let  pulseTitle = chalkAnimation.pulse(`Developed by ASSAD AWAN fro TypeScript .`);
 await sleep();
pulseTitle.stop()
let neonTile = chalkAnimation.neon(`  


              CURRENCY CONVERTER
  _____________________________________          
 |                                     |                         
 |     ___________________________     | 
 |    |                           |    |
 |    | PKR 1              2.0 USD|    |      
 |    |___________________________|    |
 |     ____ ____ ____      _______     |
 |    |  7 |  8 |  9 |    |  PKR  |    |
 |    |____|____|____|    |_______|    |
 |    |  4 |  5 |  6 |    |  GBP  |    |
 |    |____|____|____|    |_______|    |
 |    |  1 |  2 |  3 |    |  USD  |    |
 |    |____|____|____|    |_______|    |
 |    |  . |  0 |  = |    | CLEAR |    |
 |    |____|____|____|    |_______|    |
 |    |    |  - | %  |                 |
 |    |____|____|____|                 |
 |_____________________________________|
   
   `);
   await sleep();
   neonTile.stop();
 }
 wellcome();
let convertion={
  "PKR":{
    "USD":280.37,
    "GBP":0.0037,
    "PKR":1,
  },
  "GBP":{
    "USD":1.21,
    "PKR":271.79,
    "GBP":1,
  },
   "USD":{
     "PKR":225.50,
     "GBP":0.83,
     "USD":1,
  }
}
let answers:{
   from:"PKR"|"GBP"|"USD",
   to:"PKR"|"GBP"|"USD",
   amount:number
}= await inquirer.prompt([
   {
    type:"list",
    name:"from",
    choices:["PKR","GBP","USD"],
    message:(chalk.red("select your currecy"))
  },
  {
     type:"list",
     name:"to",
     choices:["PKR","GBP","USD"],
     message:(chalk.blue(`select your convertion currecy`))
  },
   {
     type:"number",
     name:"amount",
     message:(chalk.cyan(`Enter your convertion currecy`))
   },
  ]);
    await sleep ()
 const {from,to,amount}=answers
 if(from&&to&&amount){
   let result = convertion[from][to] * amount
   console.log(chalk.green(`your convertion from ${from} to ${to} is  ${result}`))
}else{
   console.log(chalk.yellow(`Invalid input`))
}


