# Life OS Dashboard 🎯

A premium, minimal personal dashboard for daily productivity, finance tracking, and habit formation. Built with React, Vite, and Tailwind CSS, Life OS Dashboard helps you stay organized, focused, and mindful of your personal growth.

## ✨ Features

### 📋 Task Management
- Create, track, and complete daily tasks
- Set task priorities (high, medium, low)
- Quick task addition with real-time updates
- Visual completion tracking

### 💰 Finance Tracking
- Monitor daily expenses
- Track monthly spending
- Credit card usage insights
- Quick expense logging with Indian Rupee (₹) support

### 🎯 Habit Tracking
- Build and maintain daily habits
- Track habit streaks
- Visual habit status indicators
- Mark habits as complete to increase your streak

### 📝 Brain Dump
- Quick note-taking for ideas and thoughts
- Store all your notes in one place
- Personal knowledge repository

### 🎨 Mood Tracking
- Daily mood logging with emoji support
- Historical mood visualization
- Identify emotional patterns
- Calendar-based mood history

### ⏱️ Focus Timer
- Pomodoro-style focus sessions
- Customizable timer for deep work
- Minimal distraction design

### 🚀 Daily Focus
- Set your primary focus for the day
- Stay aligned with your daily goals
- Quick reference for your main objective

### 🔗 Quick Links
- Bookmark frequently visited websites
- One-click access to your favorite tools
- Organized link management

### 🎬 Quick Actions
- Speed-dial for adding tasks, expenses, notes, and links
- Floating action menu for rapid workflow
- Accessible from anywhere in the dashboard

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/life-os-dashboard.git
cd life-os-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🔍 Preview Production Build

```bash
npm run preview
```

## 🎨 Code Quality

Lint your code to maintain consistency:
```bash
npm run lint
```

## 📁 Project Structure

```
life-os-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.jsx    # Main dashboard layout
│   │   ├── Tasks.jsx        # Task management
│   │   ├── Finance.jsx      # Finance tracking
│   │   ├── Habits.jsx       # Habit tracking
│   │   ├── Notes.jsx        # Note-taking
│   │   ├── MoodTracker.jsx  # Mood logging
│   │   ├── FocusTimer.jsx   # Timer component
│   │   ├── DailyFocus.jsx   # Daily goal
│   │   ├── QuickLinks.jsx   # Link management
│   │   └── QuickActions.jsx # Action menu
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── constants.js         # Application constants
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── index.html               # HTML template
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library
- **date-fns** - Date manipulation utilities
- **localStorage** - Data persistence

## 💾 Data Storage

All data is stored locally in your browser's localStorage, ensuring:
- ✅ Privacy - Data never leaves your device
- ✅ Offline Access - Works without internet
- ✅ Instant Sync - Changes update immediately
- ⚠️ Single Device - Data is specific to this browser/device

> **Note:** Clearing browser cache will result in data loss. Consider backing up your data periodically.

## 🎨 Customization

### Theme Customization
Edit `tailwind.config.js` to customize colors, fonts, and other design elements:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Adding New Features
1. Create a new component in `src/components/`
2. Add state management in `App.jsx`
3. Style with Tailwind CSS classes
4. Import and integrate into the Dashboard

## 📱 Responsive Design

The dashboard is fully responsive and works great on:
- 💻 Desktop browsers
- 📱 Tablets
- 📲 Mobile phones

## 🔐 Privacy & Security

- **No Backend** - All processing happens client-side
- **No Tracking** - No analytics or user tracking
- **No Cloud Sync** - Your data stays on your device
- **Open Source** - Transparent and auditable code

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Roadmap

Future enhancements planned:
- 📊 Advanced analytics and insights
- 🔄 Data export/import functionality
- 🌙 Dark mode toggle optimization
- 📱 Progressive Web App (PWA) support
- ☁️ Optional cloud backup
- 🎵 Focus session sounds

## 💡 Tips for Best Results

1. **Start Small** - Begin with 3-5 daily habits
2. **Be Consistent** - Log your mood and tasks daily
3. **Review Weekly** - Check your progress every Sunday
4. **Use Quick Actions** - Speed-dial to add items quickly
5. **Set One Focus** - Pick your main goal for the day
6. **Track Spending** - Log expenses as they happen

## 🐛 Troubleshooting

### Data Not Saving?
- Check if localStorage is enabled in your browser
- Clear cache and reload the page
- Try a different browser

### Performance Issues?
- Clear browser cache
- Disable browser extensions
- Close unnecessary tabs

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact me directly.

---

**Built with ❤️ for personal productivity and mindfulness.**
