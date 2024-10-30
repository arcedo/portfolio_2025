export type DataLayerEvent = { [key: string]: unknown };

declare global {
    interface Window {
        dataLayer: DataLayerEvent[];
    }
}