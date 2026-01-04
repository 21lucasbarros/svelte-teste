<script lang="ts">
    import { scrollToElement } from '../utils/scrollToElement';

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function handleClick(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
        scrollToElement(event);
        menuOpen = false;
    }
</script>

<header class="p-4 md:p-5 flex flex-row justify-between items-center border-b border-b-zinc-200 fixed w-full z-50 bg-white">
    <div class="flex flex-row gap-3 md:gap-4 items-center">
        <img src="/svelte-logo.svg" alt="Svelte Logo" class="w-10 h-10 md:w-12 md:h-12" />
        <h1 class="text-xl md:text-2xl font-bold">Svelte</h1>
    </div>
    
    <button 
        class="md:hidden flex flex-col gap-1.5 p-2"
        onclick={toggleMenu}
        aria-label="Menu"
    >
        <span class="block w-6 h-0.5 bg-zinc-600 transition-transform {menuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
        <span class="block w-6 h-0.5 bg-zinc-600 transition-opacity {menuOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-6 h-0.5 bg-zinc-600 transition-transform {menuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
    </button>

    <nav class="hidden md:block">
        <ul class="flex flex-row gap-4 lg:gap-6 text-zinc-500 text-sm lg:text-base">
            <li class="hover:text-orange-600"><a href="#about" onclick={handleClick}>Sobre</a></li>
            <li class="hover:text-orange-600"><a href="#caracters" onclick={handleClick}>Caracteristicas</a></li>
            <li class="hover:text-orange-600"><a href="#why-use" onclick={handleClick}>Por que usar</a></li>
            <li class="hover:text-orange-600"><a href="#how-it-works" onclick={handleClick}>Como funciona</a></li>
        </ul>
    </nav>
</header>

{#if menuOpen}
    <div class="fixed inset-0 top-16 bg-white z-40 md:hidden">
        <nav class="p-6">
            <ul class="flex flex-col gap-4 text-zinc-500 text-lg">
                <li class="hover:text-orange-600 py-2 border-b border-zinc-100">
                    <a href="#about" onclick={handleClick}>Sobre</a>
                </li>
                <li class="hover:text-orange-600 py-2 border-b border-zinc-100">
                    <a href="#caracters" onclick={handleClick}>Caracteristicas</a>
                </li>
                <li class="hover:text-orange-600 py-2 border-b border-zinc-100">
                    <a href="#why-use" onclick={handleClick}>Por que usar</a>
                </li>
                <li class="hover:text-orange-600 py-2 border-b border-zinc-100">
                    <a href="#how-it-works" onclick={handleClick}>Como funciona</a>
                </li>
            </ul>
        </nav>
    </div>
{/if}