import { Shield } from "lucide-react";
import React from "react";

type Props = {};

const PortSecurity: React.FC<Props> = () => {
  return (
    <div className="text-center py-12 text-slate-500 animate-in fade-in">
      <Shield className="mx-auto h-12 w-12 mb-4 opacity-50" />
      <h3 className="text-lg font-medium text-slate-300">
        Port Security Analyzer
      </h3>
      <p className="mt-2">
        Sticky MAC configuration and violation mode simulation coming soon.
      </p>
    </div>
  );
};

export default PortSecurity;
