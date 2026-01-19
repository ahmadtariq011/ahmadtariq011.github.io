
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { GoogleGenAI } from "@google/genai";

declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '', 
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'sending' | 'success' | 'error'>('idle');
  const [loadingStep, setLoadingStep] = useState<string>('');

  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init("YnsJ3MpfLY-H6bNZb");
    }
  }, []);

  const analyzeInquiry = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a professional assistant for Hafiz Ahmad Tariq. 
        Analyze this contact form message and provide a 1-sentence professional summary of the user's intent. 
        User Name: ${formData.name}
        Title: ${formData.title}
        Message: ${formData.message}
        Summary:`,
      });
      return response.text;
    } catch (e) {
      return "Processing technical requirements...";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('analyzing');
    setLoadingStep('Reviewing message requirements...');
    const insight = await analyzeInquiry();
    
    setTimeout(async () => {
      setStatus('sending');
      setLoadingStep('Securely forwarding your request...');
      try {
        const result = await window.emailjs.send(
          "Hafiz Ahmad Portfolio",
          "template portfolio",
          {
            name: formData.name,
            email: formData.email,
            title: formData.title,
            message: formData.message,
            ai_summary: insight
          }
        );

        if (result.status === 200) {
          setStatus('success');
          setFormData({ name: '', email: '', title: '', message: '' });
          setTimeout(() => { setStatus('idle'); setLoadingStep(''); }, 6000);
        } else {
          throw new Error('Transmission rejection');
        }
      } catch (error) {
        console.error("Transmission Error:", error);
        setStatus('error');
      }
    }, 1200);
  };

  const handleManualEmail = () => {
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.title || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Ahmad,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Direct Contact Info */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <span className="text-azure font-bold uppercase tracking-[0.2em] text-xs block">Connect with a Specialist</span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">Let's build your next <span className="text-azure italic">integration.</span></h3>
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
            Looking for a .NET & Azure specialist with Microsoft vendor experience? Reach out via the secure portal below.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-azure group-hover:bg-azure group-hover:text-white transition-all shadow-lg border border-slate-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Email</h4>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg md:text-xl text-white font-bold hover:text-azure transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-azure group-hover:bg-azure group-hover:text-white transition-all shadow-lg border border-slate-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">LinkedIn Profile</h4>
                <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-azure transition-colors">Connect on LinkedIn</a>
              </div>
            </div>

            <div className="p-5 bg-slate-800/40 border border-slate-700 rounded-2xl backdrop-blur-sm max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Available for Enterprise Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Smart Inquiry Form */}
        <div className="relative">
          {/* Enhanced Loader UI without tool names */}
          {(status === 'analyzing' || status === 'sending') && (
            <div className="absolute inset-0 z-20 bg-slate-900/90 backdrop-blur-lg rounded-[2.5rem] md:rounded-[3rem] flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
               <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-azure/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-azure border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-azure/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-azure animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
               </div>
               <div className="space-y-3">
                 <p className="text-azure font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">
                   Transmission in Progress
                 </p>
                 <p className="text-white font-bold text-lg tracking-tight px-6">
                   {loadingStep}
                 </p>
                 <div className="flex gap-1.5 justify-center pt-2">
                   <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${status === 'analyzing' ? 'bg-azure' : 'bg-azure/20'}`}></div>
                   <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${status === 'sending' ? 'bg-azure' : 'bg-azure/20'}`}></div>
                   <div className="w-2 h-2 rounded-full bg-azure/20"></div>
                 </div>
               </div>
            </div>
          )}

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-800 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 text-white focus:outline-none focus:border-azure transition-all placeholder:text-slate-600 font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 text-white focus:outline-none focus:border-azure transition-all placeholder:text-slate-600 font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Inquiry Title</label>
                <input
                  required
                  name="title"
                  type="text"
                  placeholder="e.g. D365 Integration Project"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 text-white focus:outline-none focus:border-azure transition-all placeholder:text-slate-600 font-medium"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project requirements..."
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 text-white focus:outline-none focus:border-azure transition-all resize-none placeholder:text-slate-600 font-medium"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                disabled={status !== 'idle'}
                type="submit"
                className="w-full py-4 md:py-5 bg-azure text-white rounded-xl md:rounded-2xl font-bold shadow-xl shadow-azure/20 hover:bg-azure-dark hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
              >
                Send Message
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Specific Success Message as requested */}
              {status === 'success' && (
                <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-center animate-in zoom-in duration-500">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-extrabold text-lg mb-1">Message sent successfully to Hafiz Ahmad</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">I'll review your inquiry and respond shortly.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-6 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl animate-in slide-in-from-top-4 duration-300">
                  <p className="font-bold mb-2 text-sm text-center">Transmission Error</p>
                  <p className="text-xs mb-4 text-center opacity-80 font-medium">Please contact me directly if the form persists in failing:</p>
                  <button 
                    type="button"
                    onClick={handleManualEmail}
                    className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-[10px] hover:bg-slate-100 transition-colors uppercase tracking-[0.2em]"
                  >
                    Open Email Client
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
