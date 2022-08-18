export {};

declare global {
  interface Window {
    cloudinary: any;
  }
  interface EventTarget {
    id: string;
  }
}
