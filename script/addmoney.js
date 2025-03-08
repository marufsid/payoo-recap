document.getElementById("cashout").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", 
    function () {
        document.getElementById("addmoney").style.display = "block"
        document.getElementById("cashout").style.display = "none"
    })
    
document.getElementById("cashout-box").addEventListener("click", 
    function () {
        document.getElementById("cashout").style.display = "block"
        document.getElementById("addmoney").style.display = "none"
    })

document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin").value;
    const convertedPinNumber = parseInt(pinNumber);
    const amount =document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance =document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(accountNumber.length===11){
        if(convertedPinNumber===1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        
    }
    else {
        alert("Wrong Number")
    }
})