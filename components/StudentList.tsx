
import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Trash2, Edit2 } from 'lucide-react';
import { Student } from '../types';

interface StudentListProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const StudentList: React.FC<StudentListProps> = ({ students, setStudents }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteStudent = (id: string) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Student Directory</h2>
          <p className="text-slate-500">Manage all students and their academic records.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 text-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Attendance</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Activity</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold uppercase">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{student.name}</p>
                      <p className="text-xs text-slate-400">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">{student.grade}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${student.attendance > 90 ? 'bg-emerald-500' : student.attendance > 80 ? 'bg-blue-500' : 'bg-orange-500'}`} 
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-slate-500">{student.attendance}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    student.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-400">{student.lastActivity}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Mail size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={() => deleteStudent(student.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-slate-500">No students found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
