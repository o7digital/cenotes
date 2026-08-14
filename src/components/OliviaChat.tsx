"use client";

import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

type Message = { role: "assistant" | "user"; content: string };
type Lead = { firstName: string; lastName: string; email: string; phone: string; need: string };

const CLIENT_CODE = "cenotemaravilla";
const CHAT_ENDPOINT = "https://olivia-ai.o7digital.com/api/olivia/chat";
const CHANNEL_ENDPOINT = "https://olivia-ai.o7digital.com/api/widget/conversations";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjwarqz";

const copy = {
  es: {
    title: "Olivia AI",
    status: "Asistente de Cenote Maravilla · En línea",
    teaser: "¿Planeas tu visita?",
    open: "Abrir chat",
    close: "Cerrar chat",
    welcome:
      "Hola, soy Olivia AI. Puedo orientarte sobre los cenotes, actividades, hospedaje y cómo planear tu visita a Cenote Maravilla.",
    leadIntro: "Déjanos tus datos y cuéntanos brevemente qué necesitas para poder ayudarte mejor.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    need: "¿Qué necesitas? Fechas, número de personas o actividad de interés",
    consent: "Acepto que Cenote Maravilla use estos datos para atender mi solicitud.",
    privacy: "Aviso de privacidad",
    privacyHref: "/es/aviso-de-privacidad/",
    submit: "Enviar datos",
    thanks: "Gracias. Recibimos tus datos. Ahora puedes preguntarme todo lo que necesites sobre tu visita.",
    placeholder: "Escribe tu pregunta...",
    send: "Enviar",
    error: "No pude responder en este momento. Intenta nuevamente o contacta al equipo de Cenote Maravilla.",
  },
  en: {
    title: "Olivia AI",
    status: "Cenote Maravilla assistant · Online",
    teaser: "Planning your visit?",
    open: "Open chat",
    close: "Close chat",
    welcome:
      "Hello, I’m Olivia AI. I can guide you through the cenotes, activities, lodging and help you plan your visit to Cenote Maravilla.",
    leadIntro: "Leave your details and briefly tell us what you need so we can assist you better.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    need: "What do you need? Dates, number of guests or activity of interest",
    consent: "I agree that Cenote Maravilla may use these details to respond to my request.",
    privacy: "Privacy notice",
    privacyHref: "/privacy-notice/",
    submit: "Send details",
    thanks: "Thank you. We received your details. You can now ask me anything about your visit.",
    placeholder: "Write your question...",
    send: "Send",
    error: "I could not respond right now. Please try again or contact the Cenote Maravilla team.",
  },
} as const;

