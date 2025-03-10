document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextById("main-balance");

    if(accountNumber.length===11) {
        if(pinNumber===1234){
            const subtraction = mainBalance - amount;
            setInnerTextByIDandValue("main-balance", subtraction)

            const container = document.getElementById("transaction-container");

            const p = document.createElement("p");
            p.innerText = `
            cashout ${amount} from this ${accountNumber} account
            `
            container.appendChild(p)
        }
        else{
            alert("pin not valid")
        }
    }
    else {
        alert("account number not valid")
    }
})