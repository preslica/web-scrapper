# Webpage to SASS - Netlify Deployment Project

This project provides a complete solution for extracting a webpage's structure and styles, converting them to a modular SASS architecture, and deploying the result to Netlify.

## Features

- **Webpage Analysis**: Scrapes any website to extract its structure and styling
- **SASS Conversion**: Transforms extracted CSS into a clean, modular SASS structure
- **BEM Implementation**: Applies BEM methodology for consistent class naming
- **Complete Structure**: Generates a full project structure with HTML, SASS, and JavaScript
- **Netlify Ready**: Includes configuration for immediate deployment to Netlify

## Project Structure

```
project-root/
├── src/                      # Source files
│   ├── sass/                 # SASS files
│   │   ├── base/             # Base styles
│   │   │   ├── _reset.scss   # CSS reset
│   │   │   ├── _typography.scss  # Typography styles
│   │   │   └── _variables.scss   # Variables
│   │   ├── components/       # UI components
│   │   ├── layouts/          # Page sections
│   │   ├── utils/            # Utilities
│   │   └── main.scss         # Main SASS file
│   ├── js/                   # JavaScript files
│   ├── assets/               # Assets (images, fonts)
│   └── index.html            # Main HTML file
├── dist/                     # Production build (generated)
├── node_modules/             # Dependencies (generated)
├── netlify.toml              # Netlify configuration
├── package.json              # Project dependencies
├── webpage-to-sass.js        # The main scraper tool
├── dev-server.js             # Development server
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/webpage-to-sass-netlify.git
   cd webpage-to-sass-netlify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Usage

#### Scrape a Website and Generate Project Structure

```bash
node webpage-to-sass.js https://example.com
```

This command will:
1. Scrape the website at the given URL
2. Analyze its structure and styling
3. Generate a complete project with SASS architecture
4. Create HTML templates with BEM classes
5. Set up JavaScript interactivity
6. Configure for Netlify deployment

#### Development

Start the development server with hot-reloading:

```bash
npm run dev
# or
node dev-server.js
```

The development server will:
- Compile SASS to CSS
- Watch for file changes
- Auto-reload the browser
- Serve the site at http://localhost:3000

#### Building for Production

```bash
npm run build
# or
node dev-server.js --build
```

This will:
- Compile SASS to minified CSS
- Optimize assets
- Generate production-ready files in the `dist` directory

## Deploying to Netlify

### Automatic Deployment

If you've pushed your project to GitHub/GitLab/Bitbucket:

1. Sign up or log in to [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Select your repository
4. The build settings will be auto-detected from the `netlify.toml` file
5. Click "Deploy site"

### Manual Deployment

Deploy directly from your command line:

```bash
# Install Netlify CLI if you haven't already
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
npm run deploy
# or 
netlify deploy --prod
```

## SASS Architecture

The generated SASS structure follows the 7-1 pattern (adapted):

- **Base**: Reset, typography, and variables
- **Components**: Reusable UI components (buttons, cards, forms)
- **Layouts**: Page-specific layouts and sections
- **Utils**: Mixins, functions, and placeholders

### BEM Methodology

All CSS classes follow the Block-Element-Modifier (BEM) pattern:

- **Block**: Standalone component (e.g., `.header`)
- **Element**: Part of a block (e.g., `.header__logo`)
- **Modifier**: Variation of a block or element (e.g., `.header--fixed`)

## Customization

After generating the project structure, you can:

- Modify the HTML content in `src/index.html`
- Update styles in the SASS files
- Add or remove sections as needed
- Extend JavaScript functionality in `src/js/main.js`

## Troubleshooting

### Common Issues

- **SASS Compilation Errors**: Check for syntax errors in your SASS files
- **Netlify Build Failures**: Check the build logs in Netlify dashboard
- **Missing Assets**: Ensure all referenced assets exist in the `src/assets` directory

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
