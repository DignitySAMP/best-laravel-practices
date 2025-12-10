<template>
    <article class="pb-4 w-full flex items-center justify-between">
        <div class="flex flex-col min-w-64">
            <span class="text-xs text-gray-500">Added by</span>
            <span class="font-bold text-red-400">{{ post.frontmatter.author }}</span>
            <span class="text-sm text-gray-500">{{ new Date(post.frontmatter.date).toDateString() }}</span>
        </div>

        <div class="w-full grid grid-cols-[1fr_auto] items-center text-gray-600">
            <div class="flex flex-col">
                <span class="font-bold">{{ post.frontmatter.title }}</span>
                <span>{{ post.frontmatter.description }}</span>
                <div class="w-full flex gap-2 flex-wrap" v-if="post.frontmatter.tags?.length > 0">
                    <span class="text-xs px-3 py-0.5 bg-red-100 text-red-700 rounded-lg" v-for="tag in post.frontmatter.tags?.split(',')">{{ tag }}</span>
                </div>
            </div>

            <a :href="post.url" class="flex  justify-center items-center flex-col">
                <IconRedirect class="rotate-180 size-16 text-red-100"/>
                <span class="text-xs text-red-300">
                    Read Full Article
                </span>
            </a>
        </div>
    </article>
</template>
<script setup lang="ts">
import { type ContentData } from 'vitepress'
defineProps<{ post: ContentData }>();
</script>