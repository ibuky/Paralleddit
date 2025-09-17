<template>
  <div class="bg-gray-900 text-white h-screen flex flex-col">
    <div class="flex-grow p-4 overflow-y-hidden">
      <div class="h-full overflow-x-auto pb-4">
        <div class="flex space-x-4 h-full">
          <div v-for="url in subredditUrls" :key="url" class="bg-gray-800 rounded-lg flex flex-col w-[350px] flex-shrink-0">
            <SubredditColumn :url="url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubredditColumn from '~/components/SubredditColumn.vue';

const config = useRuntimeConfig();
const subredditUrls = config.public.subredditUrls;
</script>