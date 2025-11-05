import React from 'react'

const CardLink = () => {
  const data = ["Press Release", "Tenders", "Transfer Posting", "Gallery"];

  return (
    <div className="flex flex-wrap gap-4">
      {data.map((title, index) => (
        <div
          key={index}
          className="h-64 w-64 bg-white  shadow-2xl flex items-center justify-center text-xl font-semibold text-blue-900 rounded-lg hover:-translate-y-3 hover:text-white hover:bg-blue-900 transition-transform duration-300"
        >
          {title}
        </div>
      ))}
    </div>
  );
};


export default CardLink