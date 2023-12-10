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
    class="grid gap-y-6 overflow-clip rounded-xl px-4 py-6 shadow-2xl transition-shadow duration-1000 ease-in-out sm:h-96 sm:p-8"
  >
    <div>
      <h2 class="text-4xl sm:text-5xl">Whats next?</h2>
    </div>
    <p class="mx-auto max-w-prose">
      Ready to explore new opportunities & challenges. Reach out anytime for
      potential partnerships or career opportunities.
    </p>
    <!-- Mailto -->
    <div>
      <nuxt-link
        to="mailto:hi@ciaran-io.dev"
        class="G-container-illuminate [:hover&_:nth-child(2)]:text-orange flex items-center gap-x-2 !p-2.5 [:hover&_:nth-child(2)]:grow [:hover&_:nth-child(2)]:translate-x-[96%] [:hover&_:nth-child(2)]:opacity-100"
        >Let's connect
        <Icon name="mdi:mail" />
        <div
          class="transform-gpu opacity-0 transition-all duration-500 ease-in-out"
        >
          <Icon name="ic:baseline-arrow-forward-ios" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
