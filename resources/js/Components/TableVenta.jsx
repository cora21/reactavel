import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import SwitchSolo from '@/Components/SwitchSolo';
import InputRif from './InputRif';
import InputRazonSocial from './InputRazonSocial';
import InputNcontrol from './Inputs/InputNcontrol';
import InputCalender from './Inputs/inputCalender';



function DarkExample() {

  const [showNotas, setShowNotas,] = useState(false);
  const [showRetenciones, setShowRetenciones] = useState(false);
  const [showAlicuotaReducida, setShowAlicuotaReducida] = useState(false);
  const [form, setForm] = useState({ ncontrol: '' });



  return (
    <div className="mb-4">
      <div className="mb-4 space-y-4">
        <div>

        </div>
        <SwitchSolo
          label="Alícuota Reducida"
          checked={showAlicuotaReducida}
          onChange={() => setShowAlicuotaReducida(!showAlicuotaReducida)}
        />

        <SwitchSolo
          label="Notas de Deb y Cred."
          checked={showNotas}
          onChange={() => setShowNotas(!showNotas)}
        />
        <SwitchSolo
          label="Comp. de Retención"
          checked={showRetenciones}
          onChange={() => setShowRetenciones(!showRetenciones)}
        />

      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {/* Columnas fijas */}
            {/* <th className="text-center border border-black px-2 py-2 w-10" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Oper.<br />Nro.
            </th> */}

            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Fecha <br />de la fact.
            </th>

            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Nº R.I.F.
            </th>

            <th className="text-center border border-black px-2 py-2 w-60 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Nombre o Razón Social
            </th>

            {showNotas && (
              <th className="text-center border border-black px-2 py-2 w-20 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                Nº Planilla de Exp.
              </th>
            )}
            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              N° de Factura
            </th>

            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Reg. Maquina
            </th>

            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              N° de Control
            </th>

            {/* Grupo 1: Notas de débito/crédito y Fact. afectada */}
            {showNotas && (
              <>
                <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                  N° Nota de Débito
                </th>

                <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                  Nº Nota de Crédito
                </th>

                <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                  Nº Fact. Afectada
                </th>
              </>
            )}

            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Tipo de Transacción
            </th>

            {/* Grupo 2: Comp. de Retención */}
            {showRetenciones && (
              <>
                <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                  Fecha Comp. Ret.
                </th>

                <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                  Nº Comp. Ret.
                </th>
              </>
            )}
          </tr>
        </thead>
        {/* Aquí iría <tbody> con las mismas condiciones si estás mostrando datos dinámicos */}
        <tbody>
          <tr>
            <td>
              <InputCalender name="fechaFactura" />
            </td>
            <td>
              <InputRif
                name="rif"
                onChange={(rifFormateado) => setData('rif', rifFormateado)}
              />
            </td>
            <td>
              <InputRazonSocial
                type="text"
              />
            </td>

            {showNotas && <td><input type="text" className="border border-gray-300 rounded px-2 py-1 w-full text-sm" /></td>}

            <td>
             <InputNcontrol
                  value={form.ncontrol}
                  onChange={(val) => setForm({ ...form, ncontrol: val })}
              />
            </td>

            <td>
              <input type="text" className="text-center border border-gray-300 rounded px-2 py-1 w-full text-sm" placeholder="-" />
              </td>
            <td>
              <input type="text" className="text-center border border-gray-300 rounded px-2 py-1 w-full text-sm" placeholder="00-0000" />
              </td>

            {showNotas && (
              <>
                <td><input type="text" className="border border-gray-300 rounded px-2 py-1 w-full text-sm" /></td>
                <td><input type="text" className="border border-gray-300 rounded px-2 py-1 w-full text-sm" /></td>
                <td><input type="text" className="border border-gray-300 rounded px-2 py-1 w-full text-sm" /></td>
              </>
            )}

            <td><input type="text" className="text-center border border-gray-300 rounded px-2 py-1 w-full text-sm" placeholder="01 Registro" /></td>

            {showRetenciones && (
              <>
                <td><input type="text" className="border border-gray-300 rounded px-2 py-1 w-full text-sm" /></td>
                <td><input type="text" className="border border-gray-300 rounded px-2 py-1 w-full text-sm" /></td>
              </>
            )}
          </tr>
        </tbody>


      </Table>
      <br /><br />









      {/* aqui comienza la segunda tabla */}
      <Table>
        <thead>
          <tr>
            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Total Compras
              <br />
              Incluyendo
              <br />
              el IVA
            </th>
            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Compras sin
              <br />
              derecho a
              <br />
              Crédito IVA
            </th>
            <th className="text-center border border-black px-2 py-2 w-40 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Base Imponible
            </th>
            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              16%
              <br />
              Alícuota
            </th>
            <th className="text-center border border-black px-2 py-2 w-30 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              Impuesto
              <br />
              IVA
            </th>
            {showAlicuotaReducida && (
              <>
                <th
                  className="text-center border border-black px-2 py-2 w-40 text-sm"
                  style={{ backgroundColor: "#9aa7b3", color: "#000" }}
                >
                  Base de 8%
                </th>
                <th
                  className="text-center border border-black px-2 py-2 w-30 text-sm"
                  style={{ backgroundColor: "#9aa7b3", color: "#000" }}
                >
                  Iva 8%
                </th>
              </>
            )}

            <th className="text-center border border-black px-2 py-2 w-20 text-sm" style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
              IVA Retenido
              (por el
              Comprador)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Total Compras Incluyendo el IVA */}
            <td>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                placeholder="Nombre / Razón Social"
              />
            </td>

            {/* Compras sin derecho a Crédito IVA */}
            <td>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                placeholder="Nombre / Razón Social"
              />
            </td>

            {/* Base Imponible */}
            <td>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                placeholder="Nombre / Razón Social"
              />
            </td>

            {/* 16% Alícuota */}
            <td>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                placeholder="Nombre / Razón Social"
              />
            </td>

            {/* Impuesto IVA */}
            <td>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                placeholder="Nombre / Razón Social"
              />
            </td>

            {/* Condicionales: Base 8% e IVA 8% */}
            {showAlicuotaReducida && (
              <>
                <td>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                    placeholder="Nombre / Razón Social"
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                    placeholder="Nombre / Razón Social"
                  />
                </td>
              </>
            )}

            {/* IVA Retenido */}
            <td>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                placeholder="Nombre / Razón Social"
              />
            </td>
          </tr>
        </tbody>


      </Table>
    </div>

  );
}
export default DarkExample;
