export interface ConsentState {
    [category: string]: boolean;
}
export declare function setConsent(category: string, value: boolean): void;
export declare function getConsent(category: string): boolean | undefined;
export declare function getAllConsent(): ConsentState;
export declare function clearConsent(): void;