function createVisitorId() {
  const storageKey = `oliviaVisitorId:${CLIENT_CODE}`;
  const current = window.localStorage.getItem(storageKey);
  if (current) return current;
  const next = window.crypto?.randomUUID?.() ?? `visitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  window.localStorage.setItem(storageKey, next);
  return next;
}

export default function OliviaChat() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [draft, setDraft] = useState("");
  const [lead, setLead] = useState<Lead>({ firstName: "", lastName: "", email: "", phone: "", need: "" });
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: t.welcome }]);
  const visitorIdRef = useRef("");
  const receivedOperatorMessages = useRef(new Set<string>());
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    visitorIdRef.current = createVisitorId();
  }, []);

  useEffect(() => {
    setMessages((current) =>
      current.length === 1 && current[0].role === "assistant" ? [{ role: "assistant", content: t.welcome }] : current,
    );
  }, [t.welcome]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const transcript = useMemo(
    () => messages.map((message) => `${message.role}: ${message.content}`).join("\n"),
    [messages],
  );

  async function storeVisitorMessage(content: string, metadata: Record<string, unknown> = {}) {
    const response = await fetch(CHANNEL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientCode: CLIENT_CODE,
        visitorId: visitorIdRef.current,
        content,
        visitorName: `${lead.firstName} ${lead.lastName}`.trim(),
        email: lead.email,
        phone: lead.phone,
        source: "website",
        language: lang,
        metadata: {
          pageUrl: window.location.href,
          pageTitle: document.title,
          originalSource: "Cenote Maravilla website",
          need: lead.need,
          necesidad: lead.need,
          ...metadata,
        },
      }),
    });
    if (!response.ok) throw new Error("channel_failed");
    return response.json();
  }

  async function storeAssistantMessage(content: string, model = "olivia-ai") {
    await fetch(CHANNEL_ENDPOINT, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientCode: CLIENT_CODE, visitorId: visitorIdRef.current, content, model }),
    }).catch(() => undefined);
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await storeVisitorMessage(
        `Lead: ${lead.firstName} ${lead.lastName} · ${lead.email} · ${lead.phone} · ${lang === "es" ? "Necesidad" : "Need"}: ${lead.need}`,
        { type: "lead", leadStatus: "captured", consent: true },
      );
      setLeadSent(true);
      setMessages((current) => [...current, { role: "assistant", content: t.thanks }]);

      const formData = new FormData();
      formData.set("firstName", lead.firstName);
      formData.set("lastName", lead.lastName);
      formData.set("email", lead.email);
      formData.set("phone", lead.phone);
      formData.set("message", lead.need);
      formData.set("source", "Olivia AI - Cenote Maravilla");
      void fetch(FORMSPREE_ENDPOINT, { method: "POST", body: formData, headers: { Accept: "application/json" } }).catch(
        () => undefined,
      );
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  async function sendMessage() {
    const message = draft.trim();
    if (!message || loading || !leadSent) return;
    setDraft("");
    setMessages((current) => [...current, { role: "user", content: message }]);
    setLoading(true);
    try {
      const stored = await storeVisitorMessage(message, { type: "question" });
      if (stored?.conversation?.status === "manual") return;

      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientCode: CLIENT_CODE,
          clientId: CLIENT_CODE,
          siteCode: CLIENT_CODE,
          visitorId: visitorIdRef.current,
          message,
          language: lang,
          pageUrl: window.location.href,
          metadata: { source: "Chat Olivia Cenote Maravilla", pageTitle: document.title, lead, transcript },
        }),
      });
      if (!response.ok) throw new Error("chat_failed");
      const data = await response.json();
      const reply = data.reply || t.error;
      setMessages((current) => [...current, { role: "assistant", content: reply }]);
      await storeAssistantMessage(reply, data.model);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!leadSent) return;
    const poll = async () => {
      try {
        const params = new URLSearchParams({ clientCode: CLIENT_CODE, visitorId: visitorIdRef.current });
        const response = await fetch(`${CHANNEL_ENDPOINT}?${params}`, { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json();
        const incoming = (data.messages || []).filter(
          (message: { id: string; role: string }) =>
            message.role === "operator" && !receivedOperatorMessages.current.has(message.id),
        );
        incoming.forEach((message: { id: string }) => receivedOperatorMessages.current.add(message.id));
        if (incoming.length) {
          setMessages((current) => [
            ...current,
            ...incoming.map((message: { content: string }) => ({ role: "assistant" as const, content: message.content })),
          ]);
        }
      } catch {
        // A temporary polling failure must not interrupt the visitor's chat.
      }
    };
    void poll();
    const timer = window.setInterval(poll, 5000);
    return () => window.clearInterval(timer);
  }, [leadSent]);

  function handleComposerKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="cenote-olivia" data-open={open ? "true" : "false"}>
      {open && (
        <section className="cenote-olivia-panel" role="dialog" aria-label={t.status}>
          <header className="cenote-olivia-header">
            <div>
              <strong>{t.title}</strong>
              <span>{t.status}</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={t.close}>×</button>
          </header>

          <div className="cenote-olivia-log" ref={logRef} aria-live="polite">
            {messages.map((message, index) => (
              <p className={`cenote-olivia-message ${message.role}`} key={`${message.role}-${index}`}>{message.content}</p>
            ))}
            {loading && <p className="cenote-olivia-message assistant">…</p>}
          </div>

          {!leadSent && (
            <form className="cenote-olivia-lead" onSubmit={submitLead}>
              <p>{t.leadIntro}</p>
              <input required autoComplete="given-name" placeholder={t.firstName} value={lead.firstName} onChange={(event) => setLead({ ...lead, firstName: event.target.value })} />
              <input required autoComplete="family-name" placeholder={t.lastName} value={lead.lastName} onChange={(event) => setLead({ ...lead, lastName: event.target.value })} />
              <input required type="email" autoComplete="email" placeholder={t.email} value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} />
              <input required type="tel" autoComplete="tel" placeholder={t.phone} value={lead.phone} onChange={(event) => setLead({ ...lead, phone: event.target.value })} />
              <textarea required rows={3} placeholder={t.need} value={lead.need} onChange={(event) => setLead({ ...lead, need: event.target.value })} />
              <label className="cenote-olivia-consent">
                <input required type="checkbox" />
                <span>{t.consent} <a href={t.privacyHref}>{t.privacy}</a></span>
              </label>
              <button type="submit" disabled={loading}>{t.submit}</button>
            </form>
          )}

          {leadSent && (
            <div className="cenote-olivia-composer">
              <input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={handleComposerKeyDown} disabled={loading} placeholder={t.placeholder} />
              <button type="button" onClick={() => void sendMessage()} disabled={loading || !draft.trim()} aria-label={t.send}>›</button>
            </div>
          )}
        </section>
      )}

      {!open && <button className="cenote-olivia-teaser" type="button" onClick={() => setOpen(true)}><span>O</span>{t.teaser}</button>}
      <button className="cenote-olivia-toggle" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? t.close : t.open}>{open ? "×" : "Olivia"}</button>
    </div>
  );
}
