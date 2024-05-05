import { persisted } from "svelte-persisted-store";

export const name1 = persisted("name1", "Blank Name")

export const character_list = persisted("characters", [["Click to rename", 0]])