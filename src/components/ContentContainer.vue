<script setup>
  defineProps({
    heading: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="G-container-shadow G-container-shadow-spacing-lg">
    <div>
      <h3>
        <span
          aria-hidden="true"
          class="text-base after:mx-1 after:text-[8px] after:content-['◍']"
        >
        </span>
        {{ heading }}
      </h3>
    </div>

    <div>
      <slot name="content-main" />
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  .G-container-shadow {
    /* Align horizontal line after heading */
    & div:first-of-type {
      @apply grid
      grid-cols-[auto,1fr]
      items-center
      gap-x-4
      text-2xl
      capitalize;

      /* Horizontal line after heading */
      &::after {
        @apply h-1
        w-full
        bg-base-40
  	    content-[''];
      }
    }
    /* padding after headings */
    & div:nth-child(2) {
      @apply pt-6;

      @screen md {
        @apply pt-10 pl-8;
      }
    }

    /* Counter to headings */
    h3::before {
      /* Increment the value of section counter by 1 */
      counter-increment: heading;
      content: counter(heading);
    }
  }
</style>
