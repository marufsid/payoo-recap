document.getElementById("login-btn").addEventListener("click", 
    function(event) {
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const pinNumber = document.getElementById("pin").value;
        const convertedPinNumber = parseInt(pinNumber);
        
        if(accountNumber.length===11){
            if(convertedPinNumber===1234){
                window.location.href = "main.html"
            }
            else{
                console.log("correct your pin")
            }
        }
        else{
            alert("enter valid account number");
        }
    })