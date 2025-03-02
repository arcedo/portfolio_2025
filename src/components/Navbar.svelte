<script lang="ts">
    export let sections: string[];

    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    type ActiveSection = {
        id: string;
        otherSectionHover: boolean;
    };

    const activeSection = writable<ActiveSection>({ id: '', otherSectionHover: false });

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection.set({
                            id: entry.target.id,
                            otherSectionHover: false,
                        });
                    }
                });
            },
            { threshold: 0.5 },
        );

        if (sections) {
          sections.forEach((id) => {
              const section = document.getElementById(id);
              if (section) {
                  observer.observe(section);
              }
          });
        }

        return () => observer.disconnect();
    });
</script>

<nav class="sticky top-[85vh] sm:top-[96vh] h-0 z-20">
    <div class="relative flex justify-center items-center">
        <div
            class="absolute min-w-6/12 sm:w-fit flex justify-around text-base gap-0.5 sm:gap-1 p-0.5 rounded-full text-black backdrop-blur-md bg-primary/80 shadow-sm capitalize font-semibold"
        >
            {#if  sections}
                {#each sections as section}
                    <a
                        href={`#${section}`}
                        aria-label={section}
                        on:mouseenter={() => ($activeSection.otherSectionHover = true)}
                        on:mouseleave={() => ($activeSection.otherSectionHover = false)}
                        class={`px-2.5 py-2 rounded-full transition-all duration-300
                            ${$activeSection.id === section && !$activeSection.otherSectionHover ? 'bg-black/90 text-accent' : 'hover:bg-black/90 hover:text-accent'}
                        `}
                    >
                        {section}
                    </a>
                {/each}
            {/if }
        </div>
    </div>
</nav>
