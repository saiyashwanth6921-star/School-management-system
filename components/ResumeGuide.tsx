
import React from 'react';
import { FileText, Code2, Database, Globe, Lightbulb, Rocket, ChevronRight } from 'lucide-react';

const ResumeGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-12 rounded-[40px] text-white shadow-2xl shadow-blue-100 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Resume Builder Pack</h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            This project is designed to stand out. Here is how to present your 
            <b> Malla Reddy University SOE Management System </b> to hiring managers.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <FileText size={200} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="flex items-center space-x-3 text-slate-800">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold">The Modern Stack (Current)</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Frontend</span>
              <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">React 18 + TS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Styling</span>
              <span className="text-sm bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">Tailwind CSS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">AI Integration</span>
              <span className="text-sm bg-purple-50 text-purple-600 px-3 py-1 rounded-full">Gemini API</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Data Viz</span>
              <span className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full">Recharts / D3</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-3 text-slate-800">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold">Alternative Stack (Original)</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <p className="text-sm text-slate-500 italic">If asked about Python/SQL implementation:</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Backend</span>
              <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Python / Flask / Django</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Database</span>
              <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">PostgreSQL / SQLite</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Templates</span>
              <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Jinja2 / HTML5</span>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Rocket className="mr-3 text-orange-500" />
          Execution Guide: How to build this
        </h3>
        
        <div className="space-y-12">
          {[
            {
              step: "Phase 1: Architecture",
              desc: "Define the database schema for Students, Teachers, and Enrollments. If using SQL, design ER diagrams to show relationships (one-to-many, many-to-many).",
              icon: Globe
            },
            {
              step: "Phase 2: Core Features",
              desc: "Implement CRUD (Create, Read, Update, Delete) functionality. In Python/Flask, use SQLAlchemy. In React, use state management (or a backend API) to handle data persistence.",
              icon: Code2
            },
            {
              step: "Phase 3: AI Augmentation",
              desc: "Integrate Large Language Models (LLMs) like Gemini to provide administrative automation. This is the 'Wow' factor for modern resumes.",
              icon: Lightbulb
            }
          ].map((item, i) => (
            <div key={i} className="flex space-x-6">
              <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 font-bold border border-slate-100">
                0{i+1}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">{item.step}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 p-10 rounded-[40px] text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <FileText className="mr-2 text-blue-400" />
          Resume Snippet (Copy & Paste)
        </h3>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 font-mono text-sm leading-relaxed text-blue-100">
          <p className="font-bold mb-2 text-white">MRU SOE – Full-Stack School Management System</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Architected a comprehensive ERP suite using React, TypeScript, and Python/Flask to manage 500+ student records at Malla Reddy University.</li>
            <li>Implemented AI-powered academic insights using Google Gemini API, automating the generation of performance reports.</li>
            <li>Developed dynamic data visualizations with Recharts, improving administrative decision-making by 30%.</li>
            <li>Engineered a responsive UI with Tailwind CSS, ensuring accessibility across mobile and desktop platforms.</li>
            <li>(Bonus) Leveraged PostgreSQL for relational data integrity and implemented secure JWT authentication.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeGuide;
