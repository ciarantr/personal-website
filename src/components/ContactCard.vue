<script setup lang="ts">
  const contactCard = ref<HTMLDivElement | null>(null)
  onMounted(() => {
    createObserver({
      observeTarget: contactCard.value,
      target: contactCard.value,
      style: 'shadow-orange',
      threshold: 1,
    })
  })
</script>

<template>
  <div
    ref="contactCard"
    class="h-96 space-y-6 overflow-clip rounded-xl p-8 shadow-2xl transition-shadow duration-1000 ease-in-out"
  >
    <div>
      <h2>Whats next?</h2>
    </div>
    <p class="mx-auto max-w-prose">
      I am a focused, motived web developer keen to learn & improve my developer
      skills daily. I am currently seeking a junior web development role. If you
      have a position available or would like to get in touch please feel free
      to contact me.
    </p>
    <!-- Mailto -->
    <nuxt-link
      to="mailto:hi@ciaran-io.dev"
      class="G-container-illuminate flex items-center gap-x-2 !p-2.5 [:hover&_:nth-child(2)]:grow [:hover&_:nth-child(2)]:translate-x-[96%] [:hover&_:nth-child(2)]:text-orange [:hover&_:nth-child(2)]:opacity-100"
      >Let's connect
      <Icon name="mdi:mail" />
      <div
        class="transform-gpu opacity-0 transition-all duration-500 ease-in-out"
      >
        <Icon name="ic:baseline-arrow-forward-ios" />
      </div>
    </nuxt-link>
  </div>
</template>
