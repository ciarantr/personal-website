<script setup lang="ts">
  defineProps({
    roadmapMonths: {
      type: Array,
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
    class="space-y-8 rounded-md p-4 md:px-4  overflow-hidden"
  >
    <div
      class="grid grid-flow-col border-b h-7 "
    >
      <div
        v-for="(months, index) in roadmapMonths"
        :key="index"
        class="text-center"
      >
        {{ months }}
      </div>
    </div>


    <TransitionGroup
      name="list"
      tag="ul"
      class="grid grid-cols-3 grid-rows-5 gap-y-8 "
    >
      <li
        v-for="({ title }, index) in roadmapProjects"
        v-show="!roadmapLoading"
        :key="title"
        :style="{
          'grid-row-start': `${index + 1}`,
          'grid-column': `${index + 1} / span 2`,
          'transition-delay': `${index * 100}ms`,
        }"
        class="glass-effect h-fit min-w-max px-2.5 py-1.5 text-sm"
      >
        {{ title }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="postcss">
  .list-enter-active,
  .list-leave-active {
    transition: opacity 0.5s ease-in, transform 0.5s ease-in;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
