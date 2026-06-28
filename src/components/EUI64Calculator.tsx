import { useState, useCallback } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { randByte, genMAC, toBin, stripHextet, compressFull, useEUI64, genGlobalPrefix, eui64Answer } from '../lib/networkUtils';

const UL_BIT_INDEX = 6;

type Mode = 'link-local' | 'slaac';

export const EUI64Calculator = () => {
  const [mode, setMode] = useState<Mode>('link-local');
  const [mac, setMac] = useState(genMAC);
  const [prefix, setPrefix] = useState(genGlobalPrefix);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [revealed, setRevealed] = useState(false);

  const data = useEUI64(mac);

  const slaacAnswer = `fe80::${data.ifStr}`;

  const globalPrefixHextets = prefix.split(':');
  const fullGlobal = [...globalPrefixHextets, '0000', '0000', '0000', ...data.hextets];
  const globalAddress = compressFull(fullGlobal.map(h => h));

  const newQuiz = useCallback(() => {
    setMac(genMAC());
    setPrefix(genGlobalPrefix());
    setInput('');
    setStatus('idle');
    setRevealed(false);
  }, []);

  const handleSubmit = useCallback(() => {
    const u = input.toLowerCase().trim();
    if (!u) return;
    if (mode === 'link-local') {
      if (u === data.answer) {
        setStatus('correct');
        setRevealed(true);
      } else {
        setStatus('incorrect');
      }
    } else {
      const linkLocal = `fe80::${data.ifStr}`;
      const global = `${prefix}::${data.ifStr}`;
      if (u === linkLocal.toLowerCase() || u === globalAddress.toLowerCase()) {
        setStatus('correct');
        setRevealed(true);
      } else {
        setStatus('incorrect');
      }
    }
  }, [data.answer, data.ifStr, globalAddress, input, mode, prefix]);

  const showAnswer = useCallback(() => {
    setRevealed(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-200">
      <header className="py-6 sm:py-8 border-b border-slate-900">
        <div className="max-w-3xl mx-auto px-4 flex items-center gap-4">
          <Link
            to="/hands-on"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all shrink-0"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="text-center flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">EUI-64 Quiz Generator</h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">MAC → IPv6 Address Conversion</p>
          </div>
        </div>
      </header>

      <main className="flex-grow p-3 sm:p-4 max-w-3xl mx-auto w-full space-y-6">
        {/* Mode toggle */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-lg bg-slate-900 border border-slate-800 p-1 gap-1">
            <button
              onClick={() => { setMode('link-local'); setInput(''); setStatus('idle'); setRevealed(false); }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === 'link-local' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Link-Local (FE80::)
            </button>
            <button
              onClick={() => { setMode('slaac'); setInput(''); setStatus('idle'); setRevealed(false); }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === 'slaac' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              SLAAC (Global)
            </button>
          </div>
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sm:p-6 space-y-5">
          {/* MAC Address */}
          <div className="text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">MAC Address</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white tracking-wider break-all">{mac}</p>
            <button
              onClick={newQuiz}
              className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
            >
              <RefreshCw size={16} />
              Generate New MAC
            </button>
          </div>

          {/* Prefix info */}
          {mode === 'slaac' && (
            <>
              <hr className="border-slate-800" />
              <div className="text-center">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Assigned IPv6 Prefix</p>
                <p className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">{prefix}::/64</p>
              </div>
            </>
          )}

          <hr className="border-slate-800" />

          {/* Quiz input */}
          <div className="space-y-3">
            <label htmlFor="eui64-input" className="block text-slate-300 text-sm font-medium">
              Enter {mode === 'link-local' ? 'the Link-Local (FE80::)' : 'the generated IPv6'} address
            </label>
            <input
              id="eui64-input"
              type="text"
              value={input}
              onChange={(e) => { setInput(e.target.value); if (status === 'incorrect') setStatus('idle'); }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
              placeholder={mode === 'link-local' ? 'fe80::' : '2007:a3b1:4f2c::'}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono text-lg placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />

            {status === 'incorrect' && (
              <p className="flex items-center gap-1.5 text-red-400 text-sm font-medium">
                <XCircle size={16} />
                Not quite, try again.
              </p>
            )}
            {status === 'correct' && (
              <p className="flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                Correct!
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
              >
                Submit Answer
              </button>
              <button
                onClick={showAnswer}
                className="flex-1 px-4 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium transition-colors"
              >
                Give Up / Show Answer
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {revealed && (
          <div className="bg-indigo-950/50 border border-indigo-900/50 rounded-xl p-6 space-y-6">
            <h2 className="text-lg font-bold text-indigo-300">Step-by-Step Breakdown</h2>

            {/* Step 1: MAC split + FFFE insert */}
            <div className="space-y-2">
              <p className="text-indigo-400 text-sm font-semibold">Step 1: Split the MAC and insert FFFE</p>
              <p className="text-slate-300 text-sm">
                Split <span className="font-mono text-white">{data.firstHalf}</span> (first 3 bytes) and{' '}
                <span className="font-mono text-white">{data.secondHalf}</span> (last 3 bytes).
              </p>
              <p className="text-slate-300 text-sm">
                Insert <span className="font-mono text-cyan-400">FF:FE</span> in the middle:
              </p>
              <p className="font-mono text-white text-lg bg-slate-900/50 rounded-lg px-4 py-2 w-full break-all">
                {data.insertedStr}
              </p>
            </div>

            {/* Step 2: Flip U/L bit */}
            <div className="space-y-2">
              <p className="text-indigo-400 text-sm font-semibold">Step 2: Flip the 7th bit (U/L bit) of the first octet</p>
              <p className="text-slate-300 text-sm">
                First octet: <span className="font-mono text-white">{data.firstOctet}</span>
              </p>
              <div className="font-mono text-lg tracking-widest bg-slate-900/50 rounded-lg px-4 py-2 w-full overflow-x-auto whitespace-nowrap">
                {data.binBefore.split('').map((ch: string, i: number) => (
                  <span key={i} className={i === UL_BIT_INDEX ? 'text-yellow-300 bg-yellow-500/20 px-0.5 rounded' : 'text-slate-300'}>
                    {ch}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                The 7th bit (2nd from LSB) is <span className="font-mono text-yellow-300">{data.binBefore[UL_BIT_INDEX]}</span>.
                Flipping it gives <span className="font-mono text-emerald-300">{data.binAfter[UL_BIT_INDEX]}</span>.
              </p>
              <div className="font-mono text-lg tracking-widest bg-slate-900/50 rounded-lg px-4 py-2 w-full overflow-x-auto whitespace-nowrap">
                {data.binAfter.split('').map((ch: string, i: number) => (
                  <span key={i} className={i === UL_BIT_INDEX ? 'text-emerald-300 bg-emerald-500/20 px-0.5 rounded' : 'text-slate-300'}>
                    {ch}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                New first octet: <span className="font-mono text-emerald-400">{data.flippedVal}</span>
              </p>
            </div>

            {/* Step 3: Interface ID */}
            <div className="space-y-2">
              <p className="text-indigo-400 text-sm font-semibold">Step 3: Uncompressed 64-bit Interface ID</p>
              <p className="font-mono text-white text-lg bg-slate-900/50 rounded-lg px-4 py-2 w-full break-all">
                {data.ifStr}
              </p>
            </div>

            {/* Step 4: Final addresses */}
            <div className="space-y-3">
              <p className="text-indigo-400 text-sm font-semibold">Step 4: Final IPv6 Addresses</p>

              <div className="bg-slate-900/50 rounded-lg px-4 py-3 space-y-2">
                <p className="text-slate-300 text-sm font-medium">Link-Local (fe80::):</p>
                <p className="font-mono text-cyan-300 text-xl font-bold break-all">
                  {mode === 'link-local' ? data.answer : slaacAnswer}
                </p>
              </div>

              {mode === 'slaac' && (
                <div className="bg-slate-900/50 rounded-lg px-4 py-3 space-y-2">
                  <p className="text-slate-300 text-sm font-medium">Global (from {prefix}::/64):</p>
                  <p className="font-mono text-emerald-300 text-xl font-bold break-all">
                    {fullGlobal.join(':')}
                  </p>
                  <p className="text-slate-300 text-sm">Compressed:</p>
                  <p className="font-mono text-emerald-300 text-lg font-bold break-all">
                    {globalAddress}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 sm:py-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
          CCNA 200-301 Mastery Dashboard &bull; 100% Client-Side
        </p>
      </footer>
    </div>
  );
};
