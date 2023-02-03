<script setup lang="ts">
  const jobHistory = [
    {
      name: 'Love Nature',
      timeInJob: {
        start: 'June 2021',
        end: 'current',
      },
      position: ['developer online store'],
      responsibilities: [
        'Ux / Ui developer & maintainer',
        'Implementing security best practices',
        'Updating & maintaining store inventory',
        'Updating design for promotional campaigns',
      ],
      website: 'lovenature.ie',
    },
    {
      name: 'Nourish',
      timeInJob: {
        start: 'January 2019',
        end: 'March 2021',
      },
      position: ['Assistant manager', 'Manager'],
      responsibilities: [
        'Coaching, mentoring, and leading a team of 12',
        'Planning, prioritizing & delegation tasks to the team',
        'Ensured a culture of excellent customer service was maintained always',
        'Merchandising store & promotional items to ensure sales targets where met & provide a great customer experience ',
        'Inventory management & loss prevention',
      ],
      website: 'www.nourish.ie',
    },
    {
      name: 'Natural Living',
      timeInJob: {
        start: 'January 2017',
        end: 'December 2018',
      },
      position: ['Managing Director', 'Manager'],
      responsibilities: [
        'Managing daily operations as general manager',
        'Business finances & general accounting',
        'Marketing, advertising & sales; both in-store & online store',
      ],
    },
  ]

  const jobNames = computed<Array<string>>(() =>
    jobHistory.map((el) => el.name)
  )
  const activeTab = ref<number>(0)

  function changeTab(index: number): void {
    activeTab.value = index
  }
</script>

<template>
  <div class="grid gap-y-6 md:grid-cols-[auto,1fr] md:gap-x-8 md:gap-y-0">
    <JobHistoryTab
      :tab-title="jobNames"
      :active-tab="activeTab"
      @change-tab="changeTab"
    />
    <JobHistoryContent
      :job-history="jobHistory"
      :active-tab="activeTab"
    />
  </div>
</template>
