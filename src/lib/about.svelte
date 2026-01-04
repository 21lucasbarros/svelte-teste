<script>
    import { Cpu, Zap, RefreshCw } from 'lucide-svelte';

    const features = [
        {
            icon: Cpu,
            title: "Compilador",
            description: "Zero runtime. Seu código vira JavaScript puro no build."
        },
        {
            icon: Zap,
            title: "Velocidade",
            description: "Sem Virtual DOM. Atualizações diretas no DOM real."
        },
        {
            icon: RefreshCw,
            title: "Reatividade",
            description: "Variáveis reativas por padrão. Sem APIs complexas."
        }
    ];

    const companies = ["Apple", "Spotify", "The New York Times", "IBM", "Ikea", "1Password", "Cloudflare"];
</script>

<section class="py-24 md:py-32 px-6 bg-linear-to-b from-zinc-50 to-white">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center gap-3 mb-16">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-zinc-900">O que é Svelte?</h2>
            <div class="bg-orange-500 h-1 w-12 rounded-full"></div>
        </div>

        <div class="text-center mb-16">
            <p class="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Svelte representa uma <span class="text-orange-600 font-medium">mudança de paradigma</span> no desenvolvimento web. 
                Enquanto outros frameworks carregam bibliotecas pesadas no navegador, 
                Svelte compila seu código durante o build.
            </p>
            <p class="text-lg text-zinc-500 max-w-2xl mx-auto">
                O resultado? Aplicações extraordinariamente rápidas, bundles minúsculos 
                e uma experiência de desenvolvimento que simplesmente flui.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {#each features as feature}
                <div class="text-center p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300">
                    <div class="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-linear-to-br from-orange-50 to-orange-100">
                        <feature.icon class="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 class="text-xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                    <p class="text-zinc-500 leading-relaxed">{feature.description}</p>
                </div>
            {/each}
        </div>

        <div class="max-w-3xl mx-auto mb-20 text-center">
            <div class="inline-block text-6xl text-orange-200 mb-4">"</div>
            <blockquote>
                <p class="text-xl md:text-2xl text-zinc-700 leading-relaxed mb-6 font-light">
                    Svelte é uma linguagem para descrever interfaces de usuário reativas. 
                    É como se HTML, CSS e JavaScript finalmente tivessem se tornado amigos.
                </p>
                <footer class="flex items-center justify-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-sm">
                        RH
                    </div>
                    <div class="text-left">
                        <p class="font-medium text-zinc-900">Rich Harris</p>
                        <p class="text-sm text-zinc-500">Criador do Svelte</p>
                    </div>
                </footer>
            </blockquote>
        </div>

        <div class="mb-10">
            <p class="text-sm uppercase tracking-widest text-zinc-400 mb-8 text-center">Usado por empresas como</p>
            <div class="marquee-container">
                <div class="marquee-fade-left"></div>
                <div class="marquee-fade-right"></div>
                <div class="marquee-track">
                    <div class="marquee-content">
                        {#each companies as company}
                            <span class="marquee-item">{company}</span>
                        {/each}
                    </div>
                    <div class="marquee-content" aria-hidden="true">
                        {#each companies as company}
                            <span class="marquee-item">{company}</span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-2xl mx-auto text-center pt-10 border-t border-zinc-100">
            <p class="text-zinc-500 leading-relaxed">
                Criado em 2016 por <span class="text-zinc-700 font-medium">Rich Harris</span>, 
                jornalista de dados do The Guardian e The New York Times, 
                Svelte nasceu da frustração com a complexidade dos frameworks existentes. 
                Hoje, Harris trabalha na Vercel dedicado exclusivamente ao ecossistema Svelte e SvelteKit.
            </p>
        </div>
    </div>
</section>

<style>
    .marquee-container {
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .marquee-fade-left,
    .marquee-fade-right {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80px;
        z-index: 10;
        pointer-events: none;
    }

    .marquee-fade-left {
        left: 0;
        background: linear-gradient(to right, rgb(250 250 249) 0%, transparent 100%);
    }

    .marquee-fade-right {
        right: 0;
        background: linear-gradient(to left, rgb(250 250 249) 0%, transparent 100%);
    }

    .marquee-track {
        display: flex;
        width: max-content;
        animation: scroll 20s linear infinite;
    }

    .marquee-track:hover {
        animation-play-state: paused;
    }

    .marquee-content {
        display: flex;
        flex-shrink: 0;
    }

    .marquee-item {
        font-size: 1.25rem;
        font-weight: 500;
        color: #3f3f46;
        white-space: nowrap;
        padding: 0 2.5rem;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>