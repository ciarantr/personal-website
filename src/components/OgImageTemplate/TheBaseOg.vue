<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  const props = defineProps({
    title: String,
    description: String,
  })

  const backgroundFlareAttrs = computed(() => {
    return {
      style: {
        position: 'absolute',
        right: '-100%',
        width: '200%',
        height: '200%',
        backgroundImage:
          'linear-gradient(to right, #0f2027, #203a43, #2c5364);',
      },
    }
  })
</script>

<template>
  <div class="bg-[#0f2027] text-white">
    <div v-bind="backgroundFlareAttrs" />
    <div class="relative pl-4 pt-4">
      <h1 class="text-6xl">
        {{ title }}
      </h1>
      <p class="w-3/4 text-4xl">{{ description }}</p>
    </div>

    <nuxt-img
      provider="cloudinary"
      quality="100"
      loading="lazy"
      src="/ciaran-toner.png"
      width="300"
      height="300"
      class="absolute bottom-0 rounded-tr-xl"
      alt="Ciaran's profile image"
      :modifiers="{ dpr: 2.0, f: 'auto' }"
    />
  </div>
</template>

<style scoped>
  img {
    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
</style>
