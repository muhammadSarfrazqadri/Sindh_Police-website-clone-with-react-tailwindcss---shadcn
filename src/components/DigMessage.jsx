import React from "react";
import digpImg from "../../src/assets/images/DigPic.jpg";

const DigpMessage = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#8b92c6] to-[#d67c7c] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Side Image */}
        <div className="flex-shrink-0">
          <img
            src={digpImg}
            alt="DIGP Syed Peer Muhammad Shah"
            className="w-64 h-auto rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        {/* Right Side Text */}
        <div className="text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-3">
            Message Of DIGP Syed Peer Muhammad Shah, PSP, QPM, & Bar, PPM, T.st
          </h2>

          <p className="font-semibold mb-2">
            To the General Public and Police Officials,
          </p>
          <p className="mb-4 leading-relaxed">
            As the DIGP Traffic Karachi, I extend my warm regards to all citizens and dedicated
            police officials of our vibrant city. Our collective goal is to create a safer and
            more efficient traffic system that benefits everyone. Achieving this requires
            cooperation, adherence to traffic laws, and a shared commitment to improving our
            city's roads.
          </p>

          <p className="font-semibold mb-2">To the General Public:</p>
          <p className="mb-6 leading-relaxed">
            Your role is crucial in making Karachi’s roads safer. By following traffic rules,
            driving responsibly, and being considerate of other road users, you contribute
            significantly to reducing accidents and traffic congestion. Simple actions like
            obeying speed limits, using seat belts, and avoiding mobile phone use while driving
            can make a substantial difference. Remember, road safety is a shared responsibility,
            and your cooperation is essential for the well-being of our community.
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigpMessage;
