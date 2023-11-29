document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function () {
        const gender = document.getElementById('gender').value;
        const salary = parseFloat(document.getElementById('salary').value);
        const daPercentage = parseFloat(document.getElementById('da').value);
        const hraPercentage = parseFloat(document.getElementById('hra').value);
        const trafficAllowancePercentage = parseFloat(document.getElementById('trafficAllowance').value);

        if (isNaN(salary) || isNaN(daPercentage) || isNaN(hraPercentage) || isNaN(trafficAllowancePercentage)) {
            alert('Please enter valid numbers.');
            return;
        }

        const da = (daPercentage / 100) * salary;
        const hra = (hraPercentage / 100) * salary;
        const trafficAllowance = (trafficAllowancePercentage / 100) * salary;
        const totalIncome = salary + da + hra + trafficAllowance;

        let taxRate = 0;

        if (totalIncome >= 1500000) {
            taxRate = (gender === 'men') ? 0.30 : 0.25;
        } else if (totalIncome >= 1000000) {
            taxRate = (gender === 'men') ? 0.20 : 0.15;
        } else if (totalIncome >= 500000) {
            taxRate = (gender === 'men') ? 0.10 : 0.05;
        }
        else if (totalIncome < 500000) {
            taxRate = (gender === 'men') ? 0 : 0;
        }

        const incomeTax = totalIncome * taxRate;
        const aftertaxincome=totalIncome-incomeTax;

        document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
        document.getElementById('incomeTax').textContent = incomeTax.toFixed(2);
        document.getElementById('aftertaxincome').textContent = aftertaxincome.toFixed(2);
     
    });
});
