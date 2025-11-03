import React from 'react';

interface HexagonButtonProps {
    label: string;
    icon: React.ElementType;
    onClick?: () => void;
}

export default function HexagonButton({ label, icon: Icon, onClick }: HexagonButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square w-28 sm:w-32 lg:w-40 hover:opacity-90 transition-opacity"
    >
      <div className="absolute inset-0 [background:var(--image-primary-gradient)] clip-hex" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mb-1 sm:mb-2" />
        <span className="text-sm sm:text-base lg:text-lg font-jp whitespace-nowrap">{label}</span>
      </div>
    </button>
  );
}
