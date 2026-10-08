document.addEventListener('click', function playAudio() {
        const audio = document.getElementById('musicaFondo');
        audio.volume = 0.2; // Volumen al 40%
        audio.play();
        
        // Se remueve el evento para que solo se ejecute con el primer clic
        document.removeEventListener('click', playAudio);
    }, { once: true });


function limparelementosound(){
    const audio = document.getElementById("sonido_click2");
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}

function sonido_click1(){
    const audio = document.getElementById("sonido_click1");
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}