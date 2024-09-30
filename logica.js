const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const responses = [
    "¿Estás segura? 😢",
    "Sabes que te quiero... ❤️",
    "No seas así 😞",
    "¡Vamos, este botón es feo! 😅",
    "¡No puedes resistirte! 😜",
    "¡Anda, dale click al otro botón! No te arrepentirás 😏",
    "¡Sabes que siempre te hago reír! 😂",
    "Estás solo a un clic de la felicidad 😊",
    "¿En serio vas a seguir diciendo que no? 😱",
    "Ok... ¡último aviso! 😬",
    "Jajaja, ¡ya no puedes escapar! 😍"
];

let clickCount = 0;
let finalStage = false;

noBtn.addEventListener("click", () => {
    if (clickCount < responses.length - 1) {
        noBtn.textContent = responses[clickCount];
        clickCount++;
    } else {
        noBtn.textContent = responses[clickCount];
        finalStage = true;
        noBtn.classList.add("moving");
    }

    // Hacer que el botón de "Sí" se haga más grande y bonito
    yesBtn.style.transform = `scale(${1.1 + clickCount * 0.1})`;
    yesBtn.style.backgroundColor = `hsl(${(clickCount * 45) % 360}, 100%, 70%)`;
    yesBtn.style.boxShadow = `0px 4px 15px hsl(${(clickCount * 45) % 360}, 100%, 70%)`;
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="text-align: center; padding-top: 100px;">
            <h1>¡Sabía que dirías que sí! 😍</h1>
            <p style="font-size: 1.5rem;">Eres lo mejor que me ha pasado, gracias por hacerme tan feliz. 💖</p>
        </div>
    `;
});

noBtn.addEventListener("mousemove", (e) => {
    if (finalStage) {
        const x = Math.random() * window.innerWidth * 0.8;
        const y = Math.random() * window.innerHeight * 0.8;
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});
