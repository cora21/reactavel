import React, { useState } from "react";

const InputConPrefijo = () => {
    const PREFIJO = "00-00";
    const [valor, setValor] = useState("");

    const handleChange = (e) => {
        // Elimina el prefijo si el usuario lo intenta escribir
        const entrada = e.target.value.replace(PREFIJO, "");
        // Solo permite números
        const soloNumeros = entrada.replace(/\D/g, "");
        setValor(soloNumeros);
    };

    return (
        <div>
            <input
                type="text"
                value={`${PREFIJO}${valor}`}
                onChange={handleChange}
                className="text-center border border-gray-300 rounded px-2 py-1 w-full text-xs"
            />
        </div>
    );
};

export default InputConPrefijo;
