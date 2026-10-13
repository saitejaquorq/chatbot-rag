// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

const { Input } = UI;
const { Plus, Search, X, Menu, User, FileText, Package, Trash, Filter, Download, ArrowLeft, ArrowRight } = Icons;

const SAMPLE_CONVERSATIONS = [
  {
    id: 'conv-1',
    title: 'Q4 Onboarding Process',
    created_at: '2026-10-13T09:15:00',
    updated_at: '2026-10-13T09:42:00',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'What does the new hire onboarding process look like for Q4?',
        rewritten_query: null,
        created_at: '2026-10-13T09:15:00'
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'The Q4 onboarding process at Northwind covers five business days and is split into three phases. Phase one (days 1–2) covers IT account provisioning, security training, policy acknowledgement forms, and workspace assignment. Phase two (days 3–4) introduces team-specific training and shadowing sessions with an assigned mentor. Phase three (day 5) is a review day where the new hire meets with their manager to set 30-day goals and confirm all system access is functional. HR must receive the signed offer letter at least 48 hours before day one to trigger the IT provisioning workflow.',
        rewritten_query: null,
        citations: [
          { citation_index: 1, source_filename: 'Onboarding_Playbook_2026.pdf', page_number: 4, snippet: 'Phase 1 (Days 1-2): IT account provisioning, security training, policy acknowledgement forms, and workspace assignment. The new hire’s manager must confirm equipment requests at least 48 hours prior to day one.' },
          { citation_index: 2, source_filename: 'Onboarding_Playbook_2026.pdf', page_number: 7, snippet: 'Phase 3 (Day 5): Review meeting with direct manager. Set 30-60-90 day goals. Confirm all system access is functional. HR closes the onboarding ticket and archives provisioning records.' }
        ],
        created_at: '2026-10-13T09:15:30'
      },
      {
        id: 'msg-3',
        role: 'user',
        content: 'What about the second phase — is there a checklist for mentors?',
        rewritten_query: 'What is the mentor checklist for Phase 2 (days 3-4) of the Q4 onboarding process?',
        created_at: '2026-10-13T09:22:00'
      },
      {
        id: 'msg-4',
        role: 'assistant',
        content: 'Yes. Phase two requires mentors to complete a five-item checklist before the end of day four. The items are: (1) walk through the team’s sprint board and explain the current roadmap, (2) introduce the new hire to at least three cross-functional stakeholders, (3) pair on one live ticket or task, (4) review the team’s coding or documentation standards, and (5) confirm the new hire has access to all shared drives and communication channels. Mentors submit the completed checklist to HR via the Onboarding Portal, which automatically updates the new hire’s progress tracker.',
        rewritten_query: 'What is the mentor checklist for Phase 2 (days 3-4) of the Q4 onboarding process?',
        citations: [
          { citation_index: 1, source_filename: 'Onboarding_Playbook_2026.pdf', page_number: 5, snippet: 'Phase 2 (Days 3-4): Mentor Checklist — 1) Sprint board walkthrough 2) Cross-functional introductions (min. 3) 3) Pair on one live ticket 4) Review team standards 5) Confirm shared drive and channel access. Submit via Onboarding Portal.' },
          { citation_index: 2, source_filename: 'Mentor_Guidelines_2026.docx', page_number: null, snippet: 'Mentors are expected to submit the Phase 2 checklist through the Onboarding Portal by end of day 4. The portal updates the new hire progress tracker automatically upon submission.' }
        ],
        created_at: '2026-10-13T09:22:40'
      }
    ]
  },
  {
    id: 'conv-2',
    title: 'Remote Work Policy',
    created_at: '2026-10-12T14:30:00',
    updated_at: '2026-10-12T15:10:00',
    messages: [
      {
        id: 'msg-5',
        role: 'user',
        content: 'How many remote work days are allowed per week?',
        rewritten_query: null,
        created_at: '2026-10-12T14:30:00'
      },
      {
        id: 'msg-6',
        role: 'assistant',
        content: 'Employees are eligible for up to three remote work days per week under the hybrid schedule policy. At least two days must be spent in the office, typically Tuesday and Thursday, which are designated as collaboration days. Remote work days require manager approval and must be logged in the Workday scheduling tool by the Friday of the preceding week.',
        rewritten_query: null,
        citations: [
          { citation_index: 1, source_filename: 'Remote_Work_Policy_2026.docx', page_number: null, snippet: 'Employees may work remotely up to 3 days per week. A minimum of 2 in-office days is required, with Tuesday and Thursday designated as collaboration days. Remote schedules must be approved by the direct manager and logged in Workday by the preceding Friday.' }
        ],
        created_at: '2026-10-12T14:30:45'
      }
    ]
  },
  {
    id: 'conv-3',
    title: 'API Authentication Guide',
    created_at: '2026-10-11T11:05:00',
    updated_at: '2026-10-11T11:38:00',
    messages: [
      {
        id: 'msg-7',
        role: 'user',
        content: 'How do I authenticate API requests using JWT?',
        rewritten_query: null,
        created_at: '2026-10-11T11:05:00'
      },
      {
        id: 'msg-8',
        role: 'assistant',
        content: 'All API requests must include a Bearer token in the Authorization header. To obtain a token, send a POST request to /api/auth/login with your email and password. The response includes a JWT valid for 24 hours. Attach it to subsequent requests as: Authorization: Bearer <token>. Tokens refresh automatically if you include the refresh_token cookie. If the token expires, you’ll receive a 401 response and must re-authenticate.',
        rewritten_query: null,
        citations: [
          { citation_index: 1, source_filename: 'API_Documentation_v3.md', page_number: null, snippet: '## Authentication\n\nAll API requests require a Bearer token in the Authorization header. Obtain a token via POST /api/auth/login with email and password. JWT is valid for 24 hours. Use: `Authorization: Bearer <token>`' },
          { citation_index: 2, source_filename: 'API_Documentation_v3.md', page_number: null, snippet: 'Tokens refresh automatically when the refresh_token cookie is present. On expiry (401), re-authenticate via POST /api/auth/login. Do not store tokens in localStorage for production applications.' }
        ],
        created_at: '2026-10-11T11:05:30'
      }
    ]
  },
  {
    id: 'conv-4',
    title: 'Expense Reimbursement',
    created_at: '2026-10-10T16:20:00',
    updated_at: '2026-10-10T16:45:00',
    messages: [
      {
        id: 'msg-9',
        role: 'user',
        content: 'What is the deadline for submitting expense reports?',
        rewritten_query: null,
        created_at: '2026-10-10T16:20:00'
      },
      {
        id: 'msg-10',
        role: 'assistant',
        content: 'Expense reports must be submitted within 30 days of the transaction date. Reports submitted after 30 days require additional approval from the department head and may be denied. All submissions go through the Workday Expenses module, and receipts must be attached as PDF or image files. Reimbursement is processed within 5–7 business days of approval.',
        rewritten_query: null,
        citations: [
          { citation_index: 1, source_filename: 'Finance_Handbook_2026.pdf', page_number: 12, snippet: 'Expense reports must be submitted within 30 days of the transaction date. Late submissions require department head approval and are subject to denial. Submit via Workday Expenses module with attached receipts (PDF or image).' }
        ],
        created_at: '2026-10-10T16:20:30'
      }
    ]
  },
  {
    id: 'conv-5',
    title: 'Security Incident Response',
    created_at: '2026-10-09T10:00:00',
    updated_at: '2026-10-09T10:25:00',
    messages: [
      {
        id: 'msg-11',
        role: 'user',
        content: 'What are the steps for reporting a security incident?',
        rewritten_query: null,
        created_at: '2026-10-09T10:00:00'
      },
      {
        id: 'msg-12',
        role: 'assistant',
        content: 'If you suspect a security incident, follow these steps immediately: (1) Do not attempt to investigate or remediate on your own. (2) Contact the Security team via the #security-incidents Slack channel or call the 24/7 hotline at ext. 9111. (3) Document what you observed — time, system, and any error messages. (4) The on-call security engineer will classify the incident severity within 15 minutes and initiate the response plan. (5) You will receive updates every 30 minutes until the incident is resolved or downgraded.',
        rewritten_query: null,
        citations: [
          { citation_index: 1, source_filename: 'Security_Incident_Response_Plan.pdf', page_number: 3, snippet: 'Step 1: Do not investigate or remediate independently. Step 2: Contact Security via #security-incidents Slack or 24/7 hotline (ext. 9111). Step 3: Document observations (time, system, errors). Step 4: On-call engineer classifies severity within 15 min. Step 5: Updates every 30 min until resolved.' }
        ],
        created_at: '2026-10-09T10:00:30'
      }
    ]
  }
];

