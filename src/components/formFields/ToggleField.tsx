import React from "react";

interface ToggleFieldProps {
  label: string;
  isEnabled?: boolean;
  onToggle?: () => void;
}

const ToggleField: React.FC<ToggleFieldProps> = ({
  label,
  isEnabled,
  onToggle,
}) => (
  <div className="flex items-center gap-2">
    <span className="text-gray-600">{label}</span>
    <input
      type="checkbox"
      className="toggle"
      checked={isEnabled}
      onChange={onToggle}
    />
  </div>
);

export default ToggleField;
