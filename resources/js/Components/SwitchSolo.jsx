export default function SwitchSolo({ label, checked, onChange }) {
    return (
        <label className="flex items-center gap-3 cursor-pointer select-none">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-400 transition-colors duration-200"></div>
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 peer-checked:translate-x-full"></div>
            </div>
            <span className="text-gray-800">{label}</span>
        </label>
    );
}