const RESPONSE_POOL = [
  {
    keywords: ['onboard', 'new hire', 'orientation', 'mentor', 'phase'],
    content: 'The Q4 onboarding process at Northwind covers five business days and is split into three phases. Phase one (days 1–2) covers IT account provisioning, security training, policy acknowledgement forms, and workspace assignment. Phase two (days 3–4) introduces team-specific training and shadowing sessions with an assigned mentor. Phase three (day 5) is a review day where the new hire meets with their manager to set 30-day goals and confirm all system access is functional. HR must receive the signed offer letter at least 48 hours before day one to trigger the IT provisioning workflow.',
    citations: [
      { citation_index: 1, source_filename: 'Onboarding_Playbook_2026.pdf', page_number: 4, snippet: 'Phase 1 (Days 1-2): IT account provisioning, security training, policy acknowledgement forms, and workspace assignment. The new hire’s manager must confirm equipment requests at least 48 hours prior to day one.' },
      { citation_index: 2, source_filename: 'Onboarding_Playbook_2026.pdf', page_number: 7, snippet: 'Phase 3 (Day 5): Review meeting with direct manager. Set 30-60-90 day goals. Confirm all system access is functional. HR closes the onboarding ticket and archives provisioning records.' }
    ]
  },
  {
    keywords: ['remote', 'work from home', 'hybrid', 'telecommute'],
    content: 'Employees are eligible for up to three remote work days per week under the hybrid schedule policy. At least two days must be spent in the office, typically Tuesday and Thursday, which are designated as collaboration days. Remote work days require manager approval and must be logged in the Workday scheduling tool by the Friday of the preceding week.',
    citations: [
      { citation_index: 1, source_filename: 'Remote_Work_Policy_2026.docx', page_number: null, snippet: 'Employees may work remotely up to 3 days per week. A minimum of 2 in-office days is required, with Tuesday and Thursday designated as collaboration days. Remote schedules must be approved by the direct manager and logged in Workday by the preceding Friday.' }
    ]
  },
  {
    keywords: ['api', 'authenticate', 'jwt', 'token', 'login', 'auth'],
    content: 'All API requests must include a Bearer token in the Authorization header. To obtain a token, send a POST request to /api/auth/login with your email and password. The response includes a JWT valid for 24 hours. Attach it to subsequent requests as: Authorization: Bearer <token>. Tokens refresh automatically if you include the refresh_token cookie. If the token expires, you’ll receive a 401 response and must re-authenticate.',
    citations: [
      { citation_index: 1, source_filename: 'API_Documentation_v3.md', page_number: null, snippet: '## Authentication\n\nAll API requests require a Bearer token in the Authorization header. Obtain a token via POST /api/auth/login with email and password. JWT is valid for 24 hours. Use: `Authorization: Bearer <token>`' },
      { citation_index: 2, source_filename: 'API_Documentation_v3.md', page_number: null, snippet: 'Tokens refresh automatically when the refresh_token cookie is present. On expiry (401), re-authenticate via POST /api/auth/login. Do not store tokens in localStorage for production applications.' }
    ]
  },
  {
    keywords: ['expense', 'reimburse', 'receipt', 'report', 'finance'],
    content: 'Expense reports must be submitted within 30 days of the transaction date. Reports submitted after 30 days require additional approval from the department head and may be denied. All submissions go through the Workday Expenses module, and receipts must be attached as PDF or image files. Reimbursement is processed within 5–7 business days of approval.',
    citations: [
      { citation_index: 1, source_filename: 'Finance_Handbook_2026.pdf', page_number: 12, snippet: 'Expense reports must be submitted within 30 days of the transaction date. Late submissions require department head approval and are subject to denial. Submit via Workday Expenses module with attached receipts (PDF or image).' }
    ]
  },
  {
    keywords: ['security', 'incident', 'breach', 'report', 'vulnerability'],
    content: 'If you suspect a security incident, follow these steps immediately: (1) Do not attempt to investigate or remediate on your own. (2) Contact the Security team via the #security-incidents Slack channel or call the 24/7 hotline at ext. 9111. (3) Document what you observed — time, system, and any error messages. (4) The on-call security engineer will classify the incident severity within 15 minutes and initiate the response plan. (5) You will receive updates every 30 minutes until the incident is resolved or downgraded.',
    citations: [
      { citation_index: 1, source_filename: 'Security_Incident_Response_Plan.pdf', page_number: 3, snippet: 'Step 1: Do not investigate or remediate independently. Step 2: Contact Security via #security-incidents Slack or 24/7 hotline (ext. 9111). Step 3: Document observations (time, system, errors). Step 4: On-call engineer classifies severity within 15 min. Step 5: Updates every 30 min until resolved.' }
    ]
  }
];

