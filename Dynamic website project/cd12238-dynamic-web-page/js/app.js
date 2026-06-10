/** TODO: Build the navigation bar using JavaScript **/

const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

sections.forEach(function(section) {
    const listItem = document.createElement('li');
    const link = document.createElement('a')

    link.textContent = section.getAttribute('data-nav');
    link.href = `#${section.id}`;
    link.classList.add('menu__link');

    listItem.appendChild(link);
    navList.appendChild(listItem);

});

/** TODO: Add smooth scrolling **/

/** TODO: Add an active state **/

/** TODO: Add a comment form **/
