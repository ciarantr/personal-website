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
    class="sm:h-96 space-y-6 overflow-clip rounded-xl px-4 py-6 sm:p-8 shadow-2xl transition-shadow duration-1000 ease-in-out"
  >
    <div>
      <h2 class="text-4xl sm:text-5xl">Whats next?</h2>
    </div>
    <p class="mx-auto max-w-prose">
      I am a dedicated and driven developer with a strong desire to continuously
      enhance my skills in web & software development. Continuously striving to
      expand my knowledge and sharpen my skills in this field. If you come
      across opportunities where my skill set could be a good fit, or just want
      to establish contact, feel free to reach out.
    </p>
    <!-- Mailto -->
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
</template>
