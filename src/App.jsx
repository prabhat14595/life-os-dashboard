import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import Tasks from './components/Tasks.jsx';
import Finance from './components/Finance.jsx';
import Habits from './components/Habits.jsx';
import Notes from './components/Notes.jsx';
import QuickActions from './components/QuickActions.jsx';
import DailyFocus from './components/DailyFocus.jsx';
import FocusTimer from './components/FocusTimer.jsx';
import MoodTracker from './components/MoodTracker.jsx';
import QuickLinks from './components/QuickLinks.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { INITIAL_DATA } from './constants.js';

function App() {
  const [username, setUsername] = useLocalStorage('life-os-username', 'Friend');
  
  const [tasks, setTasks] = useLocalStorage('life-os-tasks', INITIAL_DATA.tasks);
  const [finance, setFinance] = useLocalStorage('life-os-finance', INITIAL_DATA.expenses);
  const [habits, setHabits] = useLocalStorage('life-os-habits', INITIAL_DATA.habits);
  const [notes, setNotes] = useLocalStorage('life-os-notes', INITIAL_DATA.notes);
  
  // Phase 2 State
  const [dailyFocus, setDailyFocus] = useLocalStorage('life-os-focus', INITIAL_DATA.dailyFocus);
  const [moodHistory, setMoodHistory] = useLocalStorage('life-os-moods', INITIAL_DATA.moodHistory);
  const [links, setLinks] = useLocalStorage('life-os-links', INITIAL_DATA.links);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const addTask = () => {
    const text = prompt("What's the goal?");
    if (text) {
      setTasks([{ id: Date.now().toString(), text, completed: false, priority: 'medium' }, ...tasks]);
    }
  };

  const addExpense = () => {
    const amount = prompt("Enter amount (₹)");
    if (amount && !isNaN(amount)) {
      const val = parseInt(amount);
      setFinance({
        ...finance,
        today: finance.today + val,
        monthly: finance.monthly + val,
        creditCardUsed: finance.creditCardUsed + val
      });
    }
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(h => {
      if (h.id === id) {
        const completed = !h.completed;
        return { ...h, completed, streak: completed ? h.streak + 1 : Math.max(0, h.streak - 1) };
      }
      return h;
    }));
  };

  const selectMood = (date, emoji) => {
    const newHistory = { ...moodHistory };
    if (emoji === null) {
      delete newHistory[date];
    } else {
      newHistory[date] = emoji;
    }
    setMoodHistory(newHistory);
  };

  const addLink = () => {
    const title = prompt("Enter website name (e.g. GitHub):");
    if (!title) return;
    let url = prompt("Enter URL:");
    if (!url) return;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    setLinks([...links, { id: Date.now().toString(), title, url }]);
  };

  const deleteLink = (id) => {
    setLinks(links.filter(l => l.id !== id));
  };

  const handleQuickAction = (type) => {
    switch (type) {
      case 'task': addTask(); break;
      case 'expense': addExpense(); break;
      case 'note': alert("Start typing in the Brain Dump card!"); break;
      case 'link': addLink(); break;
      case 'habit': alert("Habits are managed in the Daily Habits card!"); break;
      default: break;
    }
  };

  return (
    <Dashboard username={username} onNameChange={setUsername}>
      {/* Top row: Daily Focus */}
      <div className="lg:col-span-3">
        <DailyFocus focus={dailyFocus} onChange={setDailyFocus} />
      </div>

      {/* Second row: Core Management */}
      <div className="lg:col-span-1 h-[400px]">
        <Tasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onAdd={addTask} />
      </div>
      <div className="lg:col-span-1 h-[400px]">
        <Finance data={finance} onAddExpense={addExpense} />
      </div>
      <div className="lg:col-span-1 h-[400px]">
        <Habits habits={habits} onToggle={toggleHabit} />
      </div>

      {/* Third row: Phase 2 Tools */}
      <div className="lg:col-span-1 h-[350px]">
        <FocusTimer />
      </div>
      <div className="lg:col-span-1 h-[350px]">
        <MoodTracker moodHistory={moodHistory} onSelectMood={selectMood} />
      </div>
      <div className="lg:col-span-1 h-[350px]">
        <QuickLinks links={links} onAddLink={addLink} onDeleteLink={deleteLink} />
      </div>

      {/* Fourth row: Notes */}
      <div className="lg:col-span-3 h-[400px]">
        <Notes notes={notes} onChange={setNotes} onClear={() => setNotes('')} />
      </div>

      <QuickActions onAction={handleQuickAction} />
    </Dashboard>
  );
}

export default App;
