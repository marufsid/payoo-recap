document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");

    if(account.length===11){
      if(pin===1234){
        const sum = mainBalance + amount;
        // document.getElementById("main-balance").innerText = sum;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");

        const p = document.createElement("p");
        p.innerText = `
        added ${amount} from this ${account} account
        `
        container.appendChild(p)


      }
      else{
        console.log("pin thik nai")
      }
    }
    else {
      console.log("account number is wrong")
    }
  });
