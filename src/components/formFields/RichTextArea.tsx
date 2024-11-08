import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextArea = ({ placeholder, className }: any) => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ align: [] }],
    ],
  };

  return (
    <div className={`rich-text-editor ${className}`}>
      {ReactQuill ? (
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder={placeholder}
          modules={modules}
        />
      ) : (
        <p>Loading editor...</p>
      )}
    </div>
  );
};

export default RichTextArea;
