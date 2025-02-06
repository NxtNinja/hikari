export const categoryConfig: Record<string, { title: string; api: string }> = {
    "airing": {
        title: "Airing Anime",
        api: "top/anime?filter=airing&limit=24&sfw",
    },
    "upcoming": {
        title: "Upcoming Anime",
        api: "top/anime?filter=upcoming&limit=24&sfw",
    },
    "popularity": {
        title: "Popular Anime",
        api: "top/anime?filter=bypopularity&limit=24&sfw",
    },
    "favorite": {
        title: "Favorite Anime",
        api: "top/anime?filter=favorite&limit=24&sfw",
    },

    "now": {
        title: "Seasons Currently Airing",
        api: "seasons/now?limit=24&sfw",
    },
    "upcoming-seasons": {
        title: "Seasons Upcoming",
        api: "seasons/upcoming?limit=24&sfw",
    },
    "monday": {
        title: "Anime schedules for Monday",
        api: "schedules?filter=monday&limit=24&sfw",
    },
    "tuesday": {
        title: "Anime schedules for Tuesday",
        api: "schedules?filter=tuesday&limit=24&sfw",
    },
    "wednesday": {
        title: "Anime schedules for Wednesday",
        api: "schedules?filter=wednesday&limit=24&sfw",
    },
    "thursday": {
        title: "Anime schedules for Thursday",
        api: "schedules?filter=thursday&limit=24&sfw",
    },
    "friday": {
        title: "Anime schedules for Friday",
        api: "schedules?filter=friday&limit=24&sfw",
    },
    "saturday": {
        title: "Anime schedules for Saturday",
        api: "schedules?filter=saturday&limit=24&sfw",
    },
    "sunday": {
        title: "Anime schedules for Sunday",
        api: "schedules?filter=sunday&limit=24&sfw",
    },
};
