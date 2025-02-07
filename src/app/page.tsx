"use client"; // ✅ Make this a client component

import { useState } from "react";

export default function Resume() {
    // State for toggling each section
    const [showObjective, setShowObjective] = useState(true);
    const [showEducation, setShowEducation] = useState(true);
    const [showProfessionalQualification, setShowProfessionalQualification] = useState(true);
    const [showSkills, setShowSkills] = useState(true);

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-center">Salman Salim</h1>
            <p className="text-gray-600 text-center">Email: msdesinga2006@gmail.com | Phone: (+92) 324-9208706 </p>

            {/* Profile Image */}
            <div className="flex justify-center my-4">
                <img src="/salman.jpeg" alt="Profile Picture" className="w-24 h-24 rounded-full object-cover" />
            </div>

            {/* Objective Section */}
<div className="mt-6">
    <button 
        className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowObjective(!showObjective)}
    >
        {showObjective ? "Hide" : "Show"} Objective
    </button>
    {showObjective && (
        <div className="mt-3 bg-gray-100 p-4 rounded text-justify">
            <h2 className="text-xl font-semibold text-center">Objective</h2><br/>
            <p>
            I am an enthusiastic and ambitious student with a solid academic foundation, having completed my <b>O-Levels at The Intellect School</b> from 2009 to 2024 and now pursuing <b>A-Levels at Alpha College.</b> My academic journey has instilled in me strong analytical skills and a passion for learning, while encouraging a keen interest in the convergence of traditional education with modern technological advancements. In parallel with my studies, I am actively advancing my expertise in TypeScript, Next.js, and Tailwind CSS as part of the <b>Governor Sindh Initiative in collaboration with the University of Karachi</b>, empowering me to drive digital transformation and innovative solutions. Eager to integrate my academic accomplishments with cutting-edge IT skills, I seek opportunities to contribute to dynamic projects, enhance digital frameworks, and lay the groundwork for a successful career at the intersection of technology and business.
            </p>
        </div>
    )}
</div>


            {/* Education Section */}
            <div className="mt-6">
                <button 
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowEducation(!showEducation)}
                >
                    {showEducation ? "Hide" : "Show"} Education
                </button>
                {showEducation && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Education</h2><br/>
                        <p>• <b>A-Levels - Current - Accounts, Economics, Busimess </b> -- Alpha College Karachi, Pakistan</p><br/>
                        <p>• <b>O-Levels - 2024 (Secured 5A* 3A 2B) </b>-- The Intellect School, Karachi Pakistan</p><br/>
                    </div>
                )}
            </div>

            <div className="mt-6">
                <button 
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowProfessionalQualification(!showProfessionalQualification)}
                >
                    {showProfessionalQualification ? "Hide" : "Show"} Professional Qualification
                </button>
                {showProfessionalQualification && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Professional Qualification</h2><br/>
                        <p>• <b>Type Script, Next JS & Tailwind CSS (Agentic AI) In Progress </b>-- Governor Sindh Initiative in Collaboration with University of Karachi</p><br/>
                        
                    </div>
                )}
            </div>

            {/* Skills Section */}
            <div className="mt-6">
                <button 
                    className="w-full bg-purple-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowSkills(!showSkills)}
                >
                    {showSkills ? "Hide" : "Show"} Skills
                </button>
                {showSkills && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Skills</h2>
                        <ul className="list-disc pl-5">
                            <li>Next.js Development</li>
                            <li>Typescript Expertise</li>
                            <li>JavaScript Programming</li>
                            <li>Tailwind CSS</li>
                            <li>Adobe Photoshop Designer </li>
                            <li>Adobe Illustrator Designer </li>
                            <li>Canva Proficiency </li>
                            <li>Ms Office Proficient </li>
                            <li>Content Writing</li>

                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}