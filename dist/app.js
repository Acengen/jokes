const cont = document.querySelector('.jokes');
const button = document.querySelector('.btn');

async function getData(input) {
    const respons = await fetch(`http://api.icndb.com/jokes/random/${input}`);
    const data = await respons.json();
    return data;
}

button.addEventListener('click', e => {
    e.preventDefault();
    const input = document.querySelector('.input').value;
    let html = ``;
    getData(input)
        .then(data => {
            return data.value;
        })
        .then(data => data.forEach(joke => {
            html += `
            <li>${joke.joke}</li>
        `;
            cont.innerHTML = html;
        }));
})

