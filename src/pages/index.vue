<script lang="ts" setup>
  useHead({
    templateParams: {
      separator: '•',
    },
    title: 'Full Stack Web Developer',
    titleTemplate: '%siteName %separator %s',
  })
  //  Define og image vue template
  defineOgImage({
    component: 'TheBaseOg',
    title: 'Transforming Ideas into Powerful Solutions',
  })
  const isMobileMenuOpen = useMenu()

  function hideMobileMenuOnScroll() {
    if (window.scrollY > 450) {
      isMobileMenuOpen.value = false
    }
  }
  // watch to close the mobile menu if user scrolls past 250px when open
  watch(isMobileMenuOpen, (isOpen) => {
    if (isOpen) {
      window.addEventListener('scroll', hideMobileMenuOnScroll)
    } else {
      // remove event listener
      window.removeEventListener('scroll', hideMobileMenuOnScroll)
    }
  })
</script>

<template>
  <div>
    <main
      id="main-content"
      class="mt-96"
      :class="{
        'blur-sm': isMobileMenuOpen,
      }"
    >
      <div class="container lg:max-w-5xl">
        <div class="space-y-64">
          <section class="space-y-24">
            <div class="space-y-2 text-left text-3xl">
              <h2 class="inline">Crafting Dynamic Web Solutions</h2>
              <icon
                class="text-base-20 ml-4 !align-bottom"
                name="material-symbols:dynamic-feed"
              />
              <p class="max-w-2xl text-base">
                Specialising in Crafting Dynamic Web Solutions, my personal
                portfolio encapsulates my dedication to innovative design and
                advanced development. Each project underscores my passion for
                creating user-centric, visually appealing, and functional
                digital experiences.
              </p>
            </div>

            <content-container
              id="projects"
              heading="Some things I built"
            >
              <template #content-main>
                <project-container id="projects" />
              </template>
            </content-container>
          </section>
          <!-- Projects
          <section
            aria-label="completed web development projects with description & links"
            class="mt-64 space-y-12"
          >
         
          </section> -->

          <!-- Work history -->
          <content-container
            id="experience"
            heading="Were I have worked"
          >
            <template #content-main>
              <job-history-container />
            </template>
          </content-container>
          <!-- About me  -->
          <content-container
            id="about"
            heading="About"
            class="relative"
          >
            <template #content-main>
              <p
                class="first-letter:text-base-20 px-4 first-letter:float-left first-letter:mr-3 first-letter:text-7xl md:max-w-xl md:px-0"
              >
                Driven web developer, designer, and entrepreneur, my digital
                journey sparked to life in 2017 when I crafted a WordPress
                website for my health business. This venture wasn't just a
                business initiative; it was the spark that ignited my curiosity
                in the vast expanse of the digital universe. As I navigated
                through design challenges and coding problems, I discovered the
                joy of unveiling solutions and creating user-friendly
                interfaces. This pursuit to enhance reach and growth for my
                business turned into an enriching learning journey, fuelling a
                yearning to know more, do more, and delve deeper into the
                fascinating realm of technology.
                <br /><br />
                This ignited a passion that led to a diploma in Full Stack
                Software Development from Code Institute and is now propelling
                me through a BSc in Computing at the Technological University of
                Dublin. Tapping into technology's transformative potential, I
                passionately embrace opportunities to enhance my understanding
                of software development. My quest is to continually refine my
                knowledge, striving to fulfil my highest potential within the
                ever-evolving canvas of computer science."
              </p>
            </template>
          </content-container>
        </div>
      </div>
      <!-- Technology used slide -->
      <section
        id="tech-stack"
        aria-label="list of technologist I have used"
        class="relative mt-96 space-y-12 overflow-clip"
      >
        <div class="relative z-50 text-center">
          <h3 class="inline text-6xl">Technologies I use</h3>
          <icon
            class="text-base-20 ml-4 !align-baseline text-5xl"
            name="material-symbols:settings-suggest"
          />
        </div>
        <lazy-tech-stack-card />
      </section>
    </main>
    <!-- Gradient wrapper  -->
    <div class="to-dark mt-96 space-y-64 bg-gradient-to-b from-transparent">
      <!-- Roadmap -->
      <section
        ref="roadmapSection"
        aria-label="development roadmap"
        class="container space-y-12 lg:max-w-5xl"
      >
        <lazy-roadmap-container />
      </section>
      <!-- Contact us -->
      <section
        id="contact"
        aria-label="contact me via email"
        class="mx-auto h-full px-4 pt-32 md:w-max md:px-0"
      >
        <lazy-contact-card />
      </section>
      <LazyTheFooter />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  /* Gradient on all h2 */
  :deep(h3),
  :deep(h2) {
    @apply bg-gradient-to-r
    from-gray-400/50
    via-gray-400/60
    to-gray-400
    bg-clip-text
    pb-1
    text-center
    text-transparent;
  }

  /*Faded appearance on overflow tech cards   */
  #tech-stack div:last-child::before,
  #tech-stack div:last-child::after {
    @apply absolute  z-20 block w-full  content-[''];
  }

  @screen md {
    #tech-stack div:last-child::before,
    #tech-stack div:last-child::after {
      @apply !h-full w-[10%];
    }
  }

  #tech-stack div:last-child::before {
    @apply from-base-30 via-base-30 -top-36 left-0 h-1/3 bg-gradient-to-b;
  }

  #tech-stack div:last-child::after {
    @apply via-base-30 from-base-30  bottom-0 left-0 h-1/5 bg-gradient-to-t;
  }

  @screen md {
    #tech-stack div:last-child::before {
      @apply top-0  bg-gradient-to-r;
    }

    #tech-stack div:last-child::after {
      @apply left-auto right-0 bg-gradient-to-l;
    }
  }
</style>

<style lang="postcss">
  body {
    /* Set a counter named 'section', and its initial value is 0. */
    counter-reset: heading;
  }
  /* 
  scroll-top margin for anchor section in nav
  set to match nav menu height when opened
   */
  #about,
  #experience,
  #projects {
    scroll-margin-top: 500px;

    @screen sm {
      scroll-margin-top: 0px;
    }
  }
</style>
