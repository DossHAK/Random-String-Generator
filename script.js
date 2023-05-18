document.getElementById('myForm').addEventListener('submit', function() {
    event.preventDefault();
    let count = document.querySelector('#count').value;
    let isNumber = document.querySelector('#isNumber').checked;
    let isUpper = document.querySelector('#isUpper').checked;
    let isLower = document.querySelector('#isLower').checked;

    let result = generationString(count, isNumber, isUpper, isLower);
    document.querySelector('#result').value = result;
});

function Random(min,max) {
    return Math.floor(Math.random() * (max-min) + min)
};

function generationString(count, isNumber, isUpper, isLower) {
    let str = '';
    let number = '1234567890';
    let upper = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    let lower = 'qwertyuioplkjhgfdsazxcvbnm';

    if (!isNumber && !isUpper && !isLower) {
        return 'Not select';
    } else {
        for (let i = 0; i < count;) {
            let random = Random(0, 3);

            if (random == 0 && isNumber) {
                str += number[Random(0, number.length)];
                i++;
            } else if (random == 1 && isUpper) {
                str += upper[Random(0, upper.length)];
                i++;
            } else if (random == 2 && isLower) {
                str += lower[Random(0, lower.length)];
                i++;
            }
        }
    }
    return str;
}
