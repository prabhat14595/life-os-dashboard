# Life OS Dashboard - Copilot Instructions

**Project**: Premium personal dashboard for daily productivity, finance tracking, and habit formation.

**Current Branch**: develop | **Default Branch**: main

**Tech Stack**: React 19, Vite 6, Tailwind CSS 3, Lucide React, Framer Motion, date-fns

---

## 📁 Project Structure

```
life-os-dashboard/
├── src/
│   ├── components/              # React components for each feature module
│   │   ├── Dashboard.jsx        # Main layout container
│   │   ├── AppHeader.jsx        # App header
│   │   ├── AppFooter.jsx        # App footer
│   │   ├── Tasks.jsx            # Task management module
│   │   ├── Finance.jsx          # Expense tracking module (INR support)
│   │   ├── Habits.jsx           # Habit tracking with streaks
│   │   ├── Notes.jsx            # Brain dump notes module
│   │   ├── MoodTracker.jsx      # Daily mood logging with history
│   │   ├── FocusTimer.jsx       # Pomodoro-style timer
│   │   ├── DailyFocus.jsx       # Daily goal/focus setting
│   │   ├── QuickLinks.jsx       # Bookmarked links
│   │   └── QuickActions.jsx     # Floating action menu (FAB)
│   ├── hooks/
│   │   └── useLocalStorage.js   # Custom hook for localStorage persistent state
│   ├── assets/                  # Images, icons, static files
│   ├── constants.js             # INITIAL_DATA & app-wide constants
│   ├── index.css                # Global styles & Tailwind directives
│   ├── main.jsx                 # React entry point
│   └── App.jsx                  # Root component & state management
├── public/                      # Static public assets
├── .github/
│   └── copilot-instructions.md  # This file
├── index.html                   # HTML entry point
├── vite.config.js               # Vite build config
├── tailwind.config.js           # Tailwind CSS theme customization
├── postcss.config.js            # PostCSS pipeline config
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & npm scripts
├── package-lock.json            # Locked dependency versions
└── README.md                    # User-facing documentation
```

---

## 🎯 Features & Storage

| Feature | Component | localStorage Key | Purpose |
|---------|-----------|------------------|---------|
| **Tasks** | Tasks.jsx | `life-os-tasks` | Create, track, complete tasks with priorities |
| **Finance** | Finance.jsx | `life-os-finance` | Log expenses in INR (₹), track spending |
| **Habits** | Habits.jsx | `life-os-habits` | Build habits with streak tracking |
| **Notes** | Notes.jsx | `life-os-notes` | Quick brain dump for ideas/thoughts |
| **Mood Tracker** | MoodTracker.jsx | `life-os-moods` | Daily mood logging, emotional patterns |
| **Focus Timer** | FocusTimer.jsx | In-memory | Pomodoro-style focus sessions |
| **Daily Focus** | DailyFocus.jsx | `life-os-focus` | Set primary daily goal/objective |
| **Quick Links** | QuickLinks.jsx | `life-os-links` | Bookmark frequently visited websites |
| **Username** | App.jsx | `life-os-username` | User's name for personalization |

---

## 💾 State Management Architecture

**Pattern**: Props-based state using localStorage persistence

**Key Implementation**:
- **Root state container**: `App.jsx` manages all app state
- **Persistent hook**: `useLocalStorage` hook syncs state with browser localStorage
- **Data initialization**: `INITIAL_DATA` object in `constants.js` provides default structures
- **State propagation**: State passed to components via props; child components call parent setState functions
- **No Context/Redux**: Simple prop drilling sufficient for current architecture

**Example from App.jsx**:
```javascript
const [tasks, setTasks] = useLocalStorage('life-os-tasks', INITIAL_DATA.tasks);
const [finance, setFinance] = useLocalStorage('life-os-finance', INITIAL_DATA.expenses);
const [habits, setHabits] = useLocalStorage('life-os-habits', INITIAL_DATA.habits);
// ... pass to components
<Tasks tasks={tasks} setTasks={setTasks} username={username} />
```

---

## 🔧 Development Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Create production build in dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
```

---

## 🎨 Code Style & Conventions

### File Naming
- **Components**: PascalCase (e.g., `Tasks.jsx`, `MoodTracker.jsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useLocalStorage.js`)
- **Constants**: UPPER_CASE (e.g., `INITIAL_DATA`)
- **Utils/helpers**: camelCase (e.g., `formatDate.js`)

### Component Structure Template
```javascript
import React from 'react';
import { IconName } from 'lucide-react';

