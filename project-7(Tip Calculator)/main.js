const amount=document.getElementById("amount");
const tipPercent=document.getElementById("tipPercent");
const noOfPerson=document.getElementById("noOfPerson");
const tipAmount=document.getElementById("tipAmount");
const totalAmount=document.getElementById("totalAmount");
const perPerson=document.getElementById("perPerson")
const submit=document.getElementById("submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault()

   const amountValue=Number(amount.value)
    const tipPercentValue=Number(tipPercent.value)
   const  noOfPersonValue=Number(noOfPerson.value)

     if (
        amountValue <= 0 ||
        tipPercentValue < 0 ||
        noOfPersonValue <= 0
    ) {
        tipAmount.textContent = "Please enter valid values";
        totalAmount.textContent = "";
        perPerson.textContent = "";
        return;
    }

   const tip=(amountValue*tipPercentValue)/100
   const total=amountValue+tip
   const perPersonAmount=(total/noOfPersonValue)

   tipAmount.textContent=`Tip : ${tip.toFixed(2)}.`
   totalAmount.textContent=`Amount : ${total.toFixed(2)}`
   perPerson.textContent=`per person : ${perPersonAmount.toFixed(2)}`
})