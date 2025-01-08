<script lang="ts">
  import { page } from '$app/stores';
  let isMenuOpen = false;

  $: path = $page.url.pathname;
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur px-6 py-4 border-b border-white/10">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <a href="/" class="flex items-center gap-3 group">
      <img src="/lilypad.png" alt="Logo" class="h-8 w-auto group-hover:scale-110 transition-transform duration-300">
      <span class="text-white font-khand text-xl hidden sm:block">yaerguOS</span>
    </a>

    <nav class="hidden md:flex items-center gap-8">
      <a 
        href="/" 
        class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 hover:-translate-y-0.5 transform group"
        class:active={path === '/'}
      >
        Home
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white/0 group-hover:bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 {path === '/' ? '!scale-x-100 !bg-white/40' : ''}"></span>
      </a>
      <a 
        href="/faq" 
        class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 hover:-translate-y-0.5 transform group"
        class:active={path === '/faq'}
      >
        FAQ
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white/0 group-hover:bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 {path === '/faq' ? '!scale-x-100 !bg-white/40' : ''}"></span>
      </a>
      <a 
        href="/collaborators" 
        class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 hover:-translate-y-0.5 transform group"
        class:active={path === '/collaborators'}
      >
        Collaborators
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white/0 group-hover:bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 {path === '/collaborators' ? '!scale-x-100 !bg-white/40' : ''}"></span>
      </a>
      <a 
        href="https://ko-fi.com/maybeasdf" 
        class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 hover:-translate-y-0.5 transform group"
        class:active={path === 'https://ko-fi.com/maybeasdf'}
      >
        Donate
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white/0 group-hover:bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 {path === '/donate' ? '!scale-x-100 !bg-white/40' : ''}"></span>
      </a>
      <a 
        href="https://discord.gg/EEmGn2fdDs" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 rounded-lg font-khand transition-all duration-200"
      >
        Join Discord
      </a>
    </nav>

    <button class="md:hidden text-white p-2" on:click={() => isMenuOpen = !isMenuOpen}>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if !isMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {/if}
      </svg>
    </button>
  </div>

  {#if isMenuOpen}
    <nav class="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 py-4 px-6">
      <div class="flex flex-col gap-4">
        <a 
          href="/" 
          class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 {path === '/' ? 'text-white' : ''}"
        >
          Home
          {#if path === '/'}
            <span class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
          {/if}
        </a>
        <a 
          href="/faq" 
          class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 {path === '/faq' ? 'text-white' : ''}"
        >
          FAQ
          {#if path === '/faq'}
            <span class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
          {/if}
        </a>
        <a 
          href="/collaborators" 
          class="relative text-white/80 hover:text-white font-khand transition-colors duration-200 {path === '/collaborators' ? 'text-white' : ''}"
        >
          Collaborators
          {#if path === '/collaborators'}
            <span class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
          {/if}
        </a>
        <a 
          href="https://discord.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 rounded-lg font-khand transition-all duration-200 text-center"
        >
          Join Discord
        </a>
      </div>
    </nav>
  {/if}
</header>

<style>
  .active {
    @apply text-white;
  }
</style> 