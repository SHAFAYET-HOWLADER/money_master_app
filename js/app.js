// start of using javascript
//get calculate button
document.getElementById("calculate-btn").addEventListener("click",function(){
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
})

    // get save button
    document.getElementById("save-button").addEventListener("click", function(){
    // get save input value
    const saveText = document.getElementById("save-input");
    const saveTextValue = saveText.value;
    const saveTextTotalValue = parseFloat(saveTextValue);

   //get salary-input
    const salary = document.getElementById("salary-input");
    const salaryText = salary.value;
    const salaryTotal = parseFloat(salaryText);
    
    //saving amount
    const savingAmount = salaryTotal / saveTextTotalValue;
    
    //set saving amount innerText
    const savingAmountText = document.getElementById("saving-amount");
    const savingAmountTotal =  savingAmountText.innerText;
    const savingAmountTotalValue = parseFloat(savingAmountTotal);
    savingAmountText.innerText = savingAmount;


//re-use calculate button
  //get foot-input
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
    //re-use calculate button

    // get remaining balance after saving
    const finalRemainingAmount = extraMoney - savingAmount;
    //get remaining balance
    const remainingAmountText = document.getElementById("remaining-amount");
    const remainingAmountTextValue = remainingAmountText.innerText;
    const remainingAmountTextValueTotal = parseFloat(remainingAmountTextValue);
    remainingAmountText.innerText = finalRemainingAmount;
})




































// end of using javascript
