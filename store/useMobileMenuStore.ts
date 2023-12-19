import { create } from 'zustand';

export type State = {
  isMobileMenuVisible: boolean;
};

export type Action = {
  handleMobileMenuVisible: () => void;
  setIsMobileMenuVisible: (isMobileMenuVisible: boolean) => void;
};

export const initialState: State = {
  isMobileMenuVisible: false,
};

export const useMobileMenuStore = create<State & Action>()((set) => ({
  ...initialState,

  setIsMobileMenuVisible: (isMobileMenuVisible: boolean) =>
    set(() => ({ isMobileMenuVisible })),

  handleMobileMenuVisible: () =>
    set((state) => ({ isMobileMenuVisible: !state.isMobileMenuVisible })),
}));
