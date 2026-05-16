const beginnerGlossary = {
  const: 'const создает переменную, которую нельзя переназначить. Для новичка это как подписанная коробка.',
  let: 'let создает переменную, значение которой можно менять.',
  function: 'function описывает действие, которое можно запускать много раз.',
  ref: 'ref во Vue хранит реактивное значение: интерфейс обновится, когда значение поменяется.',
  computed: 'computed автоматически пересчитывает значение, когда меняются его зависимости.',
  props: 'props передают данные от родителя к дочернему компоненту.'
};

export const explainCode = code => {
  const lines = code.split('\n').filter(Boolean);
  if (!lines.length) {
    return 'Вставь код, и я объясню его простыми словами, строка за строкой.';
  }

  return lines
    .map((line, index) => {
      const keyword = Object.keys(beginnerGlossary).find(word => line.includes(word));
      const hint = keyword ? beginnerGlossary[keyword] : 'Эта строка выполняет часть инструкции программы.';
      return `${index + 1}. ${hint} Код: ${line.trim()}`;
    })
    .join('\n');
};

export const debugCode = code => {
  const issues = [];

  if (code.includes('v-model="model"') && !code.includes('defineModel')) {
    issues.push('v-model использует model, но model не объявлен. Во Vue 3 удобно использовать defineModel().');
  }

  if (code.includes('props.') && !code.includes('const props')) {
    issues.push('Код обращается к props, но результат defineProps не сохранен в const props.');
  }

  if (code.includes('++') && code.includes('props.')) {
    issues.push('Нельзя напрямую менять prop. Передай событие родителю или храни состояние в Pinia.');
  }

  if (code.includes('signInWithEmailAndPassword') && code.includes('auth.')) {
    issues.push('Firebase v9+ использует модульный API: signInWithEmailAndPassword(auth, email, password).');
  }

  return issues.length
    ? issues
    : ['Я не вижу критичных ошибок. Следующий шаг: проверь имена переменных и обработку edge cases.'];
};

export const generateQuiz = topic => {
  const normalizedTopic = topic || 'JavaScript';
  return [
    {
      question: `Что самое важное понять новичку в теме "${normalizedTopic}"?`,
      options: ['Синтаксис без смысла', 'Зачем это нужно в приложении', 'Только историю языка'],
      answer: 'Зачем это нужно в приложении'
    },
    {
      question: 'Что лучше сделать, если код не работает?',
      options: ['Удалить все', 'Прочитать ошибку и сузить проблему', 'Сразу переписать проект'],
      answer: 'Прочитать ошибку и сузить проблему'
    },
    {
      question: 'Как AI должен помогать новичку?',
      options: ['Давать готовый ответ всегда', 'Давать подсказки постепенно', 'Пугать терминами'],
      answer: 'Давать подсказки постепенно'
    }
  ];
};

export const nextHint = (topic, step = 0) => {
  const hints = [
    `Посмотри на задачу "${topic}" как на маленькую историю: какие данные входят и что должно выйти?`,
    'Теперь найди одну строку, которая отвечает за результат. Не трогай остальной код.',
    'Если ошибка осталась, проговори ее простыми словами. Обычно решение уже спрятано в тексте ошибки.'
  ];

  return hints[Math.min(step, hints.length - 1)];
};
