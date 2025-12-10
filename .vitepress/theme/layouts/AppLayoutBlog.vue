<script lang="ts" setup>

const { frontmatter } = useData()
import { data } from '../../data/blog.data'
</script>

<template>
  <section>
    <h1 class="text-3xl font-bold underline">
      {{ frontmatter.title }}
    </h1>
    <h3 class="text-lg">
      {{frontmatter.description}}
    </h3>

    <section class="space-y-4">
      <AppLayoutBlogCard v-for="(post, index) in data" :key="index" :post="post"/>
    </section>

    <div>
      <a href="/" class="text-blue-500 hover:underline">
        Back to home
      </a>
    </div>
</section>
</template>