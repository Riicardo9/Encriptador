const txtEntrada = document.getElementById('txtEntrada');
const txtSalida = document.getElementById('txtSalida');
const btnEncriptar = document.getElementById('btnEncriptar'); 
const btnDesencriptar = document.getElementById('btnDesencriptar');

btnEncriptar.addEventListener('click', (e) =>{
    if(txtEntrada.value != '' && (/^[a-z]*$/.test(txtEntrada.value))){

        document.getElementById('sinMensaje').style.display = "none";
        txtSalida.style.display = "block";

        const arr = document.getElementById('txtEntrada').value.split('')
        for (i=0; i<arr.length; i++){
            switch(arr[i]){
                case "e": arr[i] = 'enter';
                    break;
                case "i": arr[i] = 'imes';
                    break;
                case "a": arr[i] = 'ai';
                    break;
                case "o": arr[i] = 'ober';
                    break;
                case "u": arr[i] = 'ufat';
                    break;
            }
        }

        txtEntrada.value = '';
        txtSalida.innerText = arr.join('')
        

    } else {

        document.getElementById('sinMensaje').style.display = "block";
        txtSalida.style.display = "none";         
    }
}
)

function desencriptar(){
    let txtDesencriptado = document.getElementById('txtEntrada').value
    txtDesencriptado = txtDesencriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    txtSalida.value = txtDesencriptado
}

function copyToClipBoard(txtSalida) {
    txtSalida = document.getElementById('txtSalida');
    txtSalida.select();
    document.execCommand('copy'); 
}