import { create } from 'zustand'

interface ConferenceState {
    conectedUsers: number;
    questions: number;
    setConectedUsers: (users: number) => void
    setQuestions: (questions: number) => void
}

export const useConferenceStore = create<ConferenceState>((set) => ({
  conectedUsers: 0,
  questions: 0,
  setConectedUsers: (users) => set(() => ({ conectedUsers: users })),
  setQuestions: (questions) => set(() => ({ questions: questions }))
}))
