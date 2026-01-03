<script>
    const itemsAbout = [
        {
            icon: "👽",
            title: "Compilador, não framework",
            description: "Converte componentes em código otimizado durante a compilação."
        },
        {
            icon: "⚡",
            title: "Sem DOM Virtual",
            description: "Atualizações diretas e cirúrgicas no DOM real."
        },
        {
            icon: "🛠️",
            title: "Verdadeiramente Reativo",
            description: "Reatividade embutida na linguagem sem APIs complexas."
        }
    ]
</script>

<section class="p-6 md:p-8 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-2 mb-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">O que é Svelte?</h2>
        <div class="bg-orange-600 h-0.75 w-15"></div>
    </div>
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-baseline max-w-6xl">
        <div class="flex flex-col gap-4 max-w-lg justify-center text-base md:text-lg text-zinc-700">
            <p>Svelte é um framework JavaScript moderno que adota uma abordagem fundamentalmente diferente para construir aplicações web. Ao contrário de frameworks tradicionais que fazem a parte do trabalho no navegador, Svelte transfere esse trabalho para a etapa de compilação.</p>
            <p>Isso significa que você escreve componentes usando HTML, CSS e JavaScript, e o Svelte converte seu código em JavaScript vanilla altamente otimizado durante o build.</p>
            <p>O resultado? Aplicações mais rápidas, bundles menores e uma experiência de desenvolvimento mais intuitiva.</p>
        </div>
        <div class="bg-white p-4 md:p-5 flex flex-col gap-3 md:gap-4 rounded-lg border border-zinc-200 shadow-md w-full lg:max-w-md">
            {#each itemsAbout as item, index (index)}
                <div class="flex flex-row gap-3 md:gap-4 p-3 md:p-4 border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition-shadow items-center">
                    <div class="text-3xl md:text-4xl">{item.icon}</div>
                    <div class="flex flex-col">
                        <h3 class="text-lg md:text-xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                        <p class="text-zinc-600 text-sm md:text-base">{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>