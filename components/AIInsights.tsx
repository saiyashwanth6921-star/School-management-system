
import React, { useState } from 'react';
import { BrainCircuit, Send, Sparkles, AlertCircle } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Student, Teacher, ChatMessage } from '../types';

interface AIInsightsProps {
  students: Student[];
  teachers: Teacher[];
}

const AIInsights: React.FC<AIInsightsProps> = ({ students, teachers }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const context = {
      totalStudents: students.length,
      averageAttendance: students.reduce((acc, s) => acc + s.attendance, 0) / students.length,
      subjects: teachers.map(t => t.subject),
    };

    const response = await getGeminiResponse(input, context);
    const aiMessage: ChatMessage = { role: 'model', content: response };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const quickPrompts = [
    "Analyze student attendance trends",
    "Identify underperforming subjects",
    "Suggest teacher training ideas",
    "Predict next semester's growth"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
          <BrainCircuit size={32} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">Academic Intelligence</h2>
        <p className="text-slate-500">Powered by Gemini AI for deep institutional insights.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col h-[600px]">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <Sparkles className="text-blue-300" size={48} />
              <p className="text-slate-400 text-sm max-w-xs">
                Ask me about student performance, resource allocation, or faculty insights.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {quickPrompts.map((p, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(p)}
                    className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                  : 'bg-slate-50 text-slate-800 border border-slate-100'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 animate-pulse">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-slate-100 bg-white">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask the AI Assistant..."
                className="w-full pl-6 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center text-[10px] text-slate-400 space-x-1 justify-center uppercase tracking-widest font-bold">
            <AlertCircle size={10} />
            <span>AI responses are generated based on current school data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
