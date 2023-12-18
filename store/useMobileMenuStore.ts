import { create } from 'zustand';

export type State = {
  isMobileMenuVisible: boolean;
};

export type Action = {
  handleMobileMenuVisible: () => void;
};

export const initialState: State = {
  isMobileMenuVisible: false,
};

export const useMobileMenuStore = create<State & Action>()((set) => ({
  ...initialState,

  handleMobileMenuVisible: () =>
    set((state) => ({ isMobileMenuVisible: !state.isMobileMenuVisible })),
}));
