import React, { useState, useRef } from 'react';

function NumericInput() {
  const [rawValue, setRawValue] = useState('');
  const inputRef = useRef(null);

  const formatNumber = (input) => {
    if (!input) return '';

    let normalized = input.replace(',', '.');

    let [intPart, decimalPart = ''] = normalized.split('.');

    intPart = intPart.replace(/^0+(?!$)/, '');
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    if (decimalPart.length === 0) {
      decimalPart = '00';
    } else if (decimalPart.length === 1) {
      decimalPart = decimalPart + '0';
    } else if (decimalPart.length > 2) {
      decimalPart = decimalPart.slice(0, 2);
    }

    return `${intPart},${decimalPart}`;
  };

  const handleChange = (e) => {
    let input = e.target.value;

    // Eliminar letras y símbolos no válidos (permitir solo números y . o ,)
    input = input.replace(/[^0-9.,]/g, '');

    // Permitir solo UN punto o coma como separador decimal
    const hasComma = input.indexOf(',') !== -1;
    const hasDot = input.indexOf('.') !== -1;

    if (hasComma && hasDot) {
      // Si tiene ambos, eliminar uno (dejamos el primero)
      input = input.replace(hasDot < hasComma ? /\./ : /,/, '');
    }

    // Eliminar comas/puntos duplicados
    const parts = input.split(/[.,]/);
    if (parts.length > 2) {
      input = parts[0] + '.' + parts[1]; // Ignoramos todo después del segundo separador
    }

    setRawValue(input);
  };

  const handleBlur = () => {
    const formatted = formatNumber(rawValue);
    setRawValue(formatted);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputs = Array.from(document.querySelectorAll('input'))
        .filter((el) => el.type === 'text' && !el.disabled);
      const currentIndex = inputs.indexOf(inputRef.current);
      if (currentIndex !== -1 && currentIndex + 1 < inputs.length) {
        inputs[currentIndex + 1].focus();
      }
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="text-center border border-gray-300 rounded px-2 py-1 w-full text-sm"
      placeholder="0,00"
      value={rawValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}

export default NumericInput;
