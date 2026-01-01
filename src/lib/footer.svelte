<script>
    const links = [
        {
            title: "Recursos",
            items: [
                { name: "Documentação", href: "https://svelte.dev/docs" },
                { name: "Tutorial", href: "https://svelte.dev/tutorial" },
                { name: "Exemplos", href: "https://svelte.dev/examples" },
                { name: "REPL", href: "https://svelte.dev/repl" }
            ]
        },
        {
            title: "Comunidade",
            items: [
                { name: "Discord", href: "https://discord.gg/svelte" },
                { name: "GitHub", href: "https://github.com/sveltejs/svelte" },
                { name: "Twitter", href: "https://twitter.com/sveltejs" },
                { name: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/svelte" }
            ]
        },
        {
            title: "Mais",
            items: [
                { name: "Blog", href: "https://svelte.dev/blog" },
                { name: "FAQ", href: "https://svelte.dev/faq" },
                { name: "SvelteKit", href: "https://kit.svelte.dev" },
                { name: "Svelte Society", href: "https://sveltesociety.dev" }
            ]
        }
    ];
</script>

<footer class="bg-zinc-900 text-white py-12 px-8">
    <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between gap-12">
            <div class="flex flex-col gap-4 max-w-sm">
                <div class="flex flex-row gap-3 items-center">
                    <img src="/svelte-logo.svg" alt="Svelte Logo" width="40" height="40" />
                    <h3 class="text-2xl font-bold">Svelte</h3>
                </div>
                <p class="text-zinc-400">
                    Uma abordagem radicalmente nova para construir interfaces de usuário. Menos código, mais performance.
                </p>
                <div class="flex flex-row gap-4 mt-2">
                    <a href="https://github.com/sveltejs/svelte" target="_blank" rel="noopener noreferrer" 
                       class="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                        GitHub
                    </a>
                    <a href="https://twitter.com/sveltejs" target="_blank" rel="noopener noreferrer"
                       class="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                        Twitter
                    </a>
                    <a href="https://discord.gg/svelte" target="_blank" rel="noopener noreferrer"
                       class="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                        Discord
                    </a>
                </div>
            </div>

            <div class="flex flex-row gap-16">
                {#each links as section}
                    <div class="flex flex-col gap-3">
                        <h4 class="font-semibold text-lg text-white">{section.title}</h4>
                        <ul class="flex flex-col gap-2">
                            {#each section.items as item}
                                <li>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                                       class="text-zinc-400 hover:text-orange-500 transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <div class="border-t border-zinc-700 mt-10 pt-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-zinc-500 text-sm">
                    © 2026 Svelte. Todos os direitos reservados.
                </p>
                <div class="flex flex-row gap-6 text-sm">
                    <span class="text-zinc-500 hover:text-orange-500 transition-colors cursor-pointer">Política de Privacidade</span>
                    <span class="text-zinc-500 hover:text-orange-500 transition-colors cursor-pointer">Termos de Uso</span>
                </div>
            </div>
        </div>
    </div>
</footer>
