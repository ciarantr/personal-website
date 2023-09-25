<script setup>
  // TODO:(Enhancement) Change menu spans to svg
  const isMobileMenuOpen = ref(false)
  const navigation = new Set([
    'about',
    'experience',
    'projects',
    'contact',
    'resume',
  ])

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
  <header class="container sm:relative">
    <nuxt-link
      to="/#main-content"
      class="bg-base-20 fixed left-0 top-0 z-[100] w-full -translate-y-full p-1 text-center transition-transform focus:translate-y-0"
      >Skip to main content
    </nuxt-link>

    <nav
      id="primary"
      aria-label="main"
      class="G-container-shadow duration-350 mt-6 items-center transition-[height] ease-in-out sm:relative sm:flex sm:justify-between sm:gap-y-0"
      :class="{
        'h-[64px] ': !isMobileMenuOpen,
        'absolute left-0 right-0 top-0 z-50 mx-2 h-[95vh] space-y-8':
          isMobileMenuOpen,
      }"
    >
      <div class="flex items-center gap-x-2 sm:w-auto">
        <Icon
          name="arcticons:cinexplore"
          class="h-8 w-8"
        />

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
          'visible  block h-auto opacity-100': isMobileMenuOpen,
          'invisible hidden  h-0 opacity-0 ': !isMobileMenuOpen,
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
            :class="{ hidden: list === 'resume' && isMobileMenuOpen }"
          >
            <a
              :aria-label="`${list} section`"
              :href="list === 'resume' ? '/resume' : `#${list}`"
              :target="list === 'resume' ? '_blank' : '_self'"
              class="G-border-animate block w-full"
              @click="isMobileMenuOpen ? (isMobileMenuOpen = false) : null"
              >{{ list }}</a
            >
          </li>
        </ul>
        <!-- Resume download / view mobile -->
        <div
          class="G-container-shadow G-container-shadow-spacing-base mt-3 space-y-2 sm:hidden"
        >
          <!-- view pdf -->
          <ul class="text-sm">
            <li>
              <nuxt-link
                to="/resume"
                target='_blank'
                class="flex items-center justify-between pt-1"
              >Resume
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section
      aria-label="banner"
      class="G-container-shadow mt-16 py-28 text-center"
    >
      <div class="space-y-12">
        <h1 class="!text-base-70 text-center text-3xl md:text-4xl">
          Ciaran Toner
          <span class="text-base-20 block text-xl md:inline"
            >Full stack web developer</span
          >
        </h1>
        <div class="flex justify-center">
          <div
            id="wrapper-text"
            class="relative"
          >
            <p
              class="relative bg-gradient-to-r from-gray-400/50 via-gray-400/60 to-gray-400 bg-clip-text pb-1 text-center text-xl text-transparent sm:inline-block sm:max-w-[40ch]"
            >
              Building modern full stack web applications for today's web
            </p>
            <Icon
              class="[&>circle]:text-orange text-base-20 h-5 w-5 !align-sub md:mb-2 [&>circle]:animate-[pulse_3s_ease-in-out_infinite]"
              name="clarity:world-outline-badged"
            />
          </div>
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
  #wrapper-text::after {
    @apply via-base-40
    to-base-80
    absolute
    inset-x-0
    -bottom-1
    h-0.5
    bg-gradient-to-tr
    from-transparent pr-2 content-['']
    sm:inset-x-0;
  }
</style>
