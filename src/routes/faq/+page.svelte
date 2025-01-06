<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  const faqs = [
    {
      question: "When will yaerguOS be released?",
      answer: "We anticipate a release in mid-2025. However, this timeline may be adjusted based on development progress and quality assurance."
    },
    {
      question: "What is the best way to contact the owner?",
      answer: "The best way to reach out is through Discord. You can contact the owner directly at: maybe.asdf"
    }
  ];

  let openIndex = -1;
</script>

<div class="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    {#if mounted}
      <div in:fade={{ duration: 800 }} class="text-center mb-16">
        <h1 class="text-5xl sm:text-6xl font-khand mb-6 text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">
          Frequently Asked Questions
        </h1>
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Find answers to common questions about yaerguOS. Can't find what you're looking for? 
          <a href="https://discord.com" class="text-blue-400 hover:text-blue-300 underline">Join our Discord</a>.
        </p>
      </div>

      <div class="space-y-4">
        {#each faqs as faq, index}
          <div 
            class="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
            in:fade={{ duration: 800, delay: 200 + index * 100 }}
          >
            <button
              class="w-full px-6 py-4 flex justify-between items-center text-left"
              on:click={() => openIndex = openIndex === index ? -1 : index}
            >
              <span class="text-xl font-khand text-white">{faq.question}</span>
              <svg
                class="w-5 h-5 text-white/60 transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {#if openIndex === index}
              <div 
                class="px-6 pb-4 text-white/80"
                transition:slide={{ duration: 200 }}
              >
                <p>{faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <div class="mt-16 text-center">
        <p class="text-white/60 mb-4">Still have questions?</p>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200 group"
        >
          Join Our Community
          <svg
            class="w-4 h-4 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    {/if}
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
