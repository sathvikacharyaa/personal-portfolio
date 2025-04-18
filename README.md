# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS that showcases my professional experience, technical skills, projects, and personal interests.

## Features

- **Responsive Design**: Adapts seamlessly to all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean, minimalist black and white design with sophisticated interactions
- **Animated Sections**: Smooth animations using Framer Motion
- **Custom Cursor**: Interactive custom cursor that responds to hover states
- **Instagram Integration**: Displays my photography work from Instagram

## Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations)
  - Shadcn UI components

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL with Drizzle ORM

## Sections

- **Home/Hero**: Introduction and profile overview
- **Experience**: Professional experience including my roles at IIST and Astronomy Club
- **Skills**: Technical skills categorized by type
- **Projects**: Showcase of my technical projects
- **Interests**: Personal interests including Astrophotography, Image Processing, and Photography

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment

### Deploying to GitHub Pages

This project includes a script to deploy to GitHub Pages:

1. First, build the project:
```bash
npm run build
```

2. Create a Personal Access Token (Classic) on GitHub:
   - Go to your GitHub account settings
   - Select "Developer settings" -> "Personal access tokens" -> "Tokens (classic)"
   - Generate a new token with "repo" scope
   - Copy the token for use during deployment

3. Run the deployment script:
```bash
./deploy-to-github.sh
```

4. When prompted, enter your GitHub username and use your Personal Access Token as the password

5. Your site will be available at: https://sathvikacharyaa.github.io/personal-portfolio/

### Deploying to Other Platforms

This project can also be deployed on any platform that supports Node.js applications, such as Vercel, Netlify, or Heroku.

## License

MIT

## Contact

Feel free to reach out to me for any questions or collaboration opportunities.