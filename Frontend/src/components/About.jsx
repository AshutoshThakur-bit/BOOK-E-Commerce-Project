import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="w-full py-12 px-4 flex justify-center">
       
      <div className="max-w-4xl w-full text-center space-y-6">
        
         <div className="text-red-500 font-bold text-2xl absolute top-10 right-15">
  <Link to="/">✕</Link>
</div>

        {/* Heading */}
        <h1 className="text-3xl font-bold">📖 About Us</h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Welcome to our learning marketplace—where books and courses come together
          to make knowledge accessible for everyone. We believe that learning should
          be simple, affordable, and available to all, which is why we offer a wide
          range of books and skill-based courses, including selected free resources
          to help you get started.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Our platform is designed for students, professionals, and lifelong learners
          who want quality content without complexity. From educational and competitive
          exam books to practical courses that build real-world skills, we focus on
          content that truly adds value.
        </p>

        {/* Commitment Section */}
        <div className="text-left">
          <h2 className="text-xl font-semibold mb-3">We are committed to:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>📚 High-quality books and learning material</li>
            <li>🎓 Practical, easy-to-understand courses</li>
            <li>🆓 Free and affordable learning options</li>
            <li>🚀 A smooth, secure, and user-friendly shopping experience</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
