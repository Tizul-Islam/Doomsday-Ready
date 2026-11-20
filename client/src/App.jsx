import React, { useState, useEffect } from 'react';
import { Film, Calendar, Ticket, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('movies');
  const [healthStatus, setHealthStatus] = useState({ loading: true, ok: false, message: '' });

  const checkHealth = async () => {
    setHealthStatus({ loading: true, ok: false, message: 'Checking backend...' });
    try {
      const res = await fetch('/api/health');
      const json = await res.json();
      if (res.ok && json.success) {
        setHealthStatus({
          loading: false,
          ok: true,
          message: `${json.data.service} is Online (${new Date(json.data.timestamp).toLocaleTimeString()})`
        });
      } else {
        setHealthStatus({ loading: false, ok: false, message: 'API returned error status' });
      }
    } catch (err) {
      setHealthStatus({
        loading: false,
        ok: false,
        message: 'Could not connect to backend at /api/health'
      });
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-black tracking-wider text-xl shadow-lg shadow-red-600/30">
              D
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                DOOMSDAY READY
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider">
                  MCU Rewatch & Booking
                </span>
              </h1>
              <p className="text-xs text-slate-400">Blinto Full Stack Internship Assessment</p>
            </div>
          </div>

          {/* Backend Status Badge */}
          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-full px-3 py-1 text-xs">
            {healthStatus.loading ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
            ) : healthStatus.ok ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            )}
            <span className={healthStatus.ok ? 'text-emerald-300 font-medium' : 'text-slate-300'}>
              {healthStatus.message}
            </span>
            <button
              onClick={checkHealth}
              title="Refresh Health"
              className="ml-1 p-0.5 hover:text-white text-slate-400 transition"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* View Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 -mb-px">
            <button
              onClick={() => setActiveTab('movies')}
              className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'movies'
                  ? 'border-red-500 text-red-400 bg-red-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Film className="w-4 h-4" />
              1. Movies & Prerequisites
            </button>
            <button
              onClick={() => setActiveTab('rewatch')}
              className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'rewatch'
                  ? 'border-red-500 text-red-400 bg-red-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              2. Rewatch Plan
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'booking'
                  ? 'border-red-500 text-red-400 bg-red-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Ticket className="w-4 h-4" />
              3. Cinema Booking
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'movies' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
                <Film className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">View 1: Movies & Prerequisites</h2>
                <p className="text-sm text-slate-400">
                  Manage movies, toggle watched status, and edit prerequisite graph links.
                </p>
              </div>
            </div>
            <div className="border border-dashed border-slate-700 rounded-lg p-6 bg-slate-950/50 text-center">
              <p className="text-slate-400 text-sm">
                Phase 1 Shell active. Complete movie CRUD, graph validation, and cycle detection will be mounted in Phase 8.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'rewatch' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">View 2: Rewatch Plan</h2>
                <p className="text-sm text-slate-400">
                  Topological prerequisite ordering, watched checklist, progress percentage, and remaining runtime.
                </p>
              </div>
            </div>
            <div className="border border-dashed border-slate-700 rounded-lg p-6 bg-slate-950/50 text-center">
              <p className="text-slate-400 text-sm">
                Phase 1 Shell active. Hand-written topological DFS rewatch planner will be mounted in Phase 9.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">View 3: Cinema Seat-Bundle Booking</h2>
                <p className="text-sm text-slate-400">
                  Unbounded Dynamic Programming minimum bundle optimization for watch-parties (1–10,000 group size).
                </p>
              </div>
            </div>
            <div className="border border-dashed border-slate-700 rounded-lg p-6 bg-slate-950/50 text-center">
              <p className="text-slate-400 text-sm">
                Phase 1 Shell active. DP minimum bundle calculator will be mounted in Phase 10.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Doomsday Ready &bull; Assessment for Blinto &bull; Phase 1 Repository & Project Setup
      </footer>
    </div>
  );
}

