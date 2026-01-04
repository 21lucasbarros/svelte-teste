<script>
    import { Gauge, CodeXml, Zap, Palette, CircleCheck, Sparkles } from 'lucide-svelte';

    const features = [
        {
            icon: Gauge,
            title: "Performance",
            highlight: "35x mais rápido",
            description: "Manipulação direta do DOM sem overhead de runtime."
        },
        {
            icon: CodeXml,
            title: "Menos Código",
            highlight: "40% menos linhas",
            description: "Sintaxe intuitiva que elimina boilerplate."
        },
        {
            icon: Zap,
            title: "Reatividade",
            highlight: "Zero configuração",
            description: "Variáveis reativas por padrão, sem APIs."
        },
        {
            icon: Palette,
            title: "Estilos",
            highlight: "Escopo automático",
            description: "CSS isolado por componente nativamente."
        },
        {
            icon: CircleCheck,
            title: "Acessibilidade",
            highlight: "Avisos em tempo real",
            description: "A11y integrado no desenvolvimento."
        },
        {
            icon: Sparkles,
            title: "Animações",
            highlight: "Built-in",
            description: "Transições poderosas sem bibliotecas extras."
        }
    ]
</script>

<section id="why-use" class="py-24 md:py-32 px-6 bg-zinc-50">
    <div class="max-w-5xl mx-auto">
        <div class="text-center mb-20">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Por que Svelte?
            </h2>
            <div class="w-12 h-1 bg-orange-500 rounded-full mx-auto"></div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 rounded-2xl overflow-hidden shadow-sm">
            {#each features as feature, index}
                <div class="bg-white/80 backdrop-blur-sm p-8 md:p-10 group hover:bg-white transition-colors duration-300">
                    <feature.icon class="h-6 w-6 text-orange-500 mb-6"/>
                    <p class="text-orange-600 text-sm font-medium tracking-wide mb-2">{feature.highlight}</p>
                    <h3 class="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                    <p class="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
            {/each}
        </div>

        <div class="mt-16 text-center">
            <p class="text-zinc-400 text-sm">
                Junte-se a milhares de desenvolvedores que já fizeram a mudança.
            </p>
        </div>
    </div>
</section>