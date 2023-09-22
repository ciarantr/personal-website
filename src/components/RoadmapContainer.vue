<script setup>
  const roadmap = {
    2022: {
      q4: {
        title: 'Q4 Roadmap 2022',
        months: ['Oct', 'Nov', 'Dec'],
        projects: [
          {
            title: 'Code Institute Project 1',
            description: '',
            status: 'complete',
            area: 1,
          },
          {
            title: 'Code Institute Project 2',
            description: '',
            status: 'in-progress',
            area: 2,
          },
          {
            title: 'Code Institute Project 3',
            description: '',
            status: 'todo',
            area: 3,
          },
        ],
      },
    },
    2023: {
      q1: {
        title: 'Q1 Roadmap 2023',
        projects: [
          {
            title: 'Code Institute Project 3',
            description: '',
            status: 'Todo',
            area: 1,
          },
          {
            title: 'TypeScript',
            description: '',
            status: 'Todo',
            area: 2,
          },
          {
            title: 'Continues Integration',
            description: '',
            status: 'Todo',
            area: 3,
          },
          {
            title: 'Code Institute Project 4',
            description: '',
            status: 'Todo',
            area: 4,
          },
        ],
        months: ['Jan', 'Feb', 'Mar'],
      },
      q2: {
        title: 'Q2 Roadmap 2023',
        months: ['Apr', 'May', 'Jun'],
        projects: [
          {
            title: 'Code Institute Project 4',
            description: '',
            status: 'Todo',
            area: 1,
          },
          {
            title: 'Algorithms & Data Structures (JS)',
            description: '',
            status: 'Todo',
            area: 2,
          },
          {
            title: 'Code Institute Project 5',
            description: '',
            status: 'Todo',
            area: 3,
          },
        ],
      },
    },
  }

  const currentRoadmapDates = ref({
    roadmapYear: 2023,
    roadmapQuarter: 'q1',
  })

  const roadmapContainer = ref(null)
  const showRoadmapMenu = ref(false)
  const roadmapLoading = ref(false)
  const getRoadmap = ({ year, quarter }) => roadmap[year][quarter]
  // Return roadmap data for the current roadmap year and quarter
  const currentRoadmap = computed(() => {
    return getRoadmap({
      year: currentRoadmapDates.value.roadmapYear,
      quarter: currentRoadmapDates.value.roadmapQuarter,
    })
  })

  function updateRoadMap(roadmapTitle) {
    const roadmapYear = roadmapTitle.substring(roadmapTitle.length - 4)
    const roadmapQuarter = roadmapTitle.substring(0, 2)

    currentRoadmapDates.value.roadmapYear = Number(roadmapYear)
    currentRoadmapDates.value.roadmapQuarter = roadmapQuarter

    roadmapLoading.value = true

    setTimeout(() => {
      roadmapLoading.value = false
    }, 1000)
  }

  onMounted(() => {
    const roadmapHeading = roadmapContainer.value.firstElementChild
    createObserver({
      observeTarget: roadmapContainer.value,
      target: roadmapHeading,
      style: '!translate-y-0',
      threshold: 1,
    })
  })
</script>

<template>
  <div
    ref="roadmapContainer"
    class="text-base-10 relative space-y-2 overflow-y-auto"
  >
    <div class="translate-y-12 transition-transform duration-1000 ease-in-out">
      <div>
        <h3 class="inline text-center text-6xl">Roadmap</h3>
        <Icon
          class="text-base-20 ml-4 h-10 w-10 !align-baseline"
          name="raphael:roadmap"
        />
      </div>
    </div>
    <div
      class="glass-effect space-y-8 overflow-auto rounded-md px-2 pb-6 shadow-sm"
    >
      <Icon
        class="absolute right-40 top-0 h-full w-1/2 opacity-5"
        name="raphael:roadmap"
      />

      <RoadmapHeader
        class="glass-effect"
        :roadmap="roadmap"
        :current-roadmap-title="currentRoadmap.title"
        :current-roadmap="currentRoadmap"
        :show-roadmap-menu="showRoadmapMenu"
        @open-roadmap-menu="showRoadmapMenu = true"
        @close-roadmap-menu="showRoadmapMenu = false"
        @update-roadmap="updateRoadMap"
      />

      <RoadmapProjects
        class="glass-effect min-w-[550px]"
        :roadmap-months="currentRoadmap.months"
        :roadmap-projects="currentRoadmap.projects"
        :roadmap-loading="roadmapLoading"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
  /*
**************************
  Accessibility styles
 ************************** */
  @media (prefers-contrast: more) {
    :deep(.glass-effect) {
      @apply !bg-base-90/50
      !text-base-10;

      & li span {
        @apply !text-base-10;
      }
    }
  }

  :deep(.glass-effect) {
    @apply border-base-90/20
  bg-base-90/10
  rounded-xl
  border
  shadow-md
  backdrop-blur-sm;
  }
</style>
