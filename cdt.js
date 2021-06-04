const factorial=(number)=>{
    let result=1;
    for(let i=1;i<=number;i++)
    {
        result = result * i;
    }
    return result;
}

document.querySelector("#absoluteBtn")
.addEventListener('click',()=>
   document.querySelector("#mathResult")
   .textContent=`Abstraction Result: ${Math.abs(Number(document.querySelector('#mathValue').value))}`
);

document.querySelector('#factorialBtn').addEventListener('click',()=>{
    document.querySelector("#mathResult")
    .textContent=`Factorial Result: ${factorial(+document.querySelector('#mathValue').value)}`;
});
document.querySelector('#squareBtn').addEventListener('click',()=>{
    document.querySelector("#mathResult")
    .textContent=`Square Result: ${Math.sqrt(+document.querySelector('#mathValue').value)}`;
});

////////////////Sayaç
const timerProgress=document.getElementById("timerProgress");
const numberVal=document.querySelector("#sayacDeger");

document.querySelector("#sayacAzalt").addEventListener('click',()=>{
    numberVal.value =Number(numberVal.value)-5;
});
document.querySelector("#sayacArttir").addEventListener('click',()=>{
    numberVal.value =5+Number(numberVal.value);
});

document.querySelector("#sayacBtn").addEventListener('click',()=>{
    time=number=Number(numberVal.value);
    var time,number;

    const timer = setInterval(()=>{
        console.log(time);
        if(time<=0)clearInterval(timer);
        let percent = (time/number)*100;
        timerProgress.style.width=`${percent}%`;
        time--;
        
    },1000);
    
    timer;
});