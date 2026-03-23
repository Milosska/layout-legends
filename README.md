# English Excellence Landing Page

## Project installment 
1. Make sure you have the LTS version of Node.js installed on your computer. Download and install it if necessary.
2. Install the basic dependencies of the project in the terminal with the command ```npm install```
3. Start development mode by executing the command ```npm run dev```
4. Go to http://localhost:5173 in your browser. This page will automatically reload after saving the changes to the project files.

## Project structure
### HTML Partials
The project uses HTML partials to organize and modularize the code structure:

**Main Layout Components:**
- `src/partials/header.html` - Website header
- `src/partials/footer.html` - Website footer

**Reusable Components:**
- `src/partials/components/mobile-menu.html` - Mobile menu
- `src/partials/components/socials.html` - Social media links list

**Page Sections:**
- `src/partials/sections/hero.html` - Hero section
- `src/partials/sections/about.html` - About section
- `src/partials/sections/prices.html` - Our lessons section  
- `src/partials/sections/banner.html` - Power of English banner section
- `src/partials/sections/teachers.html` - Teachers section
- `src/partials/sections/application.html` - Application (form) section
- `src/partials/sections/feedback.html` - Feedback section

### CSS Partials
The project uses modular CSS architecture to organize styles:

**Main Stylesheet:**
- `src/css/styles.css` - Main CSS file that imports all other styles

**Base Styles:**
- `src/css/base/variables.css` - CSS custom properties and variables
- `src/css/base/reset.css` - CSS reset and normalize styles
- `src/css/base/base.css` - Base styles and typography

**Common Styles:**
- `src/css/common/common.css` - Shared utility classes and common styles
- `src/css/common/animations.css` - Animation definitions and keyframes

**Component Styles:**
- `src/css/components/logo.css` - Logo component styles
- `src/css/components/mobile-menu.css` - Mobile navigation menu styles
- `src/css/components/socials.css` - Social media links styles

**Section Styles:**
- `src/css/sections/header.css` - Header section styles
- `src/css/sections/hero.css` - Hero section styles
- `src/css/sections/about.css` - About section styles
- `src/css/sections/prices.css` - Our lessons section styles
- `src/css/sections/banner.css` - Power of English Banner section styles
- `src/css/sections/teachers.css` - Teachers section styles
- `src/css/sections/application.css` - Application form section styles
- `src/css/sections/feedback.css` - Feedback section styles
- `src/css/sections/footer.css` - Footer section styles

