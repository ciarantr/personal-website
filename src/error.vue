<script setup>
  definePageMeta({
    layout: false,
  })

  useHead({
    templateParams: {
      separator: '•',
      extraTitle: '404',
    },

    title: 'Page Not Found',
    titleTemplate: '%s %separator %extraTitle',
  })


  const pageLinks = [
    {
      label: 'Home',
      url: '/',
      icon: 'material-symbols:android-google-home',
      content: 'Everything starts here',
    },
    {
      label: 'Contact',
      url: '/#contact',
      icon: 'material-symbols:alternate-email',
      content: 'Contact us for more information',
    },
  ]
</script>

<template>
  <div
    class="mt-12 px-3 lg:grid lg:h-screen lg:place-items-center lg:px-0 lg:pb-0"
  >
    <main class="space-y-8 lg:w-8/12 lg:max-w-screen-lg lg:space-y-24">
      <!-- page not found message -->
      <section
        class="G-container-shadow G-container-shadow-spacing-lg relative space-y-6 text-center"
      >
        <div
          aria-label="hidden"
          class="G-container-shadow absolute top-3 right-3 !rounded-md py-1 px-3 text-sm font-medium"
        >
          404
        </div>
        <h1 class="mt-2 text-4xl md:mt-0">Looks like your lost friend</h1>
        <p class="text-xl">The page your looking for could not be found.</p>
      </section>

      <!-- Navigation for pageLinks -->
      <nav class="G-container-shadow G-container-shadow-spacing-lg space-y-6">
        <h2 class="text-center text-xl">Continue your journey</h2>

        <ul class="space-y-12">
          <!-- page links -->
          <li
            v-for="link in pageLinks"
            :key="link.label"
            class="G-container-shadow G-container-shadow-spacing-lg"
          >
            <nuxt-link
              class=" group flex items-center gap-x-4 "
              :to="link.url"
            >
              <!-- page link icon -->
              <div>
                <Icon
                  class="h-6 w-6 group-hover:text-base-20 transition-colors duration-300 ease-in-out"
                  :name="link.icon"
                />
              </div>
              <div>
                <!-- page link & text -->
                <h3
                  class="max-w-min border-b border-b-transparent text-lg font-medium transition-all ease-in-out duration-300 group-hover:border-orange group-hover:text-base-20"
                >
                  {{ link.label }}
                </h3>
                <p
                  class="transition-colors duration-300 ease-in-out group-hover:!text-base-20"
                >
                  {{ link.content }}
                </p>
              </div>
              <Icon
                class="ml-auto transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:text-base-20 ease-in-out"
                name="material-symbols:arrow-forward-ios"
              />
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>
