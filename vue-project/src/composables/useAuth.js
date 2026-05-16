import { ref } from 'vue';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '@/firebase';

const authReady = ref(false);
const currentUser = ref(null);
const isAuthenticated = ref(false);

// Проверяем, инициализирован ли Firebase
if (auth && auth.app) {
  onAuthStateChanged(auth, user => {
    currentUser.value = user;
    isAuthenticated.value = Boolean(user);
    authReady.value = true;
  });
} else {
  // Если Firebase не настроен, помечаем как "готово", но не авторизовано
  authReady.value = true;
  console.warn('Firebase не настроен. Проверьте .env файл.');
}


export const useAuth = () => {
  const login = (email, password) => {
    if (!auth || !auth.app) throw new Error('Firebase не настроен');
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const register = (email, password) => {
    if (!auth || !auth.app) throw new Error('Firebase не настроен');
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const logout = () => {
    if (!auth || !auth.app) return Promise.resolve();
    return signOut(auth);
  };

  return { authReady, currentUser, isAuthenticated, login, logout, register };
};

