//  let menuIcon = document.querySelector('#menu-icon');
//  let navbar = document.querySelector('.navbar');
//  let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.getAttribute('id');

//          if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                  links.classList.remove('active');
// //                 document.querySelector('header nave a [href*=' + id +']')
//                 ('active')
//              })
//         }

//    })

//    menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
//    }


// Get elements
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// // Handle scroll event
// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach((sec) => {
//         let offset = sec.offsetTop - 150; // Offset for better positioning
//         let height = sec.offsetHeight; // Get the height of the section
//         let id = sec.getAttribute('id'); // Get the section id

    
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active'); 
//                 document.querySelector('header nav a [href=* '+ id + ']').classList.add('active')
//                 if (link.getAttribute('href').includes(id)) {
//                     link.classList.add('active');
//                 }
//             })
//         }
//     })
// }

// // Handle menu icon click
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x'); // Toggle menu icon state
//     navbar.classList.toggle('active'); // Toggle navbar visibility
// }

// Get elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Handle scroll event
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150; // Offset for better positioning
        let height = sec.offsetHeight; // Get the height of the section
        let id = sec.getAttribute('id'); // Get the section id

        // Check if the section is in the viewport
        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active'); // Remove active class from all links
                // Add active class to the corresponding link based on section id
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active'); // Add active class to the matching link
                }
            });
        }
    });
};

// Handle menu icon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle menu icon (to switch between menu and close icon)
    navbar.classList.toggle('active'); // Toggle navbar visibility
};

