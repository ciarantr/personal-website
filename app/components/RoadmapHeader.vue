<script setup>
  const props = defineProps({
    showRoadmapMenu: {
      type: Boolean,
      required: true,
    },
    roadmapTitleOptions: {
      type: Array,
      required: true,
    },
    currentRoadmapTitle: {
      type: String,
      required: true,
    },
  })
  defineEmits([
    'closeRoadmapMenu',
    'openRoadmapMenu',
    'updateRoadmap',
    'isMenuActive',
  ])
</script>

<template>
  <div
    class="border-orange relative z-20 flex items-center gap-x-4 border-b py-2.5 pl-6"
  >
    <Icon
      class="h-6 w-6"
      name="material-symbols:home-app-logo"
    />
    <nav class="absolute left-16 top-1.5">
      <div
        class="space-y-2 capitalize"
        @mouseenter="$emit('openRoadmapMenu')"
        @mouseleave="$emit('closeRoadmapMenu')"
      >
        <button
          type="button"
          aria-label="toggle roadmap menu"
          :aria-expanded="showRoadmapMenu"
          class="flex items-center rounded-md px-2 !capitalize shadow"
          @click="$emit('isMenuActive')"
        >
          {{ currentRoadmapTitle }}
          <Icon
            class="h-8 w-8 transition-[transform_colors] duration-500 ease-in-out"
            :class="{ 'text-orange -rotate-180': showRoadmapMenu }"
            name="material-symbols:arrow-drop-down-rounded"
          />
        </button>
        <Transition>
          <ul
            v-show="showRoadmapMenu"
            class="w-full space-y-2 rounded-md bg-[#91919a] px-2 py-4 shadow"
          >
            <template
              v-for="(title, index) in roadmapTitleOptions"
              :key="index"
            >
              <li>
                <button
                  :class="{ 'bg-base-80/30': currentRoadmapTitle === title }"
                  :disabled="currentRoadmapTitle === title"
                  class="hover:bg-base-80/80 h-full w-full rounded-md p-2 capitalize"
                  @click="
                    $emit('updateRoadmap', index), $emit('closeRoadmapMenu')
                  "
                >
                  {{ title }}
                </button>
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
