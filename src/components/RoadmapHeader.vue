<script setup>
  const props = defineProps({
    showRoadmapMenu: {
      type: Boolean,
      required: true,
    },
    currentRoadmapTitle: {
      type: String,
      required: true,
    },
    roadmap: {
      type: Object,
      required: true,
    },
  })
  defineEmits(['closeRoadmapMenu', 'openRoadmapMenu', 'updateRoadmap'])

  const roadmapTitles = computed(() => {
    // Get all roadmap titles from props.roadmap object
    // Filter out the current roadmap title
    const titles = []

    for (const year in props.roadmap) {
      for (const quarter in props.roadmap[year]) {
        titles.push(props.roadmap[year][quarter].title)
      }
    }

    return titles.filter((title) => title !== props.currentRoadmapTitle).sort()
  })
</script>

<template>
  <div
    class="relative z-20 flex items-center gap-x-4 border-b border-orange py-2.5 pl-6"
  >
    <Icon
      class="h-6 w-6"
      name="material-symbols:home-app-logo"
    />
    <nav class="absolute top-1.5 left-16">
      <div
        class="space-y-2"
        @mouseenter="$emit('openRoadmapMenu')"
        @mouseleave="$emit('closeRoadmapMenu')"
      >
        <button
          type='button'
          aria-label="toggle roadmap menu"
          :aria-expanded="showRoadmapMenu"
          class="flex items-center rounded-md px-2 shadow"
        >
          {{ currentRoadmapTitle }}
          <Icon
            class="h-8 w-8 transition-[transform_colors] duration-500 ease-in-out"
            :class="{ '-rotate-180 text-orange': showRoadmapMenu }"
            name="material-symbols:arrow-drop-down-rounded"
          />
        </button>
        <Transition>
          <ul
            v-show="showRoadmapMenu"
            class="w-full space-y-2 rounded-md bg-[#91919a] px-2 py-4 shadow"
          >
            <template
              v-for="(title, index) in roadmapTitles"
              :key="index"
            >
              <li
                v-if="title"
                class="cursor-pointer rounded-md p-2 hover:bg-base-80/30"
                @click="
                  $emit('updateRoadmap', title.toLowerCase()),
                    $emit('closeRoadmapMenu')
                "
              >
                {{ title }}
              </li>
            </template>
          </ul>
        </Transition>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
