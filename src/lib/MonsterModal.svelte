<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
    import { character_list } from "$lib/dataStore";

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

    let monsters: string[] = [""]
    let monster_init = 0

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
        for (let monster of monsters) {
            $character_list = [...$character_list, [monster, monster_init, "monster"]]
        }
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Add Monsters</header>
		<article>Add your monsters below</article>
        <label class="label">
            <span class="h4">Initiative:</span>
            <input class="input w-24 mx-2" type="number" bind:value={monster_init} />
        </label>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
            {#each monsters as monster}
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" bind:value={monster} placeholder="Enter name..." />
			</label>
            {/each}
            <button class="btn variant-soft" on:click={() => monsters = [...monsters, ""]}>Add +</button>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
		</footer>
	</div>
{/if}