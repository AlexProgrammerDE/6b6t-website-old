export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!;

export interface WindowLayer {
    dataLayer: IArguments[]
    gtag: Gtag.Gtag
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: URL): void => {
    const gtag: Gtag.Gtag = window.gtag
    gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({action, category, label, value}: GTagEvent): void => {
    const gtag: Gtag.Gtag = window.gtag
    gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};
