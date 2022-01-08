import { Character } from "./interfaces/CharacterType";
import create from "zustand";

export interface CharacterState {
    allCharacters: Character[];
    getCharacters: (value: string) => Promise<void>;
}

const useStore = create<CharacterState>((set) => ({
    allCharacters: [],
    getCharacters: async (endPoint: string) => {
        const res = await fetch(endPoint);
        set({ allCharacters: await res.json() });
    },
}));

export default useStore;
