// Функция за изчисляване на разпределението на заплатата
function calculateSalaryDistribution() {
  var salary = parseFloat(document.getElementById("salary").value);
  
  if (!salary || salary <= 0) {
    alert("Моля, въведете валидна заплата.");
    return;
  }

  var needs = salary * 0.50;
  var wants = salary * 0.30;
  var savings = salary * 0.20;

  var resultDiv = document.getElementById("salary-result");
  resultDiv.innerHTML = `
    <p>🏠 Основни нужди (50%): ${needs.toFixed(2)} лв.</p>
    <p>🎉 Желания (30%): ${wants.toFixed(2)} лв.</p>
    <p>💰 Спестявания (20%): ${savings.toFixed(2)} лв.</p>
  `;
  
  if (salary >= 0) {
    resultDiv.innerHTML += `<p>🎉 Чудесно! Вие спазвате правилото 50/30/20.</p>`;
  }
}

// Функция за изчисляване на ипотечния кредит
function calculateMortgage() {
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var loanTerm = parseInt(document.getElementById("loanTerm").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);
  var salary = parseFloat(document.getElementById("salaryForLoan").value);

  // Проверка дали всички полета са попълнени
  if (!loanAmount || !loanTerm || !interestRate || !salary) {
    alert("Моля, попълнете всички полета.");
    return;
  }

  var interestRateMonthly = interestRate / 100 / 12;
  var numberOfPayments = loanTerm * 12;

  // Изчисляване на месечната вноска по кредита
  var monthlyPayment = loanAmount * interestRateMonthly / (1 - Math.pow(1 + interestRateMonthly, -numberOfPayments));

  var resultDiv = document.getElementById("mortgage-result");
  resultDiv.innerHTML = `
    <p>💸 Вноска по кредит: ${monthlyPayment.toFixed(2)} лв.</p>
  `;

  var percentageOfSalary = (monthlyPayment / salary) * 100;
  resultDiv.innerHTML += `<p>💡 Това е ${percentageOfSalary.toFixed(2)}% от заплатата.</p>`;

  // Добавяне на предупреждение при над 40%
  var warning = document.getElementById("mortgage-warning");
  if (percentageOfSalary > 40) {
    warning.innerHTML = "⚠️ Внимавайте, когато вноската по кредита надвишава 40% от месечната ви заплата. Това може да бъде рисково!";
    warning.style.color = "red";
  } else {
    warning.innerHTML = "";
  }
}

// Функция за актуализиране на заплатата в десния калкулатор
function updateSalaryForLoan() {
  var salary = parseFloat(document.getElementById("salary").value);
  
  if (!isNaN(salary) && salary > 0) {
    document.getElementById("salaryForLoan").value = salary;
  } else {
    document.getElementById("salaryForLoan").value = '';
  }
}
