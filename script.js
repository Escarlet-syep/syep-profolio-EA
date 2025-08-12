const reviews = [
    {
        id: 1,
        name: 'Edwin Amador',
        img: 'student.png',
        job: 'Spanish Teacher',
        text: 'Escarlet Abreu distinguished herself as a resilient and outstsanding individual,Whom i considered to be one of my best students. Her diligent effort was evident in her consiostent class preperdness, which culiminated in her successfully passing the reagents exam.',
    },
    {
        id: 2,
        name: 'Layla Negron',
        img: '#',
        job: ' Student',
        text: 'Escarlet is a very hardworking person and she is always ready to help others. She is a great team player and has a positive attitude towards work.'
    },
    {
        id: 3,
        name: 'Ean Worrell',
        img: '#',
        job: 'Student',
        text: 'Escarlet is a really good friend of mine who I adore because she is very kind and funny. When your mood is down she always figures a way to make you laugh. And she is also very smart when you need help with something she is always willing to help you.',
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