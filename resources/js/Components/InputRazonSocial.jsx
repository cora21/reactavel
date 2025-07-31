import { useState } from 'react';

function InputRazonSocial() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value.toUpperCase())}
      className="border border-gray-300 rounded px-2 py-1 w-full text-xs"
      placeholder="Nombre / Razón Social"
    />
  );
}

export default InputRazonSocial;