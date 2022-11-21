<script setup>
// FIXME:Animation stutter when restarting 
  defineProps({
    technologies: {
      type: Array,
      required: true,
    },
  })
  const animationPaused = ref(null)
  // Turn off animation in development
  const animationPause = computed(() =>
    process.env.NODE_ENV !== 'production'
      ? (animationPaused.value = 'paused')
      : (animationPaused.value = 'running')
  )
  onMounted(() => animationPause.value)
</script>

<template>
  <ul
    class="animate-list flex gap-x-8 motion-reduce:grid md:motion-reduce:grid-cols-2"
  >
    <li
      v-for="(technology, index) in technologies"
      :key="index"
      class="relative mr-4 min-h-[150px] min-w-[350px] rounded-lg bg-base-40 shadow transition-all duration-500 ease-in-out hover:-translate-y-4 [&_div:nth-child(2n)]:hover:!opacity-80"
    >
      <div class="relative z-50 h-full w-full rounded-lg bg-inherit p-4 shadow">
        <div class="grid grid-cols-[auto_1fr] gap-x-6 text-base-20">
          <Icon
            v-if="technology.label !== 'Meilisearch'"
            class="block h-8 w-8"
            :name="technology.icon"
          />
          <img
            v-else
            :src="technology.icon"
            class="block h-8 w-8"
            alt="meilisearch logo"
            aria-hidden="true"
          />

          <div class="space-y-2 text-base-90">
            <span class="font-medium">{{ technology.label }}</span>
            <p>{{ technology.text }}</p>
          </div>
        </div>
      </div>

      <div
        class="glow-effect absolute left-0 top-0 z-0 h-full w-full rounded-lg opacity-0 transition-opacity duration-500 ease-in"
      ></div>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
  /* 
 ************************** 
  accessability styles 
 ************************** */
  /* change list layout for motion-reduce */
  @media (prefers-reduced-motion: reduce) {
    .animate-list {
      animation: none !important;
      @apply container 
      grid-flow-row
      gap-x-4
      gap-y-6;
    }
  }

  .animate-list {
    @apply transform-gpu;
    animation-name: technology-cards;
    animation-duration: 17s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-play-state: running;

    animation-play-state: v-bind(animationPaused);
    &:hover {
      animation-play-state: paused;
    }
  }

  /* Animate cards if no preference for reduced motion */
  @media (prefers-reduced-motion: no-preference) {
    @keyframes technology-cards {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }
  }

  /* code attribution */
  /* https://codersblock.com/blog/creating-glow-effects-with-css/#putting-it-all-together */
  .glow-effect {
    box-shadow: inset 0 0 50px #fff, /* inner white */ inset 20px 0 80px #f0f,
      /* inner left magenta short */ inset -20px 0 80px #0ff,
      /* inner right cyan short */ inset 20px 0 300px #f0f,
      /* inner left magenta broad */ inset -20px 0 300px #0ff,
      /* inner right cyan broad */ 0 0 50px #fff,
      /* outer white */ -10px 0 80px #f0f,
      /* outer left magenta */ 10px 0 80px #0ff; /* outer right cyan */
  }
</style>
