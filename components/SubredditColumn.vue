<template>
  <div class="flex flex-col h-full">
    <h2 class="text-xl font-bold p-4 border-b border-gray-700 flex-shrink-0">{{ subredditName }}</h2>
    <div v-if="pending" class="p-4 flex-grow">Loading...</div>
    <div v-else-if="error" class="p-4 text-red-400 flex-grow">Error loading posts.</div>
    <ul v-else class="space-y-4 overflow-y-auto p-4 flex-grow">
      <li v-for="post in posts" :key="post.data.id" class="border-b border-gray-700 pb-4">
        <a :href="'https://www.reddit.com' + post.data.permalink" target="_blank" rel="noopener noreferrer" class="hover:underline text-gray-300 font-semibold">
          {{ decodeTitle(post.data.title) }}
        </a>
        <div class="text-xs text-gray-400 mt-2 flex items-center space-x-2">
          <span class="bg-gray-600 px-2 py-1 rounded-md">{{ post.data.num_comments }} comments</span>
          <span class="bg-gray-600 px-2 py-1 rounded-md">{{ post.data.ups }} upvotes</span>
          <span class="bg-gray-600 px-2 py-1 rounded-md">{{ formatTime(post.data.created_utc) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from 'date-fns';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const { data, pending, error } = await useFetch(props.url);

const subredditName = computed(() => {
  const match = props.url.match(/r\/([^/]+)/);
  return match ? `r/${match[1]}` : 'Subreddit';
});

const posts = computed(() => {
  if (data.value && data.value.data && data.value.data.children) {
    return data.value.data.children;
  }
  return [];
});

const formatTime = (utcTimestamp) => {
  const date = new Date(utcTimestamp * 1000);
  return formatDistanceToNow(date, { addSuffix: true });
};

const decodeTitle = (title) => {
  if (!title) return '';
  return title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
};
</script>
