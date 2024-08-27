<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig()
  const version = runtimeConfig.public.CLIENT_VERSION
  const date = computed(() => new Date().getFullYear())
</script>

<template>
  <footer
    aria-label="links to github & linkedin & copywrite"
    class="border-base-40 h-96 md:pb-4 pt-12 border-t"
  >
    <div
      class="to-base-20/70 rounded-xl bg-gradient-to-br from-transparent container grid w-full h-full p-4 text-xs transition-shadow shadow-2xl"
    >
      <div class="text-center">
        <div
          id="title"
          class="gap-x-2 flex items-center justify-center text-sm"
        >
          <!-- GitHub link -->
          <nuxt-link
            aria-label="link to github profile"
            to="https://github.com/ciaran-io"
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
        class="hover:shadow-orange rounded-xl sm:flex sm:justify-between sm:space-y-0 w-full p-4 mt-auto text-xs transition-shadow duration-300 ease-in-out shadow-2xl sapce-y-4"
      >
        <p>Copyright © {{ date }} Designed & Created by Ciaran Toner</p>
        <div class="gap-x-1 flex">
          <Icon
            name="arcticons:cinexplore"
            class="w-4 h-4"
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
    @apply via-base-40
      to-base-45
      bg-gradient-to-b
      from-transparent
      bg-clip-text
      text-2xl
      text-transparent;
  }

  #title::before {
    content: '{ ';
  }

  #title::after {
    content: ' }';
  }
</style>
