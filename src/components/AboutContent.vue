<script setup>
  const profileImageContainer = $ref(null)

  onMounted(() => {
    const profileImage = profileImageContainer.firstChild
    // Add a class to the profile image & border
    //  when intersection observer is triggered
    const observer = new IntersectionObserver(
      (entry) => {
        profileImage.classList.toggle('filter-none', entry[0].isIntersecting),
          profileImageContainer.classList.toggle(
            'border-shadow',
            entry[0].isIntersecting
          )
        // remove the observer after the first time it runs
        if (entry[0].isIntersecting) {
          observer.unobserve(entry[0].target)
        }
      },
      { threshold: 1 }
    )

    observer.observe(profileImageContainer)
  })
</script>

<template>
  <div
    class="G-container-shadow G-container-shadow-spacing-base space-y-8 md:grid md:grid-cols-[50%,auto] md:space-y-0"
  >
    <div
      ref="profileImageContainer"
      class="relative h-max md:ml-auto"
    >
      <nuxt-img
        provider="cloudinary"
        quality="100"
        loading="lazy"
        src="/ciarant.dev/profile_2x_bvxt15.jpg"
        width="175"
        height="175"
        class="relative z-20 rounded-md fill-none grayscale transition-all delay-150 duration-500 ease-in-out"
        alt="picture of me in my health store business"
        :modifiers="{ dpr: 2.0, f: 'auto' }"
      />
    </div>
    <p
      class="first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:text-base-20 md:row-start-1"
    >
      Welcome to my personal portfolio. I first began my coding journey back in
      2018 when I needed to develop a website for my health store business. I
      started with a small Wordpress website to reach out to customers and offer
      products online.
      <br /><br />
      Fast forward to 2020 & I decided to follow my passion and made the
      decision to change careers & become a web developer. Currently i'm
      studying full stack web development with the
      <nuxt-link
        class="underline-offset-3 inline-block underline after:content-['_↗']"
        to="https://codeinstitute.net"
        target="blank"
        >Code Institute</nuxt-link
      >
      with the goal of receiving a diploma in full stack software development.
      <br /><br />
      The skills I obtained over the last few years are predominately focused on
      frontend web development; I have however built web applications using
      backend technologies such as node.js & worked with databases, servers &
      API's. Write now my focus is on design & development of websites, however
      I would like to learn more about JavaScript data structures & algorithms
      along with Python for automation & more.
      <br /><br />
      I have a passion for web design, user experience & web performance & look
      forward to taking on new challenges, improving my knowledge & keeping up
      with latest web technologies and web standards.
    </p>
  </div>
</template>

<style scoped lang="postcss">
  /* border after image */
  div:first-of-type > div::after {
    @apply /*   
    width
    of 
    the
    image 
    */  absolute left-4 top-2 z-0 h-full w-[170px]
    rounded-md 
    border-2 
    border-base-40
    py-2
    transition-all duration-500 ease-in-out
     content-[''];
  }
  /* border shadow after image */
  .border-shadow::after {
    @apply shadow-md 
    shadow-orange;
  }
</style>
