<script setup lang="ts">
  // TODO:(Enhancement) Change menu spans to svg
  const isMobileMenuOpen = useMenu()
  const navigation = new Set(['about', 'experience', 'projects'])

  const mobileSize = 640

  // Close mobile menu on screen sizes
  // greater than mobileSize
  onMounted(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > mobileSize) {
        isMobileMenuOpen.value = false
      }
    })
  })
</script>

<template>
  <header class="container">
    <nuxt-link
      to="/#main-content"
      class="bg-base-20 fixed left-0 top-0 z-[100] w-full -translate-y-full p-1 text-center transition-transform focus:translate-y-0"
      >Skip to main content
    </nuxt-link>

    <nav
      id="primary"
      aria-label="main"
      class="G-container-shadow duration-350 mt-6 transition-[height] ease-in-out sm:grid sm:grid-flow-col sm:items-baseline md:items-center md:transition-none"
      :class="{
        'relative h-[64px]': !isMobileMenuOpen,
        'absolute left-0 right-0 top-0 z-50 mx-2 h-[500px] space-y-8':
          isMobileMenuOpen,
      }"
    >
      <div class="flex items-baseline md:block">
        <span
          id="name"
          class="align-middle text-sm"
          >Ciaran Toner</span
        >
        <!-- Mobile menu button -->
        <button
          aria-controls="primary"
          type="button"
          aria-label="toggle main"
          :aria-expanded="isMobileMenuOpen"
          class="ml-auto sm:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span
            aria-hidden="true"
            class="[&_span]:bg-base-70 relative block h-7 w-7 [&_span:nth-child(1n+2)]:transition-all [&_span]:absolute [&_span]:left-0 [&_span]:h-[2px] [&_span]:rounded-sm [&_span]:content-['']"
          >
            <span
              :class="{
                block: !isMobileMenuOpen,
                hidden: isMobileMenuOpen,
              }"
              class="top-2 w-1/2"
            ></span>

            <span
              :class="{
                'w-full': !isMobileMenuOpen,
                'w-[25px] -rotate-45 [translate:_-3px_-3px]': isMobileMenuOpen,
              }"
              class="top-4"
            ></span>

            <span
              :class="{
                'w-4/6': !isMobileMenuOpen,
                'w-[25px] rotate-45 [translate:_-3px_-11px]': isMobileMenuOpen,
              }"
              class="top-6"
            ></span>
          </span>
        </button>
      </div>
      <!-- Main nav menu mobile/desktop -->
      <div
        class="justify-center text-lg capitalize transition-opacity delay-150 ease-in sm:flex sm:items-center sm:gap-x-4 sm:text-base sm:transition-none"
        :class="{
          block: isMobileMenuOpen,
          hidden: !isMobileMenuOpen,
        }"
      >
        <ul
          :class="{
            'G-container-shadow G-container-shadow-spacing-base':
              isMobileMenuOpen,
          }"
          class="divide-base-20 flex flex-col gap-y-2 divide-y text-sm sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 sm:divide-y-0"
        >
          <li
            v-for="list in navigation"
            :key="list"
            class="flex items-center justify-center pt-2 md:block md:pt-0"
          >
            <a
              :aria-label="`${list} section`"
              :href="`#${list}`"
              class="G-border-animate block w-full"
              @click="isMobileMenuOpen ? (isMobileMenuOpen = false) : null"
              >{{ list }}</a
            >
          </li>
        </ul>
        <!-- Resume / linkedin / github -->
        <div
          class="G-container-shadow G-container-shadow-spacing-base mt-3 space-y-2 sm:hidden"
        >
          <!-- view pdf -->
          <ul class="space-y-4 text-sm">
            <li>
              <nuxt-link
                to="/resume"
                target="_blank"
                class="flex items-center justify-between"
                >Resume
                <Icon name="ion:chevron-forward-outline" />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="https://github.com/ciarantr"
                target="_blank"
                class="flex items-center justify-between"
                >GitHub
                <ExternalLinkIcon />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="https://www.linkedin.com/in/ciaran-toner/"
                target="_blank"
                class="flex items-center justify-between"
                >Linkedin
                <ExternalLinkIcon />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- linkedin / github links -->
      <div class="hidden items-center justify-end gap-x-3 sm:flex">
        <nuxt-link
          to="https://github.com/ciarantr"
          target="_blank"
          class="hover:text-base-20 transition-colors duration-200"
        >
          <Icon
            name="icon-park-outline:github"
            class="h-5 w-5"
          />
        </nuxt-link>

        <nuxt-link
          to="https://www.linkedin.com/in/ciaran-toner/"
          target="_blank"
          class="hover:text-base-20 transition-colors duration-200"
        >
          <Icon
            name="brandico:linkedin-rect"
            class="h-5 w-5"
          />
        </nuxt-link>
      </div>
    </nav>

    <section
      aria-label="banner"
      class="G-container-shadow mt-16 py-14 md:py-28"
      :class="{
        'blur-sm': isMobileMenuOpen,
      }"
    >
      <div class="space-y-12 px-3 md:mx-auto md:w-max md:pl-6">
        <div
          id="main-heading-text"
          class="relative text-left"
        >
          <h1
            class="text-base-90/70 relative max-w-[30ch] pb-1 text-3xl sm:inline-block md:text-3xl"
          >
            Bridging Technology and Business: Full-Stack Solutions for the
            Modern Enterprise
          </h1>
          <Icon
            class="[&>circle]:text-orange text-base-20 h-12 w-12 !align-sub md:mb-2 [&>circle]:animate-[pulse_3s_ease-in-out_infinite]"
            name="clarity:world-outline-badged"
          />
        </div>

        <p class="text-base-10/70 text-lg md:w-[50ch]">
          Architecting robust, scalable systems that drive business value.
          Explore my portfolio showcasing software engineering, site
          reliability, and strategic business solutions. Discover how I leverage
          cutting-edge tech to create resilient, efficient applications that
          meet critical needs and pave the way for digital transformation.
        </p>
        <!-- Resume contact email -->
        <div class="flex items-baseline gap-x-4">
          <nuxt-link
            to="/resume"
            target="_blank"
            class="bg-base-20 hover:shadow-base-70/50 group flex items-center gap-x-1 rounded px-2.5 py-2 shadow-lg shadow-transparent transition-all duration-300 ease-in-out"
            >Resume
            <Icon
              class="group-hover:text-orange inline-block h-5 w-5 transition-colors duration-300 md:text-transparent"
              name="mynaui:external-link"
            />
          </nuxt-link>
          <!-- email -->
          <nuxt-link
            to="mailto:hi@ciaran.foo"
            class="bg-base-20 hover:shadow-base-70/50 group flex items-center gap-x-1 rounded px-2.5 py-2 shadow-lg shadow-transparent transition-all duration-300 ease-in-out"
          >
            Contact
            <Icon
              class="group-hover:text-orange inline-block h-5 w-5 transition-colors duration-300 md:text-transparent"
              name="mingcute:send-plane-fill"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="postcss" scoped>
  #name {
    font-family: 'Julius Sans One', sans-serif;
  }
  /* Underline border gradient */
  #main-heading-text::after {
    @apply via-base-40 to-base-80 absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-tr from-transparent pr-2 content-[''] sm:inset-x-0;
  }
</style>
