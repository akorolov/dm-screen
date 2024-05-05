<script lang="ts">
    import { InputChip } from "@skeletonlabs/skeleton";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


export let name = "Character Name"
export let initiative = 0
export let health = "0"

export let conditions: string[] = []

let edit_name = false


function handleKeydown(e: KeyboardEvent) {
    if (e.code == "Enter") {
        edit_name = false
    }
}

function calculateHealth(e: KeyboardEvent) {
    if (e.code == "Enter") {
        let new_health = 0
        if (health.includes("+")) {
            health.split("+").forEach(element => {
                new_health += parseInt(element)
            })
        } else if (health.includes("-")) {
            health.split("-").forEach(element => {
                (new_health == 0) ? new_health = parseInt(element) : new_health -= parseInt(element)
            })
        } else {
            return;
        }
        health = new_health.toString()
    }
}

</script>


<div class="card m-2 w-full max-w-3xl rounded">
    <header class="card-header h4 justify-between flex"> 
        <input class="input w-12 rounded variant-form-material" title="Initiative" bind:value={initiative} type="tel" placeholder=9 />
        <a on:click={() => edit_name = true} title="Click to rename character">
            {#if edit_name}
                <input class="input" type="text" bind:value={name} on:keydown={handleKeydown} />
            {:else}
            {name}
            {/if}
        </a>

        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-40 border" title="Use + or - to add or subtract numbers, and then hit enter. Example: 20+5">
            <div class="input-group-shim p-0"><span class="material-symbols-outlined">
                favorite
                </span></div>
            <input class="input-group-shim" type="text" on:keydown={calculateHealth} bind:value={health} placeholder=0 />
            </div>

        <button class="btn-icon rounded variant-soft" title="Remove character" on:click={() => dispatch("delete")}><span class="material-symbols-outlined">
            skull
            </span></button>
    </header>
    <section class="p-4 rounded">
        <InputChip bind:value={conditions} class="border" rounded="rounded" chips="variant-soft-secondary" name="chips" placeholder="Add conditions..." />
    </section>
    
</div>


<style>



</style>