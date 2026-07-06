import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Definimos o store com persistência para que o F5 não deslogue o usuário
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthed: false,

      // Ação para fazer login
      login: (userData, token) => set({ 
        user: userData, 
        token: token, 
        isAuthed: true 
      }),

      // Ação para logout
      logout: () => set({ 
        user: null, 
        token: null, 
        isAuthed: false, 
      }),

      // Ação para atualizar apenas os dados do usuário (ex: trocar foto)
      updateUser: (updatedData) => set((state) => ({
        user: { ...state.user, ...updatedData }
      })),
    }),
    {
      name: 'bandanet-auth', // nome da chave no LocalStorage
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
