<div class="${sectionName}__info-item">
                        <span class="${sectionName}__info-icon">📧</span>
                        <span class="${sectionName}__info-text">info@example.com</span>
                    </div>
                    <div class="${sectionName}__info-item">
                        <span class="${sectionName}__info-icon">📞</span>
                        <span class="${sectionName}__info-text">+1 (555) 123-4567</span>
                    </div>
                    <div class="${sectionName}__info-item">
                        <span class="${sectionName}__info-icon">📍</span>
                        <span class="${sectionName}__info-text">123 Main St, City, Country</span>
                    </div>
                </div>
            </div>
            <div class="${sectionName}__form-container">
                <form class="${sectionName}__form">
                    <div class="form__group">
                        <label class="form__label" for="name">Name</label>
                        <input class="form__control" type="text" id="name" placeholder="Your Name">
                    </div>
                    <div class="form__group">
                        <label class="form__label" for="email">Email</label>
                        <input class="form__control" type="email" id="email" placeholder="Your Email">
                    </div>
                    <div class="form__group">
                        <label class="form__label" for="message">Message</label>
                        <textarea class="form__control" id="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn--primary">Send Message</button>
                </form>
            </div>`;
    } else if (sectionName === 'footer') {
      sectionHtml += `            <div class="${sectionName}__top">
                <div class="${sectionName}__logo">Logo</div>
                <div class="${sectionName}__links">
                    <div class="${sectionName}__column">
                        <h3 class="${sectionName}__title">Company</h3>
                        <ul class="${sectionName}__menu">
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">About</a></li>
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Careers</a></li>
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Blog</a></li>
                        </ul>
                    </div>
                    <div class="${sectionName}__column">
                        <h3 class="${sectionName}__title">Resources</h3>
                        <ul class="${sectionName}__menu">
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Documentation</a></li>
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Support</a></li>
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="${sectionName}__column">
                        <h3 class="${sectionName}__title">Legal</h3>
                        <ul class="${sectionName}__menu">
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Privacy</a></li>
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Terms</a></li>
                            <li class="${sectionName}__item"><a href="#" class="${sectionName}__link">Cookies</a></li>
                        </ul>
                    </div>
                </div>
                <div class="${sectionName}__social">
                    <a href="#" class="${sectionName}__social-link">Facebook</a>
                    <a href="#" class="${sectionName}__social-link">Twitter</a>
                    <a href="#" class="${sectionName}__social-link">Instagram</a>
                </div>
            </div>
            <div class="${sectionName}__bottom">
                <div class="${sectionName}__copyright">© ${new Date().getFullYear()} Company Name. All rights reserved.</div>
            </div>`;
    } else {
      // Generic section structure for any other sections
      sectionHtml += `            <h2 class="${sectionName}__title">${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} Section</h2>
            <p class="${sectionName}__text">This is the ${sectionName} section content.</p>`;
    }
    
    sectionHtml += `
        </div>
    </section>`;
    
    return sectionHtml;
  }

  /**
   * Generate a simple main.js file with interactive functionality
   */
  generateJavaScript() {
    console.log('Generating JavaScript file...');
    
    const js = `/**
 * Main JavaScript file for the website
 */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.header__nav-toggle');
  const navMenu = document.querySelector('.header__menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', 
        navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form validation
  const contactForm = document.querySelector('.contact__form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      // Validate name
      if (!name.value.trim()) {
        isValid = false;
        showError(name, 'Please enter your name');
      } else {
        removeError(name);
      }
      
      // Validate email
      if (!email.value.trim()) {
        isValid = false;
        showError(email, 'Please enter your email');
      } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value.trim())) {
        isValid = false;
        showError(email, 'Please enter a valid email address');
      } else {
        removeError(email);
      }
      
      // Validate message
      if (!message.value.trim()) {
        isValid = false;
        showError(message, 'Please enter your message');
      } else {
        removeError(message);
      }
      
      if (isValid) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }, 1500);
      }
    });
  }
  
  function showError(input, message) {
    const formGroup = input.closest('.form__group');
    const errorMessage = formGroup.querySelector('.form__error');
    
    input.classList.add('form__control--error');
    
    if (!errorMessage) {
      const error = document.createElement('div');
      error.className = 'form__error';
      error.textContent = message;
      formGroup.appendChild(error);
    } else {
      errorMessage.textContent = message;
    }
  }
  
  function removeError(input) {
    const formGroup = input.closest('.form__group');
    const errorMessage = formGroup.querySelector('.form__error');
    
    input.classList.remove('form__control--error');
    
    if (errorMessage) {
      formGroup.removeChild(errorMessage);
    }
  }
  
  // Testimonial slider functionality
  const testimonialsSection = document.querySelector('.testimonials');
  if (testimonialsSection) {
    const sliderItems = testimonialsSection.querySelectorAll('.testimonials__item');
    const sliderContainer = testimonialsSection.querySelector('.testimonials__slider');
    
    if (sliderItems.length > 1 && sliderContainer) {
      let currentIndex = 0;
      
      // Create navigation dots
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'testimonials__dots';
      
      for (let i = 0; i < sliderItems.length; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonials__dot';
        dot.setAttribute('aria-label', \`Testimonial \${i + 1}\`);
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
          showSlide(i);
        });
        
        dotsContainer.appendChild(dot);
      }
      
      testimonialsSection.appendChild(dotsContainer);
      
      // Show only the first slide initially
      for (let i = 1; i < sliderItems.length; i++) {
        sliderItems[i].style.display = 'none';
      }
      
      // Previous and next buttons
      const prevButton = document.createElement('button');
      prevButton.className = 'testimonials__nav testimonials__nav--prev';
      prevButton.innerHTML = '&laquo;';
      prevButton.setAttribute('aria-label', 'Previous testimonial');
      
      const nextButton = document.createElement('button');
      nextButton.className = 'testimonials__nav testimonials__nav--next';
      nextButton.innerHTML = '&raquo;';
      nextButton.setAttribute('aria-label', 'Next testimonial');
      
      sliderContainer.appendChild(prevButton);
      sliderContainer.appendChild(nextButton);
      
      prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
      });
      
      nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
      });
      
      function showSlide(index) {
        // Handle wrap-around
        if (index < 0) index = sliderItems.length - 1;
        if (index >= sliderItems.length) index = 0;
        
        // Hide all slides
        for (let i = 0; i < sliderItems.length; i++) {
          sliderItems[i].style.display = 'none';
          dotsContainer.children[i].classList.remove('active');
        }
        
        // Show the selected slide
        sliderItems[index].style.display = 'block';
        dotsContainer.children[index].classList.add('active');
        currentIndex = index;
      }
      
      // Auto-rotate slides every 5 seconds
      setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    }
  }
});`;
    
    return js;
  }

  /**
   * Write HTML and JavaScript files to disk
   */
  async writeHtmlAndJs() {
    console.log('Writing HTML and JavaScript files...');
    
    // Write HTML file
    await fs.writeFile(path.join(this.outputDir, 'index.html'), this.htmlTemplate);
    
    // Write JavaScript file
    const js = this.generateJavaScript();
    await fs.writeFile(path.join(this.outputDir, 'js', 'main.js'), js);
    
    console.log('HTML and JavaScript files written successfully.');
  }

  /**
   * Generate placeholder images for the project
   */
  async generatePlaceholderImages() {
    console.log('Generating placeholder images...');
    
    // Create simple placeholder SVGs for common images
    const placeholders = {
      'hero-image.jpg': {
        width: 800,
        height: 600,
        color: this.colorCategories.primary || '#3498db'
      },
      'about-image.jpg': {
        width: 600,
        height: 400,
        color: this.colorCategories.secondary || '#2ecc71'
      },
      'logo.svg': {
        width: 200,
        height: 60,
        color: this.colorCategories.accent || '#e74c3c'
      }
    };
    
    for (const [filename, config] of Object.entries(placeholders)) {
      const { width, height, color } = config;
      
      if (filename.endsWith('.svg')) {
        // Generate an SVG
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${color}" />
  <text x="${width/2}" y="${height/2}" font-family="Arial" font-size="20" text-anchor="middle" fill="white">Logo</text>
</svg>`;
        
        await fs.writeFile(path.join(this.outputDir, 'assets', 'images', filename), svg);
      } else {
        // For real projects, you would generate proper placeholder images
        // Here we'll just create a simple SVG as a placeholder
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${color}" />
  <text x="${width/2}" y="${height/2}" font-family="Arial" font-size="20" text-anchor="middle" fill="white">
    ${filename} (${width}x${height})
  </text>
</svg>`;
        
        await fs.writeFile(path.join(this.outputDir, 'assets', 'images', filename.replace('.jpg', '.svg')), svg);
      }
    }
    
    console.log('Placeholder images generated successfully.');
  }

  /**
   * Create a README.md file for the project
   */
  async createReadme() {
    console.log('Creating README.md...');
    
    const readme = `# SASS Website Generated from ${this.url}

This project was automatically generated using the WebpageToSASS tool. It extracts the structure and styling from an existing website and rebuilds it using a proper SASS architecture.

## Features

- Fully responsive design
- BEM methodology for CSS naming
- Modular SASS architecture
- Optimized for performance

## Project Structure

- \`src/\` - Source files
  - \`sass/\` - SASS files
    - \`base/\` - Base styles (reset, typography, variables)
    - \`components/\` - UI components (buttons, cards, forms)
    - \`layouts/\` - Page sections (header, footer, etc.)
    - \`utils/\` - Utilities (functions, mixins, placeholders)
  - \`js/\` - JavaScript files
  - \`assets/\` - Images and fonts
  - \`index.html\` - Main HTML file
- \`dist/\` - Compiled and optimized files for production

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

### Deployment

This project is configured for easy deployment to Netlify:

\`\`\`bash
# Deploy to Netlify
npm run deploy
\`\`\`

## Customization

Feel free to modify any part of the generated code to suit your needs:

- Update the content in \`index.html\`
- Modify styles in the SASS files
- Add or remove sections as needed
- Extend JavaScript functionality

## License

MIT
`;
    
    await fs.writeFile(path.join(process.cwd(), 'README.md'), readme);
    console.log('README.md created successfully.');
  }

  /**
   * Create a .gitignore file for the project
   */
  async createGitignore() {
    console.log('Creating .gitignore...');
    
    const gitignore = `# Dependencies
node_modules/

# Build outputs
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor directories and files
.idea/
.vscode/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
`;
    
    await fs.writeFile(path.join(process.cwd(), '.gitignore'), gitignore);
    console.log('.gitignore created successfully.');
  }

  /**
   * Run the complete process
   */
  async run() {
    try {
      // Step 1: Initialize the output directory
      await this.initOutputDir();
      
      // Step 2: Scrape the webpage
      await this.scrapeWebpage();
      
      // Step 3: Analyze the page structure
      this.analyzePageStructure();
      
      // Step 4: Extract and analyze colors
      await this.extractColors();
      
      // Step 5: Extract and analyze typography
      this.extractTypography();
      
      // Step 6: Extract spacing values
      this.extractSpacing();
      
      // Step 7: Extract media queries and breakpoints
      this.extractBreakpoints();
      
      // Step 8: Create SASS variables from design tokens
      this.createSassVariables();
      
      // Step 9: Create SASS mixins
      this.createSassMixins();
      
      // Step 10: Create SASS functions
      this.createSassFunctions();
      
      // Step 11: Create SASS placeholders
      this.createSassPlaceholders();
      
      // Step 12: Create reset styles
      this.createResetStyles();
      
      // Step 13: Create typography styles
      this.createTypographyStyles();
      
      // Step 14: Process all sections
      this.processAllSections();
      
      // Step 15: Create component styles
      this.createComponentStyles();
      
      // Step 16: Create the main SASS file
      this.createMainSassFile();
      
      // Step 17: Write all SASS files to disk
      await this.writeSassFiles();
      
      // Step 18: Generate HTML template
      this.generateHtmlTemplate();
      
      // Step 19: Write HTML and JavaScript files
      await this.writeHtmlAndJs();
      
      // Step 20: Generate placeholder images
      await this.generatePlaceholderImages();
      
      // Step 21: Create README.md
      await this.createReadme();
      
      // Step 22: Create .gitignore
      await this.createGitignore();
      
      console.log(`Project successfully created at: ${this.outputDir}`);
      console.log('Ready for deployment to Netlify!');
      return this.outputDir;
    } catch (error) {
      console.error('Error processing webpage:', error);
      throw error;
    }
  }
}

/**
 * CLI entry point
 */
async function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.error('Usage: node webpage-to-sass.js <url> [output-dir]');
    process.exit(1);
  }
  
  const url = args[0];
  const outputDir = args[1] || path.join(process.cwd(), 'src');
  
  try {
    console.log(`Starting to process webpage: ${url}`);
    console.log('This will create a complete project structure ready for Netlify deployment.');
    
    const scraper = new WebpageToSASS(url, outputDir);
    await scraper.run();
    
    console.log('\nProcess completed successfully!');
    console.log('\nTo start the development server:');
    console.log('  npm run dev');
    console.log('\nTo build for production:');
    console.log('  npm run build');
    console.log('\nTo deploy to Netlify:');
    console.log('  npm run deploy');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the CLI if this file is executed directly
if (require.main === module) {
  main();
} else {
  // Export the class for use as a module
  module.exports = WebpageToSASS;
}    @extend %card-body;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__title {\n`;
        componentSass += `    margin-bottom: $spacing-2;\n`;
        componentSass += `    font-size: $font-size-lg;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__text {\n`;
        componentSass += `    margin-bottom: $spacing-3;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__footer {\n`;
        componentSass += `    padding: $spacing-3 $spacing-4;\n`;
        componentSass += `    background-color: rgba($color-dark, 0.03);\n`;
        componentSass += `    border-top: 1px solid rgba($color-dark, 0.125);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  // Card modifiers\n`;
        componentSass += `  &--primary {\n`;
        componentSass += `    border-color: $color-primary;\n`;
        componentSass += `    \n`;
        componentSass += `    .card__header {\n`;
        componentSass += `      background-color: $color-primary;\n`;
        componentSass += `      color: white;\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n`;
        componentSass += `}\n`;
      } else if (component === 'forms') {
        componentSass += `.form {\n`;
        componentSass += `  &__group {\n`;
        componentSass += `    margin-bottom: $spacing-4;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__label {\n`;
        componentSass += `    display: inline-block;\n`;
        componentSass += `    margin-bottom: $spacing-2;\n`;
        componentSass += `    font-weight: $font-weight-medium;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__control {\n`;
        componentSass += `    display: block;\n`;
        componentSass += `    width: 100%;\n`;
        componentSass += `    padding: $spacing-2 $spacing-3;\n`;
        componentSass += `    font-size: $font-size-base;\n`;
        componentSass += `    line-height: 1.5;\n`;
        componentSass += `    color: $color-dark;\n`;
        componentSass += `    background-color: #fff;\n`;
        componentSass += `    background-clip: padding-box;\n`;
        componentSass += `    border: 1px solid darken($color-light, 10%);\n`;
        componentSass += `    border-radius: 0.25rem;\n`;
        componentSass += `    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n`;
        
        componentSass += `    &:focus {\n`;
        componentSass += `      border-color: lighten($color-primary, 25%);\n`;
        componentSass += `      outline: 0;\n`;
        componentSass += `      box-shadow: 0 0 0 0.2rem rgba($color-primary, 0.25);\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__text {\n`;
        componentSass += `    display: block;\n`;
        componentSass += `    margin-top: $spacing-1;\n`;
        componentSass += `    font-size: $font-size-sm;\n`;
        componentSass += `    color: $color-gray;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__check {\n`;
        componentSass += `    position: relative;\n`;
        componentSass += `    display: block;\n`;
        componentSass += `    padding-left: $spacing-5;\n\n`;
        
        componentSass += `    &-input {\n`;
        componentSass += `      position: absolute;\n`;
        componentSass += `      margin-top: 0.3rem;\n`;
        componentSass += `      margin-left: -$spacing-5;\n`;
        componentSass += `    }\n\n`;
        
        componentSass += `    &-label {\n`;
        componentSass += `      margin-bottom: 0;\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n`;
        componentSass += `}\n`;
      } else if (component === 'navigation') {
        componentSass += `.nav {\n`;
        componentSass += `  display: flex;\n`;
        componentSass += `  flex-wrap: wrap;\n`;
        componentSass += `  padding-left: 0;\n`;
        componentSass += `  margin-bottom: 0;\n`;
        componentSass += `  list-style: none;\n\n`;
        
        componentSass += `  &__item {\n`;
        componentSass += `    margin-bottom: 0;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__link {\n`;
        componentSass += `    display: block;\n`;
        componentSass += `    padding: $spacing-2 $spacing-3;\n`;
        componentSass += `    color: $color-primary;\n`;
        componentSass += `    text-decoration: none;\n`;
        componentSass += `    \n`;
        componentSass += `    &:hover {\n`;
        componentSass += `      color: darken($color-primary, 15%);\n`;
        componentSass += `    }\n\n`;
        
        componentSass += `    &--active {\n`;
        componentSass += `      color: $color-dark;\n`;
        componentSass += `      font-weight: $font-weight-medium;\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  // Navbar specific styles\n`;
        componentSass += `  &--navbar {\n`;
        componentSass += `    @include flex(row, space-between, center);\n`;
        componentSass += `    padding: $spacing-3 0;\n\n`;
        
        componentSass += `    .nav__link {\n`;
        componentSass += `      padding: $spacing-2 $spacing-3;\n`;
        componentSass += `    }\n\n`;
        
        componentSass += `    // Mobile toggle for responsive navbar\n`;
        componentSass += `    &-toggle {\n`;
        componentSass += `      display: block;\n`;
        componentSass += `      padding: $spacing-2;\n`;
        componentSass += `      font-size: $font-size-lg;\n`;
        componentSass += `      line-height: 1;\n`;
        componentSass += `      background-color: transparent;\n`;
        componentSass += `      border: 1px solid transparent;\n`;
        componentSass += `      border-radius: 0.25rem;\n`;
        componentSass += `      cursor: pointer;\n\n`;
        
        componentSass += `      @include md {\n`;
        componentSass += `        display: none;\n`;
        componentSass += `      }\n`;
        componentSass += `    }\n\n`;
        
        componentSass += `    &-collapse {\n`;
        componentSass += `      flex-basis: 100%;\n`;
        componentSass += `      flex-grow: 1;\n`;
        componentSass += `      \n`;
        componentSass += `      @include md {\n`;
        componentSass += `        display: flex !important;\n`;
        componentSass += `        flex-basis: auto;\n`;
        componentSass += `      }\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n`;
        componentSass += `}\n`;
      } else if (component === 'modal') {
        componentSass += `.modal {\n`;
        componentSass += `  position: fixed;\n`;
        componentSass += `  top: 0;\n`;
        componentSass += `  left: 0;\n`;
        componentSass += `  z-index: z('modal');\n`;
        componentSass += `  display: none;\n`;
        componentSass += `  width: 100%;\n`;
        componentSass += `  height: 100%;\n`;
        componentSass += `  overflow: hidden;\n`;
        componentSass += `  outline: 0;\n\n`;
        
        componentSass += `  &__backdrop {\n`;
        componentSass += `    position: fixed;\n`;
        componentSass += `    top: 0;\n`;
        componentSass += `    left: 0;\n`;
        componentSass += `    z-index: z('modal-backdrop');\n`;
        componentSass += `    width: 100vw;\n`;
        componentSass += `    height: 100vh;\n`;
        componentSass += `    background-color: $color-dark;\n`;
        componentSass += `    opacity: 0.5;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__dialog {\n`;
        componentSass += `    position: relative;\n`;
        componentSass += `    width: auto;\n`;
        componentSass += `    margin: $spacing-4;\n`;
        componentSass += `    pointer-events: none;\n\n`;
        
        componentSass += `    @include md {\n`;
        componentSass += `      max-width: 500px;\n`;
        componentSass += `      margin: 1.75rem auto;\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__content {\n`;
        componentSass += `    position: relative;\n`;
        componentSass += `    display: flex;\n`;
        componentSass += `    flex-direction: column;\n`;
        componentSass += `    width: 100%;\n`;
        componentSass += `    pointer-events: auto;\n`;
        componentSass += `    background-color: #fff;\n`;
        componentSass += `    background-clip: padding-box;\n`;
        componentSass += `    border: 1px solid rgba($color-dark, 0.2);\n`;
        componentSass += `    border-radius: 0.3rem;\n`;
        componentSass += `    @include shadow-lg;\n`;
        componentSass += `    outline: 0;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__header {\n`;
        componentSass += `    display: flex;\n`;
        componentSass += `    align-items: flex-start;\n`;
        componentSass += `    justify-content: space-between;\n`;
        componentSass += `    padding: $spacing-3 $spacing-4;\n`;
        componentSass += `    border-bottom: 1px solid darken($color-light, 10%);\n`;
        componentSass += `    border-top-left-radius: 0.3rem;\n`;
        componentSass += `    border-top-right-radius: 0.3rem;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__title {\n`;
        componentSass += `    margin-bottom: 0;\n`;
        componentSass += `    line-height: 1.5;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__close {\n`;
        componentSass += `    padding: $spacing-1;\n`;
        componentSass += `    margin: -$spacing-1 -$spacing-1 -$spacing-1 auto;\n`;
        componentSass += `    background-color: transparent;\n`;
        componentSass += `    border: 0;\n`;
        componentSass += `    font-size: 1.5rem;\n`;
        componentSass += `    cursor: pointer;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__body {\n`;
        componentSass += `    position: relative;\n`;
        componentSass += `    flex: 1 1 auto;\n`;
        componentSass += `    padding: $spacing-4;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__footer {\n`;
        componentSass += `    display: flex;\n`;
        componentSass += `    flex-wrap: wrap;\n`;
        componentSass += `    align-items: center;\n`;
        componentSass += `    justify-content: flex-end;\n`;
        componentSass += `    padding: $spacing-3 $spacing-4;\n`;
        componentSass += `    border-top: 1px solid darken($color-light, 10%);\n\n`;
        
        componentSass += `    > * {\n`;
        componentSass += `      margin: $spacing-1;\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n`;
        componentSass += `}\n`;
      } else if (component === 'alert') {
        componentSass += `.alert {\n`;
        componentSass += `  position: relative;\n`;
        componentSass += `  padding: $spacing-3 $spacing-4;\n`;
        componentSass += `  margin-bottom: $spacing-4;\n`;
        componentSass += `  border: 1px solid transparent;\n`;
        componentSass += `  border-radius: 0.25rem;\n\n`;
        
        componentSass += `  &--primary {\n`;
        componentSass += `    color: darken($color-primary, 30%);\n`;
        componentSass += `    background-color: lighten($color-primary, 30%);\n`;
        componentSass += `    border-color: lighten($color-primary, 20%);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--secondary {\n`;
        componentSass += `    color: darken($color-secondary, 30%);\n`;
        componentSass += `    background-color: lighten($color-secondary, 30%);\n`;
        componentSass += `    border-color: lighten($color-secondary, 20%);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--success {\n`;
        componentSass += `    color: darken(#28a745, 30%);\n`;
        componentSass += `    background-color: lighten(#28a745, 45%);\n`;
        componentSass += `    border-color: lighten(#28a745, 35%);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--danger {\n`;
        componentSass += `    color: darken(#dc3545, 30%);\n`;
        componentSass += `    background-color: lighten(#dc3545, 38%);\n`;
        componentSass += `    border-color: lighten(#dc3545, 28%);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--warning {\n`;
        componentSass += `    color: darken(#ffc107, 30%);\n`;
        componentSass += `    background-color: lighten(#ffc107, 35%);\n`;
        componentSass += `    border-color: lighten(#ffc107, 25%);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--info {\n`;
        componentSass += `    color: darken(#17a2b8, 30%);\n`;
        componentSass += `    background-color: lighten(#17a2b8, 45%);\n`;
        componentSass += `    border-color: lighten(#17a2b8, 35%);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__heading {\n`;
        componentSass += `    color: inherit;\n`;
        componentSass += `    font-size: $font-size-lg;\n`;
        componentSass += `    margin-bottom: $spacing-2;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__close {\n`;
        componentSass += `    position: absolute;\n`;
        componentSass += `    top: 0;\n`;
        componentSass += `    right: 0;\n`;
        componentSass += `    padding: $spacing-3 $spacing-4;\n`;
        componentSass += `    color: inherit;\n`;
        componentSass += `    background-color: transparent;\n`;
        componentSass += `    border: 0;\n`;
        componentSass += `    cursor: pointer;\n`;
        componentSass += `  }\n`;
        componentSass += `}\n`;
      }
      
      this.sassStructure.components[`_${component}.scss`] = componentSass;
    });
    
    console.log('Component styles created.');
  }

  /**
   * Write all SASS files to the filesystem
   */
  async writeSassFiles() {
    console.log('Writing SASS files to disk...');
    
    // Write base files
    for (const [fileName, content] of Object.entries(this.sassStructure.base)) {
      await fs.writeFile(path.join(this.sassOutputDir, 'base', fileName), content);
    }
    
    // Write utils files
    for (const [fileName, content] of Object.entries(this.sassStructure.utils)) {
      await fs.writeFile(path.join(this.sassOutputDir, 'utils', fileName), content);
    }
    
    // Write component files
    for (const [fileName, content] of Object.entries(this.sassStructure.components)) {
      await fs.writeFile(path.join(this.sassOutputDir, 'components', fileName), content);
    }
    
    // Write layout files
    for (const [fileName, content] of Object.entries(this.sassStructure.layouts)) {
      await fs.writeFile(path.join(this.sassOutputDir, 'layouts', fileName), content);
    }
    
    // Write main SASS file
    await fs.writeFile(path.join(this.sassOutputDir, 'main.scss'), this.sassStructure['main.scss']);
    
    console.log('All SASS files written successfully.');
  }
  
  /**
   * Generate an HTML template based on extracted sections
   */
  generateHtmlTemplate() {
    console.log('Generating HTML template...');
    
    // Create meta tags from extracted information
    let metaTags = '';
    const importantMetaTags = ['description', 'viewport', 'keywords', 'author'];
    
    this.meta.forEach(meta => {
      if (meta.name && importantMetaTags.includes(meta.name)) {
        metaTags += `    <meta name="${meta.name}" content="${meta.content}">\n`;
      } else if (meta.property && meta.property.startsWith('og:')) {
        metaTags += `    <meta property="${meta.property}" content="${meta.content}">\n`;
      }
    });
    
    // Ensure we have a viewport meta tag
    if (!metaTags.includes('viewport')) {
      metaTags += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    }
    
    // Start building the HTML template
    let htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
${metaTags}
    <title>${this.title || 'Webpage to SASS'}</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
`;
    
    // Add each section to the template
    const orderedSections = ['header', 'hero', 'features', 'about', 'testimonials', 'pricing', 'contact', 'footer'];
    
    // First add the known sections in the proper order
    orderedSections.forEach(sectionName => {
      if (this.sections[sectionName]) {
        htmlTemplate += this.generateSectionHtml(sectionName);
      }
    });
    
    // Then add any additional sections we found
    Object.keys(this.sections).forEach(sectionName => {
      if (!orderedSections.includes(sectionName)) {
        htmlTemplate += this.generateSectionHtml(sectionName);
      }
    });
    
    // Close the HTML template
    htmlTemplate += `
    <script src="js/main.js"></script>
</body>
</html>`;
    
    this.htmlTemplate = htmlTemplate;
    console.log('HTML template generated successfully.');
  }
  
  /**
   * Generate HTML for a specific section
   */
  generateSectionHtml(sectionName) {
    const sectionData = this.sections[sectionName];
    
    // Create a clean section with BEM classes
    let sectionHtml = `\n    <!-- ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} Section -->\n`;
    sectionHtml += `    <section class="${sectionName}">\n`;
    sectionHtml += `        <div class="${sectionName}__container">\n`;
    
    // Add section content based on typical section structure
    if (sectionName === 'header') {
      sectionHtml += `            <div class="${sectionName}__logo">Logo</div>\n`;
      sectionHtml += `            <nav class="${sectionName}__nav">\n`;
      sectionHtml += `                <ul class="${sectionName}__menu">\n`;
      sectionHtml += `                    <li class="${sectionName}__menu-item"><a href="#" class="${sectionName}__link">Home</a></li>\n`;
      sectionHtml += `                    <li class="${sectionName}__menu-item"><a href="#" class="${sectionName}__link">Features</a></li>\n`;
      sectionHtml += `                    <li class="${sectionName}__menu-item"><a href="#" class="${sectionName}__link">About</a></li>\n`;
      sectionHtml += `                    <li class="${sectionName}__menu-item"><a href="#" class="${sectionName}__link">Contact</a></li>\n`;
      sectionHtml += `                </ul>\n`;
      sectionHtml += `            </nav>\n`;
      sectionHtml += `            <div class="${sectionName}__cta">\n`;
      sectionHtml += `                <button class="btn btn--primary">Get Started</button>\n`;
      sectionHtml += `            </div>\n`;
    } else if (sectionName === 'hero') {
      sectionHtml += `            <div class="${sectionName}__content">\n`;
      sectionHtml += `                <h1 class="${sectionName}__title">Welcome to Our Website</h1>\n`;
      sectionHtml += `                <p class="${sectionName}__subtitle">A modern approach to web development</p>\n`;
      sectionHtml += `                <div class="${sectionName}__buttons">\n`;
      sectionHtml += `                    <button class="btn btn--primary">Get Started</button>\n`;
      sectionHtml += `                    <button class="btn btn--outline">Learn More</button>\n`;
      sectionHtml += `                </div>\n`;
      sectionHtml += `            </div>\n`;
      sectionHtml += `            <div class="${sectionName}__image">\n`;
      sectionHtml += `                <img src="assets/images/hero-image.jpg" alt="Hero Image">\n`;
      sectionHtml += `            </div>\n`;
    } else if (sectionName === 'features') {
      sectionHtml += `            <h2 class="${sectionName}__title">Our Features</h2>\n`;
      sectionHtml += `            <p class="${sectionName}__subtitle">Discover what makes us different</p>\n`;
      sectionHtml += `            <div class="${sectionName}__grid">\n`;
      
      // Add 3 feature items
      for (let i = 1; i <= 3; i++) {
        sectionHtml += `                <div class="${sectionName}__item">\n`;
        sectionHtml += `                    <div class="${sectionName}__icon">Icon ${i}</div>\n`;
        sectionHtml += `                    <h3 class="${sectionName}__item-title">Feature ${i}</h3>\n`;
        sectionHtml += `                    <p class="${sectionName}__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>\n`;
        sectionHtml += `                </div>\n`;
      }
      
      sectionHtml += `            </div>\n`;
    } else if (sectionName === 'about') {
      sectionHtml += `            <div class="${sectionName}__content">\n`;
      sectionHtml += `                <h2 class="${sectionName}__title">About Us</h2>\n`;
      sectionHtml += `                <p class="${sectionName}__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n`;
      sectionHtml += `                <p class="${sectionName}__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>\n`;
      sectionHtml += `            </div>\n`;
      sectionHtml += `            <div class="${sectionName}__image">\n`;
      sectionHtml += `                <img src="assets/images/about-image.jpg" alt="About Us Image">\n`;
      sectionHtml += `            </div>\n`;
    } else if (sectionName === 'testimonials') {
      sectionHtml += `            <h2 class="${sectionName}__title">What Our Clients Say</h2>\n`;
      sectionHtml += `            <div class="${sectionName}__slider">\n`;
      
      // Add 3 testimonial items
      for (let i = 1; i <= 3; i++) {
        sectionHtml += `                <div class="${sectionName}__item">\n`;
        sectionHtml += `                    <div class="${sectionName}__quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>\n`;
        sectionHtml += `                    <div class="${sectionName}__author">\n`;
        sectionHtml += `                        <div class="${sectionName}__avatar">Avatar</div>\n`;
        sectionHtml += `                        <div class="${sectionName}__info">\n`;
        sectionHtml += `                            <div class="${sectionName}__name">Client Name ${i}</div>\n`;
        sectionHtml += `                            <div class="${sectionName}__position">Position, Company ${i}</div>\n`;
        sectionHtml += `                        </div>\n`;
        sectionHtml += `                    </div>\n`;
        sectionHtml += `                </div>\n`;
      }
      
      sectionHtml += `            </div>\n`;
    } else if (sectionName === 'pricing') {
      sectionHtml += `            <h2 class="${sectionName}__title">Pricing Plans</h2>\n`;
      sectionHtml += `            <p class="${sectionName}__subtitle">Choose the plan that's right for you</p>\n`;
      sectionHtml += `            <div class="${sectionName}__grid">\n`;
      
      // Add 3 pricing plans
      const plans = ['Basic', 'Pro', 'Enterprise'];
      const prices = ['$19', '$49', '$99'];
      
      for (let i = 0; i < 3; i++) {
        sectionHtml += `                <div class="${sectionName}__plan">\n`;
        sectionHtml += `                    <div class="${sectionName}__plan-header">\n`;
        sectionHtml += `                        <h3 class="${sectionName}__plan-title">${plans[i]}</h3>\n`;
        sectionHtml += `                        <div class="${sectionName}__price">${prices[i]}<span class="${sectionName}__period">/month</span></div>\n`;
        sectionHtml += `                    </div>\n`;
        sectionHtml += `                    <ul class="${sectionName}__features">\n`;
        sectionHtml += `                        <li class="${sectionName}__feature">Feature 1</li>\n`;
        sectionHtml += `                        <li class="${sectionName}__feature">Feature 2</li>\n`;
        sectionHtml += `                        <li class="${sectionName}__feature">Feature 3</li>\n`;
        sectionHtml += `                    </ul>\n`;
        sectionHtml += `                    <div class="${sectionName}__cta">\n`;
        sectionHtml += `                        <button class="btn btn--${i === 1 ? 'primary' : 'outline'}">Select Plan</button>\n`;
        sectionHtml += `                    </div>\n`;
        sectionHtml += `                </div>\n`;
      }
      
      sectionHtml += `            </div>\n`;
    } else if (sectionName === 'contact') {
      sectionHtml += `            <div class="${sectionName}__content">\n`;
      sectionHtml += `                <h2 class="${sectionName}__title">Contact Us</h2>\n`;
      sectionHtml += `                <p class="${sectionName}__text">Get in touch with us for any questions or inquiries</p>\n`;
      sectionHtml += `                <div class="${sectionName}__info">\n`;
      sectionHtml += `                    <div class="${sectionName}__info-item">\n`;
      sectionHtml += `                        <span class="${sectionName}__info-icon">📧</span>\n`;
      sectionHtml += `                        <span class="${sectionName}__info-text">info@example.com</span>\n`;
      sectionHtml += `                    </div>\n      variables += `$font-size-xs: ${sortedSizes[0] || '0.75rem'};\n`;
      variables += `$font-size-sm: ${sortedSizes[Math.floor(sortedSizes.length * 0.2)] || '0.875rem'};\n`;
      variables += `$font-size-base: ${sortedSizes[Math.floor(sortedSizes.length * 0.4)] || '1rem'};\n`;
      variables += `$font-size-lg: ${sortedSizes[Math.floor(sortedSizes.length * 0.6)] || '1.25rem'};\n`;
      variables += `$font-size-xl: ${sortedSizes[Math.floor(sortedSizes.length * 0.8)] || '1.5rem'};\n`;
      variables += `$font-size-xxl: ${sortedSizes[sortedSizes.length - 1] || '2rem'};\n`;
    } else {
      variables += `$font-size-xs: 0.75rem;\n`;
      variables += `$font-size-sm: 0.875rem;\n`;
      variables += `$font-size-base: 1rem;\n`;
      variables += `$font-size-lg: 1.25rem;\n`;
      variables += `$font-size-xl: 1.5rem;\n`;
      variables += `$font-size-xxl: 2rem;\n`;
    }
    
    variables += '\n// Font Weight Variables\n';
    variables += `$font-weight-light: ${this.typography.fontWeights[0] || '300'};\n`;
    variables += `$font-weight-normal: ${this.typography.fontWeights[1] || '400'};\n`;
    variables += `$font-weight-medium: ${this.typography.fontWeights[2] || '500'};\n`;
    variables += `$font-weight-bold: ${this.typography.fontWeights[3] || '700'};\n`;
    
    variables += '\n// Spacing Variables\n';
    for (const [key, value] of Object.entries(this.spacingScale)) {
      variables += `$spacing-${key}: ${value};\n`;
    }
    
    variables += '\n// Breakpoint Variables\n';
    for (const [name, value] of Object.entries(this.breakpoints)) {
      variables += `$breakpoint-${name}: ${value};\n`;
    }
    
    variables += '\n// Z-index Variables\n';
    variables += `$z-index-dropdown: 1000;\n`;
    variables += `$z-index-sticky: 1020;\n`;
    variables += `$z-index-fixed: 1030;\n`;
    variables += `$z-index-modal-backdrop: 1040;\n`;
    variables += `$z-index-modal: 1050;\n`;
    variables += `$z-index-popover: 1060;\n`;
    variables += `$z-index-tooltip: 1070;\n`;
    
    this.sassStructure.base['_variables.scss'] = variables;
    console.log('SASS variables created.');
  }

  /**
   * Create SASS placeholders for common patterns
   */
  createSassPlaceholders() {
    console.log('Creating SASS placeholders...');
    
    let placeholders = '// Common Placeholders\n';
    
    // Container placeholder
    placeholders += `%container {\n`;
    placeholders += `  width: 100%;\n`;
    placeholders += `  padding-right: $spacing-4;\n`;
    placeholders += `  padding-left: $spacing-4;\n`;
    placeholders += `  margin-right: auto;\n`;
    placeholders += `  margin-left: auto;\n`;
    placeholders += `  max-width: 1200px;\n`;
    placeholders += `}\n\n`;
    
    // Button placeholder
    placeholders += `%button {\n`;
    placeholders += `  @include button-base;\n`;
    placeholders += `}\n\n`;
    
    // Card placeholder
    placeholders += `%card {\n`;
    placeholders += `  position: relative;\n`;
    placeholders += `  display: flex;\n`;
    placeholders += `  flex-direction: column;\n`;
    placeholders += `  min-width: 0;\n`;
    placeholders += `  word-wrap: break-word;\n`;
    placeholders += `  background-color: #fff;\n`;
    placeholders += `  background-clip: border-box;\n`;
    placeholders += `  border: 1px solid rgba($color-dark, 0.125);\n`;
    placeholders += `  border-radius: 0.25rem;\n`;
    placeholders += `  @include shadow-sm;\n`;
    placeholders += `}\n\n`;
    
    // Card header placeholder
    placeholders += `%card-header {\n`;
    placeholders += `  padding: $spacing-3 $spacing-4;\n`;
    placeholders += `  margin-bottom: 0;\n`;
    placeholders += `  background-color: rgba($color-dark, 0.03);\n`;
    placeholders += `  border-bottom: 1px solid rgba($color-dark, 0.125);\n`;
    placeholders += `}\n\n`;
    
    // Card body placeholder
    placeholders += `%card-body {\n`;
    placeholders += `  flex: 1 1 auto;\n`;
    placeholders += `  padding: $spacing-4;\n`;
    placeholders += `}\n\n`;
    
    // List unstyled placeholder
    placeholders += `%list-unstyled {\n`;
    placeholders += `  padding-left: 0;\n`;
    placeholders += `  list-style: none;\n`;
    placeholders += `}\n\n`;
    
    // List inline placeholder
    placeholders += `%list-inline {\n`;
    placeholders += `  @extend %list-unstyled;\n`;
    placeholders += `  display: flex;\n`;
    placeholders += `  flex-wrap: wrap;\n`;
    placeholders += `  margin-left: -$spacing-2;\n`;
    placeholders += `  
  > li {\n`;
    placeholders += `    padding-left: $spacing-2;\n`;
    placeholders += `    padding-right: $spacing-2;\n`;
    placeholders += `  }\n`;
    placeholders += `}\n\n`;
    
    // Clearfix placeholder
    placeholders += `%clearfix {\n`;
    placeholders += `  @include clearfix;\n`;
    placeholders += `}\n\n`;
    
    this.sassStructure.utils['_placeholders.scss'] = placeholders;
    console.log('SASS placeholders created.');
  }

  /**
   * Create SASS functions
   */
  createSassFunctions() {
    console.log('Creating SASS functions...');
    
    let functions = '// SASS Functions\n';
    
    // Color manipulation functions
    functions += `// Get a lighter variant of a color\n`;
    functions += `@function tint($color, $percentage) {\n`;
    functions += `  @return mix(white, $color, $percentage);\n`;
    functions += `}\n\n`;
    
    functions += `// Get a darker variant of a color\n`;
    functions += `@function shade($color, $percentage) {\n`;
    functions += `  @return mix(black, $color, $percentage);\n`;
    functions += `}\n\n`;
    
    // Z-index management
    functions += `// Z-index management\n`;
    functions += `$z-indexes: (\n`;
    functions += `  "dropdown": 1000,\n`;
    functions += `  "sticky": 1020,\n`;
    functions += `  "fixed": 1030,\n`;
    functions += `  "modal-backdrop": 1040,\n`;
    functions += `  "modal": 1050,\n`;
    functions += `  "popover": 1060,\n`;
    functions += `  "tooltip": 1070\n`;
    functions += `);\n\n`;
    
    functions += `@function z($name) {\n`;
    functions += `  @return map-get($z-indexes, $name);\n`;
    functions += `}\n\n`;
    
    // Spacing function
    functions += `// Get spacing value\n`;
    functions += `@function spacing($key) {\n`;
    functions += `  @return map-get($spacing-scale, $key);\n`;
    functions += `}\n\n`;
    
    // Rem conversion
    functions += `// Convert px to rem\n`;
    functions += `@function rem($pixels, $context: 16) {\n`;
    functions += `  @return ($pixels / $context) * 1rem;\n`;
    functions += `}\n\n`;
    
    // Em conversion
    functions += `// Convert px to em\n`;
    functions += `@function em($pixels, $context: 16) {\n`;
    functions += `  @return ($pixels / $context) * 1em;\n`;
    functions += `}\n\n`;
    
    this.sassStructure.utils['_functions.scss'] = functions;
    console.log('SASS functions created.');
  }

  /**
   * Create SASS mixins for common patterns
   */
  createSassMixins() {
    console.log('Creating SASS mixins...');
    
    let mixins = '// Responsive Breakpoint Mixins\n';
    
    // Breakpoint mixins
    for (const [name, value] of Object.entries(this.breakpoints)) {
      mixins += `@mixin ${name} {\n`;
      mixins += `  @media (min-width: ${value}) {\n`;
      mixins += `    @content;\n`;
      mixins += `  }\n`;
      mixins += `}\n\n`;
    }
    
    mixins += '// Flexbox Mixins\n';
    mixins += `@mixin flex($direction: row, $justify: flex-start, $align: stretch, $wrap: nowrap) {\n`;
    mixins += `  display: flex;\n`;
    mixins += `  flex-direction: $direction;\n`;
    mixins += `  justify-content: $justify;\n`;
    mixins += `  align-items: $align;\n`;
    mixins += `  flex-wrap: $wrap;\n`;
    mixins += `}\n\n`;
    
    mixins += `@mixin flex-center {\n`;
    mixins += `  display: flex;\n`;
    mixins += `  justify-content: center;\n`;
    mixins += `  align-items: center;\n`;
    mixins += `}\n\n`;
    
    mixins += '// Grid Mixins\n';
    mixins += `@mixin grid($columns: 1fr, $rows: auto, $gap: $spacing-4) {\n`;
    mixins += `  display: grid;\n`;
    mixins += `  grid-template-columns: #{$columns};\n`;
    mixins += `  grid-template-rows: #{$rows};\n`;
    mixins += `  gap: $gap;\n`;
    mixins += `}\n\n`;
    
    mixins += '// Button Mixins\n';
    mixins += `@mixin button-base {\n`;
    mixins += `  display: inline-block;\n`;
    mixins += `  font-weight: $font-weight-medium;\n`;
    mixins += `  text-align: center;\n`;
    mixins += `  white-space: nowrap;\n`;
    mixins += `  vertical-align: middle;\n`;
    mixins += `  user-select: none;\n`;
    mixins += `  border: 1px solid transparent;\n`;
    mixins += `  padding: $spacing-2 $spacing-4;\n`;
    mixins += `  font-size: $font-size-base;\n`;
    mixins += `  line-height: 1.5;\n`;
    mixins += `  border-radius: 0.25rem;\n`;
    mixins += `  transition: all 0.15s ease-in-out;\n`;
    mixins += `  cursor: pointer;\n`;
    mixins += `  \n`;
    mixins += `  &:hover, &:focus {\n`;
    mixins += `    text-decoration: none;\n`;
    mixins += `  }\n`;
    mixins += `  \n`;
    mixins += `  &:focus {\n`;
    mixins += `    outline: 0;\n`;
    mixins += `    box-shadow: 0 0 0 0.2rem rgba($color-primary, 0.25);\n`;
    mixins += `  }\n`;
    mixins += `}\n\n`;
    
    mixins += `@mixin button-variant($background, $border, $hover-background: darken($background, 7.5%), $hover-border: darken($border, 10%), $active-background: darken($background, 10%), $active-border: darken($border, 12.5%)) {\n`;
    mixins += `  color: color-contrast($background);\n`;
    mixins += `  background-color: $background;\n`;
    mixins += `  border-color: $border;\n\n`;
    mixins += `  &:hover {\n`;
    mixins += `    color: color-contrast($hover-background);\n`;
    mixins += `    background-color: $hover-background;\n`;
    mixins += `    border-color: $hover-border;\n`;
    mixins += `  }\n\n`;
    mixins += `  &:focus {\n`;
    mixins += `    box-shadow: 0 0 0 0.2rem rgba($background, 0.5);\n`;
    mixins += `  }\n`;
    mixins += `}\n\n`;
    
    mixins += '// Typography Mixins\n';
    mixins += `@mixin heading($size: lg, $weight: bold, $margin-bottom: $spacing-4) {\n`;
    mixins += `  font-family: $font-headings;\n`;
    mixins += `  font-weight: $font-weight-#{$weight};\n`;
    mixins += `  margin-bottom: $margin-bottom;\n`;
    mixins += `  line-height: 1.2;\n`;
    mixins += `  \n`;
    mixins += `  @if $size == xs {\n`;
    mixins += `    font-size: $font-size-xs;\n`;
    mixins += `  } @else if $size == sm {\n`;
    mixins += `    font-size: $font-size-sm;\n`;
    mixins += `  } @else if $size == base {\n`;
    mixins += `    font-size: $font-size-base;\n`;
    mixins += `  } @else if $size == lg {\n`;
    mixins += `    font-size: $font-size-lg;\n`;
    mixins += `  } @else if $size == xl {\n`;
    mixins += `    font-size: $font-size-xl;\n`;
    mixins += `  } @else if $size == xxl {\n`;
    mixins += `    font-size: $font-size-xxl;\n`;
    mixins += `  }\n`;
    mixins += `}\n\n`;
    
    mixins += '// Position Mixins\n';
    mixins += `@mixin position($position, $top: null, $right: null, $bottom: null, $left: null) {\n`;
    mixins += `  position: $position;\n`;
    mixins += `  top: $top;\n`;
    mixins += `  right: $right;\n`;
    mixins += `  bottom: $bottom;\n`;
    mixins += `  left: $left;\n`;
    mixins += `}\n\n`;
    
    mixins += `@mixin absolute($top: null, $right: null, $bottom: null, $left: null) {\n`;
    mixins += `  @include position(absolute, $top, $right, $bottom, $left);\n`;
    mixins += `}\n\n`;
    
    mixins += `@mixin fixed($top: null, $right: null, $bottom: null, $left: null) {\n`;
    mixins += `  @include position(fixed, $top, $right, $bottom, $left);\n`;
    mixins += `}\n\n`;
    
    mixins += '// Container Mixin\n';
    mixins += `@mixin container($max-width: 1200px, $padding: $spacing-4) {\n`;
    mixins += `  width: 100%;\n`;
    mixins += `  padding-right: $padding;\n`;
    mixins += `  padding-left: $padding;\n`;
    mixins += `  margin-right: auto;\n`;
    mixins += `  margin-left: auto;\n`;
    mixins += `  max-width: $max-width;\n`;
    mixins += `}\n\n`;
    
    mixins += '// Clearfix Mixin\n';
    mixins += `@mixin clearfix {\n`;
    mixins += `  &::after {\n`;
    mixins += `    display: block;\n`;
    mixins += `    content: "";\n`;
    mixins += `    clear: both;\n`;
    mixins += `  }\n`;
    mixins += `}\n\n`;
    
    mixins += '// Helper function for contrasting colors\n';
    mixins += `@function color-contrast($color) {\n`;
    mixins += `  $luminance: (0.2126 * red($color) + 0.7152 * green($color) + 0.0722 * blue($color)) / 255;\n`;
    mixins += `  @return if($luminance > 0.5, $color-dark, white);\n`;
    mixins += `}\n\n`;
    
    // Shadow mixins
    mixins += '// Shadow Mixins\n';
    mixins += `@mixin shadow-sm {\n`;
    mixins += `  box-shadow: 0 .125rem .25rem rgba($color-dark, .075);\n`;
    mixins += `}\n\n`;
    
    mixins += `@mixin shadow {\n`;
    mixins += `  box-shadow: 0 .5rem 1rem rgba($color-dark, .15);\n`;
    mixins += `}\n\n`;
    
    mixins += `@mixin shadow-lg {\n`;
    mixins += `  box-shadow: 0 1rem 3rem rgba($color-dark, .175);\n`;
    mixins += `}\n\n`;
    
    // Transition mixin
    mixins += '// Transition Mixin\n';
    mixins += `@mixin transition($property: all, $duration: 0.3s, $timing: ease-in-out) {\n`;
    mixins += `  transition: $property $duration $timing;\n`;
    mixins += `}\n\n`;
    
    this.sassStructure.utils['_mixins.scss'] = mixins;
    console.log('SASS mixins created.');
  }

  /**
   * Process CSS for a section and convert to SASS with BEM
   */
  processSectionCSS(sectionName, sectionData) {
    console.log(`Processing CSS for ${sectionName} section...`);
    
    // Create a section SASS file with BEM methodology
    let sectionSass = `// ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} Section Styles\n`;
    sectionSass += `.${sectionName} {\n`;
    
    // Base element styles
    sectionSass += `  @include container();\n`;
    sectionSass += `  padding: $spacing-5 0;\n\n`;
    
    // Add responsive styles
    sectionSass += `  @include sm {\n`;
    sectionSass += `    padding: $spacing-6 0;\n`;
    sectionSass += `  }\n\n`;
    
    // Add element styles based on BEM methodology
    const elements = this.identifySectionElements(sectionName, sectionData);
    
    elements.forEach(element => {
      const elementName = element.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
      
      sectionSass += `  &__${elementName} {\n`;
      
      // Add some common properties based on element type
      if (element === 'title' || element === 'heading') {
        sectionSass += `    @include heading(xl, bold, $spacing-4);\n`;
        sectionSass += `    color: $color-dark;\n`;
      } else if (element === 'subtitle' || element === 'subheading') {
        sectionSass += `    @include heading(lg, medium, $spacing-4);\n`;
        sectionSass += `    color: $color-gray;\n`;
      } else if (element === 'text' || element === 'description') {
        sectionSass += `    font-size: $font-size-base;\n`;
        sectionSass += `    margin-bottom: $spacing-4;\n`;
      } else if (element === 'image') {
        sectionSass += `    max-width: 100%;\n`;
        sectionSass += `    height: auto;\n`;
        sectionSass += `    margin-bottom: $spacing-4;\n`;
      } else if (element === 'button') {
        sectionSass += `    @extend %button;\n`;
        sectionSass += `    @include button-variant($color-primary, $color-primary);\n`;
      } else if (element === 'container' || element === 'wrapper') {
        sectionSass += `    @include flex(row, space-between, center, wrap);\n`;
      } else if (element === 'item' || element === 'card') {
        sectionSass += `    @extend %card;\n`;
        sectionSass += `    margin-bottom: $spacing-4;\n`;
      }
      
      // Add responsive styles for elements
      sectionSass += `\n    @include sm {\n`;
      sectionSass += `      // Responsive styles for small screens\n`;
      sectionSass += `    }\n\n`;
      
      sectionSass += `    @include md {\n`;
      sectionSass += `      // Responsive styles for medium screens\n`;
      sectionSass += `    }\n\n`;
      
      sectionSass += `    @include lg {\n`;
      sectionSass += `      // Responsive styles for large screens\n`;
      sectionSass += `    }\n`;
      
      // Add common modifiers
      sectionSass += `\n    // Common modifiers\n`;
      sectionSass += `    &--primary {\n`;
      sectionSass += `      color: $color-primary;\n`;
      sectionSass += `    }\n\n`;
      
      sectionSass += `    &--secondary {\n`;
      sectionSass += `      color: $color-secondary;\n`;
      sectionSass += `    }\n\n`;
      
      sectionSass += `    &--accent {\n`;
      sectionSass += `      color: $color-accent;\n`;
      sectionSass += `    }\n\n`;
      
      // Close element
      sectionSass += `  }\n\n`;
    });
    
    // Add modifiers for the section
    sectionSass += `  // Section modifiers\n`;
    sectionSass += `  &--primary {\n`;
    sectionSass += `    background-color: $color-primary;\n`;
    sectionSass += `    color: white;\n`;
    sectionSass += `  }\n\n`;
    
    sectionSass += `  &--secondary {\n`;
    sectionSass += `    background-color: $color-secondary;\n`;
    sectionSass += `    color: white;\n`;
    sectionSass += `  }\n\n`;
    
    sectionSass += `  &--light {\n`;
    sectionSass += `    background-color: $color-light;\n`;
    sectionSass += `  }\n\n`;
    
    sectionSass += `  &--dark {\n`;
    sectionSass += `    background-color: $color-dark;\n`;
    sectionSass += `    color: white;\n`;
    sectionSass += `  }\n`;
    
    // Close section
    sectionSass += `}\n`;
    
    return sectionSass;
  }

  /**
   * Identify possible elements within a section for BEM naming
   */
  identifySectionElements(sectionName, sectionData) {
    // Default common elements for sections
    const commonElements = ['title', 'subtitle', 'text', 'button', 'image'];
    
    const sectionSpecificElements = {
      header: ['logo', 'nav', 'menu', 'menu-item', 'cta'],
      hero: ['heading', 'subheading', 'cta', 'image', 'overlay'],
      features: ['feature', 'icon', 'title', 'description', 'list'],
      about: ['heading', 'subheading', 'text', 'image', 'content'],
      testimonials: ['testimonial', 'quote', 'author', 'avatar', 'rating'],
      pricing: ['plan', 'price', 'period', 'features', 'cta'],
      contact: ['form', 'input', 'textarea', 'submit', 'info'],
      footer: ['logo', 'nav', 'social', 'copyright', 'links']
    };
    
    // Return section-specific elements if available, otherwise return common elements
    return sectionSpecificElements[sectionName] || commonElements;
  }

  /**
   * Create the main SASS file that imports all other files
   */
  createMainSassFile() {
    console.log('Creating main SASS file...');
    
    let mainSass = `// Main SASS File - Compiled from webpage analysis\n\n`;
    
    // Import variables first
    mainSass += `// Import Variables\n`;
    mainSass += `@import 'base/variables';\n\n`;
    
    // Import utilities
    mainSass += `// Import Utilities\n`;
    mainSass += `@import 'utils/functions';\n`;
    mainSass += `@import 'utils/mixins';\n`;
    mainSass += `@import 'utils/placeholders';\n\n`;
    
    // Import base styles
    mainSass += `// Import Base Styles\n`;
    mainSass += `@import 'base/reset';\n`;
    mainSass += `@import 'base/typography';\n\n`;
    
    // Import components
    mainSass += `// Import Components\n`;
    Object.keys(this.sassStructure.components).forEach(component => {
      mainSass += `@import 'components/${component.replace('.scss', '')}';\n`;
    });
    mainSass += `\n`;
    
    // Import layouts (sections)
    mainSass += `// Import Layouts\n`;
    Object.keys(this.sassStructure.layouts).forEach(layout => {
      mainSass += `@import 'layouts/${layout.replace('.scss', '')}';\n`;
    });
    
    this.sassStructure['main.scss'] = mainSass;
    console.log('Main SASS file created.');
  }

  /**
   * Process all identified sections and create SASS files
   */
  processAllSections() {
    console.log('Processing all identified sections...');
    
    Object.entries(this.sections).forEach(([sectionName, sectionData]) => {
      const sectionSass = this.processSectionCSS(sectionName, sectionData);
      this.sassStructure.layouts[`_${sectionName}.scss`] = sectionSass;
    });
    
    console.log('All sections processed.');
  }

  /**
   * Create common component styles
   */
  createComponentStyles() {
    console.log('Creating component styles...');
    
    // Common components to create
    const components = ['buttons', 'cards', 'forms', 'navigation', 'modal', 'alert'];
    
    components.forEach(component => {
      let componentSass = `// ${component.charAt(0).toUpperCase() + component.slice(1)} Component Styles\n`;
      
      if (component === 'buttons') {
        componentSass += `.btn {\n`;
        componentSass += `  @extend %button;\n\n`;
        
        componentSass += `  // Button variants\n`;
        componentSass += `  &--primary {\n`;
        componentSass += `    @include button-variant($color-primary, $color-primary);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--secondary {\n`;
        componentSass += `    @include button-variant($color-secondary, $color-secondary);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--accent {\n`;
        componentSass += `    @include button-variant($color-accent, $color-accent);\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--outline {\n`;
        componentSass += `    background-color: transparent;\n`;
        componentSass += `    border: 1px solid currentColor;\n\n`;
        
        componentSass += `    &.btn--primary {\n`;
        componentSass += `      color: $color-primary;\n\n`;
        componentSass += `      &:hover {\n`;
        componentSass += `        background-color: $color-primary;\n`;
        componentSass += `        color: white;\n`;
        componentSass += `      }\n`;
        componentSass += `    }\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  // Button sizes\n`;
        componentSass += `  &--sm {\n`;
        componentSass += `    padding: $spacing-1 $spacing-2;\n`;
        componentSass += `    font-size: $font-size-sm;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &--lg {\n`;
        componentSass += `    padding: $spacing-3 $spacing-5;\n`;
        componentSass += `    font-size: $font-size-lg;\n`;
        componentSass += `  }\n`;
        componentSass += `}\n`;
      } else if (component === 'cards') {
        componentSass += `.card {\n`;
        componentSass += `  @extend %card;\n\n`;
        
        componentSass += `  &__header {\n`;
        componentSass += `    @extend %card-header;\n`;
        componentSass += `  }\n\n`;
        
        componentSass += `  &__body {\n`;
        componentSass += `    @extend %card-body;\n`;
        componentSass += `  const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const path = require('path');
const postcss = require('postcss');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ColorThief = require('colorthief');
const cssParser = require('css');
const tinycolor = require('tinycolor2');

/**
 * WebpageToSASS - A tool that analyzes, extracts and rebuilds a webpage using a proper SASS structure
 */
class WebpageToSASS {
  constructor(url, outputDir) {
    this.url = url;
    this.outputDir = outputDir || path.join(process.cwd(), 'src');
    this.sassOutputDir = path.join(this.outputDir, 'sass');
    this.html = '';
    this.title = '';
    this.meta = [];
    this.styleSheets = [];
    this.inlineStyles = [];
    this.computedStyles = {};
    this.sections = {};
    this.colors = [];
    this.fontFamilies = [];
    this.spacing = [];
    this.breakpoints = {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    };
    this.sassStructure = {
      base: {
        '_reset.scss': '',
        '_typography.scss': '',
        '_variables.scss': '',
      },
      components: {},
      layouts: {},
      utils: {
        '_mixins.scss': '',
        '_functions.scss': '',
        '_placeholders.scss': '',
      },
      'main.scss': ''
    };
    this.htmlTemplate = '';
  }

  /**
   * Initialize the directory structure for project output
   */
  async initOutputDir() {
    console.log('Creating project directory structure...');
    
    // Create the main project directories
    await fs.ensureDir(this.outputDir);
    await fs.ensureDir(path.join(this.outputDir, 'assets', 'images'));
    await fs.ensureDir(path.join(this.outputDir, 'assets', 'fonts'));
    await fs.ensureDir(path.join(this.outputDir, 'js'));
    
    // Create SASS directory structure
    await fs.ensureDir(path.join(this.sassOutputDir, 'base'));
    await fs.ensureDir(path.join(this.sassOutputDir, 'components'));
    await fs.ensureDir(path.join(this.sassOutputDir, 'layouts'));
    await fs.ensureDir(path.join(this.sassOutputDir, 'utils'));
    
    // Create dist directory for built files
    await fs.ensureDir(path.join(process.cwd(), 'dist', 'css'));
    await fs.ensureDir(path.join(process.cwd(), 'dist', 'js'));
    await fs.ensureDir(path.join(process.cwd(), 'dist', 'assets', 'images'));
    await fs.ensureDir(path.join(process.cwd(), 'dist', 'assets', 'fonts'));
    
    console.log('Project directory structure created successfully.');
  }

  /**
   * Scrape the webpage and extract all necessary information
   */
  async scrapeWebpage() {
    console.log(`Scraping webpage: ${this.url}`);
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set viewport to capture full page
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to the page
    await page.goto(this.url, { waitUntil: 'networkidle2' });
    
    // Get the page title and meta information
    this.title = await page.title();
    this.meta = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('meta')).map(meta => {
        const attributes = {};
        Array.from(meta.attributes).forEach(attr => {
          attributes[attr.name] = attr.value;
        });
        return attributes;
      });
    });
    
    // Get the HTML content
    this.html = await page.content();
    
    // Extract all stylesheets
    this.styleSheets = await page.evaluate(() => {
      return Array.from(document.styleSheets)
        .filter(sheet => !sheet.href || sheet.href.startsWith(window.location.origin))
        .map(sheet => {
          try {
            return Array.from(sheet.cssRules)
              .map(rule => rule.cssText)
              .join('\n');
          } catch (e) {
            // CORS error, skip this stylesheet
            return '';
          }
        })
        .filter(Boolean);
    });
    
    // Extract inline styles
    this.inlineStyles = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('[style]'))
        .map(el => ({
          selector: getUniqueSelector(el),
          style: el.getAttribute('style')
        }));
      
      // Helper function to generate a unique selector for an element
      function getUniqueSelector(el) {
        if (el.id) return `#${el.id}`;
        
        let selector = el.tagName.toLowerCase();
        if (el.className) {
          selector += '.' + Array.from(el.classList).join('.');
        }
        
        return selector;
      }
    });
    
    // Get computed styles for major elements
    const majorSelectors = [
      'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'button', 
      '.header', '.nav', '.footer', '.main', '.hero',
      'header', 'nav', 'footer', 'main', 'section'
    ];
    
    for (const selector of majorSelectors) {
      const styles = await page.$$eval(selector, elements => {
        return elements.map(el => {
          const computed = window.getComputedStyle(el);
          const styles = {};
          
          // Extract important style properties
          const properties = [
            'color', 'background-color', 'font-family', 'font-size',
            'font-weight', 'line-height', 'margin', 'padding',
            'border', 'border-radius', 'display', 'flex-direction',
            'justify-content', 'align-items', 'grid-template-columns'
          ];
          
          for (const prop of properties) {
            styles[prop] = computed.getPropertyValue(prop);
          }
          
          return {
            selector,
            styles
          };
        });
      });
      
      if (styles.length > 0) {
        this.computedStyles[selector] = styles;
      }
    }
    
    // Take a screenshot for color analysis
    await page.screenshot({ path: path.join(this.outputDir, 'screenshot.png'), fullPage: true });
    
    await browser.close();
    console.log('Webpage scraped successfully.');
  }

  /**
   * Analyze the page structure and identify sections
   */
  analyzePageStructure() {
    console.log('Analyzing page structure...');
    
    const $ = cheerio.load(this.html);
    
    // Identify common page sections
    const sectionSelectors = {
      header: ['header', '.header', '.site-header', '#header'],
      nav: ['nav', '.nav', '.navigation', '.navbar', '#nav'],
      hero: ['.hero', '.banner', '.jumbotron', '.masthead', '#hero'],
      features: ['.features', '.feature-section', '.benefits', '.services'],
      about: ['.about', '.about-us', '#about'],
      testimonials: ['.testimonials', '.reviews', '.feedback', '#testimonials'],
      pricing: ['.pricing', '.plans', '.packages', '#pricing'],
      contact: ['.contact', '.contact-us', '#contact'],
      footer: ['footer', '.footer', '.site-footer', '#footer'],
    };
    
    // Extract each section
    for (const [sectionName, selectors] of Object.entries(sectionSelectors)) {
      for (const selector of selectors) {
        const elements = $(selector);
        if (elements.length > 0) {
          this.sections[sectionName] = {
            selector,
            html: elements.html(),
            classes: elements.attr('class') ? elements.attr('class').split(/\s+/) : []
          };
          break;
        }
      }
    }
    
    // If main sections weren't found by common selectors, try to identify based on structure
    if (!this.sections['header'] && $('body > *').first().length) {
      const firstElement = $('body > *').first();
      this.sections['header'] = {
        selector: this.getUniqueSelector(firstElement),
        html: firstElement.html(),
        classes: firstElement.attr('class') ? firstElement.attr('class').split(/\s+/) : []
      };
    }
    
    if (!this.sections['footer'] && $('body > *').last().length) {
      const lastElement = $('body > *').last();
      this.sections['footer'] = {
        selector: this.getUniqueSelector(lastElement),
        html: lastElement.html(),
        classes: lastElement.attr('class') ? lastElement.attr('class').split(/\s+/) : []
      };
    }
    
    // Find other sections based on semantic tags or major divs
    $('body > section, body > div.section, body > div[class*="section"], body > div[class*="container"]').each((i, el) => {
      const element = $(el);
      const classes = element.attr('class') ? element.attr('class').split(/\s+/) : [];
      const id = element.attr('id');
      
      // Try to determine section type from class or id
      let sectionName = 'unknown-section-' + i;
      
      if (id) {
        for (const [name, selectors] of Object.entries(sectionSelectors)) {
          if (selectors.includes('#' + id) || id.includes(name)) {
            sectionName = name;
            break;
          }
        }
      }
      
      if (sectionName.startsWith('unknown') && classes.length > 0) {
        for (const className of classes) {
          for (const [name, _] of Object.entries(sectionSelectors)) {
            if (className.includes(name)) {
              sectionName = name;
              break;
            }
          }
          if (!sectionName.startsWith('unknown')) break;
        }
      }
      
      // Don't overwrite already identified sections
      if (!this.sections[sectionName]) {
        this.sections[sectionName] = {
          selector: this.getUniqueSelector(element),
          html: element.html(),
          classes
        };
      }
    });
    
    console.log(`Found ${Object.keys(this.sections).length} sections:`, Object.keys(this.sections).join(', '));
  }
  
  /**
   * Generate a unique selector for an element
   */
  getUniqueSelector(el) {
    const $ = cheerio;
    if (el.attr('id')) return '#' + el.attr('id');
    
    let selector = el.prop('tagName').toLowerCase();
    if (el.attr('class')) {
      selector += '.' + el.attr('class').replace(/\s+/g, '.');
    }
    
    return selector;
  }

  /**
   * Extract and analyze colors from the page
   */
  async extractColors() {
    console.log('Extracting color scheme...');
    
    try {
      const screenshotPath = path.join(this.outputDir, 'screenshot.png');
      const colorThief = new ColorThief();
      
      // Extract a color palette
      const palette = await colorThief.getPalette(screenshotPath, 10);
      
      // Convert RGB arrays to hex colors
      this.colors = palette.map(color => {
        const [r, g, b] = color;
        return tinycolor({ r, g, b }).toHexString();
      });
      
      // Also extract colors from CSS
      const cssColors = new Set();
      const colorRegex = /#([0-9a-f]{3,8})\b|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[0-9.]+\s*\)|hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)|hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[0-9.]+\s*\)/gi;
      
      for (const styleSheet of this.styleSheets) {
        const matches = styleSheet.match(colorRegex) || [];
        matches.forEach(color => cssColors.add(color));
      }
      
      // Add CSS colors to the palette
      cssColors.forEach(color => {
        const parsed = tinycolor(color);
        if (parsed.isValid()) {
          this.colors.push(parsed.toHexString());
        }
      });
      
      // Remove duplicates and sort by hue
      this.colors = [...new Set(this.colors)].sort((a, b) => {
        return tinycolor(a).toHsv().h - tinycolor(b).toHsv().h;
      });
      
      // Categorize colors
      const colorCategories = {
        primary: [],
        secondary: [],
        neutral: [],
        accent: []
      };
      
      this.colors.forEach(color => {
        const tc = tinycolor(color);
        const hsv = tc.toHsv();
        
        if (tc.isLight() && hsv.s < 0.15) {
          colorCategories.neutral.push(color);
        } else if (hsv.s > 0.7) {
          if (colorCategories.primary.length < 2) {
            colorCategories.primary.push(color);
          } else if (colorCategories.secondary.length < 2) {
            colorCategories.secondary.push(color);
          } else {
            colorCategories.accent.push(color);
          }
        } else {
          if (colorCategories.secondary.length < 3) {
            colorCategories.secondary.push(color);
          } else {
            colorCategories.accent.push(color);
          }
        }
      });
      
      // Keep the top colors by category
      this.colorCategories = {
        primary: colorCategories.primary[0] || '#3498db',
        secondary: colorCategories.secondary[0] || '#2ecc71',
        accent: colorCategories.accent[0] || '#e74c3c',
        dark: colorCategories.neutral.find(c => tinycolor(c).isDark()) || '#333333',
        light: colorCategories.neutral.find(c => tinycolor(c).isLight()) || '#f5f5f5',
        gray: colorCategories.neutral.find(c => {
          const tc = tinycolor(c);
          return !tc.isLight() && !tc.isDark();
        }) || '#999999'
      };
      
      console.log('Color extraction complete.');
    } catch (error) {
      console.error('Error extracting colors:', error);
      // Use fallback colors
      this.colorCategories = {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        dark: '#333333',
        light: '#f5f5f5',
        gray: '#999999'
      };
    }
  }

  /**
   * Extract and analyze typography from the page
   */
  extractTypography() {
    console.log('Extracting typography...');
    
    const fontFamilies = new Set();
    const fontSizes = new Set();
    const lineHeights = new Set();
    const fontWeights = new Set();
    
    // Extract from computed styles
    for (const selector in this.computedStyles) {
      this.computedStyles[selector].forEach(item => {
        if (item.styles['font-family']) fontFamilies.add(item.styles['font-family']);
        if (item.styles['font-size']) fontSizes.add(item.styles['font-size']);
        if (item.styles['line-height']) lineHeights.add(item.styles['line-height']);
        if (item.styles['font-weight']) fontWeights.add(item.styles['font-weight']);
      });
    }
    
    // Extract from stylesheets
    const fontFamilyRegex = /font-family:\s*([^;}]+)/g;
    const fontSizeRegex = /font-size:\s*([^;}]+)/g;
    const lineHeightRegex = /line-height:\s*([^;}]+)/g;
    const fontWeightRegex = /font-weight:\s*([^;}]+)/g;
    
    for (const styleSheet of this.styleSheets) {
      let match;
      
      while ((match = fontFamilyRegex.exec(styleSheet)) !== null) {
        if (match[1]) fontFamilies.add(match[1].trim());
      }
      
      while ((match = fontSizeRegex.exec(styleSheet)) !== null) {
        if (match[1]) fontSizes.add(match[1].trim());
      }
      
      while ((match = lineHeightRegex.exec(styleSheet)) !== null) {
        if (match[1]) lineHeights.add(match[1].trim());
      }
      
      while ((match = fontWeightRegex.exec(styleSheet)) !== null) {
        if (match[1]) fontWeights.add(match[1].trim());
      }
    }
    
    // Clean and normalize font families
    this.typography = {
      fontFamilies: Array.from(fontFamilies).map(family => {
        return family.replace(/["']/g, '').split(',')[0].trim();
      }),
      fontSizes: Array.from(fontSizes).sort((a, b) => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA - numB;
      }),
      lineHeights: Array.from(lineHeights),
      fontWeights: Array.from(fontWeights).sort((a, b) => {
        const numA = parseInt(a, 10);
        const numB = parseInt(b, 10);
        return numA - numB;
      })
    };
    
    // Simplify to primary and fallback fonts
    this.typography.primaryFont = this.typography.fontFamilies[0] || 'sans-serif';
    this.typography.headingFont = this.typography.fontFamilies.length > 1 
      ? this.typography.fontFamilies[1] 
      : this.typography.primaryFont;
    
    console.log('Typography extraction complete.');
  }

  /**
   * Extract spacing values (margins, paddings) used in the design
   */
  extractSpacing() {
    console.log('Extracting spacing values...');
    
    const spacingValues = new Set();
    const spacingPropsRegex = /(margin|padding)(-\w+)?:\s*([^;}]+)/g;
    
    // Extract from stylesheets
    for (const styleSheet of this.styleSheets) {
      let match;
      
      while ((match = spacingPropsRegex.exec(styleSheet)) !== null) {
        if (!match[3]) continue;
        
        // Split space-separated values and process each
        const values = match[3].trim().split(/\s+/);
        for (const value of values) {
          // Only include px, rem, em values
          if (/^[0-9]+(\.[0-9]+)?(px|rem|em)$/.test(value)) {
            spacingValues.add(value);
          }
        }
      }
    }
    
    // Sort and normalize spacing values
    const pxValues = [];
    const remValues = [];
    const emValues = [];
    
    spacingValues.forEach(value => {
      if (value.endsWith('px')) {
        pxValues.push(value);
      } else if (value.endsWith('rem')) {
        remValues.push(value);
      } else if (value.endsWith('em')) {
        emValues.push(value);
      }
    });
    
    // Sort by numeric value
    const sortByNumeric = (a, b) => {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      return numA - numB;
    };
    
    this.spacing = {
      px: pxValues.sort(sortByNumeric),
      rem: remValues.sort(sortByNumeric),
      em: emValues.sort(sortByNumeric)
    };
    
    // Create spacing scale
    this.spacingScale = this.createSpacingScale();
    
    console.log('Spacing extraction complete.');
  }
  
  /**
   * Create a standardized spacing scale based on extracted values
   */
  createSpacingScale() {
    const scale = {};
    
    // Use rem values if available, otherwise convert from px
    const values = this.spacing.rem.length > 0 
      ? this.spacing.rem 
      : this.spacing.px.map(px => {
          const value = parseFloat(px) / 16;
          return `${value}rem`;
        });
    
    // Create a scale with common naming
    const baseValues = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16];
    
    baseValues.forEach((baseValue, index) => {
      scale[index] = `${baseValue}rem`;
    });
    
    return scale;
  }

  /**
   * Extract media queries and identify breakpoints
   */
  extractBreakpoints() {
    console.log('Extracting breakpoints...');
    
    const mediaQueries = new Set();
    const mediaQueryRegex = /@media\s*([^{]+)/g;
    
    // Extract from stylesheets
    for (const styleSheet of this.styleSheets) {
      let match;
      
      while ((match = mediaQueryRegex.exec(styleSheet)) !== null) {
        if (match[1]) mediaQueries.add(match[1].trim());
      }
    }
    
    // Analyze media queries to find width-based breakpoints
    const widthBreakpoints = new Set();
    const minWidthRegex = /min-width:\s*([^)]+)/;
    const maxWidthRegex = /max-width:\s*([^)]+)/;
    
    mediaQueries.forEach(query => {
      let match;
      
      if ((match = minWidthRegex.exec(query)) !== null) {
        if (match[1]) widthBreakpoints.add(match[1].trim());
      }
      
      if ((match = maxWidthRegex.exec(query)) !== null) {
        if (match[1]) widthBreakpoints.add(match[1].trim());
      }
    });
    
    // Process and sort breakpoints
    const breakpoints = Array.from(widthBreakpoints)
      .map(bp => {
        return {
          value: bp,
          px: parseInt(bp, 10)
        };
      })
      .filter(bp => !isNaN(bp.px))
      .sort((a, b) => a.px - b.px);
    
    // Map to standard breakpoint names
    if (breakpoints.length > 0) {
      // Override default breakpoints if we found at least 3 in the CSS
      if (breakpoints.length >= 3) {
        const breakpointNames = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
        breakpoints.slice(0, 6).forEach((bp, index) => {
          this.breakpoints[breakpointNames[index]] = bp.value;
        });
      } else {
        // Just add the found breakpoints to our standard ones
        breakpoints.forEach(bp => {
          const closestName = this.findClosestBreakpointName(bp.px);
          this.breakpoints[closestName] = bp.value;
        });
      }
    }
    
    console.log('Breakpoint extraction complete.');
  }
  
  /**
   * Find the closest standard breakpoint name for a given pixel value
   */
  findClosestBreakpointName(px) {
    const standardBreakpoints = {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
    
    let closestName = 'custom';
    let minDiff = Infinity;
    
    for (const [name, value] of Object.entries(standardBreakpoints)) {
      const diff = Math.abs(px - value);
      if (diff < minDiff) {
        minDiff = diff;
        closestName = name;
      }
    }
    
    return closestName;
  }

  /**
   * Create reset styles
   */
  createResetStyles() {
    console.log('Creating reset styles...');
    
    const reset = `// Reset Styles - Based on modern-normalize
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-primary;
  font-size: $font-size-base;
  line-height: 1.5;
  color: $color-dark;
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-headings;
  margin-top: 0;
  margin-bottom: $spacing-4;
  font-weight: $font-weight-bold;
  line-height: 1.2;
}

p {
  margin-top: 0;
  margin-bottom: $spacing-4;
}

a {
  color: $color-primary;
  text-decoration: none;
  
  &:hover {
    color: darken($color-primary, 15%);
    text-decoration: underline;
  }
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

ul, ol {
  margin-top: 0;
  margin-bottom: $spacing-4;
  padding-left: $spacing-5;
}

// Tables
table {
  width: 100%;
  border-collapse: collapse;
}
`;

    this.sassStructure.base['_reset.scss'] = reset;
    console.log('Reset styles created.');
  }

  /**
   * Create typography styles
   */
  createTypographyStyles() {
    console.log('Creating typography styles...');
    
    const typography = `// Typography Styles
h1 {
  font-size: $font-size-xxl;
}

h2 {
  font-size: $font-size-xl;
}

h3 {
  font-size: $font-size-lg;
}

h4 {
  font-size: $font-size-base;
  font-weight: $font-weight-bold;
}

h5 {
  font-size: $font-size-sm;
  font-weight: $font-weight-bold;
}

h6 {
  font-size: $font-size-xs;
  font-weight: $font-weight-bold;
}

.lead {
  font-size: $font-size-lg;
  font-weight: $font-weight-light;
}

.text-small {
  font-size: $font-size-sm;
}

.text-large {
  font-size: $font-size-lg;
}

.text-primary {
  color: $color-primary;
}

.text-secondary {
  color: $color-secondary;
}

.text-accent {
  color: $color-accent;
}

.text-muted {
  color: $color-gray;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.font-weight-light {
  font-weight: $font-weight-light;
}

.font-weight-normal {
  font-weight: $font-weight-normal;
}

.font-weight-medium {
  font-weight: $font-weight-medium;
}

.font-weight-bold {
  font-weight: $font-weight-bold;
}
`;

    this.sassStructure.base['_typography.scss'] = typography;
    console.log('Typography styles created.');
  }

  /**
   * Create SASS variables from extracted design tokens
   */
  createSassVariables() {
    console.log('Creating SASS variables...');
    
    let variables = '// Color Variables\n';
    
    // Color variables
    for (const [name, color] of Object.entries(this.colorCategories)) {
      variables += `$color-${name}: ${color};\n`;
      
      // Add lighter and darker variants for primary and secondary colors
      if (name === 'primary' || name === 'secondary') {
        const tc = tinycolor(color);
        variables += `$color-${name}-light: ${tc.lighten(15).toHexString()};\n`;
        variables += `$color-${name}-dark: ${tc.darken(15).toHexString()};\n`;
      }
    }
    
    variables += '\n// Typography Variables\n';
    variables += `$font-primary: ${this.typography.primaryFont}, sans-serif;\n`;
    variables += `$font-headings: ${this.typography.headingFont}, sans-serif;\n`;
    
    variables += '\n// Font Size Variables\n';
    if (this.typography.fontSizes.length > 0) {
      const sortedSizes = [...this.typography.fontSizes].sort((a, b) => {
        return parseFloat(a) - parseFloat(b);
      });
      
      variables += `$font-size-xs: ${sortedSizes[0] || '0.75rem'};\n`;
      variables += `$font-size-sm: ${sortedSizes[Math.floor(sortedSizes.length * 0.2)] || '0.875rem'};\n`;
