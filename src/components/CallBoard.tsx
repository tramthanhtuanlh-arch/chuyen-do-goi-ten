import React from 'react';
import confetti from 'canvas-confetti';
import { Play, Square, SkipForward, RotateCcw, Sparkles, Check, CheckCircle2, AlertCircle } from 'lucide-react';
import { Student, FontSize } from '../types/game';

interface CallBoardProps {
  displayName: string;
  selectedStudent: Student | null;
  isSpinning: boolean;
  noRepeat: boolean;
  onToggleNoRepeat: () => void;
  onStart: () => void;
  onStop: () => void;
  onNext: () => void;
  onResetRound: () => void;
  fontSize: FontSize;
  allCalled: boolean;
  remainingCount: number;
  totalStudents: number;
}

export const CallBoard: React.FC<CallBoardProps> = ({
  displayName,
  selectedStudent,
  isSpinning,
  noRepeat,
  onToggleNoRepeat,
  onStart,
  onStop,
  onNext,
  onResetRound,
  fontSize,
  allCalled,
  remainingCount,
  totalStudents,
}) => {
  // Fire celebratory confetti burst
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#06b6d4', '#ef4444', '#fbbf24', '#ffffff'],
      });
    } catch {
      // safe fallback
    }
  };

  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'huge':
        return 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl py-3';
      case 'normal':
        return 'text-2xl sm:text-4xl md:text-5xl py-2';
      case 'large':
      default:
        return 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl py-2.5';
    }
  };

  return (
    <div className="relative w-full z-20 flex flex-col justify-between h-full">
      {/* 3D Golden Board Container */}
      <div className="relative rounded-2xl p-1.5 sm:p-2.5 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5),0_0_20px_rgba(251,191,36,0.35)] border-2 border-yellow-200">
        {/* Ornate Corner Accents */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-amber-200 border border-amber-600 shadow" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-amber-200 border border-amber-600 shadow" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 rounded-full bg-amber-200 border border-amber-600 shadow" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full bg-amber-200 border border-amber-600 shadow" />

        {/* Inner Board Blackboard / Velvet Green Backdrop */}
        <div className="relative rounded-xl bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 border border-amber-400/50 p-2.5 sm:p-3 text-center shadow-inner overflow-hidden">
          {/* Subtle decorative chalkboard/wood texture lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Status Header */}
          <div className="relative flex items-center justify-between mb-1 pb-1.5 border-b border-amber-400/20">
            <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-current animate-pulse" />
              <span>BẢNG VÀNG GỌI TÊN</span>
            </div>

            {/* Calling Status Indicator */}
            <div className="flex items-center space-x-2">
              {isSpinning ? (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  ĐANG CHỌN HỌC SINH...
                </span>
              ) : selectedStudent ? (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  ĐÃ XÁC ĐỊNH
                </span>
              ) : allCalled ? (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-red-500/20 text-red-300 border border-red-400/40">
                  <AlertCircle className="w-3 h-3" />
                  ĐÃ HẾT LƯỢT
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-sky-500/20 text-sky-200 border border-sky-400/30">
                  SẴN SÀNG GỌI TÊN
                </span>
              )}
            </div>
          </div>

          {/* Main Name Showcase Screen */}
          <div className="relative min-h-[75px] sm:min-h-[90px] md:min-h-[105px] flex flex-col items-center justify-center py-1 sm:py-2">
            {allCalled && !selectedStudent ? (
              <div className="space-y-2 animate-fadeIn">
                <p className="text-xl sm:text-2xl font-bold text-amber-300">
                  🎉 Tất cả học sinh trong lớp đã được gọi!
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  Nhấn "Đặt Lại" để bắt đầu lượt gọi mới hoặc tắt chế độ Không Lặp.
                </p>
              </div>
            ) : isSpinning ? (
              <div className="relative w-full">
                <div
                  className={`font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100 ${getFontSizeClass()} filter drop-shadow-[0_4px_15px_rgba(245,158,11,0.7)] transition-all`}
                >
                  {displayName}
                </div>
                <div className="text-xs font-medium text-amber-300/80 mt-1 flex items-center justify-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>Vòng quay đang chọn ngẫu nhiên học sinh trên đò...</span>
                </div>
              </div>
            ) : selectedStudent ? (
              <div className="relative w-full animate-winner-celebrate">
                {/* Glowing Aura Ribbon */}
                <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs font-black tracking-wider uppercase mb-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  HỌC SINH ĐƯỢC CHỌN
                  <Sparkles className="w-3.5 h-3.5" />
                </div>

                {/* Big Student Name */}
                <div
                  className={`font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-300 ${getFontSizeClass()} filter drop-shadow-[0_6px_20px_rgba(251,191,36,0.9)]`}
                >
                  {selectedStudent.name}
                </div>

                {/* Celebratory subtitle */}
                <p className="text-xs sm:text-sm font-semibold text-emerald-300 flex items-center justify-center gap-2">
                  <span>Mời em đứng dậy phát biểu / trả lời câu hỏi! ✨</span>
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <div className={`font-black text-amber-200/90 tracking-wider ${getFontSizeClass()}`}>
                  SẴN SÀNG GỌI TÊN!
                </div>
                <p className="text-xs sm:text-sm text-amber-100/70 font-medium">
                  Nhấn <b className="text-emerald-400 font-bold">BẮT ĐẦU</b> để khởi hành Chuyến Đò Tri Thức
                </p>
              </div>
            )}
          </div>

          {/* Sub-info bar: remaining counter */}
          <div className="pt-2 border-t border-amber-400/20 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-200/80">
            <div className="flex items-center gap-2">
              <span className="font-medium">Chế độ:</span>
              <span
                className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                  noRepeat
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                    : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                }`}
              >
                {noRepeat ? '✓ Không lặp lại' : '∞ Có thể lặp lại'}
              </span>
            </div>

            <div>
              <span>Còn lại: </span>
              <span className="font-bold text-amber-300 text-sm">{remainingCount}</span>
              <span className="text-slate-400"> / {totalStudents} học sinh</span>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION CONTROLS BAR (BẮT ĐẦU, DỪNG, GỌI TIẾP, KHÔNG LẶP, ĐẶT LẠI) */}
      <div className="mt-2 sm:mt-2.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
        {/* Nút BẮT ĐẦU (Xanh lá cây) */}
        {!isSpinning ? (
          <button
            onClick={onStart}
            disabled={allCalled}
            className={`group relative px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-black text-sm sm:text-base tracking-wider text-white shadow-xl transition-all cursor-pointer active:scale-95 flex items-center gap-2 border-2 ${
              allCalled
                ? 'bg-slate-700 border-slate-600 opacity-50 cursor-not-allowed'
                : 'bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 border-emerald-300 shadow-emerald-600/40 hover:shadow-emerald-500/60'
            }`}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:scale-110 transition-transform" />
            <span>BẮT ĐẦU</span>
          </button>
        ) : (
          /* Nút DỪNG (Đỏ) */
          <button
            onClick={onStop}
            className="group relative px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-black text-sm sm:text-base tracking-wider text-white shadow-xl transition-all cursor-pointer active:scale-95 flex items-center gap-2 border-2 bg-gradient-to-b from-rose-500 via-red-600 to-rose-700 hover:from-rose-400 hover:to-red-600 border-rose-300 shadow-red-600/40 hover:shadow-red-500/60 animate-pulse"
          >
            <Square className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:scale-110 transition-transform" />
            <span>DỪNG LẠI</span>
          </button>
        )}

        {/* Nút GỌI TIẾP (Xanh dương) */}
        <button
          onClick={onNext}
          disabled={isSpinning || allCalled}
          className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 border-2 ${
            isSpinning || allCalled
              ? 'bg-slate-700/60 border-slate-600 opacity-40 cursor-not-allowed'
              : 'bg-gradient-to-b from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:to-blue-600 border-sky-300 shadow-sky-600/30'
          }`}
          title="Gọi tiếp học sinh tiếp theo"
        >
          <SkipForward className="w-4 h-4" />
          <span>GỌI TIẾP</span>
        </button>

        {/* Nút KHÔNG LẶP (Bật / Tắt rõ ràng) */}
        <button
          onClick={onToggleNoRepeat}
          disabled={isSpinning}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center gap-1.5 border-2 ${
            noRepeat
              ? 'bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 border-yellow-200 shadow-amber-400/30 font-black'
              : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-600'
          }`}
          title="Khi bật: mỗi học sinh chỉ gọi 1 lần trong lượt"
        >
          <div
            className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
              noRepeat ? 'bg-slate-950 border-amber-200 text-amber-300' : 'bg-slate-900 border-slate-500'
            }`}
          >
            {noRepeat && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span>KHÔNG LẶP</span>
        </button>

        {/* Nút ĐẶT LẠI LƯỢT GỌI */}
        <button
          onClick={onResetRound}
          disabled={isSpinning}
          className="px-3.5 py-2 sm:py-2.5 rounded-xl font-semibold text-xs text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-md transition active:scale-95 cursor-pointer flex items-center gap-1"
          title="Đặt lại lượt gọi về ban đầu"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>ĐẶT LẠI</span>
        </button>
      </div>
    </div>
  );
};
