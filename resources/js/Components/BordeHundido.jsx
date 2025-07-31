export default function BordeHundido({ children }) {
    return (
        <div className="border border-gray-400 bg-gray-200 shadow-inner rounded p-2">
            {children}
        </div>
    );
}
