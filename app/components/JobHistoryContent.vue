<script setup lang="ts">
  defineProps({
    jobHistory: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: Number,
      required: true,
      default: 0,
    },
  })
  const tabPanel = ref(null)
  const tabMinHeight = ref(null || 0)


  // set min height of tab panel to max scroll height of tab content
  function getMaxScrollHeight(tabElements: HTMLElement) {
    const elementHeights = []
    for (const child of tabElements.children) {
      elementHeights.push(child.scrollHeight)
    }
    tabMinHeight.value = Math.max(...elementHeights)
  }

  onMounted(() => {
    getMaxScrollHeight(tabPanel.value)
  })
</script>

<template>
  <div
    ref="tabPanel"
    :style="{ 'min-height': tabMinHeight  + 'px' }"
    class="relative md:overflow-y-scroll md:overflow-x-hidden"
  >
    <template
      v-for="(history, index) in jobHistory"
      :key="index"
    >
      <Transition name="slide-fade">
        <div
          v-show="activeTab === index"
          :id="`panel-${index + 1}`"
          :aria-labelledby="`tab-${index + 1}`"
          role="tabpanel"
          class="G-container-shadow-spacing-base absolute left-0 top-0 h-max w-full space-y-6"
        >
          <!-- job position & link to business site -->
          <div class="flex flex-wrap justify-between">
            <div class="font-bold capitalize">{{ history.name }}</div>

            <!-- <div v-if="history.website">
              <nuxt-link
                :to="`https://${history.website}`"
                target="_blank"
                >@{{ history.name }}</nuxt-link
              >
            </div> -->
          </div>
          <!-- Time in job / position -->
          <div class="border-base-45 mt-4 border-b-2 pb-1">
            <div class="text-sm">
              {{ history.timeInJob.start }} - {{ history.timeInJob.end }}
              <span
                aria-hidden="true"
                class="text-orange"
              >
                |
              </span>
              {{ history.position[0] }}
              <span v-if="history.position[1]">
                / {{ history.position[1] }}</span
              >
            </div>
          </div>
          <!-- Jobs responsibility -->
          <div>
            <div>Primary Responsibilities:</div>
            <ul class="ml-4 mt-4 sm:grid sm:grid-cols-2 sm:items-baseline sm:gap-y-4 list-disc sm:gap-x-8 space-y-2 sm:space-y-0 ">
              <li
                v-for="(responsibility, idx) in
                  history.responsibilities.sort()"
                :key="idx"
                class=""
              >
                <span>{{ responsibility }}</span>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style lang="postcss" scoped>
  /*
  src attribute: https://vuejs.org/guide/built-ins/transition.html#css-transitions
  Enter and leave animations can use different
  durations and timing functions.
*/
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
