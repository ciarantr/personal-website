<script setup>
  // TODO:(Enhancement) Change menu spans to svg
  const isMobileMenuOpen = ref(false)
  const navigation = new Set(['about', 'experience', 'projects', 'contact'])
  const subNavActive = ref(false)
  const subNavFocus = ref(false)
  const mobileSize = 640

  // Hide resume submenu when focus is lost
  // after 450ms
  function hideSubMenu() {
    setTimeout(
      () =>
        subNavActive.value && !subNavFocus.value
          ? (subNavActive.value = false)
          : null,
      450
    )
  }

  // Close mobile menu onn screen sizes
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
  <header class="container sm:relative">
    <nuxt-link
      to="/#main-content"
      class="fixed left-0 top-0 z-[100] w-full -translate-y-full bg-base-20 p-1 text-center transition-transform focus:translate-y-0"
      >Skip to main content
    </nuxt-link>

    <nav
      aria-label="main navigation"
      class="G-container-shadow G-container-shadow-spacing-base duration-350 absolute top-0 right-0 left-0 z-50 mx-2 mt-6 grid content-start gap-y-6 transition-[height] ease-in-out sm:relative sm:flex sm:h-max sm:items-center sm:justify-between sm:gap-y-0"
      :class="{
        'h-16': !isMobileMenuOpen,
        'h-[90vh] ': isMobileMenuOpen,
      }"
    >
      <div class="flex w-full gap-x-2 sm:w-auto">
        <NuxtLink to="/">
          <Icon
            name="arcticons:cinexplore"
            class="h-8 w-8"
          />
        </NuxtLink>
        <!-- Mobile menu button -->
        <button
          aria-controls="primary navigation"
          aria-label="toggle primary navigation"
          :aria-expanded="isMobileMenuOpen"
          class="ml-auto sm:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span
            aria-hidden="true"
            class="relative block h-7 w-7 [&_span]:absolute [&_span]:left-0 [&_span]:h-[2px] [&_span]:rounded-sm [&_span]:bg-base-70 [&_span]:content-[''] [&_span:nth-child(1n+2)]:transition-all"
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
                'w-[calc(28px_*_1.2)] -rotate-45 [translate:_-3px_-3px]':
                  isMobileMenuOpen,
              }"
              class="top-4"
            ></span>
            <span
              :class="{
                'w-4/6': !isMobileMenuOpen,
                'w-[calc(28px_*_1.2)] rotate-45 [translate:_-3px_-11px] ':
                  isMobileMenuOpen,
              }"
              class="top-6"
            ></span>
          </span>
        </button>
      </div>
      <!-- Main nav menu -->
      <div
        class="text-lg capitalize transition-opacity delay-150 ease-in sm:visible sm:flex sm:gap-x-4 sm:text-base sm:opacity-100 sm:transition-none"
        :class="{
          'visible  opacity-100  ': isMobileMenuOpen,
          'invisible opacity-0  ': !isMobileMenuOpen,
        }"
      >
        <ul
          :class="{
            'G-container-shadow G-container-shadow-spacing-base':
              isMobileMenuOpen,
          }"
          class="flex flex-col divide-y divide-base-20 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-6 sm:divide-y-0"
        >
          <li
            v-for="list in navigation"
            :key="list"
            class="py-1.5 sm:py-0"
            @click="isMobileMenuOpen = false"
          >
            <a
              :href="`#${list}`"
              class="G-border-animate block w-full"
              >{{ list }}</a
            >
          </li>
          <li
            class="G-border-animate hidden pt-1 sm:block sm:pt-0"
            :class="{
              'after:w-full': subNavActive,
            }"
            @mouseenter="subNavActive = true"
            @mouseleave="hideSubMenu()"
          >
            Resume
          </li>
        </ul>
        <!-- Resume download / view mobile -->
        <div
          class="G-container-shadow G-container-shadow-spacing-base mt-3 space-y-2 sm:hidden"
        >
          <div class="border-b-[0.5px] border-base-20">Resume</div>
          <!-- view pdf -->
          <ul class="space-y-1">
            <li>
              <nuxt-link
                to="/resume"
                target="_blank"
                class="flex items-center justify-between pt-1"
              >
                View
                <Icon
                  name="ph:magnifying-glass-plus-bold"
                  class="h-4 w-4"
                />
                <!-- download pdf -->
              </nuxt-link>
            </li>
            <li>
              <a
                href="/data/resume.pdf"
                download="ciaran-toner-resume.pdf"
                class="flex items-center justify-between"
              >
                Download
                <Icon
                  class="h-5 w-5"
                  name="humbleicons:download-alt"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Sub navigation resume desktop -->
    <div
      v-show="subNavActive"
      class="z-50 pt-7 sm:absolute sm:top-[0.5rem] sm:right-[2.5rem]"
      @mouseleave="
        subNavFocus = false
        subNavActive = false
      "
      @mouseenter="subNavFocus = true"
    >
      <nav
        aria-label="Main nav submenu"
        class="relative top-3 mt-4 space-y-2 rounded-md bg-base-30 p-3 text-sm shadow-md"
      >
        <!-- view pdf -->
        <nuxt-link
          to="/resume"
          target="_blank"
          class="G-border-animate flex items-center justify-between gap-x-3 after:top-5 [&:hover_>_svg]:text-orange"
        >
          View
          <Icon
            class="h-4 w-4 transition-colors duration-300 ease-in-out"
            name="ph:magnifying-glass-plus-bold"
          />
          <!-- download pdf -->
        </nuxt-link>
        <a
          href="/data/resume.pdf"
          download="ciaran-toner-resume.pdf"
          class="G-border-animate flex items-center justify-between gap-x-3 after:top-5 [&:hover_>_svg]:text-orange"
        >
          Download
          <Icon
            class="h-5 w-5 transition-colors duration-300 ease-in-out"
            name="humbleicons:download-alt"
          />
        </a>
      </nav>
    </div>

    <section
      aria-label="banner"
      class="G-container-shadow G-container-shadow-spacing-lg lg-gap-x-0 relative top-24 mt-12 space-y-12 sm:top-0 md:flex md:h-max md:gap-x-12 md:space-y-0 lg:flex-col lg:space-y-12"
    >
      <div class="G-container-shadow G-container-shadow-spacing-lg">
        <h1 class="text-center text-2xl lg:text-3xl lg:leading-relaxed">
          Welcome to my<br />
          <span>Personal Portfolio</span>
        </h1>
      </div>
      <div
        class="G-container-shadow G-container-shadow-spacing-lg mx-auto text-lg md:text-xl lg:max-w-3xl"
      >
        <p class="mx-auto max-w-[40ch] text-center text-xl">
          I create cool things for the web.<br />
          <span class="relative">
            Bringing ideas to life with modern design principles
          </span>
          using the latest web technologies.
        </p>
      </div>
    </section>
  </header>
</template>

<style lang="postcss" scoped>
  h1,
  h2 {
    @apply lg:mx-auto
    lg:w-1/2;
  }

  /* Bracket gradient */
  h1 > span {
    @apply text-base-20;
    &::before,
    &::after {
      @apply bg-gradient-to-b
      from-transparent
      via-base-40
      to-base-45
      bg-clip-text
      text-transparent;
    }

    &::before {
      content: '[';
    }

    &::after {
      content: ']';
    }
  }

  /* Underline border gradient */
  p > span::after {
    @apply absolute
    left-0
    -bottom-1
    h-0.5
    w-full
    bg-gradient-to-tr
    from-transparent
    via-base-40 to-base-80 pr-2
    content-[''];
  }
</style>
