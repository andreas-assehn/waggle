export {};

declare global {
  interface Window {
    cloudinary: any;
  }
  interface EventTarget {
    id: string;
  }
}

export type CloudinaryResult = {
  event: string;
  info: { original_filename: string; secure_url: string };
};
