<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()
  const version = runtimeConfig.public.CLIENT_VERSION
  const date = computed(() => new Date().getFullYear())
</script>

<template>
  <footer
    aria-label="links to github & linkedin & copywrite"
    class="border-base-40 h-96 border-t pt-12 md:pb-4"
  >
    <div
      class="to-base-20/70 container grid h-full w-full rounded-xl bg-gradient-to-br from-transparent p-4 text-xs shadow-2xl transition-shadow"
    >
      <div class="text-center">
        <div
          id="title"
          class="flex items-center justify-center gap-x-2 text-sm"
        >
          <!-- GitHub link -->
          <nuxt-link
            aria-label="link to github profile"
            to="https://github.com/ciarantr"
            target="_blank"
            class="G-border-animate"
          >
            GitHub
          </nuxt-link>
          <span aria-hidden="true">&bullet;</span>
          <!-- Linkedin -->
          <nuxt-link
            aria-label="link to linkedin profile"
            to="https://www.linkedin.com/in/ciaran-toner/"
            target="_blank"
            class="G-border-animate"
          >
            Linkedin
          </nuxt-link>
        </div>
      </div>

      <div
        class="hover:shadow-orange mt-auto flex w-full   rounded-xl p-4 text-xs shadow-2xl transition-shadow duration-300 ease-in-out sm:justify-between  gap-4 items-center flex-wrap"
      >
        <p class="">
          Copyright © {{ date }} Designed & Created by Ciaran Toner
        </p>
        <div class="flex gap-x-1">
          <Icon
            name="arcticons:cinexplore"
            class="h-4 w-4"
          />
          <p>
            Built with Nuxt | Vue.js & Tailwindcss &nbsp;
            <span class="border-orange rounded-md border px-1.5 py-1"
              >v
              {{ version }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
  #title::before,
  #title::after {
    @apply via-base-40 to-base-45 bg-gradient-to-b from-transparent bg-clip-text text-2xl text-transparent;
  }

  #title::before {
    content: '{ ';
  }

  #title::after {
    content: ' }';
  }
</style>
