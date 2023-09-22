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
      <h2 class="text-xl">
        <span
          aria-hidden="true"
          class="after:mx-1 after:text-[8px] after:content-['◍']"
        >
        </span>
        {{ heading }}
      </h2>
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
      text-lg
      capitalize;

      /* Horizontal line after heading */
      &::after {
        @apply bg-base-40
        h-1
        w-full
  	    content-[''];
      }
    }
    /* padding after headings */
    & div:nth-child(2) {
      @apply pt-6;

      @screen md {
        @apply pl-8 pt-10;
      }
    }

    /* Counter to headings */
    h2::before {
      /* Increment the value of section counter by 1 */
      counter-increment: heading;
      content: counter(heading);
    }
  }
</style>
