<script setup>
  const emit = defineEmits(['changeTab'])

  defineProps({
    tabTitle: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: Number,
      required: true,
      default: 0,
    },
  })

  function emitData(index) {
    emit('changeTab', index)
  }
</script>

<template>
  <ul
    role="tablist"
    class="tab-container G-container-shadow G-container-shadow-spacing-base relative row-start-2  grid auto-cols-[minmax(100px,1fr)]  grid-flow-col md:row-start-1 md:mt-0 md:grid-flow-row overflow-x-auto items-center"
  >
    <li
      v-for="(title, index) in tabTitle"
      :key="index"
      role="tab"
      :class="[
        { 'active-tab-before': index === 0 },
        { 'active-tab': activeTab === index },
      ]"
      class="relative h-full text-center transition-colors duration-700 md:grid md:items-center min-w-max"
    >
      <button
        tabindex="0"
        :aria-label="`job information for ${title} `"
        class="G-border-animate max-w-max cursor-pointer  capitalize md:h-max md:pt-0 md:text-left"
        @keyup.enter="emitData(index)"
        @click="emitData(index)"
      >
        {{ title }}
      </button>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
  /* Highlight selected tab */
  .active-tab-before::before {
    @apply relative
    block
    h-[1.5px]
    w-1/2
    rounded-md
    bg-orange
    transition-[left]
    duration-500
    content-[''];
    top: -14px;
    left: calc((33.33% * (3 * v-bind(activeTab))) + 25%);

    /* On screen sizes => 768px */
    @screen md {
      top: calc((100% * v-bind(activeTab)) + 25px);
      @apply absolute
      left-[-15px]
      h-1/2
      w-[3px]
      transition-[top];
    }
  }

   /* Change button color when active tab is true  */
  .active-tab {
    > button {
      color: hsl(var(--base-90));
    }
  }
</style>
