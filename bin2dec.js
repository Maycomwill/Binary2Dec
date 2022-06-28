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
    const resultado = binaryArrayNumber.reduce (
        (resultado, proximoNumero, idx) => resultado + proximoNumero * Math.pow(2, idx)
    )
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
