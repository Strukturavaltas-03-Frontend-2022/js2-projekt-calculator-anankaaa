let display = document.querySelector(".inputField");
let buttons = Array.from(document.querySelectorAll(".button"));


const add = ((a,b) => a+b);
const minus = ((a,b) => a-b);
const multiple = ((a,b) => a*b);
const divide = ((a,b) => a/b) 

const ops = {
    "+": add,
    "-": minus,
    "x": multiple, 
    "÷": divide
};

buttons.map( button => {
    button.addEventListener('click', handleClick)
    });

function handleClick(event){
    display.innerHTML += event.target.innerHTML;
    
    let buttonText = this.innerHTML;
    if(buttonText === 'C'){
        display.innerHTML = '';
    } else if (buttonText === '=') {
        let validNumbers = ".0123456789";
        let validOperators = "+-x÷";
        let tempNumber = '';
        let numbers = [];
        let operators = [];
        let isLastItemOperator = false;

        for (let i = 0; i < display.innerHTML.length; i += 1) {
            if (validNumbers.includes(display.innerHTML[i])) {
                tempNumber += display.innerHTML[i];
                isLastItemOperator = false;
            } else if (validOperators.includes(display.innerHTML[i])) {
                if (isLastItemOperator) {
                    display.innerHTML = 'ERROR'
                    return
                }
                if (!tempNumber) {
                    tempNumber = '0';
                }
                numbers.push(parseFloat(tempNumber))
                tempNumber = '';
                isLastItemOperator = true;
                operators.push(display.innerHTML[i])
            }
        }
        numbers.push(parseFloat(tempNumber))
    
        let result = numbers[0];
        for (let i = 0; i < operators.length; i += 1) {
            result = ops[operators[i]](result, numbers[i+1])
        }
        display.innerHTML = result;
    }

}




/* Követelmények:

Az eval metódus használata SZIGORÚAN TILOS! Most és mindörökké!
Egyelőre nem kell foglalkozni azzal az esettel, hogy mi történik, ha két műveleti jel van egymás után. Ilyen esetekben dobhattok hibát. A felső input mezőben jelenjen meg az ERROR szöveg.
Egymás után több művelet is végrehajtható. Pl.: 10-20+3*2. Ilyen esetben a precedenciaszabályokra még nem kell odafigyelned, csak balról jobbra, sorban értékelődjenek ki a műveletek!
A számok és műveleti jelek a felső input mezőben jelenjenek meg!
Az egyenlőségjelre kattintva az inputban megjelenik a művelet(ek) eredménye.
A C gomb törli az input mező tartalmát. */







