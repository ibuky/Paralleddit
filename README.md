# Paralleddit

A web application that displays multiple subreddit threads in a TweetDeck-like interface.

## Features

- View multiple subreddits side-by-side in columns.
- Dark mode UI.
- Custom-styled scrollbars for a consistent look and feel.
- Relative time formatting for posts.

## Tech Stack

- [Nuxt.js](https://nuxt.com/)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/)

## Setup and Usage

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Configuration

To change the subreddits displayed in the application, modify the `subredditUrls` array in `nuxt.config.ts`.

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  runtimeConfig: {
    public: {
      subredditUrls: [
        'https://www.reddit.com/r/reactjs/.json',
        'https://www.reddit.com/r/vuejs/.json',
        'https://www.reddit.com/r/sveltejs/.json',
        // Add more subreddit URLs here
      ]
    }
  }
})
```
