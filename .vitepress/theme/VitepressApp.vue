<template>
    <AppLayoutError v-if="page.isNotFound"/>
    <AppLayoutIndex v-else-if="frontmatter.layout === 'home'" />
    <AppLayoutBlog v-else-if="frontmatter.layout === 'blog'" />
    <AppLayoutDefault v-else>
        <Content />
    </AppLayoutDefault>
</template>
<script setup lang="ts">
import { useData, Content } from 'vitepress'
const { page, frontmatter } = useData()
</script>