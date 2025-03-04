document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.querySelector('.input-name');
    const adicionarBtn = document.querySelector('.button-add');
    const listaAmigos = document.getElementById('listaAmigos');
    const sortearBtn = document.querySelector('.button-draw');
    const resultado = document.getElementById('resultado');
    let amigos = [];

    adicionarBtn.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();

        if (nombre === '') {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }

        amigos.push(nombre);
        nombreInput.value = '';
        actualizarLista();
    });

    sortearBtn.addEventListener('click', () => {
        if (amigos.length === 0) {
            alert('No hay amigos en la lista para sortear.');
            return;
        }
        if (sortearBtn.innerHTML.includes('Reiniciar')) {
            amigos = [];
            actualizarLista();
            resultado.textContent = '';
            sortearBtn.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
            return;
        }

        const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
        sortearBtn.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Reiniciar';
    });

    function actualizarLista() {
        listaAmigos.innerHTML = '';
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }
});