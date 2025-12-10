<template>

    <div class="mt-32 grid grid-cols-2 gap-32">

        <article class="flex flex-col gap-12">

            <div class="flex flex-col gap-4">
                <h1 class="text-7xl font-medium">
                    Write better <span class="text-laravel font-bold">Laravel</span> code
                </h1>
                <span class="text-lg text-gray-500">
                    Browse a complete library of opinionated Laravel best practices, expert tips & tricks and battle-tested code patterns to level up your development skills fast.
                </span>
            </div>
            <div class="w-full space-x-4">

                <AppFormButton href="/resources" class="w-fit">
                    Browse Library
                </AppFormButton>

                <AppFormButton theme="secondary" class="w-fit">
                    Contribute
                </AppFormButton>
            </div>
        </article>

        <article class="w-full flex justify-center items-center">
            <div class="w-lg h-96 bg-neutral-300 rounded-lg"/>
        </article>
    </div>
</template>