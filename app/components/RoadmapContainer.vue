<script setup>
  //  TODO: move data to db
  const roadmap = [
    {
      title: 'Interface Design and Web Development',
      description: '',
      half: 'h1',
    },
    {
      title: "CS50's Introduction to Computer Science",
      description: '',
      half: 'h1',
    },
    {
      title: 'Computer Technology 1',
      description: '',
      half: 'h1',
    },
    {
      title: 'Programming Paradigms and Data Structures',
      description: '',
      half: 'h1',
    },
    {
      title: 'Introduction to React: Building Dynamic Web Applications',
      description: '',
      half: 'h1',
    },
    {
      title: 'Computing Fundamentals 2',
      description: '',
      half: 'h2',
    },
    {
      title: 'Object Oriented Programming',
      description: '',
      half: 'h2',
    },
    {
      title: 'Computer Technology 2',
      description: '',
      half: 'h2',
    },
    {
      title: 'IOS App Development with Swift',
      description: '',
      half: 'h2',
    },
    {
      title: 'Programming and Algorithms 2',
      description: '',
      half: 'h2',
    },
    {
      title: 'Database Systems',
      description: '',
      half: 'h2',
    },
  ]

  // Get the current year
  const currentYear = ref()
  currentYear.value = new Date().getFullYear()
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // Check if we're in the first half or the second half of the year
  const yearPeriod = ref()
  yearPeriod.value = new Date().getMonth() < 6 ? 'h1' : 'h2'

  const roadmapTitleOptions = ['roadmap 2024 (h1)', 'roadmap 2024 (h2)']

  const currentRoadmapTitle = computed(() => {
    return currentYear.value === 2024
      ? `roadmap ${currentYear.value} (${yearPeriod.value})`
      : `roadmap 2024 (h1)`
  })

  const currentRoadmap = computed(() => {
    return currentRoadmapTitle.value.includes('h1')
      ? h1Projects.value
      : h2Projects.value
  })

  const h1Projects = computed(() =>
    roadmap.filter((project) => project.half === 'h1'),
  )
  const h2Projects = computed(() =>
    roadmap.filter((project) => project.half === 'h2'),
  )

  const roadmapContainer = ref(null)
  const showRoadmapMenu = ref(false)
  const roadmapLoading = ref(false)

  const roadmapDisplayMonths = computed(() => {
    if (currentRoadmapTitle.value.includes('h1')) {
      return months.slice(0, 6)
    } else {
      return months.slice(6)
    }
  })

  function updateRoadMap(roadmapPeriod) {
    roadmapLoading.value = true

    setTimeout(() => {
      currentYear.value = 2024

      if (roadmapPeriod === 0) {
        yearPeriod.value = 'h1'
      } else {
        yearPeriod.value = 'h2'
      }
      roadmapLoading.value = false
    }, 750)
  }

  onMounted(() => {
    const roadmapHeading = roadmapContainer.value.firstElementChild
    createObserver({
      observeTarget: roadmapContainer.value,
      target: roadmapHeading,
      style: '!translate-y-0',
      threshold: 0.3,
    })
  })
</script>

<template>
  <div
    ref="roadmapContainer"
    class="text-base-10 relative space-y-2"
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
    <div class="glass-effect space-y-8 rounded-md px-2 pb-6 shadow-sm">
      <Icon
        class="absolute right-40 top-0 h-full w-1/2 opacity-5"
        name="raphael:roadmap"
      />
      <!--:is-roadmap-menu="showRoadmapMenu === true ? showRoadmapMenu = false : showRoadmapMenu = true"-->

      <RoadmapHeader
        class="glass-effect"
        :roadmap="roadmap"
        :current-roadmap-title="currentRoadmapTitle"
        :roadmap-title-options="roadmapTitleOptions"
        :current-roadmap="currentRoadmap"
        :show-roadmap-menu="showRoadmapMenu"
        @is-menu-active="
          showRoadmapMenu === true
            ? (showRoadmapMenu = false)
            : (showRoadmapMenu = true)
        "
        @open-roadmap-menu="showRoadmapMenu = true"
        @close-roadmap-menu="showRoadmapMenu = false"
        @update-roadmap="updateRoadMap"
      />
      <div class="overflow-x-auto pb-4">
        <RoadmapProjects
          class="glass-effect min-w-[550px]"
          :roadmap-months="roadmapDisplayMonths"
          :roadmap-projects="currentRoadmap"
          :roadmap-loading="roadmapLoading"
        />
      </div>
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
