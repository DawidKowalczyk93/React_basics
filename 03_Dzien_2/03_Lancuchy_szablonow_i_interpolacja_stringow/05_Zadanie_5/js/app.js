const buttonContainerRef = document.querySelector('#buttonContainer');


const button = {
    text: "Send message",
    id: "sendMsg",
    classes: ["btn", "btn-primary"],
    width: 200,
    padding: 20
};

console.log(`To jest button
Jego szerokość to ${button.width + (2 * button.padding)}
Napis, który na nim widnieje to "${button.text}"`
);


const inputButton = document.createElement('button');

inputButton.textContent = button.text;
inputButton.setAttribute('id', button.id);
inputButton.classList.add(...button.classes);
inputButton.style.width = button.width + 'px';
inputButton.style.padding = button.padding + 'px';

buttonContainerRef.appendChild(inputButton);