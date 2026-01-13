export interface TourDate {
    date: string;
    venue: string;
    city: string;
    ticketLink?: string;
    ticketText?: string;
}

export const tourDates: TourDate[] = [
    {
        date: "January 23, 2026",
        venue: "Old Ironsides",
        city: "Sacramento, CA",
    },
    {
        date: "February 27, 2026",
        venue: "The Press Club",
        city: "Sacramento, CA",
    },
];
