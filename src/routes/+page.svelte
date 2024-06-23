<script lang="ts">
import Character from "$lib/Character.svelte";
import { character_list } from "$lib/dataStore";
import { Modal, getModalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

const modalStore = getModalStore();

let sorted_toggle = true

const modal: ModalSettings = {
	type: 'prompt',
	// Data
	title: 'Add Player',
	body: 'Write the player character name below',
	// Populates the input value and attributes
	value: '',
	valueAttr: { type: 'text', minlength: 3, maxlength: 100, required: true },
	// Returns the updated response value, if there is one (since canceling returns false)
	response: (r: string) => r ? $character_list = [...$character_list, [r,0,"player"]] : null,
};

const monster_modal: ModalSettings = {
	type: 'component',
	component: 'modalMonster'
}

function AddCharacter() {
	modalStore.trigger(modal);
}

function RemoveMonsters() {
	let new_list: any[] = []
	$character_list.forEach(element => {
		if (element[2] !== "monster") {
			new_list = [...new_list, element]
		}
	})
	$character_list = new_list
}

function AddMonsters() {
	modalStore.trigger(monster_modal)
}

function DeleteCharacter(character: string) {
	let new_list: any[] = []
	$character_list.forEach(element => {
		if (element[0] !== character) {
			new_list = [...new_list, element]
		}
	});
	$character_list = new_list
}

function SortCharacters() {
	$character_list.sort((a,b) => b[1] - a[1])
	sorted_toggle = !sorted_toggle
}


</script>

<div class="flex flex-col items-center p-4">
	{#key sorted_toggle}
	{#each $character_list as character}

		<Character bind:name={character[0]} bind:char_type={character[2]} bind:initiative={character[1]} on:delete={() => DeleteCharacter(character[0])}/>

	{/each}
	{/key}
</div>
<div class="flex flex-col items-center">
	<div class="mx-4 px-4 flex flex-row justify-between w-full max-w-3xl">
		<button class="btn btn-icon variant-filled rounded" on:click={SortCharacters} title="Sort by initiative"><span class="material-symbols-outlined">
			shuffle
			</span></button>
		<button class="btn variant-ghost" on:click={AddCharacter}>Add Character</button>
		<button class="btn variant-ghost" on:click={AddMonsters}>Add Monsters</button>
		<button class="btn variant-ghost" on:click={RemoveMonsters}>Remove All Monsters</button>
		<div class="w-4"></div>
	</div>
</div>
