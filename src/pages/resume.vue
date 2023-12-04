<script setup lang="ts">
  definePageMeta({ layout: false })
  useHead({
    templateParams: {
      separator: '•',
      titleExtra: 'Full stack web developer',
    },
    title: 'Resume',
    titleTemplate: '%s %separator %siteName %separator %titleExtra',
  })
  defineOgImage({
    component: 'TheBaseOg',
    title: 'Transforming Ideas into Powerful Solutions',
  })
  const runtimeConfig = useRuntimeConfig()
  const cloudinaryURL = runtimeConfig.public.cloudinaryURL
</script>

<template>
  <iframe
    title="Resume Ciaran Toner"
    role="document"
    loading="eager"
    class="mt-12 h-screen w-full"
    :src="cloudinaryURL + 'resume-ciaran-toner.pdf'"
    type="application/pdf"
  />
</template>
