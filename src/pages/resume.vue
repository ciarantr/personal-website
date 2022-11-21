<script setup>
  definePageMeta({ layout: false })
  useHead({
    title: 'Resume.pdf',
  })
</script>

<template>
  <div class="h-screen bg-base-30">
    <embed
      class="h-full w-full"
      src="/data/ciaran-toner-resume.pdf"
      type="application/pdf"
    />
  </div>
</template>
