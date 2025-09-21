// Функция за разпределение на заплата
function calculateSalaryDistribution() {
  var salary = parseFloat(document.getElementById("salary").value);
  
  if (!salary || salary <= 0) {
    alert("Моля, въвeди заплата.");
    return;
  }

  var needs = salary * 0.50;
  var wants = salary * 0.30;
  var savings = salary * 0.20;

  var resultDiv = document.getElementById("salary-result");
  resultDiv.innerHTML = `
    <p>🏠 Основни нужди (50%): ${needs.toFixed(0)} лв.</p>
    <p>🎉 Желания (30%): ${wants.toFixed(0)} лв.</p>
    <p>💰 Спестявания (20%): ${savings.toFixed(0)} лв.</p>
    <p>🎉 Чудесно! Ето,спазваш световното правило  50/30/20.</p>
    <p>  Какво е разумното сега?
Имаш 3-4 заплати за спешни случаи? Много добре!
Останалите 20% ${savings}лв. - обади се за бърза и безплатна консултация,да видим в какво да ги инвестираме. </p>
  `;
}

// Функция за ипотечен кредит
function calculateMortgage() {
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var loanTerm = parseInt(document.getElementById("loanTerm").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);
  var salary = parseFloat(document.getElementById("salaryForLoan").value);

  if (!loanAmount || !loanTerm || !interestRate || !salary) {
    alert("Моля, попълнете всички полета.");
    return;
  }

  var interestRateMonthly = interestRate / 100 / 12;
  var numberOfPayments = loanTerm * 12;

  var monthlyPayment = loanAmount * interestRateMonthly / (1 - Math.pow(1 + interestRateMonthly, -numberOfPayments));

  var resultDiv = document.getElementById("mortgage-result");
  resultDiv.innerHTML = `<p>💸 Вноска по кредит: ${monthlyPayment.toFixed(2)} лв.</p>`;

  var percentageOfSalary = (monthlyPayment / salary) * 100;
  resultDiv.innerHTML += `<p>💡 Това е ${percentageOfSalary.toFixed(2)}% от заплатата.</p>`;

  var warning = document.getElementById("mortgage-warning");
  if (percentageOfSalary <= 20) {
    warning.innerHTML = "✅ Лесна вноска за теб!";
    warning.style.color = "green";
  } else if (percentageOfSalary > 20 && percentageOfSalary <= 30) {
    warning.innerHTML = "✅ Много добре! Ще се справиш с всяка ситуация, а заемът няма да ти е проблем.";
    warning.style.color = "green";
  } else if (percentageOfSalary > 30 && percentageOfSalary <= 35) {
    warning.innerHTML = "👍 Отличен резултат, особено за ипотечен кредит!";
    warning.style.color = "green";
  } else if (percentageOfSalary > 35 && percentageOfSalary <= 40) {
    warning.innerHTML = "⚠️ Внимавай! Кредитите обикновено са за 5+ години и такава вноска, може да ти дотежи, особено ако имаш промяна в заплатата или доходите.";
    warning.style.color = "#E86007";
  } else if (percentageOfSalary > 40 && percentageOfSalary <= 50) {
    warning.innerHTML = "⚠️ Да, банката ще те одобри, но послушай съвета ни: Прекалкулирай и избери по-ниска вноска или по-дълъг срок, за да не оставаш без половината си заплата всеки месец. Това може да те затрудни в дългосрочен план.";
    warning.style.color = "red";
  } else if (percentageOfSalary > 50) {
    warning.innerHTML = "❌ Вноската е твърде висока спрямо дохода ти! Помисли за по-ниска сума или по-дълъг срок, или си промени желанието :].";
    warning.style.color = "darkred";
  } else {
    warning.innerHTML = "";
  }
}

// Синхронизиране на заплатата между двата калкулатора
function updateSalaryForLoan() {
  var salary = parseFloat(document.getElementById("salary").value);
  
  if (!isNaN(salary) && salary > 0) {
    document.getElementById("salaryForLoan").value = salary;
  } else {
    document.getElementById("salaryForLoan").value = '';
  }
}
