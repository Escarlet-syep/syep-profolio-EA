const reviews = [
    {
        id: 1,
        name: 'Amador De Trinidad',
        img: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
        id: 2,
        name: 'Amandria Guadalupe',
        img: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
        id: 3,
        name: 'Peter Jones',
        img: '#',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job || 'Job Title';  // Add a fallback for job
    info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];  // Corrected 'reviews' here
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job || 'Job Title';  // Add a fallback for job
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});