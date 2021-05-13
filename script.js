let howMany = document.querySelector(".howMany");
let whichCoin = document.querySelector(".whichCoin");
let coinPurse = document.querySelector(".coinPurse");
numberOfCoins = 0;
const submit = document.querySelector(".form");


submit.addEventListener("submit", (event) => {
    event.preventDefault();
    for (let i = 0; i < howMany.value; i++){
        let makeCoin = document.createElement("div");
        makeCoin.className = whichCoin.options[whichCoin.selectedIndex].id;
        coinPurse.appendChild(makeCoin);
    };
    coinTotal = whichCoin.options[whichCoin.selectedIndex].value * howMany.value;
    console.log(coinTotal);
    document.querySelector(".total").innerText = `Total: ${coinTotal}`;
});

// Done. Stop messing with it. 
coinPurse.addEventListener("click", (event) => {
    var removeCoin = document.querySelector(".coin");
    if (event.target.selectedIndex == removeCoin.selectedIndex){
        removeCoin.remove();
        // could have done event.update.remove()
    }
});



// **TEST AREA**
// console.log(formData.get(whichCoin));
// console.log(submit);
