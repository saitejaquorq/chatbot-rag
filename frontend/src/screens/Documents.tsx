// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

const { Button, Card, CardContent, Input, Select, Table, THead, TBody, TR, TH, TD, Empty } = UI;
const { Plus, Search, X, FileText, Trash, Filter, Upload, AlertCircle } = Icons;

const SAMPLE_DOCUMENTS = [
  {
    id: "doc-7a3f1b2c",
    filename: "Q4 2025 Financial Report.pdf",
    file_type: "PDF",
    file_size: 2_847_392,
    status: "ready",
    error_message: null,
    chunk_count: 34,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-08T09:14:00Z",
  },
  {
    id: "doc-2e9d4c1a",
    filename: "Employee Handbook 2026.docx",
    file_type: "DOCX",
    file_size: 156_320,
    status: "ready",
    error_message: null,
    chunk_count: 12,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-07T15:42:00Z",
  },
  {
    id: "doc-5b8f3a72",
    filename: "Product Specifications v3.pdf",
    file_type: "PDF",
    file_size: 4_102_558,
    status: "processing",
    error_message: null,
    chunk_count: 0,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-13T08:20:00Z",
  },
  {
    id: "doc-1c6e8d49",
    filename: "API Reference Guide.md",
    file_type: "Markdown",
    file_size: 48_201,
    status: "ready",
    error_message: null,
    chunk_count: 8,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-06T11:05:00Z",
  },
  {
    id: "doc-9d2a7e35",
    filename: "Security Policy.pdf",
    file_type: "PDF",
    file_size: 892_104,
    status: "error",
    error_message: "PDF parsing failed: encrypted file requires a password to extract text content.",
    chunk_count: 0,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-11T14:30:00Z",
  },
  {
    id: "doc-3f1b6c82",
    filename: "Onboarding Checklist.txt",
    file_type: "TXT",
    file_size: 12_440,
    status: "ready",
    error_message: null,
    chunk_count: 3,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-05T10:12:00Z",
  },
  {
    id: "doc-6a4e2f19",
    filename: "Brand Guidelines.html",
    file_type: "HTML",
    file_size: 67_890,
    status: "ready",
    error_message: null,
    chunk_count: 5,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-04T16:48:00Z",
  },
  {
    id: "doc-8b3c1d57",
    filename: "Customer Survey Results Q3.pdf",
    file_type: "PDF",
    file_size: 1_245_600,
    status: "processing",
    error_message: null,
    chunk_count: 0,
    uploaded_by: "k.morrison@northwind.co",
    created_at: "2026-10-13T08:25:00Z",
  },
];

const SUPPORTED_TYPES = ["PDF", "DOCX", "Markdown", "HTML", "TXT"];
const SUPPORTED_EXTENSIONS = [".pdf", ".docx", ".md", ".markdown", ".html", ".htm", ".txt"];

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const val = bytes / Math.pow(1024, i);
  return val.toFixed(i === 0 ? 0 : 1) + " " + units[i];
}

function formatDate(iso) {
  const d = new Date(iso);
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  const hours = d.getHours();
  const mins = d.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const h12 = hours % 12 || 12;
  return month + " " + day + ", " + year + " · " + h12 + ":" + mins + " " + ampm;
}

function relativeDate(iso) {
  const now = new Date("2026-10-13T09:00:00Z");
  const then = new Date(iso);
  const diffMs = now - then;
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return diffMin + " min ago";
  if (diffHr < 24) return diffHr + " hr ago";
  if (diffDay === 1) return "yesterday";
  return diffDay + " days ago";
}

