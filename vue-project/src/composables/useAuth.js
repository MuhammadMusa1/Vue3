import { ref } from 'vue';
import { auth } from '@/firebase'; // Предполагается настройка Firebase

export const useAuth = () => {
  const isAuthenticated = ref(false);

  auth.onAuthStateChanged(user => {
    isAuthenticated.value = !!user;
  });

  const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await auth.signOut();
  };

  return { isAuthenticated, login, logout };
};