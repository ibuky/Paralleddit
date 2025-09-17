// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      subredditUrls: [
        'https://www.reddit.com/r/LocalLLaMA/hot/.json',
        'https://www.reddit.com/r/Bard/.json',
        'https://www.reddit.com/r/comfyui/hot/.json',
        'https://www.reddit.com/r/LLMDevs/.json',
        'https://www.reddit.com/r/ollama/hot/.json',
        'https://www.reddit.com/r/OpenWebUI/hot/.json',
      ]
    }
  }
})
