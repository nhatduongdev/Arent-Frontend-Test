# 🏥 Health Tracker - Frontend

A modern web application to track your health, nutrition, and fitness exercises. The application provides an intuitive user interface with visual charts, progress tracking, and personal health record management.

## 📋 Table of Contents
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [System Requirements](#system-requirements)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Application Routes](#application-routes)

---

## ✨ Key Features

### 1. **Authentication & Security**
   - Login with email and password
   - Protected pages with authentication
   - User session management (Authentication Context)
   - Username/Password : admin@test.com / 123456


### 2. **Home Page**
   - 📊 Body Record Chart with statistics
   - 🎯 Progress Circle showing daily goals
   - 🍽️ Meal image display
   - 🔘 Hexagon buttons for category navigation
   - 📸 Image grid for record viewing

### 3. **Column Page**
   - Organized column data display

### 4. **Record Page**
   - View and manage your health records

### 5. **Advanced UI/UX**
   - 🎨 Responsive Design
   - ✨ Smooth animations with Framer Motion
   - 🎯 Modern design with Tailwind CSS
   - 📱 Full support for mobile, tablet, and desktop
   - ⬆️ "Back to Top" button for easy navigation

---

## 🛠️ Tech Stack

### Frontend Framework & Build Tools
| Technology | Version | Description |
|-----------|---------|--------|
| **React** | ^19.1.1 | Core UI library |
| **React DOM** | ^19.1.1 | Web rendering |
| **TypeScript** | ~5.9.3 | Programming language (type-safe) |
| **Vite** | ^7.1.7 | Build tool and dev server |
| **Tailwind CSS** | ^4.1.16 | Utility-first CSS framework |
| **@tailwindcss/vite** | ^4.1.16 | Tailwind plugin for Vite |

### State Management & Routing
| Technology | Version | Description |
|-----------|---------|--------|
| **React Router DOM** | ^7.9.5 | Application routing (SPA) |
| **React Context API** | Built-in | Authentication state management |

### UI & Visualization
| Technology | Version | Description |
|-----------|---------|--------|
| **Chart.js** | ^4.5.1 | Chart library |
| **React ChartJS 2** | ^5.3.1 | React wrapper for Chart.js |

### Utilities & Styling
| Technology | Version | Description |
|-----------|---------|--------|
| **clsx** | ^2.1.1 | Utility for building className |
| **tailwind-merge** | ^3.3.1 | Merge Tailwind classes |
| **class-variance-authority** | ^0.7.1 | Variant management |

### Development Tools
| Technology | Version | Description |
|-----------|---------|--------|
| **ESLint** | ^9.36.0 | Linting & code quality |
| **@vitejs/plugin-react** | ^5.0.4 | React plugin for Vite |
| **vite-plugin-svgr** | ^4.5.0 | Import SVG as React components |
| **TypeScript ESLint** | ^8.45.0 | Linting for TypeScript |

---

## 📦 System Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (or **yarn** 3.0+)
- **Package Manager**: npm or yarn

**Check Node.js version:**
```bash
node --version
npm --version
```

---

## 🚀 Installation & Setup

### 1. Navigate to project directory
```bash
cd c:\Project\Arent-Frontend-Test
```

### 2. Install dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Run development server
```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will open at: **http://localhost:5173** (or another specified port)

### 4. Build for production
```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

The `dist/` folder will contain the production-ready files.

### 5. Preview production build
```bash
npm run preview
```

### 6. Check code quality
```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
├── pages/                    # Main pages
│   ├── Home/                # Home page
│   │   └── HomePage.tsx
│   ├── Column/              # Column page
│   │   └── ColumnPage.tsx
│   ├── Record/              # Record page
│   │   └── RecordPage.tsx
│   └── Login/               # Login page
│       └── LoginPage.tsx
│
├── components/              # Reusable components
│   ├── layout/
│   │   ├── Header.tsx      # Header component
│   │   ├── Footer.tsx      # Footer component
│   │   └── Container.tsx   # Container wrapper
│   ├── charts/
│   │   └── BodyRecordChart.tsx  # Body statistics chart
│   ├── ui/                  # UI components
│   │   ├── ProgressCircle.tsx   # Progress circle
│   │   ├── HexagonButton.tsx    # Hexagon button
│   │   ├── ImageGrid.tsx        # Image grid
│   │   ├── DiaryList.tsx        # Diary list
│   │   ├── ExerciseList.tsx     # Exercise list
│   │   ├── RecommendList.tsx    # Recommendation list
│   │   └── BackToTopBtn.tsx     # Back to top button
│   └── ProtectedRoute.tsx   # Protected route component
│
├── contexts/                # React Context
│   └── AuthContext.tsx      # Authentication context
│
├── data/                    # Mock data / Static data
│   ├── homeData.ts         # Home page data
│   ├── bodyChartData.ts    # Body chart data
│   ├── diaryData.ts        # Diary data
│   ├── exerciseData.ts     # Exercise data
│   ├── columnData.ts       # Column data
│   ├── recordData.ts       # Record data
│   └── loginData.ts        # Login data (dummy user)
│
├── lib/                     # Utility functions
│   └── utils.ts            # Common helper functions
│
├── assets/                  # Static files
│   ├── icons/             # SVG icon components
│   └── images/            # Images (JPG, PNG, etc.)
│
├── types/                   # TypeScript type definitions
│   └── vite-env.d.ts       # Vite environment types
│
├── App.tsx                  # Main App component
├── main.tsx                 # Entry point
├── index.css                # Global styling
│
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies & scripts
```

---

## 🔐 Authentication & Login

### Demo Login Credentials:
- **Email**: user@example.com
- **Password**: password123

These credentials are stored in `src/data/loginData.ts` for development purposes.

### Authentication Flow:
1. User enters email and password
2. Credentials are verified against mock data
3. If valid, token is stored in localStorage
4. ProtectedRoute checks authentication to access other pages
5. User is redirected to home page

---

## 🎨 Design & Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach with breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Custom Colors**: Gradient from primary (orange) to secondary (pink)
- **Animations**: Smooth animations using Framer Motion

---

## 📊 Charts & Visualization

- **Chart.js**: Powerful charting library
- **Body Record Chart**: Displays body statistics data over time
- **Progress Circle**: Dynamic progress circle showing daily goals

---

## 🔄 Application Routes

```
/login              → Login page (public)
/                   → Home page (requires authentication)
/column             → Column page (requires authentication)
/record             → Record page (requires authentication)
```

---

## 📝 Available Scripts

```json
{
  "dev": "vite",              // Run dev server
  "build": "tsc -b && vite build",  // Build for production
  "lint": "eslint .",         // Check code quality
  "preview": "vite preview"   // Preview production build
}
```

---

## 🐛 Troubleshooting

### Port is already in use
```bash
# Change port in vite.config.ts
# Or run on a different port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Rebuild TypeScript
npm run build
```

### Clear cache and reinstall
```bash
rm -rf node_modules yarn.lock
npm install
```

---

## 📚 References

- [React 19 Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Chart.js](https://www.chartjs.org)
- [TypeScript](https://www.typescriptlang.org)

---

## 👨‍💻 Development

### Best Practices:
- Use TypeScript for type safety
- Split components into separate files
- Use Context API for global state management
- Follow ESLint rules

### Adding a new component:
```bash
# Create new folder in src/components
src/components/myComponent/MyComponent.tsx
```