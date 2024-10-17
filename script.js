// Define projects as a JavaScript array
const projects = [
    {
        name: "Project A",
        description: "Description for Project A",
        image: "https://via.placeholder.com/150",
        status: "To Do",
        disableImage: false
    },
    {
        name: "Project B",
        description: "Description for Project B",
        image: "https://invalid-url.com/image.png", // This image URL will fail to load
        status: "In Progress",
        disableImage: false
    },
    {
        name: "Project C",
        description: "Description for Project C",
        image: "https://via.placeholder.com/150",
        status: "Done",
        disableImage: true // Image will not be displayed for this project
    },
    {
        name: "Project D",
        description: "Description for Project D",
        image: "https://via.placeholder.com/150",
        status: "Outdated/Needs Work",
        disableImage: false
    }
];

// Populate the roadmap with the projects array
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Handle image display based on the disableImage property
    if (!project.disableImage) {
        const image = document.createElement('img');
        image.src = project.image || 'https://via.placeholder.com/150'; // Default placeholder
        image.onerror = () => {
            image.src = 'https://via.placeholder.com/150'; // Use a default placeholder if image fails to load
        };
        card.appendChild(image);
    }

    const title = document.createElement('div');
    title.classList.add('card-title');
    title.textContent = project.name;
    card.appendChild(title);

    const desc = document.createElement('div');
    desc.classList.add('card-desc');
    desc.textContent = project.description;
    card.appendChild(desc);

    // Determine the list ID based on the project status
    const listId = project.status.toLowerCase().replace(' ', '');
    
    // Add the card to the appropriate list based on status
    const listElement = document.getElementById(listId);
    if (listElement) {
        listElement.querySelector('.list-items').appendChild(card);
    } else {
        console.error(`List with ID "${listId}" does not exist.`);
    }
});
