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

<section class="p-8 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-2 mb-6">
        <h2 class="text-4xl font-bold">O que é Svelte?</h2>
        <div class="bg-orange-600 h-0.75 w-15"></div>
    </div>
    <div class="flex flex-row gap-20 justify-baseline">
        <div class="flex flex-col gap-4 max-w-lg justify-center text-lg text-zinc-700">
            <p>Svelte é um framework JavaScript moderno que adota uma abordagem fundamentalmente diferente para construir aplicações web. Ao contrário de frameworks tradicionais que fazem a parte do trabalho no navegador, Svelte transfere esse trabalho para a etapa de compilação.</p>
            <p>Isso significa que você escreve componentes usando HTML, CSS e JavaScript, e o Svelte converte seu código em JavaScript vanilla altamente otimizado durante o build.</p>
            <p>O resultado? Aplicações mais rápidas, bundles menores e uma experiência de desenvolvimento mais intuitiva.</p>
        </div>
        <div class="bg-white p-5 flex flex-col gap-4 rounded-lg border border-zinc-200 shadow-md max-w-md">
            {#each itemsAbout as item, index (index)}
                <div class="flex flex-row gap-4 p-4 border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition-shadow items-center">
                    <div class="text-4xl">{item.icon}</div>
                    <div class="flex flex-col">
                        <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
                        <p class="text-zinc-600">{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>