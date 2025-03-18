
# Data Analyst Portfolio - Manuel Melchiori

## Project Overview

Professional portfolio for Manuel Melchiori, a Data Analyst specializing in Python, SQL, and Power BI, with a focus on Aviation Data Analysis.

## How to Edit Content

This portfolio is designed to be easily editable without modifying the main code. All content is stored in JSON files in the `src/dist` directory.

### Editing Profile Information

To update your profile image:
1. Place your profile image in the `public/images/` folder
2. The image is referenced in `src/components/Hero.tsx` with a relative path

### Editing Experiences

1. Open `src/dist/experiences.json`
2. Each experience is an object with the following structure:
```json
{
  "id": "unique-id",
  "title": "Job Title",
  "company": "Company Name",
  "period": "Start Year - End Year",
  "description": "Job description",
  "skills": ["Skill 1", "Skill 2"]
}
```

### Editing Projects

1. Open `src/dist/projects.json`
2. Each project is an object with the following structure:
```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description",
  "tools": ["Tool 1", "Tool 2"],
  "image": "image-key",
  "github": "GitHub repository URL",
  "categories": ["category1", "category2"],
  "skills": [
    { "name": "Skill Name", "value": 40, "color": "#HexColor" }
  ],
  "priority": 10
}
```
3. Project images are defined in the `projectImages` object in `src/components/Projects.tsx`

### Editing Skills

1. Open `src/dist/skills.json`
2. Each skill category is an object with the following structure:
```json
{
  "category": "Category Name",
  "skills": [
    { "name": "Skill Name", "level": 85 }
  ]
}
```

## Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build for production with `npm run build`

## Deployment

This project is configured for GitHub Pages deployment. The base path is set in `vite.config.ts`.

```

6. Now, let's update the index.html file to use relative paths and clean up any issues:

<lov-write file_path="index.html">
<!DOCTYPE html> 
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manuel Melchiori - Data Analyst Portfolio</title>
    <meta
      name="description"
      content="Portfolio de Manuel Melchiori, Data Analyst spécialisé en Python, SQL et Power BI avec 13 ans d'expérience en programmation."
    />
    <meta name="author" content="Manuel Melchiori" />
    <meta property="og:image" content="images/profile.jpg" />
    <meta
      property="og:title"
      content="Manuel Melchiori - Data Analyst Portfolio"
    />
    <meta
      property="og:description"
      content="Portfolio de Manuel Melchiori, Data Analyst spécialisé en Python, SQL et Power BI."
    />
    <meta name="email" content="melchmanu@gmail.com" />
  </head>

  <body>
    <div id="root">Chargement...</div>
    
    <!-- Scripts principaux -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
