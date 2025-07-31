// resources/js/Components/InputRif.jsx

import { useState } from 'react';

export default function InputRif({ value = '', onChange, name = 'rif' }) {
    const [rif, setRif] = useState(value);

    const formatearRif = (val) => {
        const limpio = val.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        const letra = limpio.charAt(0);
        const numeros = limpio.slice(1);

        if (!/^[VJPEGR]/.test(letra) || !/^\d+$/.test(numeros)) return val;

        if (numeros.length >= 8 && numeros.length <= 9) {
            const cuerpo = numeros.slice(0, numeros.length - 1);
            const dv = numeros.slice(-1);
            return `${letra}-${cuerpo}-${dv}`;
        }

        return `${letra}-${numeros}`;
    };

    const handleChange = (e) => {
        const nuevoValor = e.target.value;
        const formateado = formatearRif(nuevoValor);
        setRif(formateado);

        if (onChange) {
            onChange(formateado); // Puedes enviar también limpio si quieres
        }
    };

    return (
            <input
            
                type="text"
                name={name}
                value={rif}
                onChange={handleChange}
                placeholder="Ej: J00000000"
                className="border border-gray-300 rounded px-2 py-1 w-full text-xs"
                maxLength={12}
                tabIndex={1}

            />
    );
}
