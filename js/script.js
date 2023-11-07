 // Aquí tu código

const addElement = document.getElementById('agregar');
const removeElement = document.getElementById('eliminar');
const lista = document.getElementById('lista');
const elementos = [];

function addToList(text) {
    elementos.push(text)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`ELEMENTO: ${text}`))
    lista.appendChild(li)
}

addElement.addEventListener('click', (e) => {
    e.preventDefault();
    const newElement = prompt('Escribe elementos a agregar');
    addToList(newElement);
});


removeElement.addEventListener('click', (e) => {
    if (elementos.length > 0) {
        lista.removeChild(lista.lastElementChild)
    }
})


