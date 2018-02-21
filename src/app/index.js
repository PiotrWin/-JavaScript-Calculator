/* TODO:
    - wyeliminować możliwość wpisania zera i cyfry po znaku, np. 0+06
    - funkcja clearEntry()
    - obliczanie wyniku
    - uaktualnienie historii po wyniku np. 1+1=2
    - czyszczenie po wpisaniu czegoś gdy obliczony byl wynik
            np. kolejna flaga (calculated)
    - zaokrąglanie wyniku
    - maksymalna liczba znaków na ekranie (if znaki > max clearAll?)
*/


let entry = '';
let result = '0';
let history = '0';
let decimal = false;
let special = false;

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
                //console.log(sub.index);
                history = history.slice(0, sub.index+1) + '0' + history.slice(sub.index+1);
                sub = null;
            }
            let ind = history.search(/([+\-/*]00)/);
            if (ind > 0 && history[ind] !== '0') {
                history = history.split("");
                history.splice(ind+1, 1);
                history = history.join("");
            }

            ind = history.search(/[-+/*]0[1-9]/);
            if (ind > 0) {
                console.log(ind);
                history = history.slice(0, ind+1) + entry + history.slice(ind+3);
            }

            document.getElementById('result').innerHTML = result;
            document.getElementById('history').innerHTML = history;
        }
        else if (entry === 'ac') {
            allClear();
        }
        else if (entry === 'ce') {
            //clearEntry();
        }
        else if (entry === '=') {
            // RÓWNOŚĆ
        }


    });
}

function allClear() {
    entry = '0';
    history = '0';
    result = '0';
    decimal = false;
    special = false;
    document.getElementById('result').innerHTML = '0';
    document.getElementById('history').innerHTML = '0';
}
function clearEntry() {

}
