"use client";

import { useState } from "react";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");

  const skills = [
    {
      title: "Web Development",
      category: "Technology",
      description: "Learn to build responsive websites and web applications.",
      users: ["John Doe", "Jane Doe"],
    },
    {
      title: "Guitar Lessons",
      category: "Music",
      description:
        "From basics to advanced techniques for acoustic and electric.",
      users: ["John Doe", "Jane Doe"],
    },
    {
      title: "Graphic Design",
      category: "Design",
      description:
        "Master Figma and create stunning visual designs.",
      users: ["John Doe", "Jane Doe"],
    },
    {
      title: "Film Photography",
      category: "Arts",
      description: "Learn how to use and develop film photos like a pro.",
      users: ["John Doe", "Jane Doe"],
    },
    {
      title: "Advanced Web Dev",
      category: "Technology",
      description: "Take your coding skills to the next level.",
      users: ["John Doe", "Jane Doe"],
    },
    {
      title: "Culinary Arts",
      category: "Food",
      description:
        "Learn cooking techniques from fellow foodies.",
      users: ["John Doe", "Jane Doe"],
    },
  ];

  const filteredSkills = skills.filter((skill) =>
    skill.title.toLowerCase().includes(searchText.toLowerCase()) ||
    skill.category.toLowerCase().includes(searchText.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen px-6 py-10">
      <header className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-2xl font-bold text-blue-800">SkillLink @ UMich</h1>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-blue-700">Login</button>
          <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
            Sign Up
          </button>
        </div>
      </header>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-3">
          Exchange Skills with Passionate Wolverines 🎓
        </h2>
        <p className="text-gray-600 mb-6">
          Connect with peers. Teach what you know. Learn what you love.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Search skills or categories..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <button
            onClick={() => setSearchText("")}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Clear
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-6 text-center">
          🔥 Popular Skills on Campus
        </h3>
        {filteredSkills.length === 0 ? (
          <p className="text-center text-gray-500">No skills found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-bold mb-1">{skill.title}</h4>
                <p className="text-sm text-blue-600 mb-2">{skill.category}</p>
                <p className="text-gray-700 mb-4">{skill.description}</p>
                <p className="text-sm text-gray-600 font-medium mb-2">
                  Skilled Users:
                </p>
                <ul className="text-sm text-gray-800 list-disc ml-4">
                  {skill.users.map((user, id) => (
                    <li key={id}>{user}</li>
                  ))}
                </ul>
                <button className="mt-4 text-sm text-blue-600 hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
