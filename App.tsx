
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  Search, 
  Bell, 
  Settings,
  Menu,
  X,
  Plus,
  GraduationCap
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';
import { ViewType, Student, Teacher } from './types';

const MOCK_STUDENTS: Student[] = [
  { id: '1', name: 'Yash', email: 'sd221521yash@school.mru', grade: '4-2', attendance: 95, status: 'Active', lastActivity: '2 hours ago' },
  { id: '2', name: 'Ash pant', email: 'ash2121cs0@school.mru', grade: '3-2', attendance: 88, status: 'Active', lastActivity: '1 day ago' },
  { id: '3', name: 'Aruna A', email: 'arun22020ai@school.mru', grade: '1-1', attendance: 72, status: 'Inactive', lastActivity: '1 week ago' },
  { id: '4', name: 'Bunny', email: 'bun21020ds@school.mru', grade: '2-2', attendance: 99, status: 'Active', lastActivity: '30 mins ago' },
  { id: '5', name: 'Jayanth', email: 'jayanth23030it@school.mru', grade: '3-1', attendance: 91, status: 'Active', lastActivity: '4 hours ago' },
];

const MOCK_TEACHERS: Teacher[] = [
  { id: 't1', name: 'Dr. Abdul kalam', subject: 'Mathematics', experience: 12, classes: ['Aplha', 'Beta', 'Gamma'] },
  { id: 't2', name: 'Prof. heisenberg', subject: 'Physics', experience: 8, classes: ['Epsilon', 'BEta'] },
  { id: 't3', name: 'Mrs. jonstark', subject: 'English Literature', experience: 15, classes: ['Delta', 'Alpha'] },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [teachers] = useState<Teacher[]>(MOCK_TEACHERS);
  
  // Administrator Details
  const [admin] = useState({
    name: "Dr.sai yashwanth",
    role: "Director",
    initials: "SY",
    avatarColor: "bg-blue-600"
  });

  const NavItem = ({ icon: Icon, label, view }: { icon: any, label: string, view: ViewType }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        currentView === view 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
          : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center space-x-3 mb-10 px-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">MRU <span className="text-blue-600">SOE</span></span>
          </div>

          <nav className="flex-1 space-y-2">
            <NavItem icon={LayoutDashboard} label="Dashboard" view="dashboard" />
            <NavItem icon={Users} label="Students" view="students" />
            <NavItem icon={UserSquare2} label="Teachers" view="teachers" />
          </nav>

          <div className="mt-auto pt-6">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${admin.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                  {admin.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 truncate max-w-[120px]">{admin.name}</p>
                  <p className="text-xs text-slate-500 truncate max-w-[120px]">{admin.role}</p>
                </div>
              </div>
              <button className="w-full py-2 bg-white text-slate-600 text-sm font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-80 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-xl">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl">
              <Settings size={20} />
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-200">
              <Plus size={18} />
              <span>Quick Action</span>
            </button>
          </div>
        </header>

        {/* Dynamic Viewport */}
        <div className="flex-1 overflow-y-auto p-8">
          {currentView === 'dashboard' && <Dashboard students={students} teachers={teachers} />}
          {currentView === 'students' && <StudentList students={students} setStudents={setStudents} />}
          {currentView === 'teachers' && <TeacherList teachers={teachers} />}
        </div>
      </main>
    </div>
  );
};

export default App;
