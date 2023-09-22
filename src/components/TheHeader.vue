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
      450,
    )
  }

  function closeSubMenu() {
    subNavFocus.value = false
    subNavActive.value = false
  }

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
  <header class="container sm:relative">
    <nuxt-link
      to="/#main-content"
      class="bg-base-20 fixed left-0 top-0 z-[100] w-full -translate-y-full p-1 text-center transition-transform focus:translate-y-0"
      >Skip to main content
    </nuxt-link>

    <nav
      aria-label="main navigation"
      class="G-container-shadow G-container-shadow-spacing-base duration-350 mt-6 grid content-start gap-y-6 transition-[height] ease-in-out sm:relative sm:flex sm:h-max sm:items-center sm:justify-between sm:gap-y-0"
      :class="{
        'h-16': !isMobileMenuOpen,
        'absolute h-[90vh] left-0 right-0 top-0 z-50 mx-4': isMobileMenuOpen,
      }"
    >
      <div class="flex w-full gap-x-2 sm:w-auto">
        <Icon
          name="arcticons:cinexplore"
          class="h-8 w-8"
        />

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
          class="divide-base-20 flex flex-col divide-y text-sm sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 sm:divide-y-0"
        >
          <li
            v-for="list in navigation"
            :key="list"
            class="py-1.5 sm:py-0"
          >
            <a
              :aria-label="`navigate to ${list} section`"
              :href="`#${list}`"
              class="G-border-animate block w-full"
              @click="isMobileMenuOpen ? (isMobileMenuOpen = false) : null"
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
          <div class="border-base-20 border-b-[0.5px] text-sm">Resume</div>
          <!-- view pdf -->
          <ul class="space-y-1 text-sm">
            <li>
              <nuxt-link
                to="/resume"
                class="flex items-center justify-between pt-1"
              >
                View
                <Icon
                  name="ph:magnifying-glass-plus-bold"
                  class="h-4 w-4"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Sub navigation resume desktop -->
    <div
      v-show="subNavActive"
      class="z-50 pt-7 sm:absolute sm:right-[2.5rem] sm:top-[0.5rem]"
      @mouseleave="closeSubMenu"
      @mouseenter="subNavFocus = true"
    >
      <nav
        aria-label="Main nav submenu"
        class="bg-base-30 relative top-3 mt-4 space-y-2 rounded-md p-3 text-sm shadow-md"
      >
        <!-- view pdf -->
        <nuxt-link
          to="/resume"
          target="_blank"
          class="G-border-animate [&:hover_>_svg]:text-orange flex items-center justify-between gap-x-3 after:top-5"
        >
          View
          <Icon
            class="h-4 w-4 transition-colors duration-300 ease-in-out"
            name="ph:magnifying-glass-plus-bold"
          />
        </nuxt-link>
      </nav>
    </div>

    <section
      aria-label="banner"
      class="G-container-shadow mt-16 py-28 text-center"
    >
      <div class="space-y-12">
        <h1 class="text-3xl md:text-5xl text-center">
          Ciaran Toner
          <span class="block md:inline text-xl">Full-Stack web developer</span>
        </h1>
      <div>
        <p
          class="relative bg-gradient-to-r from-gray-400/50 via-gray-400/60 to-gray-400 bg-clip-text pb-1 text-center text-xl text-transparent inline-block max-w-[30ch]"
        >
          Building modern full stack web applications for today's web
        </p>
        <Icon
          class="[&>circle]:text-orange text-base-20 h-5 w-5 md:mb-2 [&>circle]:animate-[pulse_3s_ease-in-out_infinite] !align-sub"
          name="clarity:world-outline-badged"
        />
      </div>
      </div>
    </section>
  </header>
</template>

<style lang="postcss" scoped>

  h1 {
    @apply text-base-20;

  /* Bracket gradient */
    span::before,
    span::after {
      @apply via-base-40
      to-base-45
      bg-gradient-to-b
      from-transparent
      bg-clip-text
      text-transparent;
    }

    span::before {
      content: '( ';
    }

    span::after {
      content: ' )';
    }
  }

  /* Underline border gradient */
  p::after {
    @apply via-base-40
    to-base-80
    absolute
    -bottom-1
    inset-x-0
    h-0.5
    w-full
    bg-gradient-to-tr from-transparent pr-2
    content-[''];
  }
</style>
