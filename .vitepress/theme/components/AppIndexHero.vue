<template>

    <div class="mt-32 grid grid-cols-2 gap-32">

        <article class="flex flex-col gap-4">

            <h1 class="text-7xl font-medium">
                Write better <span class="text-red-600">Laravel</span> code
            </h1>
            <span class="text-2xl text-gray-500">
                Browse a complete library of opinionated Laravel best practices, expert tips & tricks and battle-tested code patterns to level up your development skills fast.
            </span>
            <div class="w-full grid grid-cols-2 gap-6">
                <AppFormButton>
                    Browse Library
                </AppFormButton>
                <AppFormButton theme="secondary">
                    Contribute
                </AppFormButton>
            </div>
        </article>

        <article class="w-full flex justify-center items-center">
            <div class="w-lg h-96 bg-neutral-300 rounded-lg"/>
        </article>
    </div>
</template>