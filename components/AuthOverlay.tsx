import React, { useState } from 'react';

interface AuthOverlayProps {
  onLogin: (user: { name: string; email: string }) => void;
  onClose: () => void;
}

const AuthOverlay: React.FC<AuthOverlayProps> = ({ onLogin, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isLogin && !name) {
      setError('Please enter your name');
      return;
    }

    // Simulate auth
    onLogin({
      name: name || email.split('@')[0],
      email: email
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark overlay backdrop with click to close */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="bg-cream rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up z-10 border-4 border-white">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white z-20 transition duration-200"
          aria-label="Close modal"
        >
            <i className="fas fa-times text-xl"></i>
        </button>

        {/* Header Bar */}
        <div className="bg-navy p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-navy to-slate-900 z-0"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold opacity-10 rounded-full blur-2xl"></div>
          
          <h1 className="text-3xl font-black text-white mb-2 relative z-10">Collers</h1>
          <p className="text-slate-400 font-medium text-sm relative z-10">Welcome to the sneaker club.</p>
        </div>

        <div className="p-8">
          <div className="flex bg-slate-200 rounded-lg p-1 mb-8 shadow-inner">
            <button 
              onClick={() => { setIsLogin(true); setError(''); }}
              className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-all duration-300 ${isLogin ? 'bg-white text-navy shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Log In
            </button>
            <button 
              onClick={() => { setIsLogin(false); setError(''); }}
              className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-all duration-300 ${!isLogin ? 'bg-white text-navy shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl flex items-center gap-3 border border-red-100">
              <i className="fas fa-exclamation-circle text-lg"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-1">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-brown"></i>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 bg-white rounded-xl border border-slate-200 focus:border-brown focus:ring-2 focus:ring-brown/20 outline-none transition font-medium text-navy placeholder-slate-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-navy uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-brown"></i>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white rounded-xl border border-slate-200 focus:border-brown focus:ring-2 focus:ring-brown/20 outline-none transition font-medium text-navy placeholder-slate-300"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-bold text-navy uppercase tracking-wider ml-1">Password</label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-brown"></i>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white rounded-xl border border-slate-200 focus:border-brown focus:ring-2 focus:ring-brown/20 outline-none transition font-medium text-navy placeholder-slate-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brown hover:bg-bronze text-white font-bold py-4 rounded-xl shadow-lg shadow-brown/30 transition-all transform hover:-translate-y-0.5 mt-8 flex items-center justify-center gap-2"
            >
              {isLogin ? <span>Access Account <i className="fas fa-arrow-right ml-1"></i></span> : <span>Create Account <i className="fas fa-user-plus ml-1"></i></span>}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-400">
               By continuing, you agree to Collers' <a href="#" className="underline hover:text-brown">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthOverlay;