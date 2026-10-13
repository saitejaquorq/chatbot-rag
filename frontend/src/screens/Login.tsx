// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

const { Input, Label } = UI;
const { FileText, AlertCircle } = Icons;

const DEMO_ACCOUNTS = [
  { email: 'admin@northwind.co', password: 'northwind2024' },
  { email: 'sarah.chen@northwind.co', password: 'chatbot2024' },
];

const EXAMPLE_CHATS = [
  { role: 'user', text: "What's our remote work policy for new hires?" },
  {
    role: 'assistant',
    text: 'New hires are eligible for hybrid work after their 30-day onboarding period. They can work remotely up to 3 days per week, with at least 2 in-office days for team collaboration.',
    citations: [{ doc: 'Employee Handbook 2024.pdf', page: 12 }],
  },
  { role: 'user', text: 'How do I submit an expense report?' },
  {
    role: 'assistant',
    text: 'Submit expense reports through the Finance Portal within 30 days of the expense. Include itemized receipts for amounts over $25. Reports go to your manager for first approval, then Finance.',
    citations: [
      { doc: 'Expense Guidelines.docx', page: 3 },
      { doc: 'Finance Portal Guide.pdf', page: 8 },
    ],
  },
];

export default function Screen() {
  const navigate = useNavigate();
  const [mode, setMode] = React.useState('login');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const clearError = (field) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      if (field !== 'form') delete next.form;
      return next;
    });
  };

  const handleFieldChange = (setter, fieldName) => (e) => {
    setter(e.target.value);
    if (errors[fieldName] || errors.form) clearError(fieldName);
  };

  const switchMode = (newMode) => {
    if (loading) return;
    setMode(newMode);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const newErrors = {};

    if (!email) {
      newErrors.email = 'Enter your email address.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Enter your password.';
    } else if (mode === 'register' && password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    if (mode === 'register') {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password.';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    timerRef.current = setTimeout(() => {
      setLoading(false);

      if (mode === 'login') {
        const account = DEMO_ACCOUNTS.find((a) => a.email === email);
        if (!account || account.password !== password) {
          setErrors({ form: 'Incorrect email or password. Please try again.' });
          return;
        }
        navigate('chat');
      } else {
        const exists = DEMO_ACCOUNTS.find((a) => a.email === email);
        if (exists) {
          setErrors({ form: 'An account with this email already exists. Try signing in instead.' });
          return;
        }
        navigate('chat');
      }
    }, 850);
  };

  const fillDemo = () => {
    if (loading) return;
    setEmail(DEMO_ACCOUNTS[0].email);
    setPassword(DEMO_ACCOUNTS[0].password);
    setErrors({});
  };

  const headingText = mode === 'login' ? 'Welcome back' : 'Create your account';
  const subText =
    mode === 'login'
      ? "Sign in to ask questions across your team's documents."
      : "Join your team's knowledge base on Atlas.";
  const submitText = mode === 'login' ? 'Sign in' : 'Create account';
  const loadingText = mode === 'login' ? 'Signing in…' : 'Creating account…';

  const inputBorder = (hasError) =>
    `1px solid ${hasError ? brand.accentColor : '#dadce0'}`;

  return (
    <>
      <style>{`
        @keyframes atlasFadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .atlas-form-enter { animation: atlasFadeInUp 0.25s ease-out; }
        .atlas-input {
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .atlas-input:focus {
          outline: none;
          border-color: ${brand.primaryColor} !important;
          box-shadow: 0 0 0 3px rgba(79, 109, 245, 0.12);
        }
        .atlas-toggle:focus-visible,
        .atlas-submit:focus-visible,
        .atlas-fill-btn:focus-visible {
          outline: 2px solid ${brand.primaryColor};
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .atlas-form-enter { animation: none; }
          .atlas-input { transition: none; }
        }
      `}</style>

      <div
        className="min-h-screen flex"
        style={{ fontFamily: brand.fontBody, backgroundColor: brand.backgroundColor }}
      >
        {/* Left branding panel */}
        <div
          className="hidden lg:flex lg:w-2/5 xl:w-[44%] flex-col justify-between p-10 xl:p-14"
          style={{
            background: 'linear-gradient(160deg, #eef1fe 0%, #e8ecfc 55%, #e1e6fb 100%)',
          }}
        >
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${brand.primaryColor}, #6c8af5)`,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span
              className="text-xl font-semibold tracking-tight"
              style={{ color: '#202124' }}
            >
              Atlas
            </span>
          </div>

          {/* Example conversation */}
          <div className="max-w-md space-y-3.5">
            <h2
              className="text-lg font-medium mb-4"
              style={{ color: '#202124' }}
            >
              Ask your documents anything.
            </h2>
            {EXAMPLE_CHATS.map((msg, i) =>
              msg.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div
                    className="px-4 py-2.5 rounded-2xl rounded-br-md text-sm max-w-xs leading-relaxed"
                    style={{ backgroundColor: brand.primaryColor, color: 'white' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-md text-sm max-w-md leading-relaxed"
                    style={{
                      backgroundColor: 'white',
                      color: '#202124',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }}
                  >
                    {msg.text}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {msg.citations.map((c, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full"
                          style={{
                            backgroundColor: '#eef1fe',
                            color: brand.primaryColor,
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          <Icons.FileText size={11} aria-hidden="true" />
                          {c.doc} &middot; p.{c.page}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Footer */}
          <div className="text-xs" style={{ color: brand.neutralColor }}>
            Grounded answers &middot; Every response cites its source
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-sm">
            {/* Mobile brand */}
            <div className="lg:hidden flex items-center gap-2.5 mb-10 justify-center">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${brand.primaryColor}, #6c8af5)`,
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span
                className="text-xl font-semibold tracking-tight"
                style={{ color: '#202124' }}
              >
                Atlas
              </span>
            </div>

            {/* Mode toggle */}
            <div
              className="flex gap-1 p-1 rounded-xl mb-7"
              style={{ backgroundColor: '#f1f3f4' }}
              role="tablist"
              aria-label="Authentication mode"
            >
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'login'}
                onClick={() => switchMode('login')}
                className="atlas-toggle flex-1 py-2 text-sm font-medium rounded-lg transition-all"
                style={
                  mode === 'login'
                    ? {
                        backgroundColor: 'white',
                        color: '#202124',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                      }
                    : { color: brand.neutralColor, background: 'transparent' }
                }
              >
                Sign in
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'register'}
                onClick={() => switchMode('register')}
                className="atlas-toggle flex-1 py-2 text-sm font-medium rounded-lg transition-all"
                style={
                  mode === 'register'
                    ? {
                        backgroundColor: 'white',
                        color: '#202124',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                      }
                    : { color: brand.neutralColor, background: 'transparent' }
                }
              >
                Create account
              </button>
            </div>

            <div key={mode} className="atlas-form-enter">
              {/* Heading */}
              <h1
                className="text-2xl font-semibold mb-1.5"
                style={{ color: '#202124' }}
              >
                {headingText}
              </h1>
              <p className="text-sm mb-6" style={{ color: brand.neutralColor }}>
                {subText}
              </p>

              {/* Form-level error */}
              {errors.form && (
                <div
                  role="alert"
                  className="flex items-start gap-2 px-3.5 py-3 rounded-xl mb-4 text-sm leading-relaxed"
                  style={{ backgroundColor: '#fce8e6', color: '#c5221f' }}
                >
                  <Icons.AlertCircle
                    size={16}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{errors.form}</span>
                </div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
                aria-busy={loading}
              >
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: '#202124' }}
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleFieldChange(setEmail, 'email')}
                    className="atlas-input w-full px-3.5 py-2.5 rounded-xl text-sm"
                    style={{
                      border: inputBorder(!!errors.email),
                      backgroundColor: 'white',
                      color: '#202124',
                    }}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs mt-1.5"
                      style={{ color: brand.accentColor }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: '#202124' }}
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    autoComplete={
                      mode === 'login' ? 'current-password' : 'new-password'
                    }
                    value={password}
                    onChange={handleFieldChange(setPassword, 'password')}
                    className="atlas-input w-full px-3.5 py-2.5 rounded-xl text-sm"
                    style={{
                      border: inputBorder(!!errors.password),
                      backgroundColor: 'white',
                      color: '#202124',
                    }}
                    aria-invalid={!!errors.password}
                    aria-describedby={
                      errors.password ? 'password-error' : undefined
                    }
                  />
                  {errors.password && (
                    <p
                      id="password-error"
                      role="alert"
                      className="text-xs mt-1.5"
                      style={{ color: brand.accentColor }}
                    >
                      {errors.password}
                    </p>
                  )}
                  {mode === 'register' && !errors.password && (
                    <p
                      className="text-xs mt-1.5"
                      style={{ color: brand.neutralColor }}
                    >
                      At least 8 characters.
                    </p>
                  )}
                </div>

                {mode === 'register' && (
                  <div>
                    <Label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: '#202124' }}
                    >
                      Confirm password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={handleFieldChange(
                        setConfirmPassword,
                        'confirmPassword'
                      )}
                      className="atlas-input w-full px-3.5 py-2.5 rounded-xl text-sm"
                      style={{
                        border: inputBorder(!!errors.confirmPassword),
                        backgroundColor: 'white',
                        color: '#202124',
                      }}
                      aria-invalid={!!errors.confirmPassword}
                      aria-describedby={
                        errors.confirmPassword
                          ? 'confirmPassword-error'
                          : undefined
                      }
                    />
                    {errors.confirmPassword && (
                      <p
                        id="confirmPassword-error"
                        role="alert"
                        className="text-xs mt-1.5"
                        style={{ color: brand.accentColor }}
                      >
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="atlas-submit w-full py-3 rounded-xl font-medium text-white transition-opacity disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${brand.primaryColor} 0%, #6c8af5 100%)`,
                    opacity: loading ? 0.75 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      <span>{loadingText}</span>
                    </>
                  ) : (
                    <span>{submitText}</span>
                  )}
                </button>
              </form>

              {/* Register admin note */}
              {mode === 'register' && (
                <p
                  className="text-xs mt-5 leading-relaxed"
                  style={{ color: brand.neutralColor }}
                >
                  The first account in a workspace becomes the admin and
                  manages documents. Everyone else joins as a regular user
                  &mdash; ask questions and explore citations.
                </p>
              )}

              {/* Demo hint */}
              {mode === 'login' && (
                <div
                  className="mt-7 pt-5"
                  style={{ borderTop: '1px solid #e8eaed' }}
                >
                  <p className="text-xs mb-2" style={{ color: brand.neutralColor }}>
                    Just exploring? Try a demo admin account:
                  </p>
                  <div
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg"
                    style={{ backgroundColor: '#f8f9fa' }}
                  >
                    <code
                      className="text-xs"
                      style={{
                        color: '#202124',
                        fontFamily:
                          'ui-monospace, SFMono-Regular, Menlo, monospace',
                      }}
                    >
                      admin@northwind.co &middot; northwind2024
                    </code>
                    <button
                      type="button"
                      onClick={fillDemo}
                      className="atlas-fill-btn text-xs font-medium px-2.5 py-1 rounded-md transition-opacity hover:opacity-80"
                      style={{
                        color: brand.primaryColor,
                        backgroundColor: '#eef1fe',
                      }}
                      aria-label="Fill the form with the demo admin account credentials"
                    >
                      Fill
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
