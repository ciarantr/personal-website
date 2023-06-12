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
        src="/ciaran-toner.png"
        width="125"
        height="125"
        class="delay-125 bg-base-40 relative z-20 rounded-md transition-all duration-500 ease-in-out"
        alt="Ciaran's profile image"
        :modifiers="{ dpr: 2.0, f: 'auto' }"
      />
    </div>

    <div class="md:row-start-1">
      <p>
        <span class="text-base-20 float-left mr-2 text-6xl">Hi,</span>
        i'm Ciaran a Full-Stack web developer with a passion for technology and
        a hunger to learn, I am eager to take on new challenges and make my mark
        in the industry. While I may be early in my career, I bring a fresh
        perspective and a hunger to learn that allows me to approach challenges
        with a unique and innovative mindset. Whether working on personal
        projects or collaborating with others, I approach every task with
        enthusiasm and a commitment to excellence.<br /><br />
        What sets me apart is my ability to think creatively and outside the
        box, and my willingness to take on new technologies and techniques. With
        a strong work ethic and a dedication to continuous improvement, I am
        confident that I can make a valuable contribution to any team looking to
        drive innovation and achieve its goals.
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
