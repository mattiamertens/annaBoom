// document.querySelector('.project-img').addEventListener('scroll', function(){
//     scrollDetection();
//     // $('.scroll-cue').css('visibility', 'hidden')
// });

// function scrollDetection() {
//     $('.leading').each(function() {

//         // var offset = this.getBoundingClientRect().top;
//         var offset = $('.leading').position().top;
//         console.log(offset)
        
//         if (offset < 300 && offset > 290){ 
//         //   var dataSource = this.getAttribute('data-attr')
//         //   $('.player').attr('src', dataSource)
//         }
//         if (offset < 300 && offset > 120){ 
//         //   $(this).find('.destination-title').addClass('yellow-text')
//         //   $(this).find('.square').addClass('on-screen');
//         }
        
//         else {
//             $(this).find('.destination-title').removeClass('yellow-text')
//             $(this).find('.square').removeClass('on-screen');
//         }
//     })
// }
// scrollDetection();

// Array of project descriptions or any information you want to show
const projectInfo2 =
[
    {
        "ProjNumber": 1, 
        "title": "the Breathing Ground", 
        "subTitle": "(sub-)terranean architecture as an environmental instrument", 
        "description": "The Breathing Ground is a research and design project that explores breathing systems and develops a ground bound building for the time of extreme climate. The building - through its shape, physiology and vertical extends - is seen as a climatic apparatus, a breathing device, providing a new public space underground, where temperatures remain stable throughout the year. The proposed builing becomes a vessel of an expanding urban lung. - An urban strategy for reducing the urban heat islands, while offering an unsealed ground for interspecies habitat and a public space for comfort and culture.",
        "date": "2023-2024",
    },
    {
        "ProjNumber": 2, 
        "title": "research of natural cooling systems in historic buildings", 
        "subTitle": "", 
        "description": "To examine breathing systems further, the Burgtheater, was investigated in Vienna. Behind its representative façade and glorious rooms, it hides a natural ventilation tunnel and rooms for bringing cool and clean air to the windowless theatre hall.",
        "date": "2023",
    },
    {
        "ProjNumber": 3, 
        "title": "mycelium research, film and installation", 
        "subTitle": "project developed by Anna Orbanic, with expertise support of mycologist Nelson Duenas executed with Simon Brugner, Aki Namba, Simon Oberhammer\nHaus Lebt / Steierisches Herbst", 
        "description": "A collective journey into the old known house and all of its unknowns. A house which we start to dig. Rising from the ground, Mycelia, the underground organism(s), a fungal root-like network, starts to inhabit the tuchsherer house. Feeding on the local textile, the house becomes its laboratory.",
        "date": "2024",
    },
    {
        "ProjNumber": 4, 
        "title": "Ei Fu - exhibition concept", 
        "subTitle": "in collaboration with Sara Orbanic, Monica Ciobotar, Matej Bencina, Francesco Belluati", 
        "description": "An exhibition entitled Ei Fu. Memoires de l'Egypte at the Basilica Paladiana in Vicenza, on the occasion of the 200th anniversary of the death of Napoleon Bonaparte. Far from wanting to provide a pre-packaged assessment of the historical figure of the former emperor, the project had as its main objective the representation of the power and the countryside of Egypt, making use of theatre, as a place of the performance.",
        "date": "2021",
    },
    {
        "ProjNumber": 5, 
        "title": "Interwoven structures", 
        "subTitle": "", 
        "description": "Root growth is encouraged, while the entangled behaviour of the growing within human-made structures is observed as beneficial. The weave is a starting technique, which creates a base structure for the substrate and the seeds (or mycelium) to be combined. Through time and the process of self-feeding, the roots grow stronger and reinforce the woven network. These structural elements in becoming, initially serve as green habitats and flood absorbents while transforming into a source of material for a new urban fabric.",
        "date": "London, 2021",
    },
    {
        "ProjNumber": 6, 
        "title": "ArchiPelago", 
        "subTitle": "Proximity Island 2020 competition - 1st prize winner\nin collaboration with Sara Orbanic, Jakob Czinger, Diana Konovalova", 
        "description": "As in the definition of a satellite, the project “ArchiPelago” acts as an artificial body placed in a distanced area to collect information and to provide communication. In this case, it is the matter of an abandoned construct in the north of the Adriatic Sea - coming into being and reawakening after the shutdown of its original function as a gigantic oil rig. There will be a revolutionized station for investigating sea life and to expose its unique environmental changes embedded in a particular setting.",
        "date": "2020",
    },
    
]
  
// Select the element where you want to display the project text
const projectTextTitle = document.querySelector('.project-text-title-desktop');
const projectTextSubTitle = document.querySelector('.project-text-subTitle-desktop');
const projectTextDescription = document.querySelector('.project-text-description-desktop');
const projectTextDate = document.querySelector('.project-text-date-desktop');
const leadingElements = Array.from(document.querySelectorAll('.project-img .leading'));

// Set up the Intersection Observer
const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        // Find the index of the .leading div
        const index = Array.from(leadingElements).indexOf(entry.target);
        
        // Display the corresponding project text
        if (index !== -1) {
            projectTextTitle.innerText = projectInfo2[index].title;
            projectTextSubTitle.innerText = projectInfo2[index].subTitle;
            projectTextDescription.innerText = projectInfo2[index].description;
            projectTextDate.innerText = projectInfo2[index].date;
          }
        // console.log(projectInfo2[index].date);
    }
    });
},
{
    root: document.querySelector('.project-img'),
    rootMargin: '0px 0px -90% 0px', // Adjust so the top of the container triggers the event
    threshold: 0 // Trigger as soon as the div reaches the top
}
);

// Observe each .leading div
document.querySelectorAll('.leading').forEach((leadingDiv) => {
observer.observe(leadingDiv);
});

leadingElements.forEach((leadingDiv) => observer.observe(leadingDiv));