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


//containers
const Container5star = document.querySelector("#Container5star");
const Container4star = document.querySelector("#Container4star");
const Container3star = document.querySelector("#Container3star");

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
const addCard=(message,star)=>{
  
    html=` <div class="alert alert-custom">
    <label class="float-left mr-2">
        <small>${star}<i class="fas fa-star custom-star"></i></small>
    </label>
    ${message}
    <button class="float-right btn btn-outline-danger custom-btn2">
        <i class="far fa-xs fa-trash-alt"></i>
    </button>
    <button class="float-right btn btn-outline-primary custom-btn2">
        <i class="far fa-xs fa-edit"></i>
    </button>
    <button class="float-right btn btn-outline-success custom-btn2">
        <i class="far fa-xs fa-check-square"></i>
    </button>
</div>
    `;
        switch(star){
            case 5 : console.log("çalıştı5"); Container5star.insertAdjacentHTML('afterbegin',html); break;
            case 4 :  console.log("çalıştı4"); Container4star.insertAdjacentHTML('afterbegin',html); break;
            default:  console.log("çalıştı3"); Container3star.insertAdjacentHTML('afterbegin',html); break;
        }    
}
const displayCards=(arrayList)=>{
    Container5star.innerHTML='';
    Container4star.innerHTML='';
    Container3star.innerHTML='';
    for(card of arrayList){
        addCard(card[1],card[2]);
    }
  
}


//remove task
const removeTask=(index,arrDatabase)=>{
    if(index > -1)arrDatabase.splice(index, 1);
}

//add 
addTaskBtn.addEventListener('click',()=>{
   if(!taskInput.value)console.log("Boş girildii");
});

//silme için: array.slice(1,silinecekElementinIndexi);
//Handle events
saveTaskBtn.addEventListener('click',()=>{
  oneTask.push(database.length);
  oneTask.push(textConverter(taskInput.value));
  oneTask.push(starConverter(taskStar.value));
  oneTask.push(descConverter(taskDesc.value));
  database.push(oneTask);
  displayCards(database);
  //temizleme
  oneTask=[];
  
  taskInput.value=taskStar.value=taskDesc.value='';
  console.log(database);
    
});

//ileride 1 yerine dynamic olarak id getirilecek.
rmvTaskBtn.addEventListener('click',()=>removeTask(1,database));
