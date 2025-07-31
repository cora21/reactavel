import { useState } from "react";
import Table from "react-bootstrap/Table";
import SwitchSolo from "@/Components/SwitchSolo";
import InputRif from "./InputRif";
import InputRazonSocial from "./InputRazonSocial";
import InputNcontrol from "./Inputs/InputNcontrol";
import InputCalender from "./Inputs/inputCalender";
import InputConPrefijo from "./Inputs/PrefixedInput";
import NumericInput from "./Inputs/NumericInput";

function DarkExample() {
    const [showNotas, setShowNotas] = useState(false);
    const [showRetenciones, setShowRetenciones] = useState(false);
    const [showAlicuotaReducida, setShowAlicuotaReducida] = useState(false);
    const [nControl, setNControl] = useState("");
    const [ncontrol1, setNcontrol1] = useState("");
    const [ncontrol2, setNcontrol2] = useState("");
    const [ncontrol3, setNcontrol3] = useState("");
    const [fechaFactura, setFechaFactura] = useState("");
    const [fechaRetencion, setFechaRetencion] = useState("");
    return (
        <div className="mb-4">
            <br />
            <div className="mb-4 flex flex-wrap gap-4">
                <SwitchSolo
                    label="Alícuota Reducida"
                    checked={showAlicuotaReducida}
                    onChange={() =>
                        setShowAlicuotaReducida(!showAlicuotaReducida)
                    }
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

                        <th
                            className="text-center border border-black px-2 py-2 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                                width: "5px",
                                
                            }}
                        >
                            Fecha <br />
                            de la fact.
                        </th>

                        <th
                            className="text-center border border-black px-2 py-2 w-30 text-sm"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            RIF
                        </th>

                        <th
                            className="text-center border border-black px-2 py-2 w-60 text-sm"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Nombre o Razón Social
                        </th>

                        {showNotas && (
                            <th
                                className="text-center border border-black px-2 py-2 w-20 text-xs"
                                style={{
                                    backgroundColor: "#9aa7b3",
                                    color: "#000",
                                }}
                            >
                                Nº Planilla de Exp.
                            </th>
                        )}
                        <th
                            className="text-center border border-black px-2 py-2 w-30 text-sm"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            N° de Factura
                        </th>

                        <th
                            className="text-center border border-black px-2 py-2 w-20 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Reg. Maquina
                        </th>

                        <th
                            className="text-center border border-black px-2 py-2 w-30 text-sm"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            N° de Control
                        </th>

                        {/* Grupo 1: Notas de débito/crédito y Fact. afectada */}
                        {showNotas && (
                            <>
                                <th
                                    className="text-center border border-black px-2 py-2 w-30 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    N° de 
                                    <br />
                                    Nota de
                                    <br />
                                    Débito
                                </th>

                                <th
                                    className="text-center border border-black px-2 py-2 w-30 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    N° de 
                                    <br />
                                    Nota de
                                    <br />
                                    Crédito
                                </th>

                                <th
                                    className="text-center border border-black px-2 py-2 w-30 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    Nº Fact. Afectada
                                </th>
                            </>
                        )}

                        <th
                            className="text-center border border-black px-2 py-2 w-20 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Tipo de Transacción
                        </th>

                        {/* Grupo 2: Comp. de Retención */}
                        {showRetenciones && (
                            <>
                                <th
                                    className="text-center border border-black px-2 py-2 w-10 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                        width: "20px",
                                    }}
                                >
                                    Fecha Comp. Ret.
                                </th>

                                <th
                                    className="text-center border border-black px-2 py-2 w-30 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    Nº Comp. Ret.
                                </th>
                            </>
                        )}
                    </tr>
                </thead>
                {/* comienza el tbody */}
                <tbody>
                    <tr>
                        <td>
                            <InputCalender
                                name="fechaFactura"
                                value={fechaFactura}
                                onChange={(e) =>
                                    setFechaFactura(e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <InputRif
                                name="rif"
                                onChange={(rifFormateado) =>
                                    setData("rif", rifFormateado)
                                }
                            />
                        </td>
                        <td>
                            <InputRazonSocial type="text" />
                        </td>

                        {showNotas && (
                            <td>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                                />
                            </td>
                        )}

                        <td>
                            <InputNcontrol
                                value={nControl}
                                onChange={(val) => setNControl(val)}
                            />
                        </td>

                        <td>
                            <input
                                type="text"
                                className="text-center border border-gray-300 rounded px-2 py-1 w-full text-sm"
                                placeholder="-"
                            />
                        </td>

                        <td>
                            <InputConPrefijo />
                        </td>

                        {showNotas && (
                            <>
                                <td>
                                    <InputNcontrol
                                        value={ncontrol1}
                                        onChange={(val) => setNcontrol1(val)}
                                    />
                                </td>
                                <td>
                                    <InputNcontrol
                                        value={ncontrol2}
                                        onChange={(val) => setNcontrol2(val)}
                                    />
                                </td>
                                <td>
                                    <InputNcontrol
                                        value={ncontrol3}
                                        onChange={(val) => setNcontrol3(val)}
                                    />
                                </td>
                            </>
                        )}

                        <td>
                            <input
                                type="text"
                                className="text-center border border-gray-300 rounded px-2 py-1 w-full text-sm"
                                placeholder="01 Registro"
                            />
                        </td>

                        {showRetenciones && (
                            <>
                                <td>
                                    <InputCalender
                                        name="fechaRetencion"
                                        value={fechaRetencion}
                                        onChange={(e) =>
                                            setFechaRetencion(e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                                    />
                                </td>
                            </>
                        )}
                    </tr>
                </tbody>
            </Table>
            <br />
            <br />
            {/* aqui comienza la segunda tabla */}
            <Table>
                <thead>
                    <tr>
                        <th
                            className="text-center border border-black w-30 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Total Ventas
                            <br />
                            Incluyendo
                            <br />
                            el IVA
                        </th>
                        <th
                            className="text-center border border-black text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Ventas sin
                            <br />
                            derecho a
                            <br />
                            Crédito IVA
                        </th>
                        <th
                            className="text-center border border-black w-30 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Base 
                            <br />
                            Imponible
                        </th>
                        <th
                            className="text-center border border-black px-2 py-2 w-10 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            16%
                            <br />
                            Alícuota
                        </th>
                        <th
                            className="text-center border border-black w-20 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            Impuesto
                            <br />
                            I.V.A.
                        </th>
                        {showAlicuotaReducida && (
                            <>
                                <th
                                    className="text-center border border-black px-2 py-2 w-40 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    Base de 8%
                                </th>
                                <th
                                    className="text-center border border-black px-2 py-2 w-20 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    8%
                                    <br />
                                    Alícuota
                                </th>
                                <th
                                    className="text-center border border-black px-2 py-2 w-20 text-xs"
                                    style={{
                                        backgroundColor: "#9aa7b3",
                                        color: "#000",
                                    }}
                                >
                                    Impuesto I.V.A.
                                </th>
                            </>
                        )}
                        <th
                            className="text-center border border-black px-2 py-2 w-30 text-xs"
                            style={{
                                backgroundColor: "#9aa7b3",
                                color: "#000",
                            }}
                        >
                            IVA 
                            <br />
                            Retenido 
                            <br />
                            (por el Comprador)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* Total ventas Incluyendo el IVA */}
                        <td>
                            <NumericInput
                            />
                        </td>

                        {/* ventas sin derecho a Crédito IVA */}
                        <td>
                        <NumericInput
                            />
                        </td>

                        {/* Base Imponible */}
                        <td>
                        <NumericInput
                            />
                        </td>

                        {/* 16% Alícuota */}
                        <td>
                        <NumericInput
                            />
                        </td>

                        {/* Impuesto IVA */}
                        <td>
                        <NumericInput
                            />
                        </td>

                        {/* Condicionales: Base 8% e IVA 8% */}
                        {showAlicuotaReducida && (
                            <>
                                <td>
                                <NumericInput
                            />
                                </td>
                                <td>
                                <NumericInput
                            />
                                </td>
                                <td>
                                <NumericInput
                            />
                                </td>
                            </>
                        )}

                        {/* IVA Retenido */}
                        <td>
                        <NumericInput
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
export default DarkExample;
