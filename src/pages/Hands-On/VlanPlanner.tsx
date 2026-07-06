import { Network } from "lucide-react";
import React from "react";

type Props = {};

const VlanPlanner: React.FC<Props> = () => {
  return (
    <div className="text-center py-12 text-slate-500 animate-in fade-in">
      <Network className="mx-auto h-12 w-12 mb-4 opacity-50" />
      <h3 className="text-lg font-medium text-slate-300">VLAN Planner</h3>
      <p className="mt-2">
        Access/Trunk port mapping and VLAN ID management coming soon.
      </p>
    </div>
  );
};

export default VlanPlanner;
