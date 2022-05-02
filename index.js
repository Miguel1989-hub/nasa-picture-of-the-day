const Url =  "https://api.nasa.gov/planetary/apod?api_key=1qYVnkoPgh6g1eUXXcNm5EiDyiN0MCpLz8zMh2Ji";

const fetchApiNasa = async () => {
    const response = await fetch(Url)
    const dados = await response.json()
    console.log(dados);


    const date = document.getElementById('date');
    date.textContent = dados.date;

    const imgHd = document.getElementById('img-hd');
    imgHd.setAttribute('href', `${dados.hdurl}`);

    const imgMain = document.getElementById('img-main');
    imgMain.setAttribute('src', `${dados.url}`);

    const title = document.getElementById('title-text');
    title.textContent = dados.title;

    const copy = document.getElementById('copy-text');
    copy.textContent = dados.copyright;
    
    const explanation = document.getElementById('explanation-text');
    explanation.textContent = dados.explanation;


}

fetchApiNasa()







// let btEnviar = document.querySelector("#btEnviar");

//     btEnviar.addEventListener("click", function(event){
//         event.preventDefault();

//         let tr = document.createElement("tr");

//         let nome = document.querySelector("#nome")
//         let cpf = document.querySelector("#cpf")
//         let rg = document.querySelector("#rg")
//         let prof = document.querySelector("#profissao")

//         let tdNome = document.createElement("td");
//         let tdCpf = document.createElement("td");
//         let tdRg = document.createElement("td");
//         let tdProf = document.createElement("td");

//         tdNome.textContent = nome.value;
//         tdCpf.textContent = cpf.value;
//         tdRg.textContent = rg.value;
//         tdProf.textContent = prof.value;

//         tr.appendChild(tdNome);
//         tr.appendChild(tdCpf);
//         tr.appendChild(tdRg);
//         tr.appendChild(tdProf);

//         let tabela = document.querySelector("#tabela");

//         tabela.appendChild(tr);

//     })


// arrays

// const users = [
//     { id: 1, name: 'Ben' },
//     { id: 2, name: 'Leslie' },
// ]

// const newUser = {
//     ...users[0],
//     id: 3,
//     name: 'miguel'
// }

// users.push(newUser)

// console.log(users);
 
// const filtrar = () => {
//     users.filter((usuario) => {
//         return usuario.id === 2;
//     })
// }

// console.log(filtrar);

// const listarEventos = async () => {
//     const response = await fetch("https://randomuser.me/api/?results=50",{})
//     const object = await response.json()
//     console.log(object);
//     const users = object.results
   
//     users.forEach(element => {
//         console.log(element.gender);
//     });



// }


// listarEventos()


