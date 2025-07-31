import { useState } from 'react';

export default function InputNcontrol({ value = '', onChange, name = 'ncontrol' }) {
  const [control, setControl] = useState(value);

  const padControl = (val) => {
    const numeros = val.replace(/\D/g, '');
    return numeros.padStart(6, '0');
  };

  const handleChange = (e) => {
    const nuevoValor = e.target.value.replace(/\D/g, '');
    setControl(nuevoValor);
    if (onChange) onChange(nuevoValor);
  };

  const handleBlur = () => {
    const padded = padControl(control);
    setControl(padded);
    if (onChange) onChange(padded);
  };

  const handleFocus = () => {
    if (control === '000000') {
      setControl('');
    }
  };

  return (
    <input
      type="text"
      name={name}
      value={control}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      placeholder="000000"
      className="text-center border border-gray-300 rounded px-2 py-1 w-full text-xs"
      maxLength={10}
    />
  );
}
