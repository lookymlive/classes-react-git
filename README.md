# Project: Class Selector in React with Vite + TypeScript

This project is a React application built with Vite and TypeScript. It provides a dynamic class selector where users can choose different lessons or classes to view their content. The structure is scalable, allowing easy additions of new lessons or integration with other programming languages.

---

## Features

- **Dynamic Class Selector**: Users can select a class from a dropdown menu and view its corresponding content.
- **Scalable Structure**: Add new classes easily by creating new components.
- **Built with Vite**: A fast build tool for modern web development.
- **TypeScript Support**: Ensures type safety and better development experience.
- **GitHub Pages Deployment**: The project is hosted online for easy access.

---

## Project Structure

```plaintext
src/
├── clases/          # Folder for individual class components
│   ├── Clase1.tsx   # Example: Class 1
│   ├── Clase2.tsx   # Example: Class 2
│   └── index.ts     # Centralized exports of all classes
├── App.tsx          # Main file with the class selector
├── main.tsx         # Application entry point
├── styles.css       # (Optional) Global styles
```

---

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm (>= 8.x)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:5173](http://localhost:5173).

---

## Adding New Classes

1. Create a new file in `src/clases/` (e.g., `Clase3.tsx`):
   ```tsx
   import React from "react";

   const Clase3: React.FC = () => {
     return <div>Content of Class 3</div>;
   };

   export default Clase3;
   ```

2. Add the new class to `src/clases/index.ts`:
   ```typescript
   export { default as Clase3 } from "./Clase3";
   ```

3. Update the dropdown in `App.tsx`:
   ```typescript
   <option value={3}>Class 3</option>
   ```

---

## Deployment

This project uses `gh-pages` to deploy to GitHub Pages.

### Steps to Deploy

1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to `package.json`:
   ```json
   {
     "homepage": "https://your-username.github.io/project-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy the project:
   ```bash
   npm run deploy
   ```

The application will be available at `https://your-username.github.io/project-name`.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

