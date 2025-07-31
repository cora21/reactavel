import BordeHundido from "@/Components/BordeHundido";
import TableVenta from "@/Components/TableVenta";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function LibroVentas() {
    const initialValues = {
        name: "",
        avatar: null,
        phone: "",
        visibility: "",
    };
    const { data, errors, setData } = useForm(initialValues);

    return (
        <AuthenticatedLayout>
            <Head title="Libro de Ventas" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Aquí va el contenido de Libro de Ventas HIJOS DE LA
                            GRAN PUTAAAAA
                            <br />
                            <br />
                            <strong>
                                Activa, si posee alguna de las siguientes
                                opciones:
                            </strong>
                            <TableVenta />
                            <BordeHundido>
                                
                            </BordeHundido>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
