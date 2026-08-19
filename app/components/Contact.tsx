'use client';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setStatus('Takk! Meldingen din er sendt.');
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus('Noe gikk galt. Vennligst prøv igjen.');
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Ta Kontakt / Be om Tilbud</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Navn</label>
                <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">E-post</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Emne / Prosjekttype</label>
              <select name="subject" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <option value="3D-Printing">3D-Printing / Prototyping</option>
                <option value="Elektronikk">Elektronikk & IoT (ESP32)</option>
                <option value="Programvare">Programvare / Apputvikling</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Melding</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white" />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Last opp 3D-fil (.stl, .step)</label>
              <input name="file" type="file" accept=".stl,.step,.obj,.zip" className="w-full text-sm text-slate-400 border border-slate-800 rounded-xl p-2 bg-slate-950" />
            </div>

            {status && <p className="text-sm text-cyan-400">{status}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold disabled:opacity-50"
            >
              {loading ? 'Sender...' : 'Send Melding'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
