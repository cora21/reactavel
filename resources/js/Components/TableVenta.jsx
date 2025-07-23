import Table from "react-bootstrap/Table";

function DarkExample() {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="text-center border border-black px-2 py-2 w-10"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                        Oper.
                        <br />
                        Nro.
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Fecha  <br />
                    de la fact.
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Nº R.I.F.
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-80"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Nombre o Razón Social
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-20"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Nº Planilla de Exp. 
                    </th>
                    
                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    N° de Factura
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Reg. Maquina
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    N° de Control  
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    N° Nota de Débito
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Nº Nota de Crédito
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Tipo de Transacción
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Nº Fact. Afectada
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Fecha Comp. Ret.
                    </th>

                    <th className="text-center border border-black px-2 py-2 w-30"style={{ backgroundColor: "#9aa7b3", color: "#000" }}>
                    Nº Comp. Ret.
                    </th>

                </tr>
            </thead>

            {/* <tbody>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody> */}
        </Table>
    );
}

export default DarkExample;
