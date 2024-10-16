// Load JSON file and populate the roadmap
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = project.image;
            card.appendChild(image);

            const title = document.createElement('div');
            title.classList.add('card-title');
            title.textContent = project.name;
            card.appendChild(title);

            const desc = document.createElement('div');
            desc.classList.add('card-desc');
            desc.textContent = project.description;
            card.appendChild(desc);

            // Add the card to the appropriate list based on status
            const listElement = document.getElementById(project.status.toLowerCase().replace(' ', ''));
            listElement.querySelector('.list-items').appendChild(card);
        });
    })
    .catch(error => console.error('Error loading projects:', error));
