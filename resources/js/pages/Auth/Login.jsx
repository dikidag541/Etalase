import React from 'react'
import { Head, usePage, useForm, Link } from '@inertiajs/react'

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden font-sans">
            <Head title="SOVEREIGN ACCESS | LOGIN" />

            {/* Ambient Background */}
            <div className="absolute inset-0 gold-leaf-texture opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500 rounded-full opacity-[0.03] blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[450px] px-8 py-16">
                {/* Branding */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gold-500/20 bg-black/50 backdrop-blur-xl mb-8">
                        <img src="/images/Logo Etalase.png" className="w-10 h-10 object-contain" alt="Logo" />
                    </div>
                    <h1 className="text-3xl font-serif italic tracking-tighter mb-2">Sovereign <span className="not-italic text-gold-500">Access</span></h1>
                    <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-black">Authentication Protocol</p>
                </div>

                <form onSubmit={submit} className="space-y-8">
                    <div>
                        <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-3 ml-1">Signature Identity</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            placeholder="Email Address"
                            className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-lg text-sm focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-white/10"
                        />
                        {errors.email && <p className="text-etalase-red text-[10px] mt-3 uppercase tracking-wider">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-3 ml-1">Secure Passkey</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-lg text-sm focus:outline-none focus:border-gold-500/50 transition-all placeholder:text-white/10"
                        />
                        {errors.password && <p className="text-etalase-red text-[10px] mt-3 uppercase tracking-wider">{errors.password}</p>}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={e => setData('remember', e.target.checked)}
                                className="hidden"
                            />
                            <div className={`w-4 h-4 rounded border border-white/20 flex items-center justify-center transition-all ${data.remember ? 'bg-gold-500 border-gold-500' : 'group-hover:border-white/40'}`}>
                                {data.remember && <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>}
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">Remember Pulse</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-6 bg-white text-black font-black uppercase text-[11px] tracking-[0.6em] rounded-lg transition-all hover:bg-gold-500 hover:text-white hover:scale-[1.02] active:scale-95 shadow-2xl disabled:opacity-50"
                    >
                        {processing ? 'Establishing...' : 'Confirm Identity'}
                    </button>
                </form>

                <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-gold-500 transition-colors">← Return to Grand Hall</Link>
                </div>
            </div>
        </div>
    )
}
