<script lang="ts">
    import { InputChip } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


export let name = "Character Name"
export let initiative = 0
export let health = 0

export let conditions: string[] = []

let edit_name = false


function handleKeydown(e: KeyboardEvent) {
    if (e.code == "Enter") {
        edit_name = false
    }
}

</script>


<div class="card m-4 w-full max-w-3xl">
    <header class="card-header h4 justify-between flex"> 
        <input class="input w-12 rounded p-1" title="Initiative" bind:value={initiative} type="number" placeholder=9 />
        <a on:click={() => edit_name = true} title="Click to rename character">
            {#if edit_name}
                <input class="input" type="text" bind:value={name} on:keydown={handleKeydown} />
            {:else}
            {name}
            {/if}
        </a>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-40" title="Damage">
            <div class="input-group-shim p-0"><span class="material-symbols-outlined">
                favorite
                </span></div>
            <input class="input-group-shim" type="number" bind:value={health} placeholder=0 />
            </div>

        <button class="btn-icon rounded variant-soft" title="Remove character" on:click={() => dispatch("delete")}><span class="material-symbols-outlined">
            skull
            </span></button>
    </header>
    <section class="p-4 rounded">
        <InputChip bind:value={conditions} rounded="rounded" chips="variant-soft-secondary" name="chips" placeholder="Add conditions..." />
    </section>
    
</div>


<style>



</style>