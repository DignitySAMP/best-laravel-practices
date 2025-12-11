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

/*
** FIXME: server should have a configuration for this tbh...
** This function updates the URL to properly aim at the localization link.
*/
import { getLanguagePreference } from "./cookies";
export function adjustLocalizationURL() {
    const lang = getLanguagePreference() || 'en';
    const { pathname, search, hash } = window.location;

    const segments = pathname.split('/').filter(Boolean); // split path into parts
    const currentPrefix = segments[0]; // first segment

    if (lang !== 'en' && currentPrefix === lang) return; // language is not english and URL has a prefix (expected behaviour), no change needed
    if (lang === 'en' && (!currentPrefix || currentPrefix === 'en')) return; // language is english and URL has no prefix (expected behaviour), no change needed

    let newPath = pathname;


    if (lang === 'en') {
        // current url first segment is a /lang/, but new language is english
        // must remove the segment to revert to english
        if (locales.some(l => l.lang === currentPrefix)) {
            segments.shift();
        }
        newPath = '/' + segments.join('/');
    } else {
        // new language isnt english, append the /lang/ prefix
        newPath = `/${lang}${pathname}`;
    }

    // FIX: this fixes an infinite loop where the path keeps changing infinitely...
    // only change the path if the newPath is different than pathname (currentPath)
    if (newPath !== pathname) {
        window.location.replace(newPath + search + hash);
    }
}
