<script setup lang="ts">
  const profileImageContainer = ref<HTMLDivElement | null>(null)
  const yearsOfExperience = computed(() => {
    const currentYear = new Date().getFullYear()
    const firstYearOfExperience = 2020
    return currentYear - firstYearOfExperience
  })

  onMounted(() => {
    const profileImage = profileImageContainer.value?.firstElementChild
    // Add a class to the profile image & border
    //  when intersection observer is triggered
    const observer = new IntersectionObserver(
      (entry) => {
        profileImage?.classList.toggle('!grayscale-0', entry[0].isIntersecting)
        profileImageContainer.value?.classList.toggle(
          'border-shadow',
          entry[0].isIntersecting
        )
      },
      { threshold: 1 }
    )
    if (profileImageContainer.value)
      observer.observe(profileImageContainer.value)
  })
</script>

<template>
  <div
    class="G-container-shadow G-container-shadow-spacing-base space-y-8 md:grid md:grid-cols-[60%,auto] md:space-y-0"
  >
    <div
      id="profile-image-container"
      ref="profileImageContainer"
      class="relative h-max md:place-self-center"
    >
      <nuxt-img
        provider="cloudinary"
        quality="100"
        loading="lazy"
        src="/ciarant.dev/portfolio-ciaran.jpg"
        width="125"
        height="125"
        class="delay-125 relative z-20 rounded-md bg-base-40 grayscale transition-all duration-500 ease-in-out"
        alt="picture of me in my health store business"
        :modifiers="{ dpr: 2.0, f: 'auto' }"
      />
    </div>

    <div class="md:row-start-1">
      <p>
        <span class="float-left mr-2 text-6xl text-base-20">Hi,</span> my name
        is Ciaran, a web developer from Dublin, Ireland. I currently have
        {{ yearsOfExperience }} years experience in web development, & worked on
        a wide range of projects from small static websites to large scale web
        applications using a wide range of technologies and frameworks including
        Vue.js, Node, Express, MongoDB, MySQL, TailwindCSS, Bootstrap, jQuery,
        HTML, CSS, JavaScript, TypeScript, Git, Heroku, Netlify, Vercel, Nginx,
        Linux, and more.
      </p>
      <br />

      <p>
        I have a passion for web development, & delivering high quality,
        performant, and accessible web applications. I am currently studying at
        the
        <NuxtLink
          class="underline hover:text-base-90"
          target="_blank"
          to="https://codeinstitute.net"
          >Code Institute
        </NuxtLink>
        <icon name="lucide:external-link" />
        to improve my knowledge and skills in full-stack web development.
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  /* border after image */
  #profile-image-container::after {
    @apply /*
    width
    of
    image*/
    absolute
    left-4 top-2 z-0 h-full w-[125px]
    rounded-md
    border-2
    border-base-40
    py-2
    transition-all duration-500 ease-in-out
    content-[''];
  }

  /* border shadow after image
    Added with intersection observer
  */
  .border-shadow::after {
    @apply shadow-md
    shadow-orange;
  }
</style>
