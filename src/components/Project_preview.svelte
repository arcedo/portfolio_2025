<script lang="ts">
    export let image, name, isEven, onClick;
</script>

<button on:click={onClick} class={`border-l border-black ${isEven ? 'border-r' : ''} border-black group`}>
    <span
        class="flex justify-between items-center border-b border-black pl-2.5 font-montserrat font-bold group-hover:text-accent group-hover:bg-black transition-all duration-500"
    >
        {name}
        <!-- <ArrowRight/> -->
        <slot />
    </span>
    <img
        src={image}
        alt={`${name} preview image`}
        class={`grayscale group-hover:grayscale-0 transition-colors duration-500`}
    />
</button>
