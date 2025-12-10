<template>
    <AppLayoutHeader/>
    <AppLayoutBody>
        <article class="h-full w-full flex flex-col justify-center items-center min-h-128">

            <h1 class="text-7xl font-bold text-red-600">
                Oops
            </h1>
            <h2 class="mt-8 text-3xl font-semibold">
                Something went <span class="text-red-600">wrong</span>!
            </h2>

            <span class="mt-4 text-lg">
                The page you tried to access could not be found.
            </span>

            <a class="mt-4 text-red-600 hover:underline flex gap-2" href="/">
                <div>
                    <IconRedirect class="size-5"/>
                </div>
                <span>
                    Return home
                </span>
            </a>

        </article>
    </AppLayoutBody>
    
</template>
<script setup lang="ts"/>