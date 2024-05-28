<script setup>
  // FIXME:Animation stutter when restarting
  defineProps({
    technologies: {
      type: Array,
      required: true,
    },
  })
  const animationPaused = ref(null)

  onMounted(() =>
    // Turn off animation in development
    process.env.NODE_ENV === 'production'
      ? (animationPaused.value = 'running')
      : (animationPaused.value = 'paused'),
  )
</script>

<template>
  <ul
    class="animate-list grid gap-y-4 motion-reduce:grid md:flex md:gap-x-8 md:gap-y-0 md:motion-reduce:grid-cols-2"
  >
    <li
      v-for="(technology, index) in technologies"
      :key="index"
      class="bg-base-40 relative rounded-lg shadow md:mr-4 md:min-h-[150px] md:min-w-[350px] md:transition-all md:duration-500 md:ease-in-out md:hover:-translate-y-4 md:hover:[z-index:100] md:[&_div:nth-child(2n)]:hover:!opacity-80"
    >
      <div class="relative z-50 h-full w-full rounded-lg bg-inherit p-4 shadow">
        <div class="text-base-20 grid grid-cols-[auto_1fr] gap-x-6">
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

          <div class="text-base-90 space-y-2">
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
  accessibility styles
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
    will-change: transform;
    animation-name: technology-cards;
    animation-duration: 25s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: both;
    /*animation-play-state: v-bind(animationPaused);*/
    animation-play-state: running;

    &:hover {
      animation-play-state: paused;
    }
  }

  /* Animate cards if no preference for reduced motion */
  /*@media (prefers-reduced-motion: no-preference) {*/
  /*  @keyframes technology-cards {*/
  /*    0% {*/
  /*      transform: translateY(0);*/
  /*    }*/

  /*    100% {*/
  /*      transform: translateY(-40%);*/
  /*    }*/
  /*  }*/

  /*  @screen md {*/
  /*    @keyframes technology-cards {*/
  /*      0% {*/
  /*        transform: translateX(0);*/

  /*      }*/

  /*      100% {*/
  /*        transform: translateX(-50%);*/

  /*      }*/
  /*    }*/
  /*  }*/
  /*}*/

  /* code attribution */
  /* https://codersblock.com/blog/creating-glow-effects-with-css/#putting-it-all-together */
  @screen md {
    .glow-effect {
      box-shadow:
        inset 0 0 50px #fff,
        /* inner white */ inset 20px 0 80px #f0f,
        /* inner left magenta short */ inset -20px 0 80px #0ff,
        /* inner right cyan short */ inset 20px 0 300px #f0f,
        /* inner left magenta broad */ inset -20px 0 300px #0ff,
        /* inner right cyan broad */ 0 0 50px #fff,
        /* outer white */ -10px 0 80px #f0f,
        /* outer left magenta */ 10px 0 80px #0ff; /* outer right cyan */
    }
  }
</style>
