import { type Icon } from "react-feather";
import { motion } from "framer-motion";

interface TechIconProps {
  name: string;
  icon: Icon;
  color: string;
  index: number;
}

export const TechIcon = ({ name, icon: Icon, color, index }: TechIconProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`rounded-full bg-slate-300 dark:bg-gray-900 p-3 flex items-center justify-center ${color}`}
      >
        <Icon size={24} />
      </motion.div>
      <span className="text-xs text-center">{name}</span>
    </div>
  );
};
