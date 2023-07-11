let button = document.getElementById('button');

button.addEventListener('click', darkLightToggle);

function darkLightToggle() {
    let body = document.body;
    body.classList.toggle("dark-mode-body");

    let header = document.getElementById('header');
    header.classList.toggle('dark-mode-header');

    let darkLightButton = document.getElementById('button');
    darkLightButton.classList.toggle('dark-mode-button');

    let indivprojects = document.getElementsByClassName("indiv-projects");
    for (i = 0; i < indivprojects.length; i++) {
        indivprojects[i].classList.toggle('dark-indiv-projects');
    }
    
    
    if (button.innerHTML == "Dark mode") {
        button.innerHTML = "Light mode";
        return;
    } 
    if (button.innerHTML == "Light mode") {
        button.innerHTML = "Dark mode";
        return;
    }
    
}