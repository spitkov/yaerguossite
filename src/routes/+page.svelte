<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Footer from '$lib/components/Footer.svelte';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<main class="min-h-screen flex flex-col">
  <section class="py-16 text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-radial from-hero-top/30 via-hero-bottom/20 to-transparent pointer-events-none"></div>
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 left-20 w-72 h-72 bg-text-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-hero-top/30 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-40 right-40 w-48 h-48 bg-white/10 rounded-full filter blur-2xl animate-float"></div>
    </div>
    
    <div class="container mx-auto px-4 relative">
      {#if mounted}
        <div in:fly={{ y: -20, duration: 800 }} class="space-y-6">
          <div class="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm shadow-lg hover:bg-white/10 transition-all duration-300">
            <span class="mr-2 inline-block w-2 h-2 bg-text-primary rounded-full animate-pulse"></span>
            Coming Soon
          </div>
          
          <div class="flex items-center gap-4 justify-center group">
            <h1 class="text-6xl font-khand text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text leading-tight hover:scale-105 transition-transform duration-300">yaerguOS</h1>
            <img src="/lilypad.png" alt="lilypad" class="h-20 w-auto animate-float hover:scale-110 transition-transform duration-300" />
          </div>
          
          <div class="max-w-2xl mx-auto space-y-2">
            <p class="text-lg text-white/90 hover:text-white transition-colors duration-300">A modern, highly optimized arch-based linux distribution powered by KDE plasma.</p>
            <p class="text-base text-white/80 hover:text-white/90 transition-colors duration-300">Built for looks, performance and ease of use.</p>
          </div>
          
          <div class="flex justify-center gap-4 mt-4">
            <a href="https://discord.gg/EEmGn2fdDs" target="_blank" rel="noopener noreferrer" class="transform hover:scale-105 transition-all duration-300">
            <button class="group px-6 py-2 rounded-lg bg-text-primary/20 backdrop-blur-sm border border-text-primary/30 text-text-primary hover:bg-text-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span class="flex items-center gap-2">
                Join Discord
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            </a>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <section class="py-20 relative flex-grow overflow-hidden">
    <div class="absolute inset-0 bg-gradient-radial from-features-bg/50 via-hero-bottom/30 to-transparent pointer-events-none"></div>
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-40 right-20 w-64 h-64 bg-text-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-40 left-20 w-80 h-80 bg-hero-top/20 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-60 left-40 w-56 h-56 bg-white/5 rounded-full filter blur-2xl animate-float" style="animation-delay: 1.5s;"></div>
    </div>
    
    <div class="container mx-auto px-4 relative">
      {#if mounted}
        <h2 class="text-3xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text hover:scale-105 transition-transform duration-300" in:fade={{ duration: 800, delay: 200 }}>
          Features that separate the yaergu system from any other
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" in:fade={{ duration: 800, delay: 400 }}>
          <div class="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6">
              <div class="w-16 h-16 mb-4 bg-gradient-to-br from-hero-top to-text-primary/30 rounded-xl p-3 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-text-primary/20">
                <img src="/ayva.png" alt="Ayva" class="w-full h-full transform group-hover:rotate-6 transition-transform duration-500" />
              </div>
              <h3 class="text-xl font-khand text-transparent bg-gradient-to-r from-white to-white/90 bg-clip-text group-hover:scale-105 transition-transform duration-300">Ayva</h3>
            </div>
            <p class="text-text-muted mb-4 text-sm group-hover:text-white/80 transition-colors duration-300">Voice assistant bundled with yaerguOS, that has AI powered answers and screen access, so she knows exactly what you want.</p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                Open websites, apps and more
              </li>
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                Assist in everyday tasks
              </li>
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                AI Powered answers.
              </li>
            </ul>
          </div>

          <div class="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6">
              <div class="w-16 h-16 mb-4 bg-gradient-to-br from-hero-top to-text-primary/30 rounded-xl p-3 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-text-primary/20">
                <img src="/yns-icon.svg" alt="YNS" class="w-full h-full transform group-hover:rotate-6 transition-transform duration-500" />
              </div>
              <h3 class="text-xl font-khand text-transparent bg-gradient-to-r from-white to-white/90 bg-clip-text group-hover:scale-105 transition-transform duration-300">YNS</h3>
            </div>
            <p class="text-text-muted mb-4 text-sm group-hover:text-white/80 transition-colors duration-300">Package manager with fast installation, wide variety of yaerguOS utilites, and not resource heavy.</p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                Install apps and games
              </li>
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                Easy updates
              </li>
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                GUI and CLI interface
              </li>
            </ul>
          </div>

          <div class="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6">
              <div class="w-16 h-16 mb-4 bg-gradient-to-br from-hero-top to-text-primary/30 rounded-xl p-3 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-text-primary/20">
                <img src="/discover.png" alt="Discover" class="w-full h-full transform group-hover:rotate-6 transition-transform duration-500" />
              </div>
              <h3 class="text-xl font-khand text-transparent bg-gradient-to-r from-white to-white/90 bg-clip-text group-hover:scale-105 transition-transform duration-300">Discover</h3>
            </div>
            <p class="text-text-muted mb-4 text-sm group-hover:text-white/80 transition-colors duration-300">Software center with a wide variety of apps from flathub including vscodium, vlc etc.. Built-in discover app from kde plasma.</p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                Wide variety
              </li>
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                Fast downloads
              </li>
              <li class="flex items-center gap-2 text-text-muted group-hover:text-white/80 transition-colors duration-300">
                <span class="text-text-primary transform group-hover:scale-110 transition-transform duration-300">✓</span>
                From KDE
              </li>
            </ul>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <Footer />
</main>

<style>
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(76, 175, 80, 0.2); }
    50% { box-shadow: 0 0 20px rgba(76, 175, 80, 0.4); }
    100% { box-shadow: 0 0 5px rgba(76, 175, 80, 0.2); }
  }

  :global(.glow-effect) {
    animation: glow 3s ease-in-out infinite;
  }
</style>
