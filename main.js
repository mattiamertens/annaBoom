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
const projectInfo = [
    "Project 1: Questo è il progetto 1",
    "Project 2: Questo è il progetto 2",
    "Project 3: Questo è il progetto 3",
    "Project 4: Questo è il progetto 4",
    "Project 5: Questo è il progetto 5",
    "Project 6: Questo è il progetto 6"
];
  
// Select the element where you want to display the project text
const projectTextDisplay = document.querySelector('.project-text');
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
            projectTextDisplay.innerText = projectInfo[index];
          }
        console.log(projectInfo[index]);
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