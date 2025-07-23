import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
export default function ComprobanteServ() {
    return (
        <AuthenticatedLayout>
            <Head title="Comprobante de Servicio" />

            
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Aquí va el contenido de Comprobante de Servicio
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        
    );
}
