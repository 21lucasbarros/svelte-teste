<script>
import { Gauge, CodeXml, Zap, Slack, CircleCheck, Sparkle } from '@lucide/svelte';

    const featureItem = [
        {
            icon: Gauge,
            title: "Performance Excepcional",
            description: "Bundlers minúsculos e atualizações ultra-rápidas. Svelte gera código que manipula o DOM diretamente, sem overhead de runtime.",
        },
        {
            icon: CodeXml,
            title: "Menos codigo",
            description: "Escreva componentes com muito menos boilerplate. A sintaxe limpa e intuitiva reduz a quantidade de código necessário.",
        },
        {
            icon: Zap,
            title: "Reatividade Real",
            description: "A reatividade é parte da linguagem. Atualize uma variável e a UI se atualiza automaticamente, sem hooks ou setState."
        },
        {
            icon: Slack,
            title: "Scoped Styles",
            description: "CSS com escopo por padrão. Escreva estilos dentro dos componentes sem se preocupar com conflitos globais."
        }, 
        {
            icon: CircleCheck,
            title: "Acessibilidade",
            description: "Avisos de acessibilidade integrados durante o desenvolvimento ajudam a criar aplicações inclusivas desde o início."
        },
        {
            icon: Sparkle,
            title: "Transicoes Integradas",
            description: "Sistema de transições e animações poderoso e fácil de usar, diretamente integrado ao framework."
        }
    ]
</script>

<section class="p-6 md:p-8 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-2 mb-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Principais Características</h2>
        <div class="bg-orange-600 h-0.75 w-15"></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full px-4 md:px-0">
        {#each featureItem as feature, index (index)}
        <div class="bg-white p-5 md:p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-3 md:gap-4">
            <div class="bg-red-600 p-2.5 md:p-3 rounded-lg w-fit">
                <feature.icon class="h-5 w-5 md:h-6 md:w-6 text-white"/>
            </div>
            <h3 class="text-base md:text-lg font-semibold">{feature.title}</h3>
            <p class="text-zinc-500 text-xs md:text-sm">{feature.description}</p>
        </div>
        {/each}
    </div>
</section>