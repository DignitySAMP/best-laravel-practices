<template>
    <AppLayoutHeader/>

    <AppLayoutBody>
        <Content />
    </AppLayoutBody>

    <div class="relative mt-40">
        <div class="absolute w-full justify-center flex gap-4">
            <div class="left-0 absolute w-64 h-full bg-linear-to-r from-white to-transparent"/>
            <div class="bg-neutral-300 w-96 h-64 p-2 rounded-lg"/>
            <div class="bg-neutral-300 w-lg h-72 p-2 rounded-lg"/>
            <div class="bg-neutral-300 w-2xl h-96 p-2 rounded-lg"/>
            <div class="bg-neutral-300 w-lg h-72 p-2 rounded-lg"/>
            <div class="bg-neutral-300 w-96 h-64 p-2 rounded-lg"/>
            <div class="right-0 absolute w-64 h-full bg-linear-to-l from-white to-transparent"/>
        </div>
    </div>
</template>
<script setup lang="ts">


</script>