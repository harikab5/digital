import React from "react";

export default function BenefitsCircle() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Orange */}
        <path d="M170 30 C210 30 250 60 270 100 Q230 80 200 100 Q190 60 170 30 Z" fill="#F15A29" />
        {/* Blue */}
        <path d="M270 100 C300 140 300 200 270 240 Q270 200 240 180 Q260 140 270 100 Z" fill="#214478" />
        {/* Yellow */}
        <path d="M270 240 C250 280 210 310 170 310 Q210 290 210 250 Q250 250 270 240 Z" fill="#F9D43A" />
        {/* Green */}
        <path d="M170 310 C130 310 90 280 70 240 Q110 260 140 240 Q150 280 170 310 Z" fill="#4BA146" />
        {/* Grey */}
        <path d="M70 240 C40 200 40 140 70 100 Q70 140 100 160 Q80 200 70 240 Z" fill="#7D7D7D" />
        {/* Labels */}
        <text x="170" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">CUSTOMER</text>
        <text x="170" y="85" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff">CENTRIC</text>
        <text x="255" y="140" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">STRONGER</text>
        <text x="255" y="160" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">TOGETHER</text>
        <text x="220" y="275" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">ONE STEP</text>
        <text x="220" y="295" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">AHEAD</text>
        <text x="120" y="275" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">BETTER</text>
        <text x="120" y="295" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">EVERY DAY</text>
        <text x="85" y="140" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#fff">RELIABLE</text>
      </svg>
    </div>
  );
}
