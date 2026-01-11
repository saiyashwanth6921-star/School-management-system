
import React from 'react';
import { 
  Users, 
  GraduationCap, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Student, Teacher } from '../types';

interface DashboardProps {
  students: Student[];
  teachers: Teacher[];
}

const enrollmentData = [
  { name: 'Mon', count: 40 },
  { name: 'Tue', count: 30 },
  { name: 'Wed', count: 65 },
  { name: 'Thu', count: 45 },
  { name: 'Fri', count: 90 },
  { name: 'Sat', count: 20 },
  { name: 'Sun', count: 15 },
];

const StatCard = ({ icon: Icon, label, value, trend, color }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <button className="text-slate-400 hover:text-slate-600">
        <MoreHorizontal size={20} />
      </button>
    </div>
    <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
    <div className="flex items-baseline space-x-2">
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      <span className="text-emerald-500 text-xs font-bold flex items-center">
        <TrendingUp size={12} className="mr-1" />
        {trend}
      </span>
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ students, teachers }) => {
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const avgAttendance = Math.round(students.reduce((acc, s) => acc + s.attendance, 0) / students.length);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">School Overview</h2>
        <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} 
          label="Total Students" 
          value={students.length} 
          trend="+12%" 
          color="bg-blue-600" 
        />
        <StatCard 
          icon={GraduationCap} 
          label="Total Teachers" 
          value={teachers.length} 
          trend="+2%" 
          color="bg-purple-600" 
        />
        <StatCard 
          icon={CheckCircle} 
          label="Active Enrollment" 
          value={activeStudents} 
          trend="+5.4%" 
          color="bg-emerald-600" 
        />
        <StatCard 
          icon={Clock} 
          label="Avg. Attendance" 
          value={`${avgAttendance}%`} 
          trend="+1.2%" 
          color="bg-orange-600" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Student Engagement Trends</h3>
            <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-2 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Area type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Quick Notifications</h3>
          <div className="space-y-6">
            {[
              { title: 'New Student Enrolled', time: '2 mins ago', type: 'info' },
              { title: 'Attendance Alert: 11B', time: '1 hour ago', type: 'warning' },
              { title: 'Weekly Report Ready', time: '3 hours ago', type: 'success' },
              { title: 'System Maintenance', time: '12 hours ago', type: 'error' },
            ].map((note, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${
                  note.type === 'info' ? 'bg-blue-500' :
                  note.type === 'warning' ? 'bg-orange-500' :
                  note.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{note.title}</p>
                  <p className="text-xs text-slate-400">{note.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
