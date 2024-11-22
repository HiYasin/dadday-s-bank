function getTextValue(id) {
  const text = document.getElementById(id).innerHTML;
  return Number(text);
}

function getInputValue(id) {
  const input = document.getElementById(id).value;
  return Number(input);
}

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

let totalDeposit = getTextValue("totalDeposit");
let totalWithdraw = getTextValue("totalWithdraw");

withdrawBtn.addEventListener("click", function () {
  const currentBalance = getTextValue("balance");
  const withdrawAmount = getInputValue("withdraw");
  console.log(currentBalance);
  if (withdrawAmount > currentBalance || isNaN(withdrawAmount)) {
    document.getElementById(
        "messege"
      ).innerHTML = 
      `<div role="alert" class="alert alert-error">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error! Invalid amount or insufficient balance.</span>
      </div>`;
  } else {
    const newBalance = parseFloat(currentBalance) - parseFloat(withdrawAmount);
    document.getElementById("balance").innerText = newBalance;
    totalWithdraw += withdrawAmount;
    document.getElementById("totalWithdraw").innerText = totalWithdraw;
    document.getElementById(
        "messege"
      ).innerHTML = 
      ` <div role="alert" class="alert alert-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Amount Withdrawal Successfully!</span>
        </div> `
  }
});

depositBtn.addEventListener("click", function () {
  let currentBalance = getTextValue("balance");
  const depositAmount = getInputValue("deposit");

  if (isNaN(depositAmount) || depositAmount <= 0) {
    document.getElementById(
      "messege"
    ).innerHTML = 
    `<div role="alert" class="alert alert-error">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Invalid Amount.</span>
    </div>`;
  } else {
    const newBalance = parseFloat(currentBalance + depositAmount);
    document.getElementById("balance").innerText = newBalance;
    totalDeposit += depositAmount;
    document.getElementById("totalDeposit").innerText = totalDeposit;
    document.getElementById(
        "messege"
      ).innerHTML = 
      ` <div role="alert" class="alert alert-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Amount Deposited Successfully!</span>
        </div> `
  }
});
