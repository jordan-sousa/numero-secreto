const elementoChute = document.getElementById('chute')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0] [0].transcript
    exibeChuteTela(chute)
    verificaChutePossuiValorValido(chute)
}

function exibeChuteTela(chute) {
    elementoChute.innerHTML = `
    <div>Voçê disse:</div>
    <span class="box"> ${ chute } </span>
    
    `
}

recognition.addEventListener('end', () => recognition.start())