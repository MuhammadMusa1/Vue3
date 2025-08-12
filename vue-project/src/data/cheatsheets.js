/** @typedef {{ id: string, name: string }} Category */
/** @typedef {{ id: number, categoryId: string, title: string, content: string, notes?: string[] }} Material */

/** @type {Category[]} */
export const cheatsheetCategories = [
  { id: 'math', name: 'Математика' },
  { id: 'physics', name: 'Физика' },
  { id: 'programming', name: 'Программирование' }
];

/** @type {Material[]} */
export const cheatsheetMaterials = [
  {
    id: 1,
    categoryId: 'math',
    title: 'Формулы площади',
    content: 'Площадь квадрата: S = a².\nПлощадь круга: S = πr².',
    notes: []
  },
  {
    id: 2,
    categoryId: 'physics',
    title: 'Законы Ньютона',
    content: '1. Закон инерции.\n2. F = ma.\n3. Закон действия и противодействия.',
    notes: []
  },
  {
    id: 3,
    categoryId: 'programming',
    title: 'Основы Vue.js',
    content: 'Компоненты, реактивность, роутинг.',
    notes: []
  },
  {
    id: 4,
    categoryId: 'math',
    title: 'Таблица умножения',
    content: '2x2=4, 3x3=9 и т.д.',
    notes: []
  }
];

export const loadCheatsheets = async () => {
  return { cheatsheetCategories, cheatsheetMaterials };
};