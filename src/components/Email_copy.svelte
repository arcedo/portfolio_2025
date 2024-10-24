<script>
    export let bubbleText, successText, emailAddress, buttonClassName, bubbleClassName, onlyText;
    let isCopied = false;
</script>

<div class="relative group flex flex-col justify-end items-center">
    <button
        on:mouseenter={() => (isCopied = false)}
        on:click={() => {
            navigator.clipboard.writeText(emailAddress);
            isCopied = true;
        }}
        class={buttonClassName}
    >
        <slot />
    </button>
    {#if bubbleText}
        <p class={`${bubbleClassName} ${!isCopied ? 'w-[8.39rem]' : !onlyText ? 'w-[11.46rem]' : '!-left-[5.2rem]'}`}>
            {#if !isCopied}
                {bubbleText}
            {:else}
                {successText}
            {/if}
        </p>
    {/if}
</div>
