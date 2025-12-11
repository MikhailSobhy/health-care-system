import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import upload from '../../../assets/icons/upload.svg'
export default function FileUpload({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    setFile(selected);
    onFileSelect(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selected = e.dataTransfer.files[0];
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      alert("Please upload a valid image");
      return;
    }

    setFile(selected);
    onFileSelect(selected);
  };

  const removeFile = () => {
    setFile(null);
    onFileSelect(null);
  };

  return (
    <div>
      {!file ? (
        <div
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="
            w-full h-40 border-2 border-dashed border-gray-500 rounded-xl
            flex flex-col items-center justify-center cursor-pointer
            bg-[#1A1D21] hover:bg-[#22262b] transition
          "
        >
          <img src={upload} alt="" />
          <p className="text-gray-400"><span className="text-[#24AE7C]">Click to upload</span> or drag and drop</p>
          <p className="text-gray-400">SVG, PNG, JPG of GIF (max, 400*800px)</p>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="relative w-40 h-40 mt-3">
          <img
            src={URL.createObjectURL(file)}
            alt="uploaded"
            className="w-full h-full object-cover rounded-xl border border-gray-600"
          />

          <button
            onClick={removeFile}
            className="absolute top-1 right-1 bg-black/70 hover:bg-black text-white p-1 rounded-full"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
