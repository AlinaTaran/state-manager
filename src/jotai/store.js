import { atomWithStorage } from "jotai/utils";

export const countAtom = atomWithStorage("count", 0);
