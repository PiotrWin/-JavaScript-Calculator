let entry = '';
let result = '0';
let history = '0';
let decimal = false;
let special = false;
let resultField = document.getElementById('result');
let historyField = document.getElementById('history');

let buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        entry = this.value;
        if (entry !== 'ac' && entry !== 'ce' && entry !== '=') {
            if (!isNaN(parseInt(entry))) {
                if (isNaN(parseInt(result)) || (result === '0')) {
                    result = '';
                    if (history === '0')
                        history = '';
                }
                result += entry;
                history += entry;
                special = false;
            }
            else if (entry === '.' && decimal === false && special === false) {
                result += entry;
                history += entry;
                decimal = true;
            }
            else if (result[result.length-1] !== '.' && entry !== '.' && special === false) {
                result = entry;
                history += entry;
                special = true;
                decimal = false;
            }
            let sub = history.match(/([-+/*]\.)|([-+/*][-+/*])/);
            if (sub != null && entry) {
                history = history.slice(0, sub.index+1) + '0' + history.slice(sub.index+1);
                sub = null;
            }
            let ind = history.search(/([+\-/*]00)/);
            if (ind > 0 && history[ind] !== '0')
                history = history.slice(0, ind+2) + history.slice(ind+3);
            ind = history.search(/[-+/*]0[1-9]/);
            if (ind > 0)
                history = history.slice(0, ind+1) + entry + history.slice(ind+3);

            resultField.innerHTML = result;
            historyField.innerHTML = history;

            if (result.length > 16 || history.length > 25) {
                allClear();
                resultField.innerHTML = 'Too many characters!';
            }
        }
        else if (entry === 'ac')
            allClear();
        else if (entry === 'ce')
            clearEntry();
        else if (entry === '=')
            computeResult();
    });
}
function allClear() {
    entry = '0';
    history = '0';
    result = '0';
    decimal = false;
    special = false;
    resultField.innerHTML = '0';
    historyField.innerHTML = '0';
}
function clearEntry() {
    let id = history.lastIndexOf(result);
    if (id >= 0)
        history = history.slice(0, id);
    if ((!isNaN(parseFloat(result)) && !isNaN(parseInt(history[history.length-1]))) || isNaN(parseFloat(result))) {
        let numbers = history.match(/(\d+\.?\d*)/g);
        if (numbers != null) result = numbers[numbers.length-1];
    }
    else {
        let op = history.match(/[-+/*]$/);
        result = op;
    }
    if (history === '')
        history = '0';
    decimal = false;
    special = false;
    if (result === null)
        resultField.innerHTML = '0';
    else
        resultField.innerHTML = result;
    historyField.innerHTML = history;
}

function computeResult() {
    let res = Math.round(eval(history)*10000)/10000;
    if (res == Infinity || isNaN(res)) {
        resultField.innerHTML = 'ERROR';
        historyField.innerHTML = 'Division by zero!';
    }
    else {
        resultField.innerHTML = res;
        historyField.innerHTML = history + '=' + res;
    }
    history = '0';
    result = '0';
    decimal = false;
    special = false;
}
