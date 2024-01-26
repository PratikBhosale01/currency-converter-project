const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for(let select of dropdown){
for( currCode in countryList) {
    // console.log(currCode, countryList[currCode]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode ;
    newOption.value= currCode;
    if(select.name ==="from"&& currCode ==="USD"){
        newOption.selected ="Selected";
    }else if(select.name ==="to"&& currCode ==="INR"){
        newOption.selected ="Selected";
    }
    select.append(newOption);
}

select.addEventListener("change", (evt )=>{
updateFlag(evt.target);
})
}

const updateFlag = (element) =>{
    // console.log(element.value);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};

addEventListener("click",(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval ===""|| amtval < 1){
        amtval = 1;
        amount.value = "1";
    }
        console.log(fromCurr.value ,toCurr.value);
        const URL  =`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
});