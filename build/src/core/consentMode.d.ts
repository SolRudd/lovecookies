declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}
export type ConsentChoice = "accepted" | "declined";
export declare function updateConsent(consent: ConsentChoice): void;
