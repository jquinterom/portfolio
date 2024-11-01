export const TechIcon = ({ name, color, children }: { name: string, color: string, children: React.ReactNode }) => (
    <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white mb-1`}>
            {children}
        </div>
        <span className="text-xs text-center">{name}</span>
    </div>
)