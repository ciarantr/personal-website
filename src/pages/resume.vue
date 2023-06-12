<script setup lang="ts">
  definePageMeta({ layout: false })
  useHead({
    title: 'Resume',
  })
</script>

<template>
  <iframe
    title="Resume Ciaran Toner"
    role="document"
    loading="eager"
    class="mt-12 h-screen w-full"
    src="https://res.cloudinary.com/c-io/image/upload/dev-domain/resume-ciaran-toner.pdf"
    type="application/pdf"
  />
</template>