export default function ComponentName({ data, onUpdate, username }) {
  // State and handlers
  const handleAction = () => {
    onUpdate(newData);
  };

  // Render
  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      {/* JSX using Tailwind classes */}
    </div>
  );
}
```

### Import Order
1. React imports
2. Third-party libraries (lucide-react, framer-motion, date-fns)
3. Local components/hooks/utilities
4. CSS/assets (if needed)

### Styling Rules
- **Use**: Tailwind CSS utility classes exclusively
- **Avoid**: Inline styles, external CSS files (except index.css)
- **Exceptions**: Framer Motion for animations only
- **Responsive**: Mobile-first; use `sm:`, `md:`, `lg:` breakpoints
- **Icons**: lucide-react; consistent sizing (16, 20, 24px)

### Type Safety
- No TypeScript currently used
- Use JSDoc comments for complex function signatures if needed
- Props validation not enforced (future: add PropTypes or migrate to TS)

---

## 📦 Key Dependencies

### Core
- **React 19** (^19.2.4) - UI framework, ES modules
- **Vite 6** (^6.4.1) - Build tool & dev server
- **Tailwind CSS 3** (^3.4.19) - Utility-first CSS

### UI & Animation
- **Lucide React** (^0.577.0) - Icon library
- **Framer Motion** (^12.38.0) - Animation library
- **clsx** (^2.1.1) - Conditional className helper
- **tailwind-merge** (^3.5.0) - Merge Tailwind classes intelligently

### Utilities
- **date-fns** (^4.1.0) - Date manipulation & formatting

### DevDependencies
- **ESLint** (^9.39.4) - Code quality linting
- **@vitejs/plugin-react** - React Fast Refresh for Vite
- **Tailwind CSS, PostCSS, Autoprefixer** - CSS processing

---

## ✨ Best Practices

### Adding a New Feature
1. **Create component file**: `src/components/NewFeature.jsx`
2. **Define shape**: Add initial data structure to `constants.js` → `INITIAL_DATA`
3. **Add to App.jsx**: Create useState with `useLocalStorage`, pass to component
4. **Implement component**: Use Tailwind + Lucide for UI
5. **Add quick action**: Reference in `QuickActions.jsx` if needed
6. **Update Dashboard.jsx**: Include component in layout
7. **Test responsive design**: Mobile, tablet, desktop viewports
8. **Run lint**: `npm run lint` before committing

### Component Best Practices
- **Single responsibility**: Each component handles one feature
- **Prop drilling**: Acceptable for current scale; consider Context API if grows
- **localStorage keys**: Always follow `life-os-<feature>` naming convention
- **Default values**: Always provide sensible defaults via `INITIAL_DATA`
- **Event handlers**: Prefix with `handle` (e.g., `handleAddTask`, `handleDeleteHabit`)

### Performance
- Use `React.memo()` for components that receive complex props
- `Framer Motion`: Test animations on mobile (avoid heavy effects)
- localStorage: Monitor total size; use data cleanup for old entries
- Lazy load components via `React.lazy()` if bundle exceeds 500KB

### Tailwind Customization
- Theme extensions in `tailwind.config.js`
- Global styles in `src/index.css` using `@layer` directive
- Color palette: Check config for custom colors before hardcoding
- Spacing: Use Tailwind spacing scale (4px increments)

---

## 🧪 Testing & Quality

- **Linter**: `npm run lint` (ESLint with React plugins)
- **Manual testing**:
  - Dev server: `npm run dev`
  - Responsive design: Browser DevTools → Device Toolbar
  - localStorage persistence: DevTools → Application → Local Storage
  - Performance: Lighthouse tab in DevTools
- **Before commit**:
  - No ESLint errors/warnings
  - All features work at mobile/tablet/desktop sizes
  - localStorage properly persists data
  - No console errors

---

## 📝 localStorage & Data Persistence

- **Hook**: `useLocalStorage` in `src/hooks/useLocalStorage.js` handles persistence
- **Format**: JSON serialized to localStorage
- **Initialization**: Fallback to `INITIAL_DATA` if key missing or localStorage empty
- **Clearing data**: Manual via browser DevTools or implement "Reset" feature
- **Version management**: If schema changes, add version suffix (e.g., `life-os-tasks-v2`)

---

## 🚀 Workflow Tips

1. **Component isolation**: Test each component independently in browser
2. **DevTools inspection**: React tab in DevTools for state/props debugging
3. **localStorage debugging**: Application tab → Local Storage → check `life-os-*` keys
4. **HMR**: Vite's Hot Module Replacement auto-refreshes on save
5. **Build preview**: `npm run preview` to test production build locally

---

## 🔗 Quick References

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev
- **React**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/
- **date-fns**: https://date-fns.org
- **Vite**: https://vitejs.dev

---

## 📋 Component Inventory

| Component | Purpose | Uses Props | Uses State |
|-----------|---------|-----------|-----------|
| Dashboard | Main layout | Yes (all data) | No |
| AppHeader | Header UI | Yes (username) | No |
| AppFooter | Footer UI | No | No |
| Tasks | Task management | tasks, setTasks, username | No |
| Finance | Expense tracking | finance, setFinance | No |
| Habits | Habit tracking | habits, setHabits | No |
| Notes | Brain dump | notes, setNotes | No |
| MoodTracker | Mood history | moodHistory, setMoodHistory | No |
| FocusTimer | Pomodoro timer | N/A | Yes (timer state) |
| DailyFocus | Goal setting | dailyFocus, setDailyFocus | No |
| QuickLinks | Link management | links, setLinks | No |
| QuickActions | FAB menu | All setters | Yes (menu open) |

---

## 🎯 Development Priorities

- **Phase 1** (Current): Core features (Tasks, Finance, Habits, Notes)
- **Phase 2**: Extended features (Mood, Focus, Daily Focus, Links)
- **Phase 3**: Potential - Export data, themes, cloud sync
- **Performance**: Monitor bundle size; lazy-load if > 1MB
- **Accessibility**: Ensure keyboard navigation and ARIA labels

---

## 📞 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Data not persisting | Check localStorage keys in DevTools Application tab |
| Components not updating | Verify setState function passed as prop |
| Styling not applied | Check Tailwind compilation; run `npm run dev` fresh |
| Build errors | Run `npm run lint` and fix issues; check for syntax errors |
| Icons not showing | Verify lucide-react import; check icon name spelling |

