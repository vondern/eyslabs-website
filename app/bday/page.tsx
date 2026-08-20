'use client';

import React, { useState } from 'react';

export default function BirthdayPage() {
  const [showReward, setShowReward] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 text-center font-mono relative overflow-hidden">
      
      {/* Minecraft Arka Plan Grid Desen Detayı */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      <div className="relative z-10 max-w-md w-full bg-slate-900/90 border-4 border-green-500/80 p-6 rounded-none shadow-[8px_8px_0px_0px_rgba(34,197,94,0.4)] space-y-6">
        
        {/* Minecraft Rozeti */}
        <div className="inline-block bg-green-600 text-slate-950 px-3 py-1 font-bold text-xs uppercase tracking-widest border-2 border-green-300">
          LEVEL 7 UNLOCKED! 🎮
        </div>

        {/* Ana Başlık */}
        <div>
          <h1 className="text-3xl font-extrabold text-green-400 tracking-wider uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Gratulerer med dagen, August! 🎂
          </h1>
          <p className="text-xs text-green-500/80 uppercase font-semibold tracking-wider mt-1">
            Minecraft Special Birthday Mission
          </p>
        </div>

        {/* Alin'in Kutlama Mesajı */}
        <div className="bg-slate-950/80 border-l-4 border-cyan-400 p-4 text-left space-y-2">
          <p className="text-slate-200 text-sm leading-relaxed">
            <span className="text-cyan-400 font-bold">Alin</span> ønsker deg en kjempefin 7-årsdag! 🎈
          </p>
          <p className="text-slate-400 text-xs italic">
            "Ha en fantastisk dag, August! Håper du får masse kake og bygger de kuleste tingene i Minecraft!"
          </p>
        </div>

        {/* Elmas Kutusu Görseli */}
        <div className="bg-slate-950 border-2 border-slate-800 p-4 rounded-none flex flex-col items-center justify-center space-y-2">
          <div className="text-4xl animate-bounce">💎</div>
          <span className="text-xs text-green-400 font-bold">1x SJELDEN DIAMANT FRA ALIN</span>
        </div>

        {/* İnteraktif Sürpriz Butonu */}
        <button
          onClick={() => setShowReward(!showReward)}
          className="w-full bg-green-500 hover:bg-green-400 text-slate-950 font-bold py-3 px-4 border-b-4 border-green-700 active:border-b-0 transition-all text-sm tracking-wide"
        >
          {showReward ? 'LUKK SKATTEKISTEN 📦' : 'ÅPNE DIN BURSDAGSKISTE 📦'}
        </button>

        {/* Butona Tıklayınca Açılan Kutu */}
        {showReward && (
          <div className="bg-green-950/60 border-2 border-green-400 p-4 text-xs text-green-200 text-left space-y-2 animate-fade-in">
            <p className="font-bold text-green-300">🏆 SPECIAL MISSION COMPLETED:</p>
            <p>• Velkommen til Level 7, August!</p>
            <p>• Alin feirer dagen din sammen med deg! 🎉</p>
            <p>• Klar for nye eventyr og flere Minecraft-bygg!</p>
          </div>
        )}

        {/* İmza / Footer */}
        <div className="text-[10px] text-slate-500 uppercase tracking-widest pt-2 border-t border-slate-800">
          EYS LABS • CRAFTED ESPECIALLY FOR AUGUST & ALIN
        </div>

      </div>
    </div>
  );
}
