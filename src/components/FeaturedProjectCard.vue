<script setup>
  defineProps({
    projectDetails: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <div class="mt-6 grid gap-y-12 pb-12 md:gap-y-24 text-base-90">
    <div
      v-for="details in projectDetails"
      :key="details.title"
      class="G-container-illuminate  lg:w-2/3 lg:even:justify-self-end"
    >
      <div>
        <!-- Project title -->
        <span
          class="absolute top-5 right-3 rounded-full border border-orange py-1 px-4 text-xs font-medium"
        >
          {{ details.title }}
        </span>
        <div class="space-y-6 pt-8">
          <!-- Project description -->
          <div class="space-y-2">
            <span class="underline underline-offset-2">Brief:</span>
            <p class="w-5/6">
              {{ details.description }}
            </p>
          </div>

          <!-- Project technologies -->
          <div class="space-y-2">
            <span class="block underline underline-offset-2"
              >Technologies used:
            </span>

            <!-- Technologies list -->
            <ul class="flex flex-wrap gap-x-2">
              <template
                v-for="(tech, index) in details.technologies"
                :key="tech"
              >
                <li>
                  {{ tech }}
                </li>
                <span
                  v-if="index !== details.technologies.size - 1"
                  aria-hidden="true"
                  >|
                </span>
              </template>
            </ul>
          </div>

          <!-- Project Links -->
          <div class="float-right space-x-3">
            <!-- Github project link -->
            <nuxt-link
              aria-label="link to github project"
              :to="details.githubLink"
              target="_blank"
            >
              <Icon
                class="h-6 w-6 transition-colors duration-500 hover:text-base-20"
                name="icon-park-outline:github"
              />
            </nuxt-link>

            <!-- Deployed project link -->
            <nuxt-link
              aria-label="link to deployed site"
              :to="details.deployedLink"
              target="_blank"
            >
              <Icon
                class="h-7 w-7 transition-colors duration-500 hover:text-base-20"
                name="tabler:external-link"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
