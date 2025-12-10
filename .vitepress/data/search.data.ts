import type { ContentData } from 'vitepress'
import { createContentLoader } from 'vitepress'

declare const data: ContentData[]
export { data }

export default createContentLoader('resources/*.md', {
    transform: (data) => {
        return data;
    },
})