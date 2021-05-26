//Data
const database = [];
var oneTask=[];
/*Objects in the HTML*/

//buttons
const addTaskBtn=document.querySelector("#btnTaskAdd");
const rmvTaskBtn=document.querySelector("#rmvTaskBtn");
const listAllTasks=document.querySelector("#listAllTasks");
const saveTaskBtn= document.querySelector("#saveTaskBtn");

//inputs 
const taskInput=document.querySelector("#taskInput");
const taskStar=document.querySelector("#taskStar");

//Handle events
saveTaskBtn.addEventListener('click',()=>{
  oneTask.push(taskInput.value);
  oneTask.push(taskStar.value);
  database.push(oneTask);
  oneTask=[];
  console.log(database);
    
});

const textConverter=(text)=>{
    //"mErHaba DüNya"
    let converted = text.toLowerCase().split(' ');
    //[merhaba],[dünya]

    let final=[];
    for(letter of converted){
       final.push(letter[0].toUpperCase()+letter.slice(1));
       
    }
    
    let final2=final.join(' ');
  

    return final2;
}
console.log();

sonuc = textConverter("hElo WoRlD");
console.log(sonuc);