const FOLLOWUP_RESPONSES = {
  'onboard': {
    content: 'Yes. Phase two requires mentors to complete a five-item checklist before the end of day four. The items are: (1) walk through the team’s sprint board and explain the current roadmap, (2) introduce the new hire to at least three cross-functional stakeholders, (3) pair on one live ticket or task, (4) review the team’s coding or documentation standards, and (5) confirm the new hire has access to all shared drives and communication channels. Mentors submit the completed checklist to HR via the Onboarding Portal, which automatically updates the new hire’s progress tracker.',
    citations: [
      { citation_index: 1, source_filename: 'Onboarding_Playbook_2026.pdf', page_number: 5, snippet: 'Phase 2 (Days 3-4): Mentor Checklist — 1) Sprint board walkthrough 2) Cross-functional introductions (min. 3) 3) Pair on one live ticket 4) Review team standards 5) Confirm shared drive and channel access. Submit via Onboarding Portal.' },
      { citation_index: 2, source_filename: 'Mentor_Guidelines_2026.docx', page_number: null, snippet: 'Mentors are expected to submit the Phase 2 checklist through the Onboarding Portal by end of day 4. The portal updates the new hire progress tracker automatically upon submission.' }
    ]
  }
};

const IDK_RESPONSE = {
  content: 'I don’t have enough information in the uploaded documents to answer that question. Try rephrasing your question, or ask an admin to upload relevant documents to the knowledge base.',
  citations: []
};

