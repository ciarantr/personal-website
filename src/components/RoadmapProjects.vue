<script setup lang="ts">
  defineProps({
    roadmapMonths: {
      type: Object,
      required: true,
    },
    roadmapProjects: {
      type: Object,
      required: true,
    },
    roadmapLoading: {
      type: Boolean,
      required: true,
    },
  })

  const roadmapList = ref<HTMLDivElement | null>(null)

  onMounted(() => {
    // Set the height of the ul element to the height of the container scrollHeight
    //  Prevent the container from collapsing when the list is empty
    const lastElement = roadmapList.value?.lastElementChild as HTMLElement
    lastElement.style.minHeight = roadmapList.value?.scrollHeight + 'px'
  })
</script>

<template>
  <div
    ref="roadmapList"
    class="space-y-8 rounded-md p-4 md:px-4"
  >
    <div class="grid grid-flow-col">
      <div
        v-for="(months, index) in roadmapMonths"
        :key="index"
        class="border-b text-center"
      >
        {{ months }}
      </div>
    </div>

    <TransitionGroup
      name="list"
      tag="ul"
      class="grid grid-cols-3 grid-rows-5 gap-y-3"
    >
      <li
        v-for="({ title, status, area }, index) in roadmapProjects"
        v-show="!roadmapLoading"
        :key="title"
        :style="{
          'grid-row-start': `${area}`,
          'grid-column': `${index + 1} / span 2`,
          'transition-delay': `${index * 100}ms`,
        }"
        class="glass-effect mx-auto flex h-fit flex-wrap items-center justify-between gap-3 px-2 py-1 text-sm md:w-11/12 md:flex-initial"
      >
        <span class="min-w-max">{{ title }}</span>
        <span
          :data-status="`${status}`"
          class="relative rounded-full border border-orange py-[2px] px-2 text-xs first-letter:capitalize"
          :class="`status-${status}`"
          >{{ status }}</span
        >
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="postcss">
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  /* Project status */
  span {
    &::after {
      @apply absolute
      top-0
      left-0
      -z-10
      h-full
      rounded-full
      bg-base-40/30
      shadow
    content-[''];
    }

    &[data-status='complete']::after {
      @apply w-full;
    }

    &[data-status='in-progress']::after {
      @apply w-3/4;
    }
  }
</style>
