<script lang="ts">
import Character from "$lib/Character.svelte";
import { character_list } from "$lib/dataStore";
import { Modal, getModalStore } from '@skeletonlabs/skeleton';
import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

const modalStore = getModalStore();

const modal: ModalSettings = {
	type: 'prompt',
	// Data
	title: 'Add Character',
	// Populates the input value and attributes
	value: '',
	valueAttr: { type: 'text', minlength: 3, maxlength: 100, required: true },
	// Returns the updated response value
	response: (r: string) => $character_list = [...$character_list, r],
};

function AddCharacter() {
	modalStore.trigger(modal);
}

function DeleteCharacter(character: string) {
	let new_list: string[] = []
	$character_list.forEach(element => {
		if (element !== character) {
			new_list = [...new_list, element]
		}
	});
	$character_list = new_list
}


</script>

	{#each $character_list as character}

		<Character bind:name={character} on:delete={() => DeleteCharacter(character)}/>

	{/each}

	<div class="flex flex-row justify-around">
		<button class="btn variant-ghost" on:click={AddCharacter}>Add Character</button>
	</div>
