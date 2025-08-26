document.getElementById("calcButton").addEventListener("click", function() {
        const rate = parseFloat(document.getElementById("rate").value);
        const years = parseFloat(document.getElementById("years").value);
        const resultDiv = document.getElementById("result");

        if (rate && !years) {
            const res = 72 / rate;
            resultDiv.innerHTML = `При ${rate}% лихва, парите ще се удвоят за около <b>${res.toFixed(2)}</b> години.`;
        } else if (!rate && years) {
            const res = 72 / years;
            resultDiv.innerHTML = `За удвояване за ${years} години е необходима лихва около <b>${res.toFixed(2)}%</b>.`;
        } else {
            resultDiv.innerHTML = "Моля, въведете само едно поле – или лихвен процент, или години.";
        }
    });
