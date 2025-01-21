import { Icon } from "react-feather";

interface TechIconProps {
  name: string;
  icon: Icon;
  color: string;
}

export const TechIcon = ({ name, icon: Icon, color }: TechIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full bg-slate-300 dark:bg-gray-900 p-3 flex items-center justify-center ${color}`}
      >
        <Icon size={24} />
      </div>

      <span className="text-xs text-center">{name}</span>
    </div>
  );
};
