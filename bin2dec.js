const numberBinary = document.getElementById('bI');
const button = document.getElementById('buttonConverter');
var resultText = document.getElementById('resultText').innerText;




var binaryNumber;
var binaryArrayString;
var binaryArrayNumber = [];
var resultado;


function binary(event) {
    
    binaryNumber = event.target.value;
    binaryArrayString = binaryNumber.split("");

}

function converter() {

    binaryArrayNumber = binaryArrayString.map(Number);
    console.log(binaryArrayNumber);

    if (binaryArrayNumber.length <= 8) {
        switch(binaryArrayString.length){
            case 1:
                oneDig();
            break;
            case 2:
                twoDig();
            break;
            case 3:
                threeDig();
            break;
            case 4:
                fourDig();
            break;
            case 5:
                fiveDig();
            break;
            case 6:
                sixDig();
            break;
            case 7:
                sevenDig();
            break;
            case 8:
                eightDig();
            break; 
    };
    } else{
    document.getElementById('resultText').innerText = "A quantidade de números digitados é inválida."
    };

}

function oneDig() {
    resultado = binaryArrayNumber[0] * (2**0);
    console.log(resultado);
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}

function twoDig() {
    resultado = binaryArrayNumber[1] * (2**0) + binaryArrayNumber[0] * (2**1);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}

function threeDig() {
    resultado = binaryArrayNumber[2] * (2**0) + binaryArrayNumber[1] * (2**1) + binaryArrayNumber[0] * (2**2);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}


function fourDig() {
    resultado = binaryArrayNumber[3] * (2**0) + binaryArrayNumber[2] * (2**1) + binaryArrayNumber[1] * (2**2) + binaryArrayNumber[0] * (2**3);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}


function fiveDig() {
    resultado = binaryArrayNumber[4] * (2**0) + binaryArrayNumber[3] * (2**1) + binaryArrayNumber[2] * (2**2) + binaryArrayNumber[1] * (2**3) + binaryArrayNumber[0] * (2**4);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}


function sixDig() {
    resultado = binaryArrayNumber[5] * (2**0) + binaryArrayNumber[4] * (2**1) + binaryArrayNumber[3] * (2**2) + binaryArrayNumber[2] * (2**3) + binaryArrayNumber[1] * (2**4) + binaryArrayNumber[0] * (2**5);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}


function sevenDig() {
    resultado = binaryArrayNumber[6] * (2**0) + binaryArrayNumber[5] * (2**1) + binaryArrayNumber[4] * (2**2) + binaryArrayNumber[3] * (2**3) + binaryArrayNumber[2] * (2**4) + binaryArrayNumber[1] * (2**5) + binaryArrayNumber[0] * (2**6);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}


function eightDig() {
    resultado = binaryArrayNumber[7] * (2**0) + binaryArrayNumber[6] * (2**1) + binaryArrayNumber[5] * (2**2) + binaryArrayNumber[4] * (2**3) + binaryArrayNumber[3] * (2**4) + binaryArrayNumber[2] * (2**5) + binaryArrayNumber[1] * (2**6) + binaryArrayNumber[0] * (2**7);
    console.log(resultado)
    document.getElementById('resultText').innerText = `O número binário "${binaryNumber}" corresponde ao número decimal "${resultado}"`;
}

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
};

const handleFocusout = ({ target }) => {
    if (target.value == ""){    
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
};


numberBinary.addEventListener('focus', handleFocus);
numberBinary.addEventListener('focusout', handleFocusout);
numberBinary.addEventListener('input', binary);
button.addEventListener('click', converter);


















//=============================================================

// function binary(){ 
//    binaryArray = binaryNumber.split([""]);
//    console.log(typeof binaryNumber)
//      numberConfirm();
// }
// binary();

// function numberConfirm() {
//     Number(binaryNumber);
//     let confirmation = prompt(`O valor digitado foi ${binaryNumber}? \n 1 - Sim \n 2 - Não`);
//     if (confirmation == 1){
//         convertBinToDec();
//     } else if (confirmation == 2){
//         binary();
//     } else {
//         alert("Opção inválida!");
//         numberConfirm();
//     }
// };

// function convertBinToDec(){
//     // for (var i = 0; i < binaryArray.length; i++)
//     // console.log(i);
//     switch (binaryArray.length){
//         case 1:
//         oneD();
//         break;
//         case 2:
//         twoD();
//         break;
//         case 3:
//         threeD();
//         break;
//         case 4:
//         fourD();
//         break;
//         case 5:
//         fiveD();
//         break;
//         case 6:
//         sixD();
//         break;
//         case 7:
//         sevenD();
//         break;
//         case 8:
//         eightD();
//         break;
//     }
// };

// function oneD() {
    
//    resultado = binaryArray[0].value * (2**0);
//    console.log(resultado);
// //    alert(resultado);
// }
