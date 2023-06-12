<script setup lang="ts">
  useHead({
    title: 'Personal portfolio',
  })
</script>

<template>
  <main
    id="main-content"
    aria-label="main content"
    class="mt-80"
  >
    <div class="container lg:max-w-5xl">
      <section>
        <div class="grid justify-items-center md:grid-cols-[1fr_auto]">
          <h2>Building modern full stack web applications for today's web.</h2>
          <Icon
            class="[&>circle]:text-orange h-10 w-10 md:mb-2 md:self-end [&>circle]:animate-[pulse_3s_ease-in-out_infinite]"
            name="clarity:world-outline-badged"
          />
        </div>
        <div class="mt-12 space-y-32">
          <!-- About me  -->
          <content-container
            id="about"
            aria-label="about me content"
            heading="About me"
          >
            <template #content-main>
              <about-content />
            </template>
          </content-container>

          <!-- Work history -->
          <content-container
            id="experience"
            aria-label="work history content"
            heading="Were I have worked"
          >
            <template #content-main>
              <job-history-container />
            </template>
          </content-container>
        </div>

        <!-- Projects -->
        <section class="mt-64 space-y-12">
          <div class="flex items-center justify-center gap-x-2 text-2xl">
            <h2>Some things I built</h2>
            <icon
              class="text-base-20"
              name="mdi:hammer-wrench"
            />
          </div>
          <project-container
            id="projects"
            aria-label="A curated group of apps I have made with description and links to code repositories"
          />
        </section>
      </section>
    </div>
    <!-- Technology used slide -->
    <section
      id="tech-stack"
      class="relative mt-64 space-y-12 overflow-clip"
      aria-label="A list of technologies I have worked with and small description"
    >
      <h2 class="text-center text-7xl">Some technologies I use</h2>
      <lazy-tech-stack-card />
    </section>
    <!-- Gradient wrapper  -->
    <div
      class="to-dark mt-64 space-y-64 bg-gradient-to-b from-transparent pb-96"
    >
      <!-- Roadmap -->
      <section
        ref="roadmapSection"
        class="container space-y-12 lg:max-w-5xl"
      >
        <lazy-roadmap-container />
      </section>
      <!-- Contact us -->
      <section
        id="contact"
        class="mx-auto h-full px-4 pt-32 md:w-max md:px-0"
      >
        <lazy-contact-card />
      </section>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  /* Gradient on all h2 */
  :deep(h2) {
    @apply bg-gradient-to-r
    from-gray-400/50
    via-gray-400/60
    to-gray-400
    bg-clip-text
    pb-1
    text-center
    text-transparent;
    @apply text-3xl
    md:text-5xl;
  }

  /* Faded appearance on overflow tech cards   */
  #tech-stack {
    &::before,
    &::after {
      @apply absolute
      top-20
      z-20
      block
      h-full
      w-[10%]
      content-[''];
    }

    &::before {
      @apply from-base-30
      left-0 bg-gradient-to-r;
    }

    &::after {
      @apply from-base-30
      right-0
      bg-gradient-to-l;
    }
  }
</style>

<style lang="postcss">
  body {
    /* Set a counter named 'section', and its initial value is 0. */
    counter-reset: heading;
  }
</style>
