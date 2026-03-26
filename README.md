# Vishal Portfolio Project

A premium, visually stunning portfolio website showcasing design work, including Illustrations, Paintings, Set Design, and more. This project features a modern dark theme, a dynamic masonry gallery, and interactive UI elements.

## 🚀 Features

- **Premium Aesthetics**: Sleek dark mode design with glassmorphism effects.
- **Dynamic Gallery**: Masonry layout with category filtering (Illustrations, Paintings, etc.).
- **Interactive Lightbox**: Full-screen image and video viewing experience.
- **Responsive Design**: Optimized for seamless viewing on all devices.
- **Micro-Animations**: Subtle transitions for an enhanced user experience.

## 🛠️ Getting Started / How to Use and Run

### Prerequisites

- **Node.js**: Recommended for running the local development server.
- **Python**: Alternative for serving files without Node.js.

### How to Run Locally

#### 1. Using npm (Recommended)
Now that `npm` is installed, you can easily serve the frontend:
```bash
npx http-server frontend
```
Then visit `http://localhost:8080` in your browser.

#### 2. Using Python
Alternatively, run the built-in HTTP server from the root directory:
```bash
python3 -m http.server 8000
```
Then open: `http://localhost:8000/frontend/`

#### 3. VS Code Live Server
- Open the project in VS Code.
- Right-click `frontend/index.html` > **Open with Live Server**.

## 📂 Project Structure

- `frontend/` - Root directory for the web application.
  - `index.html` - Main entry point.
  - `css/` - Vanilla CSS styles.
  - `js/` - Interactive logic (app.js).
  - `assets/` - Categorized project files and assets.
- `README.md` - Project documentation.

## Challenges Faced

During the core development of the Vishal Portfolio Project, several front-end UI challenges were tackled:

1. **Masonry Layout Implementation**: CSS Grid/Flexbox alone struggles to create a perfect Pinterest-style Masonry layout without gaps if items have varying heights. Overcoming this required a mix of CSS columns and carefully structured HTML padding to ensure images flowed vertically without breaking the visual aesthetic.
2. **Glassmorphism Performance**: Implementing the sleek, frosted-glass effect using `backdrop-filter: blur()` extensively across the navigation and modal elements can occasionally cause rendering lag on lower-end devices. Optimizing CSS transitions and minimizing heavy DOM redraws was necessary to keep animations silky smooth.
3. **Interactive Lightbox Logic**: Creating a custom lightbox gallery (avoiding heavy external plugins) that handles both high-res images and video embeds smoothly, while ensuring users can intuitively click/tap to close and escape using keyboard shortcuts, required dedicated vanilla JavaScript event handling.
4. **Responsive Media Scaling**: Ensuring that large illustration files and set design photographs scaled down perfectly on mobile viewports without losing their aspect ratio or creating horizontal scrollbars.

## 📤 Updating the Project

To sync your latest changes with GitHub:

1. **Stage Changes**:
   ```bash
   git add .
   ```
2. **Commit**:
   ```bash
   git commit -m "Your descriptive commit message"
   ```
3. **Push**:
   ```bash
   git push origin main
   ```

---
*Created with care to showcase creative excellence.*
