<script lang="ts">
    export let image, name, isEven, onClick, displayed, href;
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const pageWidth = writable(0);

    function handleResize() {
        if (typeof window !== 'undefined') {
            pageWidth.set(window.innerWidth);
        }
    }

    onMount(() => {
        // Set initial width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component destroy
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        console.log(pageWidth);
    });
</script>

{#if $pageWidth < 1024}
    <a
        {href}
        target="_blank"
        aria-label={name + ' project repository'}
        class={`border-l border-black ${isEven ? 'border-r' : ''} border-black group`}
    >
        <span
            class={`flex justify-between items-center text-sm font-semibold md:text-base border-b border-black pl-1 md:pl-2.5 font-montserrat md:font-bold ${displayed ? 'text-accent bg-black' : 'group-hover:text-accent group-hover:bg-black'} transition-all duration-500`}
        >
            {name}
            <!-- <ArrowRight/> -->
            <slot />
        </span>
        <img
            src={image}
            alt={`${name} preview`}
            loading="lazy"
            class={`${displayed ? '' : 'grayscale group-hover:grayscale-0'} transition-colors duration-500`}
        />
    </a>
{:else}
    <button on:click={onClick} class={`border-l border-black ${isEven ? 'border-r' : ''} border-black group`}>
        <span
            class={`flex justify-between items-center text-sm font-semibold md:text-base border-b border-black pl-1 md:pl-2.5 font-montserrat md:font-bold ${displayed ? 'text-accent bg-black' : 'group-hover:text-accent group-hover:bg-black'} transition-all duration-500`}
        >
            {name}
            <!-- <ArrowRight/> -->
            <slot />
        </span>
        <img
            src={image}
            alt={`${name} preview`}
            loading="lazy"
            class={`${displayed ? '' : 'grayscale group-hover:grayscale-0'} transition-colors duration-500`}
        />
    </button>
{/if}
