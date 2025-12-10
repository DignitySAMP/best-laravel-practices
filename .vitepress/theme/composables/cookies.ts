// Preferences are originally disclosed through @/theme/components/AppCookie

/*
** Repository of all cookies on the website
*/

export interface Cookie {
    name: string;
    slug: string;
    description: string;
    type: "necessary" | "preference"; // | "marketing" | "statistics" | ...
}

export const CookieRepository: Cookie[] = [
    {
        name: "Cookie Preferences",
        slug: "cookie_preference",
        description: "This cookie stores the choice(s) you made when viewing your cookie preferences, whether you choose to only save necessary cookies or allow specific types.",
        type: "necessary",
    },
    {
        name: "Language",
        slug: "language",
        description: "This cookie stores your choice of language. This cookie gets manipulated once you change your preferred language",
        type: "preference",
    },
    {
        name: "Theme preference",
        slug: "theme",
        description: "This cookie stores your theme preference. This cookie gets manipulated once you switch between light or dark mode.",
        type: "preference",
    },
]

/*
** Utils to get/set specific preferences
*/

export function setCookiePreference(choice: string) {
    setCookie('cookie_preference', choice);
    return;
}
export function getCookiePreference() {
    return getCookie('cookie_preference') === 'true';
}

// Important: if getCookiePreference is false, do not allow the handling of any other cookies.
export function setLanguagePreference(choice: string) {
    if (getCookiePreference()) {
        setCookie('language', choice);
    }
    return;
}
export function getLanguagePreference() {
    if (getCookiePreference()) {
        const result = getCookie('language');
        return result?.length > 0 ? result : 'English';
    }
    return 'English';
}

export function setThemePreference(choice: string) {
    if (getCookiePreference()) {
        setCookie('theme', choice);
    }
    return;
}
export function getThemePreference() {
    if (getCookiePreference()) {
        const result = getCookie('theme');
        return result?.length > 0 ? result : 'light';
    }
    return 'light';
}

/*
** Cookie helpers
*/

// https://www.w3schools.com/js/js_cookies.asp
export function setCookie(cname: string, cvalue: string, exdays: number = 365) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
    let name = cname + "=";
    let ca = decodeURIComponent(document.cookie).split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}