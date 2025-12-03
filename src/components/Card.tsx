import React from "react";

interface Props { title: string; value: string; subtitle?: string; accent?: string }
const Card: React.FC<Props> = ({ title, value, subtitle, accent }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-xs text-slate-500">{title}</div>
        <div className={`text-2xl font-semibold ${accent ?? "text-slate-800"}`}>{value}</div>
      </div>
      <div className="text-sm text-slate-400">{subtitle}</div>
    </div>
  </div>
);

export default Card;
