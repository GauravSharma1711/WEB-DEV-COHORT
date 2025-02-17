const weight = document.getElementById('weight');
const height = document.getElementById('height');
const button = document.getElementById('btn');
const ansdiv = document.getElementById('ans');

ansdiv.classList.add('hidden');
button.classList.remove('hidden');

button.addEventListener('click', function() {
    const wt = parseFloat(weight.value);
    const ht = parseFloat(height.value);

    if (!isNaN(wt) && !isNaN(ht) && ht > 0) {
        const bmi = wt / (ht * ht); 
        ansdiv.innerText = `Your BMI is: ${bmi.toFixed(2)}`;
        ansdiv.classList.remove('hidden');
        button.classList.add('hidden');
    } else {
        ansdiv.innerText = "Please enter valid height and weight.";
        ansdiv.classList.remove('hidden');
    }
});
