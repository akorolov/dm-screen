<script lang="ts">
	import '../app.postcss';
	import { initializeStores, Modal, type ModalComponent } from '@skeletonlabs/skeleton';
	import MonsterModal from '$lib/MonsterModal.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		modalMonster: { ref: MonsterModal },
		// ...
	};
</script>

<Modal components={modalRegistry} />

<slot />