"use client";

export default function ImageUpload({ onImageReady }) {
  const handleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => onImageReady(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="mt-2"
    />
  );
}
