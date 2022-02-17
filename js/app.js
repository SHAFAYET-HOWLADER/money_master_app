     // start of using javascript
     //update balance
     function updateBalance(){
      //get salary-input
      const salary = document.getElementById("salary-input");
      const salaryText = salary.value;
      const salaryTotal = parseFloat(salaryText);
      //get foot-input
      const food = document.getElementById("food");
      const foodText = food.value;
      const foodTotal = parseFloat(foodText);
      //get rent-input
      const rent = document.getElementById("rent");
      const rentText = rent.value;
      const rentTotal = parseFloat(rentText);
      //get clothes-input
      const clothes = document.getElementById("clothes");
      const clothesText = clothes.value;
      const clothesTotal = parseFloat(clothesText);
      //total spend from salary
      const Spend = foodTotal + rentTotal +clothesTotal;
      const totalExpenses = document.getElementById("total-spend");
      const totalExpensesText = totalExpenses.innerText;
      const totalExpensesValue = parseFloat(totalExpensesText);
      totalExpenses.innerText = Spend;
      //remaining balance
      const extraMoney = salaryTotal - Spend;
      const remainingBalance = document.getElementById("balance");
      const remainingBalanceText = remainingBalance.innerText;
      const remainingTotal = parseFloat(remainingBalanceText);
      remainingBalance.innerText = extraMoney;
      //input validation
      const incomeMsg = document.getElementById("income-msg");
      const foodMsg = document.getElementById("food-msg");
      const rentMsg = document.getElementById("rent-msg");
      const clothesMsg = document.getElementById("clothes-msg");
      if(salaryText < 0 ){
         incomeMsg.style.display = "block";
      }
      else if(foodText < 0 ){
         foodMsg.style.display = "block";
      }
      else if(rentText < 0 ){
         rentMsg.style.display = "block";
      }
      else if(clothesText < 0 ){
        clothesMsg.style.display = "block";
      }
      else if(salaryText == "" || foodText == "" || rentText == "" || clothesText == ""){
         console.log(alert("please enter a value"));
      }
     }
        //get calculate button
        document.getElementById("calculate-btn").addEventListener("click",function(){
            updateBalance();
        })
        // get save button
        document.getElementById("save-button").addEventListener("click", function(){
        // // get save input value
        const saveText = document.getElementById("save-input");
        const saveTextValue = saveText.value;
        const saveTextTotalValue = parseFloat(saveTextValue);
        //get salary-input
        const salary = document.getElementById("salary-input");
        const salaryText = salary.value;
        const salaryTotal = parseFloat(salaryText);
        //saving amount
        const savingAmount = salaryTotal / 100 * saveTextValue ;
        //set saving amount innerText
        const savingAmountText = document.getElementById("saving-amount");
        const savingAmountTotal =  savingAmountText.innerText;
        const savingAmountTotalValue = parseFloat(savingAmountTotal);
        savingAmountText.innerText = savingAmount;
      //re-use code calculate button
      //   //get foot-input
      const food = document.getElementById("food");
      const foodText = food.value;
      const foodTotal = parseFloat(foodText);
      //get rent-input
      const rent = document.getElementById("rent");
      const rentText = rent.value;
      const rentTotal = parseFloat(rentText);
      //get rent-input
      const clothes = document.getElementById("clothes");
      const clothesText = clothes.value;
      const clothesTotal = parseFloat(clothesText);
      //total spend from salary
      const Spend = foodTotal + rentTotal +clothesTotal;
      const totalExpenses = document.getElementById("total-spend");
      const totalExpensesText = totalExpenses.innerText;
      const totalExpensesValue = parseFloat(totalExpensesText);
      totalExpenses.innerText = Spend;
      //remaining balance
      const extraMoney = salaryTotal - Spend;
      const remainingBalance = document.getElementById("balance");
      const remainingBalanceText = remainingBalance.innerText;
      const remainingTotal = parseFloat(remainingBalanceText);
      remainingBalance.innerText = extraMoney;
      //   //re-use code calculate button
      // get remaining balance after saving
      const finalRemainingAmount = extraMoney - savingAmount;
      //get remaining balance
      const remainingAmountText = document.getElementById("remaining-amount");
      const remainingAmountTextValue = remainingAmountText.innerText;
      const remainingAmountTextValueTotal = parseFloat(remainingAmountTextValue);
      remainingAmountText.innerText = finalRemainingAmount;
      if(savingAmountTotalValue > extraMoney){
        const msg = document.getElementById("msg");
        console.log(alert("warning ! You haven't enough money to saving "))
        msg.style.display = "block"
      }
      else if(saveTextValue < 0){
        console.log(alert("Please don't enter negative value"))
      }
      else if(saveTextValue == ""){
        console.log(alert("please enter a number"));
      }
      else{
        const msg = document.getElementById("msg");
        msg.style.display = "none"
      }
})
// end of using javascript


