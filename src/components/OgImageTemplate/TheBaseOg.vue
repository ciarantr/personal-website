<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
      default: '',
    },
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
  <div class="bg-[#0f2027] text-white grid">
    <div v-bind="backgroundFlareAttrs" />
    <div class="relative pl-8 pt-8">
      <h1 class="text-6xl">
        {{ title }}
      </h1>
      <div style='display: flex; width: 100%;'>

      <Icon
        name="uis:web-grid"
        class=" w-98 h-98 text-[#12242b] ml-auto mt-4"/>
      </div>
    </div>

    <nuxt-img
      provider="cloudinary"
      quality="100"
      loading="lazy"
      src="/ciaran-toner.png"
      width="400"
      height="400"
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
