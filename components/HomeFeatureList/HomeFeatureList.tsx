import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export function HomeFeatureList() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" className="" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  );
}
