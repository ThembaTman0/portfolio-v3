"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

/*
 * Validated contact form. Posts to Web3Forms (no backend needed) when
 * NEXT_PUBLIC_WEB3FORMS_KEY is set; otherwise it degrades gracefully to a
 * prefilled mailto so the form is never a dead end. Client-side validation
 * runs on submit and re-validates a field as the user corrects it; errors are
 * announced via role="alert".
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const EMAIL = "thembatman0@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "submitting" | "success" | "error";

const validate = (v: { name: string; email: string; message: string }) => {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10)
    e.message = "A little more detail, please (10+ characters).";
  return e;
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.66rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "0.55rem",
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "46px",
  background: "rgba(255,255,255,0.02)",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius)",
  padding: "0.7rem 0.9rem",
  color: "var(--text)",
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.9rem",
  outline: "none",
};

const errStyle: React.CSSProperties = {
  color: "#e0a08a",
  fontSize: "0.72rem",
  marginTop: "0.4rem",
  letterSpacing: "0.01em",
};

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      // Once a field has an error, re-check it live as the user fixes it.
      if (errors[key]) setErrors(validate(next));
    };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for keyboard/AT users.
      const first = (Object.keys(found) as (keyof Errors)[])[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }

    // No key configured -> keep the form functional via the user's mail client.
    if (!ACCESS_KEY) {
      mailtoFallback();
      return;
    }

    setStatus("submitting");
    setServerMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name,
          email: values.email,
          message: values.message,
          subject: `Portfolio enquiry from ${values.name}`,
          from_name: "Portfolio contact form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setServerMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please try again, or email me directly.");
    }
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <m.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            aria-live="polite"
            style={{
              border: "1px solid var(--accent-line)",
              background: "rgba(200,160,90,0.06)",
              borderRadius: "var(--radius)",
              padding: "2rem 1.6rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.4rem",
                color: "var(--white)",
                marginBottom: "0.6rem",
              }}
            >
              Message sent — thank you.
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              I&apos;ll get back to you soon. In the meantime, feel free to
              connect on LinkedIn or GitHub.
            </p>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}
          >
            {/* Honeypot: hidden from users, catches naive bots */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            <div>
              <label htmlFor="cf-name" style={labelStyle}>
                Name
              </label>
              <input
                id="cf-name"
                className="contact-field"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "cf-name-err" : undefined}
                style={{
                  ...fieldStyle,
                  borderColor: errors.name ? "#a86a54" : "var(--line)",
                }}
              />
              {errors.name && (
                <div id="cf-name-err" role="alert" style={errStyle}>
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="cf-email" style={labelStyle}>
                Email
              </label>
              <input
                id="cf-email"
                className="contact-field"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "cf-email-err" : undefined}
                style={{
                  ...fieldStyle,
                  borderColor: errors.email ? "#a86a54" : "var(--line)",
                }}
              />
              {errors.email && (
                <div id="cf-email-err" role="alert" style={errStyle}>
                  {errors.email}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="cf-message" style={labelStyle}>
                Message
              </label>
              <textarea
                id="cf-message"
                className="contact-field"
                rows={4}
                value={values.message}
                onChange={update("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "cf-message-err" : undefined}
                style={{
                  ...fieldStyle,
                  resize: "vertical",
                  minHeight: "110px",
                  lineHeight: 1.6,
                  borderColor: errors.message ? "#a86a54" : "var(--line)",
                }}
              />
              {errors.message && (
                <div id="cf-message-err" role="alert" style={errStyle}>
                  {errors.message}
                </div>
              )}
            </div>

            {status === "error" && (
              <div role="alert" style={{ ...errStyle, marginTop: 0 }}>
                {serverMsg}
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.4rem",
                flexWrap: "wrap",
                marginTop: "0.3rem",
              }}
            >
              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  background: "var(--accent)",
                  color: "#0a0a0a",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.9rem 1.7rem",
                  minHeight: "46px",
                  border: "none",
                  borderRadius: "var(--radius)",
                  cursor: status === "submitting" ? "wait" : "pointer",
                  opacity: status === "submitting" ? 0.7 : 1,
                  transition: "opacity 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {status === "submitting" ? "Sending…" : "Send message"}
                {status !== "submitting" && (
                  <svg
                    width="11"
                    height="11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              <a
                href={`mailto:${EMAIL}`}
                className="hover-line link-quiet"
                style={{ fontSize: "0.78rem", textDecoration: "none" }}
              >
                or email me directly
              </a>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
