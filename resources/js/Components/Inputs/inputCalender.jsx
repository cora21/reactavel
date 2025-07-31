import { useEffect, useState } from 'react';

export default function InputCalender({ name = 'fecha', onChange, value }) {
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        if (!value) {
            // Calcular el mes anterior solo si no se pasa un valor
            const today = new Date();
            const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
            const formatted = prevMonth.toISOString().split('T')[0];
            setSelectedDate(formatted);
        } else {
            setSelectedDate(value);
        }
    }, [value]);

    const handleChange = (e) => {
        setSelectedDate(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <input
            type="date"
            name={name}
            value={selectedDate}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full text-xs"
            placeholder="Fecha"
        />
    );
}
