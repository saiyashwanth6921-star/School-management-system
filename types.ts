
export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  attendance: number;
  status: 'Active' | 'Inactive';
  lastActivity: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  experience: number;
  classes: string[];
}

export type ViewType = 'dashboard' | 'students' | 'teachers';

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
