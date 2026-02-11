import { create } from 'zustand';

interface LocatorState {
    selectedRegionId: number | null;
    currentPage: number; // Índice base 0
    itemsPerPage: number;
    actions: {
        setRegion: (id: number) => void;
        nextPage: () => void;
        prevPage: () => void;
    };
}
export const useLocatorStore = create<LocatorState>((set) => ({
    selectedRegionId: null,
    currentPage: 0,
    itemsPerPage: 3,
    actions: {
        setRegion: (id) => set({ selectedRegionId: id, currentPage: 0 }), // Reset al cambiar región
        nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
        prevPage: () => set((state) => ({ currentPage: Math.max(0, state.currentPage - 1) })),
    },
}));

// Selectores para evitar re-renders innecesarios
export const useSelectedRegionId = () => useLocatorStore((s) => s.selectedRegionId);
export const useLocatorActions = () => useLocatorStore((s) => s.actions);