
function calculate() {
    var altura = document.getElementById("altura").value;
    var peso= document.getElementById("peso").value;

    var imc = (peso / (altura * altura)).toFixed(2);
    var text = ""
    if (imc < 18.5) {
        text =`Seu IMC é ${imc} e você está abaixo do peso.`
    } else if (imc < 24.9) {
        text =`Seu IMC é ${imc} e você está com peso normal.`
    } else if (imc < 29.9) {
        text =`Seu IMC é ${imc} e você está acima do peso.`
    } else if (imc > 30) {
        text =`Seu IMC é ${imc} e você tem obesidade.`
    }

    document.getElementById("textarea").innerText=text


}



