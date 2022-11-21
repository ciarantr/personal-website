<script setup>
  const runtimeConfig = useRuntimeConfig()
  const version = runtimeConfig.public.CLIENT_VERSION
  const date = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="h-96 border-t border-base-40 bg-dark pt-12 md:pb-4">
    <div
      class="container grid h-full place-items-center md:grid-cols-3 md:place-items-baseline"
    >
      <div
        class="grid h-full w-full rounded-xl bg-gradient-to-b from-base-15 via-base-15 to-dark p-4 shadow-2xl transition-shadow duration-300 ease-in-out hover:shadow-orange max-md:col-span-2 md:w-1/2"
      >
        <img
          class="h-16 w-16 rounded-md"
          src="/icons/logo.svg"
          alt=""
        />
        <div class="mt-auto flex gap-x-3 md:justify-between">
          <!-- GitHub link -->
          <nuxt-link
            aria-label="link to github personal profile"
            to="https://github.com/ciaran-io"
            target="_blank"
            class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-base-20 via-base-20 to-dark"
          >
            <Icon
              class="text-base-50 h-6 w-6"
              name="icon-park-outline:github"
            />
          </nuxt-link>
          <!-- Linkedin -->
          <nuxt-link
            aria-label="link to github personal linkedin profile"
            to="https://www.linkedin.com/in/ciaran-toner/"
            target="_blank"
            class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-base-20 via-base-20 to-dark"
          >
            <Icon
              class="text-base-50 h-6 w-6"
              name="brandico:linkedin-rect"
            />
          </nuxt-link>
        </div>
      </div>
      
      <div
        class="col-span-2 w-full space-y-2 rounded-xl bg-gradient-to-r from-base-15 via-base-15 to-dark p-4 text-xs shadow-2xl transition-shadow duration-300 ease-in-out hover:shadow-orange sm:flex sm:justify-between sm:space-y-0 md:mt-auto"
      >
        <div>Copyright © {{ date }} Designed & created by Ciaran Toner</div>
        <div>Made with NuxtJs | VueJs | Tailwindcss v{{ version }}</div>
      </div>
    </div>
  </footer>
</template>