export default function Screen() {
  const navigate = useNavigate();
  const brand = {
    primaryColor: "#4f6df5",
    accentColor: "#ea4335",
    neutralColor: "#5f6368",
    backgroundColor: "#ffffff",
    radius: "0.5rem",
    fontHeading: "Inter, system-ui, sans-serif",
    fontBody: "Inter, system-ui, sans-serif",
  };

  // Simulate current user — admin role for the main screen
  var currentUser = { email: "k.morrison@northwind.co", role: "admin" };
  // Toggle to demonstrate permission-denied state
  var [viewAsRole, setViewAsRole] = React.useState("admin");
  var effectiveRole = viewAsRole;

  var [documents, setDocuments] = React.useState(SAMPLE_DOCUMENTS);
  var [searchQuery, setSearchQuery] = React.useState("");
  var [statusFilter, setStatusFilter] = React.useState("all");
  var [uploadError, setUploadError] = React.useState(null);
  var [uploadingFiles, setUploadingFiles] = React.useState([]);
  var [deleteTarget, setDeleteTarget] = React.useState(null);
  var [recentlyDeleted, setRecentlyDeleted] = React.useState(null);
  var [sortBy, setSortBy] = React.useState("date-desc");

  // Simulate processing completion for documents that are "processing"
  React.useEffect(function() {
    var timer = setTimeout(function() {
      setDocuments(function(prev) {
        return prev.map(function(doc) {
          if (doc.status === "processing" && doc.id === "doc-8b3c1d57") {
            return Object.assign({}, doc, {
              status: "ready",
              chunk_count: 18,
            });
          }
          return doc;
        });
      });
    }, 6000);
    return function() { clearTimeout(timer); };
  }, []);

  var filteredDocs = documents.filter(function(doc) {
    var matchesSearch = doc.filename.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    var matchesStatus = statusFilter === "all" || doc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sort
  filteredDocs.sort(function(a, b) {
    switch (sortBy) {
      case "name-asc":
        return a.filename.localeCompare(b.filename);
      case "name-desc":
        return b.filename.localeCompare(a.filename);
      case "date-desc":
        return new Date(b.created_at) - new Date(a.created_at);
      case "date-asc":
        return new Date(a.created_at) - new Date(b.created_at);
      default:
        return 0;
    }
  });

  var stats = {
    total: documents.length,
    ready: documents.filter(function(d) { return d.status === "ready"; }).length,
    processing: documents.filter(function(d) { return d.status === "processing"; }).length,
    error: documents.filter(function(d) { return d.status === "error"; }).length,
    chunks: documents.reduce(function(acc, d) { return acc + (d.chunk_count || 0); }, 0),
  };

  function getFileType(filename) {
    var ext = filename.toLowerCase();
    if (ext.endsWith(".pdf")) return "PDF";
    if (ext.endsWith(".docx")) return "DOCX";
    if (ext.endsWith(".md") || ext.endsWith(".markdown")) return "Markdown";
    if (ext.endsWith(".html") || ext.endsWith(".htm")) return "HTML";
    if (ext.endsWith(".txt")) return "TXT";
    return null;
  }

  function handleFileSelect(fileList) {
    setUploadError(null);
    var valid = [];
    var invalid = [];
    for (var i = 0; i < fileList.length; i++) {
      var f = fileList[i];
      var ft = getFileType(f.name);
      if (ft) {
        valid.push({ file: f, fileType: ft });
      } else {
        invalid.push(f.name);
      }
    }
    if (invalid.length > 0) {
      setUploadError("Unsupported file type" + (invalid.length > 1 ? "s" : "") + ": " + invalid.join(", ") + ". Supported formats: PDF, DOCX, Markdown, HTML, TXT.");
    }
    if (valid.length > 0) {
      // Add each as a processing document
      var newDocs = valid.map(function(item, idx) {
        return {
          id: "doc-" + Date.now() + "-" + idx,
          filename: item.file.name,
          file_type: item.fileType,
          file_size: item.file.size,
          status: "processing",
          error_message: null,
          chunk_count: 0,
          uploaded_by: currentUser.email,
          created_at: new Date().toISOString(),
        };
      });
      setDocuments(function(prev) { return newDocs.concat(prev); });
      // Simulate processing → ready after a delay for each
      newDocs.forEach(function(nd, idx) {
        setTimeout(function() {
          setDocuments(function(prev) {
            return prev.map(function(doc) {
              if (doc.id === nd.id) {
                return Object.assign({}, doc, {
                  status: "ready",
                  chunk_count: Math.max(2, Math.floor(nd.file_size / 35000) + 1),
                });
              }
              return doc;
            });
          });
        }, 3500 + idx * 1200);
      });
    }
  }

  function handleDelete(docId) {
    var doc = documents.find(function(d) { return d.id === docId; });
    setRecentlyDeleted(doc);
    setDocuments(function(prev) { return prev.filter(function(d) { return d.id !== docId; }); });
    setDeleteTarget(null);
  }

  function handleUndoDelete() {
    if (recentlyDeleted) {
      setDocuments(function(prev) { return [recentlyDeleted].concat(prev); });
      setRecentlyDeleted(null);
    }
  }

  // ===== Permission denied state =====
  if (effectiveRole === "user") {
    return (
      React.createElement("div", {
        style: {
          fontFamily: brand.fontBody,
          backgroundColor: brand.backgroundColor,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        },
      },
        React.createElement("div", {
          style: { maxWidth: "28rem", textAlign: "center" },
        },
          React.createElement("div", {
            style: {
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
              backgroundColor: "rgba(79, 109, 245, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            },
          },
            React.createElement(Icons.FileText, {
              size: 28,
              style: { color: brand.primaryColor },
              "aria-hidden": true,
            })
          ),
          React.createElement("h1", {
            style: {
              fontFamily: brand.fontHeading,
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#1a1a1a",
              margin: "0 0 0.75rem",
            },
          }, "Document management is admin-only"),
          React.createElement("p", {
            style: {
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: brand.neutralColor,
              margin: "0 0 1.75rem",
            },
          }, "You're signed in as a regular user. Ask questions and get grounded answers in the chat — uploading and managing documents is handled by your workspace admin."),
          React.createElement("div", {
            style: { display: "flex", gap: "0.75rem", justifyContent: "center" },
          },
            React.createElement(UI.Button, {
              onClick: function() { navigate("chat"); },
              style: {
                backgroundColor: brand.primaryColor,
                color: "#ffffff",
                fontWeight: 500,
                borderRadius: brand.radius,
              },
            }, "Go to chat"),
            React.createElement(UI.Button, {
              variant: "outline",
              onClick: function() { setViewAsRole("admin"); },
              style: { borderRadius: brand.radius },
            }, "View as admin")
          )
        )
      )
    );
  }

  // ===== Main admin view =====
  var statusColors = {
    ready: { bg: "rgba(52, 168, 83, 0.10)", text: "#137333", dot: "#34a853" },
    processing: { bg: "rgba(66, 133, 244, 0.10)", text: "#1967d2", dot: "#4f6df5" },
    error: { bg: "rgba(234, 67, 53, 0.10)", text: "#c5221f", dot: "#ea4335" },
  };

  function StatusBadge(_ref) {
    var status = _ref.status;
    var s = statusColors[status];
    return React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.375rem",
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: s.text,
        backgroundColor: s.bg,
        padding: "0.1875rem 0.5625rem",
        borderRadius: "0.375rem",
        whiteSpace: "nowrap",
      },
    },
      React.createElement("span", {
        style: {
          width: "0.375rem",
          height: "0.375rem",
          borderRadius: "50%",
          backgroundColor: s.dot,
          display: "inline-block",
          animation: status === "processing" ? "pulse-dot 1.5s ease-in-out infinite" : "none",
        },
        "aria-hidden": true,
      }),
      status === "ready" ? "Ready" : status === "processing" ? "Processing" : "Error"
    );
  }

  function FileTypeIcon(_ref2) {
    var type = _ref2.type;
    var iconColor = brand.primaryColor;
    var label = type;
    return React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        borderRadius: "0.375rem",
        backgroundColor: "rgba(79, 109, 245, 0.06)",
        flexShrink: 0,
      },
      "aria-hidden": true,
    },
      React.createElement(Icons.FileText, { size: 16, style: { color: iconColor } })
    );
  }

  return (
    React.createElement("div", {
      style: {
        fontFamily: brand.fontBody,
        backgroundColor: brand.backgroundColor,
        color: "#1a1a1a",
        minHeight: "100vh",
      },
    },
      React.createElement("style", null,
        "@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }" +
        "@keyframes fade-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }" +
        "@keyframes slide-down { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }" +
        ".row-enter { animation: fade-in 0.3s ease-out; }" +
        ".panel-enter { animation: slide-down 0.2s ease-out; }" +
        ".focus-ring:focus-visible { outline: 2px solid " + brand.primaryColor + "; outline-offset: 2px; }" +
        "@media (prefers-reduced-motion: reduce) { .row-enter, .panel-enter { animation: none; } @keyframes pulse-dot { 0%,100% { opacity: 1; } } }"
      ),

      // Page container
      React.createElement("div", {
        style: { maxWidth: "72rem", margin: "0 auto", padding: "2rem 1.5rem" },
      },
        // Header
        React.createElement("div", {
          style: { marginBottom: "2rem" },
        },
          React.createElement("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            },
          },
            React.createElement("span", {
              style: {
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: brand.primaryColor,
              },
            }, "Knowledge base"),
            React.createElement("span", {
              style: {
                fontSize: "0.75rem",
                fontWeight: 500,
                color: brand.neutralColor,
                padding: "0.0625rem 0.4375rem",
                borderRadius: "0.25rem",
                backgroundColor: "rgba(79, 109, 245, 0.06)",
              },
            }, "Admin")
          ),
          React.createElement("h1", {
            style: {
              fontFamily: brand.fontHeading,
              fontSize: "1.75rem",
              fontWeight: 600,
              margin: "0 0 0.375rem",
              letterSpacing: "-0.01em",
            },
          }, "Document management"),
          React.createElement("p", {
            style: {
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: brand.neutralColor,
              margin: 0,
              maxWidth: "42rem",
            },
          }, "Upload, monitor, and remove the documents that ground your chatbot's answers. Deleting a document removes all its chunks and vectors from the knowledge base.")
        ),

        // Stats row
        React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          },
        },
          React.createElement(UI.Card, {
            style: { borderRadius: brand.radius, border: "1px solid #e8eaed", boxShadow: "none" },
          },
            React.createElement(UI.CardContent, { style: { padding: "1rem 1.25rem" } },
              React.createElement("div", {
                style: { fontSize: "0.75rem", fontWeight: 500, color: brand.neutralColor, marginBottom: "0.25rem" },
              }, "Total documents"),
              React.createElement("div", {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                },
              }, stats.total)
            )
          ),
          React.createElement(UI.Card, {
            style: { borderRadius: brand.radius, border: "1px solid #e8eaed", boxShadow: "none" },
          },
            React.createElement(UI.CardContent, { style: { padding: "1rem 1.25rem" } },
              React.createElement("div", {
                style: { fontSize: "0.75rem", fontWeight: 500, color: brand.neutralColor, marginBottom: "0.25rem" },
              }, "Ready"),
              React.createElement("div", {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  color: "#137333",
                  lineHeight: 1.2,
                },
              }, stats.ready)
            )
          ),
          React.createElement(UI.Card, {
            style: { borderRadius: brand.radius, border: "1px solid #e8eaed", boxShadow: "none" },
          },
            React.createElement(UI.CardContent, { style: { padding: "1rem 1.25rem" } },
              React.createElement("div", {
                style: { fontSize: "0.75rem", fontWeight: 500, color: brand.neutralColor, marginBottom: "0.25rem" },
              }, "Processing"),
              React.createElement("div", {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  color: brand.primaryColor,
                  lineHeight: 1.2,
                },
              }, stats.processing)
            )
          ),
          React.createElement(UI.Card, {
            style: { borderRadius: brand.radius, border: "1px solid #e8eaed", boxShadow: "none" },
          },
            React.createElement(UI.CardContent, { style: { padding: "1rem 1.25rem" } },
              React.createElement("div", {
                style: { fontSize: "0.75rem", fontWeight: 500, color: brand.neutralColor, marginBottom: "0.25rem" },
              }, "Indexed chunks"),
              React.createElement("div", {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                },
              }, stats.chunks)
            )
          )
        ),

        // Upload area
        React.createElement(UI.Card, {
          style: {
            borderRadius: brand.radius,
            border: "1px solid #e8eaed",
            boxShadow: "none",
            marginBottom: "1.5rem",
          },
        },
          React.createElement(UI.CardContent, { style: { padding: "1.5rem" } },
            React.createElement("label", {
              htmlFor: "file-upload",
              style: { display: "block", marginBottom: "0.75rem" },
            },
              React.createElement("span", {
                style: { fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", display: "block", marginBottom: "0.25rem" },
              }, "Upload documents"),
              React.createElement("span", {
                style: { fontSize: "0.8125rem", color: brand.neutralColor },
              }, "Supported formats: PDF, DOCX, Markdown, HTML, TXT")
            ),
            React.createElement("div", {
              style: {
                border: "2px dashed #dadce0",
                borderRadius: brand.radius,
                padding: "1.5rem",
                textAlign: "center",
                transition: "border-color 0.2s, background-color 0.2s",
                cursor: "pointer",
              },
              onClick: function(e) {
                if (e.target.tagName !== "INPUT") {
                  document.getElementById("file-upload").click();
                }
              },
              onMouseEnter: function(e) { e.currentTarget.style.borderColor = brand.primaryColor; e.currentTarget.style.backgroundColor = "rgba(79, 109, 245, 0.02)"; },
              onMouseLeave: function(e) { e.currentTarget.style.borderColor = "#dadce0"; e.currentTarget.style.backgroundColor = "transparent"; },
              role: "button",
              tabIndex: 0,
              onKeyDown: function(e) {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  document.getElementById("file-upload").click();
                }
              },
              "aria-label": "Choose files to upload",
            },
              React.createElement(Icons.Upload, {
                size: 24,
                style: { color: brand.primaryColor, margin: "0 auto 0.5rem", display: "block" },
                "aria-hidden": true,
              }),
              React.createElement("span", {
                style: { fontSize: "0.875rem", color: "#1a1a1a", fontWeight: 500 },
              }, "Click to browse or drop files here"),
              React.createElement("span", {
                style: { fontSize: "0.75rem", color: brand.neutralColor, display: "block", marginTop: "0.25rem" },
              }, "Files are chunked into ~1000-token passages and embedded automatically"),
              React.createElement("input", {
                id: "file-upload",
                type: "file",
                multiple: true,
                accept: ".pdf,.docx,.md,.markdown,.html,.htm,.txt",
                style: { display: "none" },
                onChange: function(e) {
                  if (e.target.files.length > 0) {
                    handleFileSelect(e.target.files);
                    e.target.value = "";
                  }
                },
              })
            ),
            uploadError && React.createElement("div", {
              style: {
                marginTop: "0.75rem",
                padding: "0.625rem 0.875rem",
                borderRadius: brand.radius,
                backgroundColor: "rgba(234, 67, 53, 0.06)",
                border: "1px solid rgba(234, 67, 53, 0.15)",
                fontSize: "0.8125rem",
                color: "#c5221f",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                animation: "fade-in 0.2s ease-out",
              },
              role: "alert",
            },
              React.createElement(Icons.AlertCircle, { size: 16, style: { flexShrink: 0, marginTop: "0.0625rem" }, "aria-hidden": true }),
              React.createElement("span", null, uploadError)
            )
          )
        ),

        // Undo delete banner
        recentlyDeleted && React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.625rem 1rem",
            borderRadius: brand.radius,
            backgroundColor: "rgba(79, 109, 245, 0.06)",
            border: "1px solid rgba(79, 109, 245, 0.15)",
            marginBottom: "1rem",
            fontSize: "0.8125rem",
            animation: "slide-down 0.2s ease-out",
          },
        },
          React.createElement("span", { style: { color: "#1a1a1a" } },
            "Deleted \"" + recentlyDeleted.filename + "\" and all associated chunks and vectors."
          ),
          React.createElement("div", { style: { display: "flex", gap: "0.5rem" } },
            React.createElement(UI.Button, {
              variant: "ghost",
              onClick: handleUndoDelete,
              style: { fontSize: "0.8125rem", fontWeight: 500, color: brand.primaryColor, padding: "0.25rem 0.5rem" },
            }, "Undo"),
            React.createElement(UI.Button, {
              variant: "ghost",
              onClick: function() { setRecentlyDeleted(null); },
              style: { fontSize: "0.8125rem", color: brand.neutralColor, padding: "0.25rem 0.5rem" },
              "aria-label": "Dismiss notification",
            }, React.createElement(Icons.X, { size: 14, "aria-hidden": true }))
          )
        ),

        // Filter + search bar
        React.createElement("div", {
          style: {
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            marginBottom: "1rem",
            flexWrap: "wrap",
          },
        },
          React.createElement("div", {
            style: { position: "relative", flex: "1 1 16rem", minWidth: "12rem" },
          },
            React.createElement(Icons.Search, {
              size: 16,
              style: {
                position: "absolute",
                left: "0.625rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: brand.neutralColor,
                pointerEvents: "none",
              },
              "aria-hidden": true,
            }),
            React.createElement(UI.Input, {
              id: "doc-search",
              type: "text",
              placeholder: "Search by filename…",
              value: searchQuery,
              onChange: function(e) { setSearchQuery(e.target.value); },
              style: {
                paddingLeft: "2rem",
                borderRadius: brand.radius,
                borderColor: "#e8eaed",
                height: "2.25rem",
              },
              "aria-label": "Search documents by filename",
            })
          ),
          React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" } },
            React.createElement(Icons.Filter, {
              size: 16,
              style: { color: brand.neutralColor },
              "aria-hidden": true,
            }),
            React.createElement(UI.Select, {
              id: "status-filter",
              value: statusFilter,
              onChange: function(e) { setStatusFilter(e.target.value); },
              style: { borderRadius: brand.radius, height: "2.25rem", borderColor: "#e8eaed" },
              "aria-label": "Filter by status",
            },
              React.createElement("option", { value: "all" }, "All statuses"),
              React.createElement("option", { value: "ready" }, "Ready"),
              React.createElement("option", { value: "processing" }, "Processing"),
              React.createElement("option", { value: "error" }, "Error")
            )
          ),
          React.createElement(UI.Select, {
            id: "sort-by",
            value: sortBy,
            onChange: function(e) { setSortBy(e.target.value); },
            style: { borderRadius: brand.radius, height: "2.25rem", borderColor: "#e8eaed" },
            "aria-label": "Sort documents",
          },
            React.createElement("option", { value: "date-desc" }, "Newest first"),
            React.createElement("option", { value: "date-asc" }, "Oldest first"),
            React.createElement("option", { value: "name-asc" }, "Name A–Z"),
            React.createElement("option", { value: "name-desc" }, "Name Z–A")
          )
        ),

        // Document table / empty states
        filteredDocs.length === 0 && searchQuery === "" && statusFilter === "all" && documents.length === 0
          ? // First-use empty state
          React.createElement(UI.Empty, {
            style: { padding: "3rem 1.5rem", textAlign: "center" },
          },
            React.createElement("div", {
              style: {
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                backgroundColor: "rgba(79, 109, 245, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
              },
            },
              React.createElement(Icons.FileText, { size: 28, style: { color: brand.primaryColor }, "aria-hidden": true })
            ),
            React.createElement("h2", {
              style: {
                fontFamily: brand.fontHeading,
                fontSize: "1.0625rem",
                fontWeight: 600,
                margin: "0 0 0.375rem",
              },
            }, "No documents yet"),
            React.createElement("p", {
              style: { fontSize: "0.875rem", color: brand.neutralColor, margin: "0 0 1rem", maxWidth: "24rem", marginLeft: "auto", marginRight: "auto" },
            }, "Upload your first document to start building the knowledge base. Once processed, the chatbot can answer questions grounded in your content."),
            React.createElement(UI.Button, {
              onClick: function() { document.getElementById("file-upload").click(); },
              style: {
                backgroundColor: brand.primaryColor,
                color: "#ffffff",
                fontWeight: 500,
                borderRadius: brand.radius,
              },
            },
              React.createElement(Icons.Plus, { size: 16, style: { marginRight: "0.375rem" }, "aria-hidden": true }),
              "Upload a document"
            )
          )
          : filteredDocs.length === 0
          ? // No results empty state
          React.createElement(UI.Empty, {
            style: { padding: "2.5rem 1.5rem", textAlign: "center" },
          },
            React.createElement(Icons.Search, {
              size: 28,
              style: { color: brand.neutralColor, margin: "0 auto 0.75rem", display: "block" },
              "aria-hidden": true,
            }),
            React.createElement("h2", {
              style: { fontFamily: brand.fontHeading, fontSize: "1.0625rem", fontWeight: 600, margin: "0 0 0.25rem" },
            }, "No documents match your filters"),
            React.createElement("p", {
              style: { fontSize: "0.875rem", color: brand.neutralColor, margin: "0 0 0.875rem" },
            }, searchQuery ? "No documents named \"" + searchQuery + "\" with the selected status." : "No documents have the selected status."),
            React.createElement(UI.Button, {
              variant: "outline",
              onClick: function() { setSearchQuery(""); setStatusFilter("all"); },
              style: { borderRadius: brand.radius },
            }, "Clear filters")
          )
          : // Document table
          React.createElement(UI.Card, {
            style: { borderRadius: brand.radius, border: "1px solid #e8eaed", boxShadow: "none", overflow: "hidden" },
          },
            React.createElement(UI.Table, null,
              React.createElement(UI.THead, null,
                React.createElement(UI.TR, null,
                  React.createElement(UI.TH, {
                    style: {
                      textAlign: "left",
                      padding: "0.625rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: brand.neutralColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: "1px solid #e8eaed",
                      whiteSpace: "nowrap",
                    },
                  }, "Document"),
                  React.createElement(UI.TH, {
                    style: {
                      textAlign: "left",
                      padding: "0.625rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: brand.neutralColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: "1px solid #e8eaed",
                      whiteSpace: "nowrap",
                    },
                  }, "Type"),
                  React.createElement(UI.TH, {
                    style: {
                      textAlign: "right",
                      padding: "0.625rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: brand.neutralColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: "1px solid #e8eaed",
                      whiteSpace: "nowrap",
                    },
                  }, "Chunks"),
                  React.createElement(UI.TH, {
                    style: {
                      textAlign: "left",
                      padding: "0.625rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: brand.neutralColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: "1px solid #e8eaed",
                      whiteSpace: "nowrap",
                    },
                  }, "Status"),
                  React.createElement(UI.TH, {
                    style: {
                      textAlign: "left",
                      padding: "0.625rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: brand.neutralColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: "1px solid #e8eaed",
                      whiteSpace: "nowrap",
                    },
                  }, "Uploaded"),
                  React.createElement(UI.TH, {
                    style: {
                      textAlign: "right",
                      padding: "0.625rem 1rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: brand.neutralColor,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      borderBottom: "1px solid #e8eaed",
                      whiteSpace: "nowrap",
                    },
                  }, "")
                )
              ),
              React.createElement(UI.TBody, null,
                filteredDocs.map(function(doc) {
                  return React.createElement(UI.TR, {
                    key: doc.id,
                    className: "row-enter",
                    style: { borderBottom: "1px solid #f0f1f3" },
                  },
                    // Document name
                    React.createElement(UI.TD, {
                      style: { padding: "0.75rem 1rem", verticalAlign: "top" },
                    },
                      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.625rem" } },
                        React.createElement(FileTypeIcon, { type: doc.file_type }),
                        React.createElement("div", null,
                          React.createElement("div", {
                            style: { fontSize: "0.875rem", fontWeight: 500, color: "#1a1a1a", lineHeight: 1.3 },
                          }, doc.filename),
                          React.createElement("div", {
                            style: { fontSize: "0.75rem", color: brand.neutralColor, marginTop: "0.125rem", fontVariantNumeric: "tabular-nums" },
                          }, formatBytes(doc.file_size))
                        )
                      )
                    ),
                    // Type
                    React.createElement(UI.TD, {
                      style: { padding: "0.75rem 1rem", verticalAlign: "middle" },
                    },
                      React.createElement("span", {
                        style: { fontSize: "0.8125rem", color: brand.neutralColor },
                      }, doc.file_type)
                    ),
                    // Chunks
                    React.createElement(UI.TD, {
                      style: {
                        padding: "0.75rem 1rem",
                        textAlign: "right",
                        verticalAlign: "middle",
                        fontVariantNumeric: "tabular-nums",
                        fontSize: "0.875rem",
                        color: doc.status === "processing" ? brand.neutralColor : "#1a1a1a",
                      },
                    },
                      doc.chunk_count > 0 ? doc.chunk_count : "—"
                    ),
                    // Status
                    React.createElement(UI.TD, {
                      style: { padding: "0.75rem 1rem", verticalAlign: "middle" },
                    },
                      React.createElement("div", null,
                        React.createElement(StatusBadge, { status: doc.status }),
                        doc.status === "error" && doc.error_message && React.createElement("div", {
                          style: {
                            fontSize: "0.75rem",
                            color: "#c5221f",
                            marginTop: "0.375rem",
                            maxWidth: "20rem",
                            lineHeight: 1.4,
                          },
                        }, doc.error_message)
                      )
                    ),
                    // Uploaded
                    React.createElement(UI.TD, {
                      style: { padding: "0.75rem 1rem", verticalAlign: "middle" },
                    },
                      React.createElement("div", {
                        style: { fontSize: "0.8125rem", color: "#1a1a1a", fontVariantNumeric: "tabular-nums" },
                      }, relativeDate(doc.created_at)),
                      React.createElement("div", {
                        style: { fontSize: "0.7rem", color: brand.neutralColor, marginTop: "0.125rem" },
                      }, doc.uploaded_by)
                    ),
                    // Actions
                    React.createElement(UI.TD, {
                      style: { padding: "0.75rem 1rem", textAlign: "right", verticalAlign: "middle" },
                    },
                      React.createElement(UI.Button, {
                        variant: "ghost",
                        onClick: function() { setDeleteTarget(doc); },
                        "aria-label": "Delete " + doc.filename,
                        style: {
                          padding: "0.3125rem",
                          borderRadius: "0.375rem",
                          color: doc.status === "processing" ? "#bbb" : brand.accentColor,
                          cursor: doc.status === "processing" ? "not-allowed" : "pointer",
                        },
                        disabled: doc.status === "processing",
                      },
                        React.createElement(Icons.Trash, { size: 16, "aria-hidden": true })
                      )
                    )
                  );
                })
              )
            )
          ),

        // Footer with result count
        filteredDocs.length > 0 && React.createElement("div", {
          style: {
            marginTop: "0.75rem",
            fontSize: "0.75rem",
            color: brand.neutralColor,
            fontVariantNumeric: "tabular-nums",
          },
        },
          filteredDocs.length + " document" + (filteredDocs.length === 1 ? "" : "s") +
          (searchQuery || statusFilter !== "all" ? " · filtered from " + documents.length : "")
        )
      ),

      // Delete confirmation dialog
      deleteTarget && React.createElement("div", {
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.32)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "1rem",
        },
        onClick: function(e) {
          if (e.target === e.currentTarget) setDeleteTarget(null);
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "delete-dialog-title",
        onKeyDown: function(e) {
          if (e.key === "Escape") setDeleteTarget(null);
        },
      },
        React.createElement("div", {
          className: "panel-enter",
          style: {
            backgroundColor: "#ffffff",
            borderRadius: "0.75rem",
            maxWidth: "26rem",
            width: "100%",
            padding: "1.5rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          },
        },
          React.createElement("div", {
            style: {
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              backgroundColor: "rgba(234, 67, 53, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            },
          },
            React.createElement(Icons.Trash, { size: 18, style: { color: brand.accentColor }, "aria-hidden": true })
          ),
          React.createElement("h2", {
            id: "delete-dialog-title",
            style: {
              fontFamily: brand.fontHeading,
              fontSize: "1.125rem",
              fontWeight: 600,
              margin: "0 0 0.5rem",
            },
          }, "Delete this document?"),
          React.createElement("p", {
            style: {
              fontSize: "0.875rem",
              lineHeight: 1.6,
              color: brand.neutralColor,
              margin: "0 0 0.5rem",
            },
          },
            "\"" + deleteTarget.filename + "\" will be permanently removed along with all " +
            (deleteTarget.chunk_count > 0 ? deleteTarget.chunk_count + " chunk" + (deleteTarget.chunk_count === 1 ? "" : "s") + " and embedding vectors" : "associated data") +
            ". The chatbot will no longer be able to retrieve or cite this document."
          ),
          React.createElement("p", {
            style: {
              fontSize: "0.75rem",
              color: brand.neutralColor,
              margin: "0 0 1.25rem",
              fontStyle: "italic",
            },
          }, "This action cannot be undone from the database."),
          React.createElement("div", {
            style: { display: "flex", justifyContent: "flex-end", gap: "0.5rem" },
          },
            React.createElement(UI.Button, {
              variant: "outline",
              onClick: function() { setDeleteTarget(null); },
              style: { borderRadius: brand.radius },
              autoFocus: true,
            }, "Cancel"),
            React.createElement(UI.Button, {
              onClick: function() { handleDelete(deleteTarget.id); },
              style: {
                backgroundColor: brand.accentColor,
                color: "#ffffff",
                fontWeight: 500,
                borderRadius: brand.radius,
              },
            }, "Delete document")
          )
        )
      )
    )
  );
}
