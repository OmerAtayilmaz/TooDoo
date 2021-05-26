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
const taskDesc=document.querySelector("#taskDesc");

//functions
//textleri imla kurallarına göre düzenledik
const textConverter=(text)=>{
    let converted = text.toLowerCase().trim().split(' ');
    let letters=[];
    for(letter of converted){
       if(letter)letters.push(letter[0].toUpperCase()+letter.slice(1));
      // letters.push(letter.replace(letter[0],letter[0].toUpperCase()));
    }
    let final=letters.join(' ');
    return final;
}
const starConverter=(text)=>{
    text = text.slice(0,1);
    //diğer yöntem
    //text=text[0]
    return Number(text);
}
const descConverter=(text)=>{
    let sentences=text.trim().split('.');
    let final=[];
    for(const sentence of sentences){
        if(sentence)
            final.push(sentence[0].toUpperCase()+sentence.slice(1));
    }
    final=final.join('. ');
    return final;
}

//card ekleme fonksiyonu




//remove task
const removeTask=(index,arrDatabase)=>{
    if(index > -1)arrDatabase.splice(index, 1);
}


//silme için: array.slice(1,silinecekElementinIndexi);
//Handle events
saveTaskBtn.addEventListener('click',()=>{
  oneTask.push(database.length);
  oneTask.push(textConverter(taskInput.value));
  oneTask.push(starConverter(taskStar.value));
  oneTask.push(descConverter(taskDesc.value));
  database.push(oneTask);
  //temizleme
  oneTask=[];
  taskInput.value=taskStar.value=taskDesc.value='';
  console.log(database);
    
});

//ileride 1 yerine dynamic olarak id getirilecek.
rmvTaskBtn.addEventListener('click',()=>removeTask(1,database));
