export type TimeOfDay = "am" | "pm" | "sunset" | "sunrise";

export interface Place {
    lat: number;
    lng: number;
    area: string;
    day?: number;
    time?: TimeOfDay;
    type: string;
    address?: string;
    text: string;
}