const SUGGESTED_QUESTIONS = [
  'What does the onboarding process look like?',
  'How many remote work days are allowed?',
  'How do I authenticate API requests?',
  'What is the expense reimbursement deadline?'
];

export default function Screen() {
  const navigate = useNavigate();
  const [conversations, setConversations] = React.useState(SAMPLE_CONVERSATIONS);
  const [activeConversationId, setActiveConversationId] = React.useState('conv-1');
  const [input, setInput] = React.useState('');
  const [isStreaming, setIsStreaming] = React.useState(false);
  const [streamingText, setStreamingText] = React.useState('');
  const [streamingCitations, setStreamingCitations] = React.useState([]);
  const [streamingRewritten, setStreamingRewritten] = React.useState(null);
  const [selectedCitation, setSelectedCitation] = React.useState(null);
  const [showSidebar, setShowSidebar] = React.useState(true);
  const [lastTopic, setLastTopic] = React.useState(null);

  const intervalRef = React.useRef(null);
  const messagesEndRef = React.useRef(null);
  const textareaRef = React.useRef(null);
  const fullResponseRef = React.useRef(null);
  const wordIndexRef = React.useRef(0);

  const activeConversation = conversations.find(c => c.id === activeConversationId);
  const activeMessages = activeConversation ? activeConversation.messages : [];

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [activeMessages, streamingText, isStreaming]);

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function detectTopic(query) {
    const lower = query.toLowerCase();
    for (const resp of RESPONSE_POOL) {
      for (const kw of resp.keywords) {
        if (lower.includes(kw)) {
          return resp.keywords[0];
        }
      }
    }
    return null;
  }

  function isFollowUp(query) {
    const lower = query.toLowerCase();
    const followUpIndicators = ['what about', 'the second', 'the first', 'can you tell me more', 'what about that', 'and the', 'the other one', 'it', 'that one', 'them', 'those'];
    return followUpIndicators.some(ind => lower.includes(ind));
  }

  function generateResponse(query, history) {
    const topic = detectTopic(query);
    const followUp = isFollowUp(query);

    if (followUp && lastTopic && FOLLOWUP_RESPONSES[lastTopic]) {
      const rewritten = 'What is the mentor checklist for Phase 2 of the onboarding process mentioned above?';
      return { ...FOLLOWUP_RESPONSES[lastTopic], rewritten_query: rewritten };
    }

    if (topic) {
      const match = RESPONSE_POOL.find(r => r.keywords.includes(topic));
      setLastTopic(topic);
      return { ...match, rewritten_query: null };
    }

    if (lastTopic) {
      const match = RESPONSE_POOL.find(r => r.keywords.includes(lastTopic));
      if (match) {
        const rewritten = query + ' (in the context of our previous discussion about ' + lastTopic + ')';
        return { ...match, rewritten_query: rewritten };
      }
    }

    setLastTopic(null);
    return { ...IDK_RESPONSE, rewritten_query: null };
  }

  function handleSend() {
    if (!input.trim() || isStreaming) return;

    const userMessage = {
      id: 'msg-' + Date.now(),
      role: 'user',
      content: input.trim(),
      rewritten_query: null,
      created_at: new Date().toISOString()
    };

    const response = generateResponse(input.trim(), activeMessages);

    // Add user message to conversation
    setConversations(prev => prev.map(c => {
      if (c.id === activeConversationId) {
        return {
          ...c,
          messages: [...c.messages, userMessage],
          updated_at: new Date().toISOString()
        };
      }
      return c;
    }));

    setInput('');
    setIsStreaming(true);
    setStreamingRewritten(response.rewritten_query);
    setStreamingCitations([]);
    setStreamingText('');

    // Start streaming
    const words = response.content.split(' ');
    fullResponseRef.current = response;
    wordIndexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (wordIndexRef.current < words.length) {
        const nextIndex = wordIndexRef.current + 1;
        wordIndexRef.current = nextIndex;
        setStreamingText(words.slice(0, nextIndex).join(' '));
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        const assistantMessage = {
          id: 'msg-' + Date.now() + '-a',
          role: 'assistant',
          content: response.content,
          rewritten_query: response.rewritten_query,
          citations: response.citations,
          created_at: new Date().toISOString()
        };

        setConversations(prev => prev.map(c => {
          if (c.id === activeConversationId) {
            return {
              ...c,
              messages: [...c.messages, assistantMessage],
              updated_at: new Date().toISOString()
            };
          }
          return c;
        }));

        setIsStreaming(false);
        setStreamingText('');
        setStreamingCitations(response.citations);
        setStreamingRewritten(null);
      }
    }, 45);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleNewChat() {
    const newConv = {
      id: 'conv-' + Date.now(),
      title: 'New Conversation',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      messages: []
    };
    setConversations(prev => [newConv, ...prev]);
    setActiveConversationId(newConv.id);
    setLastTopic(null);
    setSelectedCitation(null);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsStreaming(false);
    setStreamingText('');
  }

  function handleSelectConversation(convId) {
    if (isStreaming) return;
    setActiveConversationId(convId);
    setSelectedCitation(null);
    setLastTopic(null);
    const conv = conversations.find(c => c.id === convId);
    if (conv && conv.messages.length > 0) {
      const lastAssistant = [...conv.messages].reverse().find(m => m.role === 'assistant');
      if (lastAssistant) {
        const topic = detectTopic(conv.messages.find(m => m.role === 'user')?.content || '');
        setLastTopic(topic);
      }
    }
  }

  function handleDeleteConversation(convId) {
    setConversations(prev => prev.filter(c => c.id !== convId));
    if (convId === activeConversationId) {
      const remaining = conversations.filter(c => c.id !== convId);
      if (remaining.length > 0) {
        setActiveConversationId(remaining[0].id);
      } else {
        handleNewChat();
      }
    }
  }

  function formatTime(iso) {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }

  function formatDate(iso) {
    const d = new Date(iso);
    const today = new Date('2026-10-13');
    const diffDays = Math.floor((today - d) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return diffDays + ' days ago';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  const isEmptyConversation = activeMessages.length === 0 && !isStreaming;

  return (
    <div className="flex h-full w-full overflow-hidden" style={{ fontFamily: brand.fontBody, backgroundColor: brand.backgroundColor }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeToken {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .msg-enter { animation: fadeInUp 0.3s ease-out; }
        .token-fade { animation: fadeToken 0.15s ease-out; }
        .cursor-blink { animation: blink 1s infinite; }
        .dot-bounce { animation: bounceDot 1.4s infinite ease-in-out; }
        .panel-slide { animation: slideInRight 0.25s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .msg-enter, .token-fade, .cursor-blink, .dot-bounce, .panel-slide {
            animation: none !important;
          }
          * { transition: none !important; }
        }
      `}</style>

      {/* Conversation Sidebar */}
      {showSidebar && (
        <aside
          className="flex flex-col flex-shrink-0 border-r"
          style={{ width: '260px', borderColor: '#e8eaed', backgroundColor: '#f8f9fa' }}
          aria-label="Conversation history"
        >
          <div className="p-3">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
              style={{
                color: brand.primaryColor,
                border: '1px solid #dadce0',
                backgroundColor: '#ffffff'
              }}
              aria-label="Start a new conversation"
            >
              <Icons.Plus size={18} aria-hidden="true" />
              New Chat
            </button>
          </div>

          <div className="px-4 pb-1">
            <h2 className="text-xs font-semibold uppercase tracking-wide" style={{ color: brand.neutralColor }}>
              Recent Conversations
            </h2>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 pb-3">
            <ul className="space-y-0.5">
              {conversations.map(conv => (
                <li key={conv.id}>
                  <div
                    className="group flex items-center rounded-lg transition-colors"
                    style={{
                      backgroundColor: conv.id === activeConversationId ? '#e8f0fe' : 'transparent'
                    }}
                  >
                    <button
                      onClick={() => handleSelectConversation(conv.id)}
                      className="flex-1 flex items-center gap-2.5 px-3 py-2 text-left text-sm min-w-0"
                      style={{
                        color: conv.id === activeConversationId ? brand.primaryColor : '#3c4043',
                        fontWeight: conv.id === activeConversationId ? 500 : 400
                      }}
                      aria-current={conv.id === activeConversationId ? 'true' : undefined}
                    >
                      <Icons.FileText size={15} className="flex-shrink-0" aria-hidden="true" />
                      <span className="truncate">{conv.title}</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteConversation(conv.id); }}
                      className="p-1.5 mr-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      style={{ color: brand.neutralColor }}
                      aria-label={'Delete conversation: ' + conv.title}
                    >
                      <Icons.Trash size={14} aria-hidden="true" />
                    </button>
                  </div>
                  {conversations.indexOf(conv) < conversations.length - 1 && (
                    <div className="px-3">
                      <span className="text-xs" style={{ color: '#9aa0a6' }}>{formatDate(conv.created_at)}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t p-3" style={{ borderColor: '#e8eaed' }}>
            <button
              onClick={() => navigate('documents')}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-gray-100"
              style={{ color: brand.neutralColor }}
            >
              <Icons.Package size={16} aria-hidden="true" />
              Knowledge Base
            </button>
            <button
              onClick={() => navigate('login')}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-gray-100"
              style={{ color: brand.neutralColor }}
            >
              <Icons.ArrowLeft size={16} aria-hidden="true" />
              Sign Out
            </button>
          </div>
        </aside>
      )}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Chat Header */}
        <header className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0" style={{ borderColor: '#e8eaed' }}>
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-1.5 rounded-lg transition-colors hover:bg-gray-100 flex-shrink-0"
              style={{ color: brand.neutralColor }}
              aria-label={showSidebar ? 'Hide conversation list' : 'Show conversation list'}
            >
              <Icons.Menu size={20} aria-hidden="true" />
            </button>
            <h1 className="text-base font-semibold truncate" style={{ color: '#1f1f1f' }}>
              {activeConversation ? activeConversation.title : 'New Conversation'}
            </h1>
            {activeMessages.length > 0 && (
              <span className="text-xs hidden sm:inline" style={{ color: '#9aa0a6' }}>
                {activeMessages.length} messages
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs hidden md:inline" style={{ color: brand.neutralColor }}>
              GPT-4o-mini
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0"
              style={{ backgroundColor: brand.primaryColor }}
              aria-label="User avatar"
            >
              MA
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          {isEmptyConversation ? (
            <div className="h-full flex flex-col items-center justify-center px-6 pb-20">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: 'linear-gradient(135deg, ' + brand.primaryColor + ', ' + brand.accentColor + ')'
                }}
                aria-hidden="true"
              >
                <Icons.Search size={28} style={{ color: '#ffffff' }} />
              </div>
              <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1f1f1f' }}>
                Ask about your documents
              </h2>
              <p className="text-sm mb-8 text-center max-w-md" style={{ color: brand.neutralColor }}>
                I can answer questions from your organisation’s uploaded knowledge base. Citations link back to the source document and page.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg w-full">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => { setInput(q); textareaRef.current && textareaRef.current.focus(); }}
                    className="text-left text-sm rounded-xl px-4 py-3 transition-all hover:shadow-sm"
                    style={{
                      border: '1px solid #e8eaed',
                      color: '#3c4043',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
              {activeMessages.map((msg, idx) => (
                <MessageBubble
                  key={msg.id}
                  msg={msg}
                  onCitationClick={(citation) => setSelectedCitation(citation)}
                  isLast={idx === activeMessages.length - 1}
                />
              ))}

              {/* Streaming response */}
              {isStreaming && (
                <div className="msg-enter">
                  {streamingRewritten && (
                    <div className="mb-3 flex items-start gap-2">
                      <div
                        className="inline-flex items-center gap-1.5 text-xs rounded-md px-2.5 py-1.5"
                        style={{ backgroundColor: '#fef7e0', color: '#b06000' }}
                      >
                        <Icons.Filter size={12} aria-hidden="true" />
                        <span>Resolved as: {streamingRewritten}</span>
                      </div>
                    </div>
                  )}
                  {streamingText === '' ? (
                    <div className="flex items-center gap-1.5 pl-1" aria-label="Assistant is thinking">
                      <span className="dot-bounce inline-block w-2 h-2 rounded-full" style={{ backgroundColor: brand.primaryColor, animationDelay: '0s' }} />
                      <span className="dot-bounce inline-block w-2 h-2 rounded-full" style={{ backgroundColor: brand.primaryColor, animationDelay: '0.2s' }} />
                      <span className="dot-bounce inline-block w-2 h-2 rounded-full" style={{ backgroundColor: brand.primaryColor, animationDelay: '0.4s' }} />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <div className="text-sm leading-relaxed" style={{ color: '#1f1f1f' }}>
                        <span className="token-fade">{streamingText}</span>
                        <span className="cursor-blink inline-block w-0.5 h-4 ml-0.5 align-text-bottom" style={{ backgroundColor: brand.primaryColor }} />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex-shrink-0 pb-4 pt-2 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div
              className="flex items-end gap-2 rounded-2xl px-3 py-2.5 transition-shadow"
              style={{
                border: '1px solid #dadce0',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              <label htmlFor="chat-input" className="sr-only">Type your question</label>
              <textarea
                id="chat-input"
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about your documents…"
                rows={1}
                disabled={isStreaming}
                className="flex-1 resize-none bg-transparent text-sm outline-none py-1.5"
                style={{ color: '#1f1f1f', maxHeight: '120px', lineHeight: '1.5' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isStreaming}
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: input.trim() && !isStreaming
                    ? 'linear-gradient(135deg, ' + brand.primaryColor + ', #6b8cfa)'
                    : 'none',
                  backgroundColor: (!input.trim() || isStreaming) ? '#f1f3f4' : undefined,
                  color: input.trim() && !isStreaming ? '#ffffff' : '#9aa0a6',
                  border: 'none',
                  cursor: (!input.trim() || isStreaming) ? 'not-allowed' : 'pointer'
                }}
                aria-label="Send message"
              >
                <Icons.ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="text-xs text-center mt-2" style={{ color: '#9aa0a6' }}>
              Answers are grounded in uploaded documents. Press Enter to send, Shift+Enter for a new line.
            </p>
          </div>
        </div>

        {/* Citation Side Panel */}
        {selectedCitation && (
          <div
            className="absolute top-0 right-0 h-full flex flex-col panel-slide"
            style={{
              width: '340px',
              backgroundColor: '#ffffff',
              borderLeft: '1px solid #e8eaed',
              boxShadow: '-4px 0 12px rgba(0,0,0,0.06)',
              zIndex: 10
            }}
            role="dialog"
            aria-label="Citation source detail"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0" style={{ borderColor: '#e8eaed' }}>
              <h2 className="text-sm font-semibold" style={{ color: '#1f1f1f' }}>
                Source {selectedCitation.citation_index}
              </h2>
              <button
                onClick={() => setSelectedCitation(null)}
                className="p-1.5 rounded-lg transition-colors hover:bg-gray-100"
                style={{ color: brand.neutralColor }}
                aria-label="Close citation panel"
              >
                <Icons.X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: brand.neutralColor }}>
                  Document
                </span>
                <div className="mt-1.5 flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#e8f0fe' }}
                  >
                    <Icons.FileText size={18} style={{ color: brand.primaryColor }} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium break-all" style={{ color: '#1f1f1f' }}>
                    {selectedCitation.source_filename}
                  </span>
                </div>
              </div>

              {selectedCitation.page_number !== null && (
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: brand.neutralColor }}>
                    Page
                  </span>
                  <p className="mt-1 text-sm" style={{ color: '#1f1f1f', fontVariantNumeric: 'tabular-nums' }}>
                    Page {selectedCitation.page_number}
                  </p>
                </div>
              )}

              {selectedCitation.page_number === null && (
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: brand.neutralColor }}>
                    Location
                  </span>
                  <p className="mt-1 text-sm" style={{ color: '#1f1f1f' }}>
                    Full document (no page numbers)
                  </p>
                </div>
              )}

              <div>
                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: brand.neutralColor }}>
                  Source Snippet
                </span>
                <div
                  className="mt-1.5 rounded-lg p-3 text-sm leading-relaxed"
                  style={{
                    backgroundColor: '#f8f9fa',
                    color: '#3c4043',
                    border: '1px solid #e8eaed',
                    fontFamily: brand.fontBody
                  }}
                >
                  {selectedCitation.snippet}
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    border: '1px solid #dadce0',
                    color: brand.primaryColor,
                    backgroundColor: '#ffffff'
                  }}
                  aria-label="Open full document"
                >
                  <Icons.Download size={16} aria-hidden="true" />
                  Open Full Document
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function MessageBubble({ msg, onCitationClick, isLast }) {
  if (msg.role === 'user') {
    return (
      <div className="msg-enter flex justify-end">
        <div className="max-w-[85%] flex flex-col items-end gap-1.5">
          {msg.rewritten_query && (
            <div
              className="inline-flex items-start gap-1.5 text-xs rounded-md px-2.5 py-1.5 max-w-full"
              style={{ backgroundColor: '#fef7e0', color: '#b06000' }}
            >
              <Icons.Filter size={12} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>Resolved as: {msg.rewritten_query}</span>
            </div>
          )}
          <div
            className="rounded-2xl rounded-tr-md px-4 py-2.5 text-sm leading-relaxed"
            style={{
              backgroundColor: '#e8f0fe',
              color: '#1f1f1f'
            }}
          >
            {msg.content}
          </div>
          <span className="text-xs px-1" style={{ color: '#9aa0a6', fontVariantNumeric: 'tabular-nums' }}>
            {new Date(msg.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="msg-enter flex flex-col gap-1.5">
      {msg.rewritten_query && (
        <div
          className="inline-flex items-start gap-1.5 text-xs rounded-md px-2.5 py-1.5 self-start max-w-full"
          style={{ backgroundColor: '#fef7e0', color: '#b06000' }}
        >
          <Icons.Filter size={12} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>Resolved as: {msg.rewritten_query}</span>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, ' + brand.primaryColor + ', ' + brand.accentColor + ')'
          }}
          aria-hidden="true"
        >
          <Icons.Search size={16} style={{ color: '#ffffff' }} />
        </div>
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <div className="text-sm leading-relaxed" style={{ color: '#1f1f1f' }}>
            {msg.content}
          </div>

          {msg.citations && msg.citations.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {msg.citations.map(citation => (
                <button
                  key={citation.citation_index}
                  onClick={() => onCitationClick(citation)}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all hover:shadow-sm"
                  style={{
                    border: '1px solid #dadce0',
                    backgroundColor: '#ffffff',
                    color: brand.primaryColor
                  }}
                  aria-label={'View source ' + citation.citation_index + ': ' + citation.source_filename + (citation.page_number ? ', page ' + citation.page_number : '')}
                >
                  <span
                    className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-semibold"
                    style={{ backgroundColor: '#e8f0fe', color: brand.primaryColor }}
                  >
                    {citation.citation_index}
                  </span>
                  <span className="truncate max-w-[180px]">{citation.source_filename}</span>
                  {citation.page_number !== null && (
                    <span style={{ color: '#9aa0a6', fontVariantNumeric: 'tabular-nums' }}>p.{citation.page_number}</span>
                  )}
                </button>
              ))}
            </div>
          )}

          <span className="text-xs" style={{ color: '#9aa0a6', fontVariantNumeric: 'tabular-nums' }}>
            {new Date(msg.created_at).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
}
