import Link from "next/link";

export default function PrivacyNoticePage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Cenote Maravilla</p>
        <h1 className="mt-4 text-4xl font-semibold">Privacy notice</h1>
        <div className="mt-8 space-y-5 leading-8 text-slate-600">
          <p>The contact details shared through this website or Olivia AI are used only to answer requests, provide information and follow up on visits, activities or lodging.</p>
          <p>Information is not sold. Access is limited to the team and authorized service providers needed to operate the website and respond to requests.</p>
          <p>You may request access, correction or deletion of your information by contacting the Cenote Maravilla team through the contact form.</p>
        </div>
        <Link className="mt-10 inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white" href="/">Back to the website</Link>
      </article>
    </main>
  );
}
