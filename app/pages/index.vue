<script lang="ts" setup>
  useHead({
    templateParams: {
      separator: '•',
    },
    title: 'Software Engineer - Business Solutions Architect',
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
      :class="{
        'blur-sm': isMobileMenuOpen,
      }"
      class="mt-96"
    >
      <div class="lg:max-w-5xl container">
        <div class="space-y-64">
          <section class="space-y-24">
            <div class="space-y-2 text-3xl text-left">
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
                class="first-letter:text-base-20 first-letter:float-left first-letter:mr-3 first-letter:text-7xl md:max-w-xl md:px-0 px-4"
              >
                Innovative software engineer with a unique trajectory from
                entrepreneurship to technology. My journey began in 2017 when I
                developed a WordPress website for my health business, igniting a
                passion for digital solutions that bridge business needs and
                technical capabilities. This initial spark led me to pursue a
                diploma in Full Stack Software Development from Code Institute,
                and I'm currently advancing my expertise through a BSc in
                Computing at the Technological University of Dublin.
                <br ><br >
                My multifaceted background allows me to approach software
                engineering with a holistic perspective, combining technical
                acumen with business insight. Specializing in Site Reliability
                Engineering (SRE), I'm dedicated to designing and implementing
                scalable, resilient systems that drive business value. My focus
                lies in optimizing performance, automating processes, and
                ensuring high availability of critical services.
                <br >
                <br >
                I thrive on translating complex technical concepts into tangible
                business solutions, always seeking innovative ways to enhance
                system reliability and efficiency. Committed to continuous
                learning, I actively engage with emerging technologies and best
                practices in software development and SRE. My goal is to
                contribute to forward-thinking teams, tackling challenging
                projects that push the boundaries of what's possible in modern
                enterprise systems.
              </p>
            </template>
          </content-container>
        </div>
      </div>
      <!-- Technology used slide -->
      <section
        id="tech-stack"
        aria-label="list of technologist I have used"
        class="mt-96 overflow-clip relative"
      >
        <div class="bg-base-30 relative z-50 text-center">
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
    <div class="to-dark mt-96 bg-gradient-to-b from-transparent space-y-64">
      <!-- Roadmap -->
      <section
        ref="roadmapSection"
        aria-label="development roadmap"
        class="lg:max-w-5xl container space-y-12"
      >
        <lazy-roadmap-container />
      </section>
      <!-- Contact us -->
      <section
        id="contact"
        aria-label="contact me via email"
        class="md:w-max md:px-0 h-full px-4 pt-32 mx-auto"
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
    @apply bg-gradient-to-r from-gray-400/50 via-gray-400/60 to-gray-400 bg-clip-text pb-1 text-center text-transparent;
  }

  /*Faded appearance on overflow tech cards   */
  #tech-stack div:last-child::before,
  #tech-stack div:last-child::after {
    @apply absolute z-20 block w-full content-[''];
  }

  @screen md {
    #tech-stack div:last-child::before,
    #tech-stack div:last-child::after {
      @apply !h-full w-[10%] ;
    }
  }

  #tech-stack div:last-child::before {
    @apply from-base-30 via-base-30 -top-56 left-0 h-[58%] bg-gradient-to-b;
  }

  #tech-stack div:last-child::after {
    @apply from-base-30 via-base-30 bottom-0 left-0 h-1/5 bg-gradient-to-t;
  }

  @screen md {
    #tech-stack div:last-child::before {
      @apply top-0 h-1/3 bg-gradient-to-r;
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
