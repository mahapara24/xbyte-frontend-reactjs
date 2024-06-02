import React from "react";

const teamMembers = [
  {
    name: "André",
    role: "Need a team?",
    description:
      "I will help you build a team of top talent to boost your business reach its potential.",
    imgSrc:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-blue-500",
    email: "EMAIL ANDRE",
  },
  {
    name: "Daniel",
    role: "Building an MVP?",
    description:
      "Looking to build fast and reduce your time to market? Drop me a message.",
    imgSrc:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    bgColor: "bg-yellow-400",
    email: "EMAIL DANIEL",
  },
  {
    name: "Cláudio",
    role: "Talk tech?",
    description:
      "I can help you find the right technical requirements for your product.",
    imgSrc:
      "https://images.pexels.com/photos/3088526/pexels-photo-3088526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "bg-pink-500",
    email: "EMAIL CLAUDIO",
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-6 sm:p-22 sm:mx-10 sm:mb-12 p-8">
      {teamMembers.map((member) => (
        <div
          key={member.name}
          className="h-auto bg-white shadow-lg rounded-xl overflow-hidden"
        >
          <div className={`relative h-40 flex justify-center items-center`}>
            <div
              className={`absolute top-0 left-0 w-full h-full ${member.bgColor}`}
            ></div>
            <img
              className="relative z-10 h-40 w-40 object-cover rounded-full border- border-white"
              src={member.imgSrc}
              alt={member.name}
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-lg font-semibold mb-2">{member.role}</h2>
            <p className="text-gray-600 mb-4">{member.description}</p>
            <a
              href={`mailto:${member.email}`}
              className="text-pink-500 font-semibold"
            >
              {member.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
