import React from "react";

const sampleImages = [
  // Replace with real URLs later or leave as placeholders
  "https://media.istockphoto.com/id/1005282482/photo/large-group-of-elementary-students-having-an-art-class-in-the-classroom.jpg?s=612x612&w=is&k=20&c=ge8DaiSwri0mz20TJBVdEmRsK_kZdCKL9D4bU7uNAUY=",
  "https://media.istockphoto.com/id/1205584237/photo/children-painting-at-the-table.jpg?s=612x612&w=is&k=20&c=XgI2hQ_hwwlIjaj9JLMYj81UQzjlV7R2jQz0K6r2dZw=",
  "https://media.istockphoto.com/id/501630964/photo/art-process.jpg?s=612x612&w=is&k=20&c=YJBaLZKEF8kFCyR9oODZ6TPLQxOHHR1Pdx_1TPQdBSc=",
  "https://media.istockphoto.com/id/646498390/photo/joyful-young-female-art-student-paints-in-a-studio.jpg?s=612x612&w=is&k=20&c=X5-f5c6WAYB5bkmsQlGuN1pXOXBO9GScd88vUix7Abc=",
];

const Gallery = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        🏫 School Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sampleImages.map((img, index) => (
          <div key={index} className="rounded overflow-hidden shadow-md">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
