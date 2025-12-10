<template>
    <a :href="post.url">
        <article class="p-4 flex flex-col hover:bg-gray-100">
            <span class="font-bold">{{ post.frontmatter.title }}</span>
            <span>{{ post.frontmatter.description }}</span>
            <span class="text-sm">{{ new Date(post.frontmatter.date).toLocaleString() }}</span>
        </article>
    </a>
</template>
<script setup lang="ts">
import { type ContentData } from 'vitepress'
defineProps<{ post: ContentData }>();
</script>