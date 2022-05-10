const postDay = document.getElementById('input-date');
const btn2015 = document.getElementById('btn-2015');
const mainContent = document.getElementById('main-content');




const fetchNasa = async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    console.log(response);

    const date = document.getElementById('date');
    date.textContent = response.date;

    const imgHd = document.getElementById('img-hd');
    imgHd.setAttribute('href', `${response.hdurl}`);

    const imgMain = document.getElementById('img-main');
    imgMain.setAttribute('src', `${response.url}`);

    const title = document.getElementById('title-text');
    title.textContent = response.title;

    const copy = document.getElementById('copy-text');
    copy.textContent = `Image Credit & Copyright: ${response.copyright}`
    
    const explanation = document.getElementById('explanation-text');
    explanation.textContent = `Explanation: ${response.explanation}`;

}

btn2015.addEventListener('click', () => {
    const search = postDay.value;
    fetchNasa(`https://api.nasa.gov/planetary/apod?api_key=1qYVnkoPgh6g1eUXXcNm5EiDyiN0MCpLz8zMh2Ji&date=${search}`)
})
   



