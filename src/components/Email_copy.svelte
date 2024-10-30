<!-- I copy the email instead of doing a mailto link to avoid issues for users without a configured default email app or account, which can be inconvenient. -->
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
        <p
            class={`${bubbleClassName} ${!isCopied ? 'sm:w-[8.39rem] w-[7.1rem]' : !onlyText ? 'sm:w-[11.46rem] w-[9.8rem]' : 'md:-left-[5.2rem]'}`}
        >
            {#if !isCopied}
                {bubbleText}
            {:else}
                {successText}
            {/if}
        </p>
    {/if}
</div>
