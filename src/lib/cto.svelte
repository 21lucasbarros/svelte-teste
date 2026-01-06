<script>
    import { ArrowRight, PlayCircle, Check } from 'lucide-svelte';
</script>

<section class="relative py-16 md:py-24 px-6 md:px-10 bg-linear-to-br from-orange-500 via-orange-600 to-red-600 flex flex-col gap-6 md:gap-8 items-center justify-center text-center overflow-hidden">
    <div class="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
    <div class="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
    <div class="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
    
    
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
        Pronto para Transformar suas 
        <span class="bg-clip-text text-transparent bg-linear-to-r from-yellow-200 to-white">Ideias em Realidade?</span>
    </h2>
    
    <p class="text-white/90 text-lg md:text-xl max-w-2xl px-4 leading-relaxed">
        Junte-se a milhares de desenvolvedores que já descobriram a alegria de construir aplicações web modernas e reativas com Svelte.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto px-4 sm:px-0 mt-2">
        <button class="group px-7 md:px-8 py-4 md:py-5 bg-white text-orange-600 rounded-xl text-base md:text-lg font-semibold shadow-lg shadow-orange-900/30 hover:shadow-xl hover:shadow-orange-900/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <span>Começar Tutorial</span>
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button class="group px-7 md:px-8 py-4 md:py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/40 rounded-xl text-base md:text-lg font-semibold hover:bg-white/20 hover:border-white/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            <PlayCircle class="w-5 h-5" />
            <span>Ver Exemplos</span>
        </button>
    </div>
    
    <div class="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/70 text-sm">
        <div class="flex items-center gap-2">
            <Check class="w-5 h-5 text-green-300" />
            <span>Setup em 5 minutos</span>
        </div>
        <div class="flex items-center gap-2">
            <Check class="w-5 h-5 text-green-300" />
            <span>100% Open Source</span>
        </div>
        <div class="flex items-center gap-2">
            <Check class="w-5 h-5 text-green-300" />
            <span>Comunidade ativa</span>
        </div>
    </div>
</section>