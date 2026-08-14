import Link from "next/link";

export default function AvisoDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Cenote Maravilla</p>
        <h1 className="mt-4 text-4xl font-semibold">Aviso de privacidad</h1>
        <div className="mt-8 space-y-5 leading-8 text-slate-600">
          <p>Los datos de contacto compartidos mediante este sitio u Olivia AI se utilizan únicamente para responder solicitudes, brindar información y dar seguimiento a visitas, actividades u hospedaje.</p>
          <p>La información no se vende. El acceso se limita al equipo y a los proveedores autorizados necesarios para operar el sitio y atender las solicitudes.</p>
          <p>Puedes solicitar el acceso, corrección o eliminación de tus datos contactando al equipo de Cenote Maravilla mediante el formulario del sitio.</p>
        </div>
        <Link className="mt-10 inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white" href="/es/">Volver al sitio</Link>
      </article>
    </main>
  );
}
