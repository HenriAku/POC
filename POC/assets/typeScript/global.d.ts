export {};

declare global {
  interface Window {
    __env: {
      YOUTUBE_API_KEY?: string;
      YOUTUBE_CHANNEL_ID?: string;
    };
  }
}