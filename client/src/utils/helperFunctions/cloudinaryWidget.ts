export const showCloudinaryWidget = (
  event: React.MouseEvent<HTMLButtonElement>,
  successCallback: any,
  errorCallback: any
) => {
  event.preventDefault();
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_URL,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    },
    (error: any, result: any) => {
      if (!error && result && result.event === 'success') {
        successCallback(event, result);
      } else if (error) {
        errorCallback(result);
      }
    }
  );
  widget.open();
};
