/**
 * Development server script for the SASS project
 * This script compiles SASS, watches for changes, and serves the site
 */
const sass = require('sass');
const fs = require('fs-extra');
const path = require('path');
const browserSync = require('browser-sync').create();
const chokidar = require('chokidar');

// Configuration
const config = {
  sassInput: path.join(process.cwd(), 'src/sass/main.scss'),
  cssOutput: path.join(process.cwd(), 'dist/css/styles.css'),
  htmlInput: path.join(process.cwd(), 'src/index.html'),
  htmlOutput: path.join(process.cwd(), 'dist/index.html'),
  jsInput: path.join(process.cwd(), 'src/js/main.js'),
  jsOutput: path.join(process.cwd(), 'dist/js/main.js'),
  assetsInput: path.join(process.cwd(), 'src/assets'),
  assetsOutput: path.join(process.cwd(), 'dist/assets')
};

// Ensure output directories exist
fs.ensureDirSync(path.dirname(config.cssOutput));
fs.ensureDirSync(path.dirname(config.htmlOutput));
fs.ensureDirSync(path.dirname(config.jsOutput));
fs.ensureDirSync(config.assetsOutput);

/**
 * Compile SASS to CSS
 */
function compileSass() {
  try {
    console.log('Compiling SASS...');
    
    const result = sass.compile(config.sassInput, {
      style: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
      sourceMap: process.env.NODE_ENV !== 'production'
    });
    
    fs.writeFileSync(config.cssOutput, result.css);
    
    if (result.sourceMap) {
      fs.writeFileSync(`${config.cssOutput}.map`, JSON.stringify(result.sourceMap));
    }
    
    console.log('SASS compilation complete!');
    browserSync.reload('*.css');
  } catch (error) {
    console.error('SASS compilation error:', error.message);
  }
}

/**
 * Copy HTML files
 */
function copyHtml() {
  try {
    console.log('Copying HTML files...');
    fs.copySync(config.htmlInput, config.htmlOutput);
    console.log('HTML files copied!');
    browserSync.reload();
  } catch (error) {
    console.error('Error copying HTML:', error.message);
  }
}

/**
 * Copy JavaScript files
 */
function copyJs() {
  try {
    console.log('Copying JavaScript files...');
    fs.copySync(config.jsInput, config.jsOutput);
    console.log('JavaScript files copied!');
    browserSync.reload('*.js');
  } catch (error) {
    console.error('Error copying JavaScript:', error.message);
  }
}

/**
 * Copy asset files (images, fonts, etc.)
 */
function copyAssets() {
  try {
    console.log('Copying assets...');
    fs.copySync(config.assetsInput, config.assetsOutput, { 
      overwrite: true,
      filter: src => {
        // Skip .DS_Store and other system files
        return !path.basename(src).startsWith('.');
      }
    });
    console.log('Assets copied!');
    browserSync.reload();
  } catch (error) {
    console.error('Error copying assets:', error.message);
  }
}

/**
 * Build the entire project
 */
function buildProject() {
  compileSass();
  copyHtml();
  copyJs();
  copyAssets();
  console.log('Build complete!');
}

/**
 * Start the development server
 */
function startDevServer() {
  // Initial build
  buildProject();
  
  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: path.join(process.cwd(), 'dist')
    },
    port: 3000,
    open: true,
    notify: false
  });
  
  // Watch for changes
  const watchOptions = {
    ignoreInitial: true,
    awaitWriteFinish: true
  };
  
  // Watch SASS files
  chokidar.watch('src/sass/**/*.scss', watchOptions)
    .on('add', compileSass)
    .on('change', compileSass);
    
  // Watch HTML files
  chokidar.watch('src/**/*.html', watchOptions)
    .on('add', copyHtml)
    .on('change', copyHtml);
    
  // Watch JS files
  chokidar.watch('src/js/**/*.js', watchOptions)
    .on('add', copyJs)
    .on('change', copyJs);
    
  // Watch asset files
  chokidar.watch('src/assets/**/*', watchOptions)
    .on('add', copyAssets)
    .on('change', copyAssets);
    
  console.log('Development server started at http://localhost:3000');
  console.log('Watching for changes...');
}

/**
 * Build for production
 */
function buildForProduction() {
  process.env.NODE_ENV = 'production';
  buildProject();
}

// Determine what to do based on command line arguments
const args = process.argv.slice(2);
if (args.includes('--build') || args.includes('-b')) {
  buildForProduction();
} else {
  startDevServer();
}
