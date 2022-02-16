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

    //remaining money
    const extraMoney = salaryTotal - Spend;
    const remainingBalance = document.getElementById("balance");
    const remainingBalanceText = remainingBalance.innerText;
    const remainingTotal = parseFloat(remainingBalanceText);
    remainingBalance.innerText = extraMoney;
})






































// end of using javascript
