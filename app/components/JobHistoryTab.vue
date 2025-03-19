<script setup lang="ts">
  // TODO: refactor updateActiveTab
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
  const tabWidth = ref(null as number | null);
  const offset = ref(20);

 // Function to update dimensions and active tab
function updateActiveTab( event: MouseEvent) {
  activeAndInitialValues(event.target as HTMLElement);
}

// Function to set both initial and active values
function activeAndInitialValues(element: HTMLElement) {
  tabWidth.value = element.clientWidth;
  offset.value = element.offsetLeft;
}
</script>

<template>
  <ul
    role="tablist"
    class="tab-container G-container-shadow G-container-shadow-spacing-base relative row-start-2 grid gap-x-8 md:gap-x-0  grid-flow-col items-baseline  md:row-start-1 md:mt-0 md:grid-flow-row  overflow-x-auto md:overflow-x-hidden overflow-y-clip"
  >
    <li
    v-for="(title, index) in tabTitle"
    :id="`tab-${index + 1}`"
    :key="index"
      :style="{
        '--offset': `${offset - 20}px`,
        '--tab-width': tabWidth ? `${tabWidth}px` : '100%'
        }"
      class="relative md:h-full min-w-max cursor-pointer text-center transition-colors duration-700 md:grid md:items-center md:text-left  "
      role="tab"
      tabindex="0"
      :aria-controls="`panel-${index + 1}`"
      :aria-selected="index === activeTab ? 'true' : 'false'"
      :class="[
        { 'highlight-tab': index === 0 },
        { 'active-tab': activeTab === index },
      ]"
      @keyup.enter="emitData(index)"
      @click="emitData(index),  updateActiveTab( $event)"
    >
      {{ title }}
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
  /* Highlight selected tab */
  .highlight-tab::before {
    @apply bg-orange
    absolute
    block
    h-[1.5px]
    rounded-md
    duration-500
    content-[''];
    top: -14px;
    transition: left 500ms, width 500ms;
    left: var(--offset);
    width: var(--tab-width);

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
