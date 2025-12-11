/*
** This holds all the possible languages and helper functions for localization.
*/

export interface Locale {
    label: string;
    lang: "en" | "nl";
    flag: string
}

export const locales: Locale[] = [
    {
        label: 'English',
        lang: "en",
        flag: '🇬🇧',
    },

    {
        label: 'Dutch',
        lang: "nl",
        flag: '🇳🇱',
    }
];

/*
** Maps a new object from the locales array to fit what 
** vitepress expects 'locales' to be in defineConfig...
*/
export const localeMap = Object.fromEntries(
    locales.map(locale => {
        const key = locale.lang === 'en' ? 'root' : locale.lang
        return [key, locale]
    })
)
