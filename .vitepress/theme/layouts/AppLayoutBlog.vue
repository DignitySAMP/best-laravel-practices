<script lang="ts" setup>
import { data } from '../../data/blog.data'
</script>

<template>
  <section>
    <h1>Blog</h1>

    <div class="flex flex-col gap-2">
      <div v-for="post in data" class="flex flex-col gap-1">
        <span>{{ post.frontmatter.title }}</span>
        <span>{{ post.frontmatter.description }}</span>
        <span>{{ post.frontmatter.date }}</span>
        <span>{{ post.url }}</span>
      </div>
    </div>
</section>
</template>