const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");


updateRate()

function updateRate(){
    //console.log("called");
    fetch(`https://v6.exchangerate-api.com/v6/472aee11c81699239189a6d7/latest/${currencyFirstEl.value}`).then((res)=>res.json()).then((data)=>{
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerHTML = `1 ${currencyFirstEl.value} = ${rate+ " "+currencySecondEl.value}`;

        worthSecondEl.value = (worthFirstEl.value*rate).toFixed(3)
});
}


currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)
