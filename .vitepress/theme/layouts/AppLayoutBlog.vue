<script lang="ts" setup>

const { frontmatter } = useData()
import { data } from '../../data/blog.data'
</script>

<template>
  <AppLayoutHeader/>

  <AppLayoutBody>
    <div class="flex text-gray-500 gap-2 mt-8 mb-8">
      <IconHome class="size-6"/>
      <a href="/" class="hover:underline">
        Back to Home
      </a>
    </div>

    <div class="p-6 border border-gray-300 rounded-lg">
      <h1 class="text-3xl">
        {{ frontmatter.title }}
      </h1>
      <h3 class="text-lg">
        {{frontmatter.description}}
      </h3>
    </div>
    
    <section class="mt-8 divide-y divide-gray-400 flex flex-col gap-6 px-16">
      <AppBlogCard v-for="(post, index) in data" :key="index" :post="post"/>
    </section>


</AppLayoutBody>
</template>