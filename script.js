// Sample GitHub projects - replace with your actual GitHub projects
const GITHUB_PROJECTS = [
    {
        name: "Project Name 1",
        description: "Brief description of your project. What problem does it solve?",
        emoji: "🚀",
        github: "https://github.com/yourname/project1",
        technologies: ["React", "Node.js"]
    },
    {
        name: "Project Name 2",
        description: "Another interesting project showcasing your full-stack skills.",
        emoji: "💡",
        github: "https://github.com/yourname/project2",
        technologies: ["Next.js", "MongoDB"]
    },
    {
        name: "Project Name 3",
        description: "A project that demonstrates your problem-solving abilities.",
        emoji: "✨",
        github: "https://github.com/yourname/project3",
        technologies: ["TypeScript", "PostgreSQL"]
    }
];

// Function to render projects dynamically
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projectsGrid.innerHTML = GITHUB_PROJECTS.map(project => `
        <div class="project-card">
            <div class="project-image">${project.emoji}</div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div style="margin-top: auto; margin-bottom: 1rem;">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.technologies.map(tech => `
                            <span style="
                                font-size: 0.8rem;
                                background: rgba(255, 107, 157, 0.2);
                                padding: 0.25rem 0.75rem;
                                border-radius: 15px;
                                color: var(--primary-pink);
                            ">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link github-link">View on GitHub</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    addSmoothScroll();
});

// Smooth scroll for navigation links
function addSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#projects' && href !== '#about' && href !== '#contact') return;
            
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Add scroll animation for elements coming into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.project-card, .about-card, .contact-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});
