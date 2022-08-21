export type CloudinaryResult = {
  event: string;
  info: { original_filename: string; secure_url: string };
};

export const showCloudinaryWidget = (
  event: React.MouseEvent<HTMLButtonElement>,
  successCallback: (
    event: React.MouseEvent<HTMLButtonElement>,
    result: CloudinaryResult
  ) => void,
  errorCallback: (filename: string) => void
) => {
  event.preventDefault();
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_URL,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    },
    (error: Error, result: CloudinaryResult) => {
      if (!error && result && result.event === 'success') {
        successCallback(event, result);
      } else if (error) {
        errorCallback(result.info.original_filename);
      }
    }
  );
  widget.open();
};
