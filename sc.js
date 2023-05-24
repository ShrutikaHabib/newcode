    
const billtotal1=document.getElementById( "billtotal");
const tipamount1=document.getElementById("tipamount");


const noofpeople1=document.getElementById("noofpeople")
const perpersntotal1=document.getElementById("perpersntotal")
let noofpeople=Number(noofpeople1.innerText)
const calculatebill=()=>
{
    const bill=Number(billtotal1.value)
const tip=Number(tipamount1.value)/100
const tipamt=bill*tip
const total=tipamt+bill
const perpersontotal=total/noofpeople

perpersntotal1.innerText=`$${perpersontotal}`
}
const increasepeople=()=>{
    noofpeople +=1
    noofpeople1.innerText=noofpeople
    calculatebill()
    }
    const decreasepeople=()=>{
        
    if(noofpeople<=1){
       return
    }
    noofpeople -=1
        noofpeople1.innerText=noofpeople
        calculatebill()
    }
    