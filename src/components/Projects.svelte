<script lang="ts">
    import ProjectPreview from './Project_preview.svelte';
    import { PROJECTS } from '../constants/projects.ts';
    export let id;
    let displayedProject = -1;
</script>

<section {id}>
    <h2 class="uppercase font-montserrat font-bold text-4xl pb-10">Projects</h2>
    <div class="flex items-center md:gap-32 relative">
        <div class="grid grid-cols-2 lg:w-1/2">
            {#each PROJECTS as project, index}
                {#if index % 2 === 0}
                    <div class="border-l border-black"></div>
                {/if}
                <ProjectPreview
                    image={project.image}
                    name={project.name}
                    isEven={index % 2 === 0}
                    displayed={displayedProject === index}
                    date={project.date}
                    href={project.repositoryLink}
                    onClick={() => {
                        displayedProject = index;
                    }}
                >
                    <slot name="projectPreviewArrow" />
                </ProjectPreview>
                {#if index % 2 !== 0}
                    <div class="border-l border-r border-black"></div>
                {/if}
            {/each}
        </div>
        <article class="sticky top-[39%] z-0 self-start w-1/2 hidden lg:block">
            {#if displayedProject === -1}
                <div
                    class="hover:bg-black hover:text-accent py-24 border-black border hover:shadow-md flex justify-center items-center transition-colors duration-500"
                >
                    <p class="highlight-offset highlight-none">Click the projects to see more</p>
                </div>
            {:else}
                <div class="border-x border-black hover:bg-black transition-colors duration-500 group py-5">
                    <p class="text-black/70 font-light pl-5 group-hover:text-primary/90 transition-colors duration-500">
                        {PROJECTS[displayedProject].date}
                    </p>
                    <a
                        href={PROJECTS[displayedProject].pageLink
                            ? PROJECTS[displayedProject].pageLink
                            : PROJECTS[displayedProject].repositoryLink}
                        target="_blank"
                        class="flex justify-between items-end pl-5 border-black group-hover:border-primar border-b transition-colors duration-500 group/arrow group-hover:text-primary hover:!text-accent"
                    >
                        <h3 class="font-montserrat font-bold text-2xl">{PROJECTS[displayedProject].name}</h3>
                        <!-- <ArrowTopRight width="28" height="28"/> -->
                        <slot name="projectTitleArrow" />
                    </a>
                    <div class="px-5 pt-2.5 flex flex-col justify-center gap-2.5">
                        <p class="group-hover:text-primary " >{@html PROJECTS[displayedProject].description}</p>
                        <div class="flex flex-wrap items-center gap-2 py-2">
                            {#each PROJECTS[displayedProject].tecnologies as technology}
                                <p
                                    class="cursor-default group-hover:text-accent/85 transition-colors duration-500 px-2.5 py-1.5 rounded-full border border-black/50 bg-primary/20 text-black text-sm"
                                >
                                    {technology}
                                </p>
                            {/each}
                        </div>
                        {#if PROJECTS[displayedProject].pageLink}
                            <a
                                href={PROJECTS[displayedProject].repositoryLink}
                                target="_blank"
                                class="flex group/arrow font-semibold group-hover:text-primary hover:!text-accent transition-colors duration-500 w-fit"
                            >
                                Repository
                                <!-- <ArrowTopRight width="20" height="20"/> -->
                                <slot name="projectRepoArrow" />
                            </a>
                        {/if}
                    </div>
                </div>
            {/if}
        </article>
    </div>
</section>
