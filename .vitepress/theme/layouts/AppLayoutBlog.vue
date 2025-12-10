<script lang="ts" setup>
import { data } from '../../data/blog.data'
</script>

<template>
  <section>
    <h1 class="text-3xl font-bold underline">All blogs</h1>

    <div class="mt-4 flex flex-col gap-2">
      <div v-for="post in data" class="flex flex-col gap-1">
        <span class="font-bold">{{ post.frontmatter.title }}</span>
        <span>{{ post.frontmatter.description }}</span>
        <span class="text-sm">{{ new Date(post.frontmatter.date).toLocaleString() }}</span>
        <a :href="post.url" class="text-blue-500 hover:underline">{{ post.url }}</a>
      </div>
    </div>
</section>
</template>