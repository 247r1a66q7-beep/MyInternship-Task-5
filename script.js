let totalExpense = 0;

function addExpense() {

    let expenseName =
    document.getElementById("expenseName").value;

    let expenseAmount =
    document.getElementById("expenseAmount").value;

    let expenseList =
    document.getElementById("expenseList");

    if(expenseName === "" || expenseAmount === "") {

        alert("Please enter all details");

        return;

    }

    let expenseDiv =
    document.createElement("div");

    expenseDiv.classList.add("expense-item");

    expenseDiv.innerHTML = `

        ${expenseName} - ₹${expenseAmount}

        <button class="delete-btn">

            Delete

        </button>

    `;

    expenseDiv
    .querySelector(".delete-btn")
    .addEventListener("click", function() {

        totalExpense -= Number(expenseAmount);

        updateTotal();

        expenseDiv.remove();

    });

    expenseList.appendChild(expenseDiv);

    totalExpense += Number(expenseAmount);

    updateTotal();

    document.getElementById("expenseName").value = "";

    document.getElementById("expenseAmount").value = "";

}

function updateTotal() {

    document.getElementById("total").innerHTML =

    "Total Expense: ₹" + totalExpense;

}