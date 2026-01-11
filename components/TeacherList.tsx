
import React from 'react';
import { UserSquare2, BookOpen, Clock, MoreVertical } from 'lucide-react';
import { Teacher } from '../types';

interface TeacherListProps {
  teachers: Teacher[];
}

const TeacherList: React.FC<TeacherListProps> = ({ teachers }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Faculty Staff</h2>
          <p className="text-slate-500">Overview of active teaching staff and assignments.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <UserSquare2 size={32} />
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl">
                <MoreVertical size={20} />
              </button>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">{teacher.name}</h3>
            <p className="text-sm font-medium text-blue-600 mb-4">{teacher.subject}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-500 space-x-2">
                <Clock size={16} />
                <span className="text-xs">{teacher.experience} Years Experience</span>
              </div>
              <div className="flex items-center text-slate-500 space-x-2">
                <BookOpen size={16} />
                <span className="text-xs">{teacher.classes.join(', ')}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl transition-colors">
                View Profile
              </button>
              <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
