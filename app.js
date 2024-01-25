const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const dropdown = document.querySelectorAll(".dropdown select");
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

}