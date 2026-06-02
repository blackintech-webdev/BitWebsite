# BitWebsite

## Prerequisites
```
- Node.js (version compatible with React 19)
- npm
- Git
```

## Project setup
```
git clone https://github.com/alyas-t/BitWebsite.git
cd BitWebsite
```

## Install dependencies
```
npm install
```

## Environment variables

The frontend reads `VITE_API_URL` (FastAPI base URL, no trailing slash).

| File | Used when |
|------|-----------|
| `.env.development` | `npm run dev` |
| `.env.production` | `npm run build` / `npm run preview` |

In components, import the shared constant instead of repeating `import.meta.env`:

```js
import { API_URL } from './constants';

fetch(`${API_URL}/events/`);
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and previews production build locally
```
npm run preview
```

## Contributors
- Alyas Thomas
- Steven Gorlicki 
- Jason Phan
