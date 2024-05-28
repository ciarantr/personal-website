<script setup lang="ts">
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

  function emitData(index: number) {
    emit('changeTab', index)
  }
  const tabWidth = ref(0);
  const offset = ref(0);
</script>

<template>
  <ul
    role="tablist"
    class="tab-container G-container-shadow G-container-shadow-spacing-base relative row-start-2 grid gap-x-8 md:gap-x-0  grid-flow-col items-baseline overflow-x-auto md:row-start-1 md:mt-0 md:grid-flow-row"
  >
    <li
      v-for="(title, index) in tabTitle"
      :id="`tab-${index + 1}`"
      :key="index"
      class="relative h-full min-w-max cursor-pointer text-center transition-colors duration-700 md:grid md:items-center md:text-left "
      role="tab"
      tabindex="0"
      :aria-controls="`panel-${index + 1}`"
      :aria-selected="index === activeTab ? 'true' : 'false'"
      :class="[
        { 'highlight-tab': index === 0 },
        { 'active-tab': activeTab === index },
      ]"
      @keyup.enter="emitData(index)"
      @click="emitData(index), 
      tabWidth = $event.target.clientWidth, 
      offset = $event.target.offsetLeft"
    >
      {{ title }}
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
  /* Highlight selected tab */
  .highlight-tab::before {
    @apply bg-orange
    relative
    block
    h-[1.5px]
    rounded-md
    /* transition-[left] */
    duration-500
    content-[''];
    top: -14px;
    left: calc(v-bind(offset + 'px')  - 20px);
    transition: left 500ms, width 500ms;
    width: v-bind(tabWidth ? tabWidth   + 'px' : '100%');

    /* On screen sizes => 768px */
    @screen md {
      top: calc((100% * v-bind(activeTab)) + 25%);
      @apply absolute
      left-[-15px]
      h-[50%]
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
