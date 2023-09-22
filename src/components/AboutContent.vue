<script setup lang="ts">
  const profileImageContainer = ref<HTMLDivElement | null>(null)

  onMounted(() => {
    const profileImage = profileImageContainer.value?.firstElementChild
    // Add a class to the profile image & border
    //  when intersection observer is triggered
    const observer = new IntersectionObserver(
      (entry) => {
        profileImage?.classList.toggle('!grayscale-0', entry[0].isIntersecting)
        profileImageContainer.value?.classList.toggle(
          'border-shadow',
          entry[0].isIntersecting,
        )
      },
      { threshold: 1 },
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
        src="/ciaran-toner.png"
        width="125"
        height="125"
        class="delay-125 bg-base-40 relative z-20 rounded-md transition-all duration-500 ease-in-out"
        alt="Ciaran's profile image"
        :modifiers="{ dpr: 2.0, f: 'auto' }"
      />
    </div>

    <div class="space-y-8 md:row-start-1 lg:w-3/4">
      <div>
        <p
          class="first-letter:text-base-20 first-letter:float-left first-letter:mr-3 first-letter:text-5xl"
        >
          Hello there! A little about me: I'm a web developer, designer, and
          entrepreneur. My venture into the digital realm commenced in 2017 when
          I established a WordPress website for my business. Subsequently, I
          embarked on a journey to enhance my skills and successfully obtained a
          diploma in Full Stack Software Development from
          <a
            class="text-orange inline-block after:text-xs after:content-['_↗']"
            href="https://codeinstitute.net/ie/"
            target="_blank"
            >Code Institute</a
          >
          Currently, I am further deepening my understanding of software
          development by pursuing a BSc in Computing at the Technological
          University of Dublin.
        </p>
      </div>

      <p>
        Fueled by my belief in technology's capacity to redefine businesses and
        lives, I'm continually on the lookout for new challenges and
        opportunities to enhance my knowledge and skills.
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  /* border after image */
  #profile-image-container::after {
    @apply /* width of image*/
    border-base-40
    absolute left-4 top-2 z-0 h-full
    w-[125px]
    rounded-md
    border-2
    py-2
    transition-all duration-500 ease-in-out
    content-[''];
  }

  /* border shadow after image
    Added with intersection observer
  */
  .border-shadow::after {
    @apply shadow-orange
    shadow-md;
  }
</style>
