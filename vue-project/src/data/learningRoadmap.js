export const roadmap = [
  {
    id: 'html',
    title: 'HTML',
    level: 'Start',
    color: '#ff7a59',
    xp: 420,
    progress: 86,
    icon: 'html',
    skills: ['Структура страницы', 'Семантика', 'Формы'],
    mission: 'Собери профиль ученика из 6 HTML-тегов.'
  },
  {
    id: 'css',
    title: 'CSS',
    level: 'Style',
    color: '#3abff8',
    xp: 380,
    progress: 64,
    icon: 'css',
    skills: ['Flexbox', 'Grid', 'Анимации'],
    mission: 'Оживи карточку курса hover-эффектом.'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    level: 'Logic',
    color: '#ffcc66',
    xp: 620,
    progress: 48,
    icon: 'javascript',
    skills: ['Переменные', 'Функции', 'Массивы', 'DOM'],
    mission: 'Напиши функцию, которая считает XP за урок.'
  },
  {
    id: 'vue',
    title: 'Vue',
    level: 'Apps',
    color: '#37f0b3',
    xp: 530,
    progress: 34,
    icon: 'view_quilt',
    skills: ['Компоненты', 'Props', 'Pinia', 'Router'],
    mission: 'Создай компонент ежедневной миссии.'
  },
  {
    id: 'apis',
    title: 'APIs',
    level: 'World',
    color: '#8b5cf6',
    xp: 460,
    progress: 22,
    icon: 'api',
    skills: ['Fetch', 'JSON', 'Ошибки', 'Auth'],
    mission: 'Подключи погоду к мини-приложению.'
  },
  {
    id: 'git',
    title: 'Git',
    level: 'Team',
    color: '#ff6b8a',
    xp: 330,
    progress: 18,
    icon: 'commit',
    skills: ['Commit', 'Branch', 'Pull Request'],
    mission: 'Сделай первый осмысленный commit.'
  },
  {
    id: 'ai',
    title: 'AI Basics',
    level: 'Future',
    color: '#5b7cff',
    xp: 760,
    progress: 12,
    icon: 'psychology',
    skills: ['Промпты', 'Классификация', 'Debug AI'],
    mission: 'Объясни коду, чего ты хочешь, и улучши ответ.'
  }
];


export const lessons = [
  {
    id: 'variables-lab',
    title: 'Переменные без страха',
    track: 'JavaScript',
    duration: '12 мин',
    difficulty: 'Новичок',
    format: 'Теория + live coding',
    summary: 'Ученик видит, как память компьютера превращается в понятные коробочки с именами.',
    code: "const name = 'Amina';\nconst xp = 120;\nconsole.log(`${name} получила ${xp} XP`);"
  },
  {
    id: 'vue-card',
    title: 'Первый Vue компонент',
    track: 'Vue',
    duration: '18 мин',
    difficulty: 'Новичок',
    format: 'Видео + практика',
    summary: 'Собираем карточку достижения и сразу видим preview.',
    code: "<AchievementCard title=\"Первый компонент\" :xp=\"50\" />"
  },
  {
    id: 'api-weather',
    title: 'Погода из API',
    track: 'APIs',
    duration: '25 мин',
    difficulty: 'Легкий',
    format: 'Проект',
    summary: 'Показываем, как приложение разговаривает с внешним миром.',
    code: "const response = await fetch('/weather');\nconst weather = await response.json();"
  }
];

export const projects = [
  {
    id: 'todo',
    title: 'TODO App',
    stack: ['HTML', 'CSS', 'JavaScript'],
    xp: 250,
    status: 'ready',
    pitch: 'Первое приложение, которое реально помогает планировать день.'
  },
  {
    id: 'calculator',
    title: 'Smart Calculator',
    stack: ['JavaScript', 'UI'],
    xp: 320,
    status: 'guided',
    pitch: 'Калькулятор с AI-подсказками, почему формула работает.'
  },
  {
    id: 'weather',
    title: 'Weather App',
    stack: ['Vue', 'APIs'],
    xp: 480,
    status: 'locked',
    pitch: 'Настоящее API, loading states и красивый прогноз.'
  },
  {
    id: 'chatbot',
    title: 'Mini AI Chatbot',
    stack: ['Vue', 'AI'],
    xp: 720,
    status: 'boss',
    pitch: 'Финальный проект: маленький ассистент, который объясняет код.'
  }
];

export const achievements = [
  { id: 'first-run', title: 'Первый запуск', icon: 'rocket_launch', earned: true },
  { id: 'streak-3', title: '3 дня подряд', icon: 'local_fire_department', earned: true },
  { id: 'bug-hunter', title: 'Охотник за багами', icon: 'bug_report', earned: false },
  { id: 'mentor-talk', title: 'Разговор с AI', icon: 'psychology', earned: true },
  { id: 'project-ship', title: 'Ship it', icon: 'deployed_code', earned: false },
  { id: 'ml-spark', title: 'ML искра', icon: 'hub', earned: false }
];

export const dailyMissions = [
  { id: 1, title: 'Реши 2 мини-задачи', reward: 60, done: true },
  { id: 2, title: 'Попроси AI объяснить одну ошибку', reward: 40, done: false },
  { id: 3, title: 'Сделай 10 минут live coding', reward: 80, done: false }
];
