<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="pt-16">
  <slot />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    @apply bg-gradient-to-b from-hero-top via-hero-bottom to-features-bg text-white;
  }
</style> 