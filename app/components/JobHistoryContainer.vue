<script setup lang="ts">
  const jobHistory = [
    {
      name: 'ServiceNow',
      timeInJob: {
        start: '2024',
        end: 'Present',
      },
      position: ['Site Reliability Engineer - Intern (Cloud Operations)'],
      responsibilities: [
        'Performance Monitoring and Optimization',
        'Incident Response and Root Cause Analysis',
        'Automation of Deployment Processes',
        'Cross-team Collaboration for Service Reliability',
        'Cloud Infrastructure Management',
      ],
      website: 'https://www.servicenow.com',
    },
    {
      name: 'Freelance Web Developer',
      timeInJob: {
        start: '2024',
        end: '2024',
      },
      position: ['Web Developer'],
      responsibilities: [
        'Client Requirements Analysis',
        'Custom Web Design and Development',
        'Responsive Web Design Implementation',
        'Website Maintenance and Updates',
        'SEO Optimisation',
        'Technical Support and Troubleshooting',
      ],
      website: 'Coming soon...',
    },
    {
      name: 'Sports Direct',
      timeInJob: {
        start: '2024',
        end: '2024',
      },
      position: ['Sales Assistant'],
      responsibilities: [
        'Customer Care and Support',
        'Merchandising and Promotions Handling',
        'Inventory Control and Loss Prevention',
        'Product Knowledge and Sales Support',
        'Point of Sale Operations',
        'Teamwork and Collaboration',
      ],
      website: 'www.sportsdirect.com',
    },
    {
      name: 'Love Nature',
      timeInJob: {
        start: '2022',
        end: '2023',
      },
      position: ['Senior Web Developer'],
      responsibilities: [
        '	UX/UI Development and Maintenance',
        '	Security Best Practices Implementation',
        '	E-commerce Inventory Management',
        '	Promotional Design Updates',
        '	Web Performance Optimisation',
        '	Technical Leadership and Team Collaboration',
      ],
      website: 'lovenature.ie',
    },
    {
      name: 'Nourish',
      timeInJob: {
        start: '2019',
        end: '2020',
      },
      position: ['Manager'],
      responsibilities: [
        'Sales Strategy Development',
        'Customer Relationship Management',
        'Promotional Campaigns ',
        'Market Trend Analysis ',
        'Sales Training Programs',
        'Customer Feedback Implementation',
      ],
      website: 'www.nourish.ie',
    },
    {
      name: 'Natural Living',
      timeInJob: {
        start: 'January 2017',
        end: 'December 2018',
      },
      position: ['Business Owner', 'General Manager'],
      responsibilities: [
        '    Operations Management',
        'Financial Oversight',
        '	Marketing and Advertising Strategy',
        'E-Commerce Development',
        '	Inventory Control',
        'Customer Relations Management',
      ],
    },
  ]

  const jobNames = computed<Array<string>>(() =>
    jobHistory.map((el) => el.name),
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
