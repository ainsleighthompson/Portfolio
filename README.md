# Ainsleigh's Portfolio

A beautiful, bubbly pink portfolio website showcasing full-stack development projects from GitHub.

## Features

- 🎨 **Modern Design**: Bubbly pink aesthetic with smooth animations
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🔗 **GitHub Integration**: Easily link to your GitHub projects
- ⚡ **Fast & Lightweight**: No dependencies, pure HTML/CSS/JavaScript
- 🎯 **Pinterest-Approved**: Perfect for catching the eye of recruiters

## Quick Start

1. **Update Your Information**
   - Edit the `GITHUB_PROJECTS` array in `script.js` with your actual GitHub projects
   - Update the contact links in `index.html` (GitHub, LinkedIn, Email)
   - Change "marie" to your name throughout the files

2. **Open the Portfolio**
   - Simply open `index.html` in your browser
   - Or serve it locally:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if installed)
     npx http-server
     ```

## Customization

### Colors
Edit the CSS variables in `styles.css` (`:root` section):
```css
--primary-pink: #ff6b9d;
--light-pink: #ffc0cb;
--pale-pink: #ffe4e9;
--hot-pink: #ff1493;
```

### Projects
In `script.js`, update the `GITHUB_PROJECTS` array:
```javascript
const GITHUB_PROJECTS = [
    {
        name: "Your Project",
        description: "Project description",
        emoji: "🚀",
        github: "https://github.com/yourusername/repo",
        technologies: ["React", "Node.js"]
    }
];
```

### Contact Links
In `index.html`, update:
- Your GitHub profile URL
- Your LinkedIn profile URL
- Your email address

## File Structure

```
portfolio/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tips for Success

1. **Keep descriptions concise** - Recruiters scan quickly
2. **Highlight key technologies** - Use relevant tags
3. **Quality over quantity** - 3-5 great projects beat 10 mediocre ones
4. **Update regularly** - Keep your projects current
5. **Add links** - Include demo links and GitHub repos

## Future Enhancements

Consider upgrading to Next.js for:
- Dynamic routing
- Image optimization
- Better SEO
- API integration
- Deployment to Vercel

## License

Feel free to use this template for your portfolio!
