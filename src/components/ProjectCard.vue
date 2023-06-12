<script setup>
  defineProps({
    projectDetails: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <div class="text-base-90 mt-6 grid gap-y-12 pb-12 md:gap-y-24">
    <div
      v-for="details in projectDetails"
      :key="details.name"
      class="G-container-illuminate lg:w-2/3 lg:even:justify-self-end"
    >
      <div>
        <!-- Project title -->
        <span
          class="border-orange absolute right-3 top-5 rounded-full border px-4 py-1 text-xs font-medium"
        >
          {{ details.name }}
        </span>
        <div class="space-y-6 pt-8">
          <!-- Project description -->
          <div class="space-y-2">
            <span>Description</span>
            <p class="w-5/6">
              {{ details.description }}
            </p>
          </div>

          <!-- Project technologies -->
          <div class="space-y-2">
            <span class="">Technologies used </span>

            <!-- Technologies list -->
            <ul
              class="flex max-w-max flex-wrap gap-x-4 gap-y-4 rounded-lg border p-1 p-3 text-xs"
            >
              <li
                v-for="{ language, percentage } in details.languages"
                :key="language"
                class="flex gap-x-0.5"
              >
                <!-- technology color (global css) -->
                <span
                  aria-hidden="true"
                  :data-technology="language"
                >
                </span>

                {{ language }} {{ percentage }} %
              </li>
            </ul>
          </div>

          <div
            class="space-y-4 md:flex md:flex-wrap md:justify-between md:space-y-0"
          >
            <div class="space-y-2">
              <span>Topics</span>
              <ul class="grid grid-cols-2 rounded-lg border p-3 capitalize">
                <li
                  v-for="topic in details.topics"
                  :key="topic"
                  class="w-max px-4 py-1 text-xs font-medium"
                >
                  {{ topic }}
                </li>
              </ul>
            </div>
            <!-- Project Links -->
            <div class="space-x-3 md:self-end">
              <!-- Github project link -->
              <nuxt-link
                :to="details.html_url"
                aria-label="link to github project"
                target="_blank"
              >
                <Icon
                  class="hover:text-base-20 h-6 w-6 transition-colors duration-500"
                  name="icon-park-outline:github"
                />
              </nuxt-link>

              <!-- Deployed project link -->
              <nuxt-link
                aria-label="link to deployed site"
                :to="details.homepage"
                target="_blank"
              >
                <Icon
                  class="hover:text-base-20 h-7 w-7 transition-colors duration-500"
                  name="tabler:external-link"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
