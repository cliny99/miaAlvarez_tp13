let operaciones1 = [300000,-60000,-100000,25000];
let operaciones2 = [50,-6500,-1,2511];
let operaciones3 = [355000,-485,-196,2];
function calculateBalances(operaciones){
    let saldoActual = 50000;
    let depositos = 0;
    let retiros = 0;
    operaciones.forEach((monto) => {
        if (monto >= 0) {
            depositos += monto;
        } else {
            retiros += monto;
        }
    });
    
    saldoActual += depositos + retiros
    
    return {depositos,retiros,saldoActual}
}
// console.log(calculateBalances(operaciones));

function bankBalance(name,lastName,operaciones){

    const {depositos, retiros, saldoActual} = calculateBalances(operaciones);

    return(`Estimada ${name} ${lastName}:
        El monto total de los depósitos es de: ${depositos}.
        El monto total de los retiros es de: ${retiros}.
        Por lo tanto, su saldo actual en la cuenta es de: ${saldoActual}`)
}
// console.log(bankBalance("Gloria","Medina",operaciones1));
// console.log(bankBalance("Gloria","Medina",operaciones2));
// console.log(bankBalance("Gloria","Medina",operaciones3));
