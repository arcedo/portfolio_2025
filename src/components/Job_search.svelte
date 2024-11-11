<script>
    import { LINKEDIN_URL } from '../constants';
    export let startDate;
    const numberDays = Math.round((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
</script>

<a
    href={LINKEDIN_URL}
    target="_blank"
    class="fixed top-8 sm:right-8 right-2 z-20 bg-primary/60 rounded-full backdrop-blur-md shadow-sm text-black px-3 py-1 group hover:text-accent hover:bg-black/80 hover:font-semibold transition-colors w-[14.5rem] text-center duration-500"
>
    <span class="group-hover:hidden"><strong>{numberDays}</strong> days searching for a job</span>
    <span class="hidden group-hover:inline">Let's change this!</span>
</a>
