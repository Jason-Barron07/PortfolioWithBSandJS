// About section
let about = document.querySelector('section#about .row:last-child');

let aboutContent = [

    "My name is Jason Barron, I live in Bishop Lavis. I am working towards being a software developer by studying at Life Choices academy. I enjoy playing games, making music and spending time with friends. I am hoping to work for a game development company in a few years time.",
    "I graduated from Elsies River Highschool in 2022 with a bacholers pass. I worked for a company called INL as a stage hand and sound technician."

]

// loop through the contents

aboutContent.forEach( (content)=>{

about.innerHTML += `
<p class='lead'>${content}</p>`

} )

// Education
let education = [
    {
        id: 1,
        year: 2016,
        description: 'I started learning guitar',
        place: 'Church',
        type: 'certificate',
        
    },
    {
        id: 2,
        year: 2018,
        description: 'I joined the Jazz Yard Academy and KLM commarts, to pursue my music further',
        place: 'Bontewuel and Ruyterwacht',
        type: 'certificate',
        
    },
    {
        id: 3,
        year: 2019,
        description: 'I won Band slam and Hsj with ElsiesRiver Highschool',
        place: 'Waterfront and Grand West',
        type: 'certificate',
        
    },
    {
        id: 4,
        year: 2023,
        description: 'Matriculated at ElsiesRiver High School with a bachelor',
        place: 'ElsiesRiver Highschool',
        type: 'certificate',
        
    },
    
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
            </p>
        </div>
    </div>
    `
})