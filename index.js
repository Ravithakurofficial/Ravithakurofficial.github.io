const org = document.getElementById('changecon').innerHTML;

let res = document.getElementById('resumeCardContainer');
res.addEventListener('click', resumehandler);

function resumehandler() {
   

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'resume-page.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) { 
            let resContent = xhr.responseText;
            let chng = document.getElementById('changecon');
            chng.innerHTML = resContent; 
        }
    };

    xhr.send();
}
let work = document.getElementById('workCardContainer');
work.addEventListener('click', workhandler);

function workhandler() {
    

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'work-page.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) { 
            let resContent = xhr.responseText; 
            let chng = document.getElementById('changecon');
            chng.innerHTML = resContent;
        }
    };

    xhr.send();
}
let home = document.getElementById('homeCardContainer');
home.addEventListener('click', homehandler);

function homehandler() {

    let chng = document.getElementById('changecon');
    chng.innerHTML = org;
}

const darkModeToggle = document.getElementById('darkmode');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Check if dark mode is enabled
    const isDarkMode = body.classList.contains('dark-mode');

    // Update background color and text color
    if (isDarkMode) {
        body.style.backgroundColor = 'var(--color-gray-600)';  // Dark background color
        body.style.color = 'var(--color-whitesmoke)';         // White text color
        
        // Update gradient colors for dark mode
        document.documentElement.style.setProperty('--gradient-color-start', '#1f1f1f');
        document.documentElement.style.setProperty('--gradient-color-end', '#3f3f3f');
    } else {
        body.style.backgroundColor = '';                      // Let CSS handle background color
        body.style.color = '';                                // Let CSS handle text color
        
        // Reset gradient colors for light mode
        document.documentElement.style.setProperty('--gradient-color-start', '#ff9c1a');
        document.documentElement.style.setProperty('--gradient-color-end', '#ed250a');
    }
});
