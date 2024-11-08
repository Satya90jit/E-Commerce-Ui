import { AddAPhoto as UploadIcon } from "@mui/icons-material";
const ImageUploadSection = () => (
  <div className="bg-white rounded-lg shadow p-4 md:p-6 flex flex-col gap-6">
    <div className="upload-area">
      <UploadIcon className="text-blue-500 text-4xl" />
      <p className="text-center text-gray-500 mt-2">Upload Image</p>
      <span className="text-xs text-center text-gray-400">
        Upload a cover image for your product. File Format jpeg, png.
        Recommended Size 600×600 (1:1)
      </span>
    </div>

    <div>
      <p className="text-gray-600 font-medium">Additional Images</p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="upload-area-small">
          <UploadIcon className="text-blue-500" />
          <p className="text-xs text-gray-500">Upload Image</p>
        </div>
        <div className="upload-placeholder" />
      </div>
    </div>
  </div>
);

export default ImageUploadSection;
