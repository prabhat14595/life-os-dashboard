export const MOTIVATIONAL_QUOTES = [
  "Small steps lead to big results.",
  "Focus on progress, not perfection.",
  "Your only limit is you.",
  "Make today count.",
  "Discipline is choosing between what you want now and what you want most.",
];

export const INITIAL_DATA = {
  tasks: [
    { id: '1', text: 'Plan the upcoming week', completed: false, priority: 'high' },
    { id: '2', text: 'Review monthly budget', completed: false, priority: 'medium' },
    { id: '3', text: 'Drink 2L of water', completed: true, priority: 'low' },
  ],
  expenses: {
    today: 450,
    monthly: 12500,
    creditCardLimit: 50000,
    creditCardUsed: 15750,
  },
  habits: [
    { id: '1', name: 'Gym', completed: false, streak: 5 },
    { id: '2', name: 'Meditate', completed: true, streak: 12 },
    { id: '3', name: 'Reading', completed: false, streak: 3 },
  ],
  notes: "Brain dump starts here...",
  links: [
    { id: '1', title: 'GitHub', url: 'https://github.com' },
    { id: '2', title: 'Notion', url: 'https://notion.so' },
  ],
  moodHistory: {}, // format: { 'yyyy-mm-dd': '😄' }
  dailyFocus: "",
};
