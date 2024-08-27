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
      class="G-container-illuminate shadow-lg lg:w-2/3 lg:even:justify-self-end"
    >
      <div>
        <!-- Project title -->
        <div class="space-y-6">
          <h5 class="border-orange h-max w-max border-b capitalize">
            {{ details.name }}
          </h5>
          <div class="G-container-illuminate p-3.5 hover:!border-none">
            <nuxt-img
              provider="cloudinary"
              class="aspect-video w-full rounded-md object-cover object-top"
              :src="`/${details.imageUrl}.webp`"
              :alt="`${details.name} project`"
              :modifiers="{ dpr: 'auto', f: 'auto' }"
              quality="100"
              fit="cover"
              loading="lazy"
              width="624"
              height="350"
            />
          </div>
        </div>
        <div class="space-y-8 pt-8 sm:pt-16">
          <!-- Project description -->
          <div>
            <p class="text-sm sm:w-5/6">
              {{ details.description }}
            </p>
          </div>

          <!-- Project technologies -->
          <div>
            <!-- Technologies list -->
            <ul
              class="flex max-w-max flex-wrap gap-x-4 gap-y-4 rounded-lg text-xs"
            >
              <li
                v-for="{ language, percentage } in details.languages"
                :key="language"
                class="flex gap-x-0.5"
                :data-technology="language"
              >
                <!-- technology color (global css) -->
                <!-- <span
                  aria-hidden="true"
                  :data-technology="language"
                >
                </span> -->

                {{ language }} {{ percentage }}%
              </li>
            </ul>
          </div>

          <!-- Project Links -->
          <div class="flex justify-end gap-x-2">
            <!-- Github project link -->
            <nuxt-link
              :to="details.html_url"
              aria-label="link to github project"
              target="_blank"
            >
              <Icon
                class="hover:text-base-20 h-5 w-5 transition-colors duration-500"
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
                class="hover:text-base-20 h-5 w-5 transition-colors duration-500"
                name="mynaui:external-link"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
