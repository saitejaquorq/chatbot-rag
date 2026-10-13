"""Application entrypoint.

Generated from the approved architecture: one router per component that owns
endpoints, one route per endpoint the API spec declares. Every generated route
is a stub that returns a typed placeholder, so the service starts, serves its
OpenAPI document and passes its tests before a single handler is implemented.
"""

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app import models  # noqa: F401 -- imported so the tables register before create_all
from app.database import Base, engine
from app.services import configured_services

app = FastAPI(
    title="Chatbot RAG",
    description="A chatbot with RAG. A gemini styled chatbot with all important features required for a chatbot. \nCore features include\n* Document ingestion: upload or sync files (PDF, DOCX, Markdown, HTML, TXT), with status tracking and error reporting\n* Chunking and embedding: split documents into searchable passages and convert them to vectors\n* Retrieval: semantic search over the chunks, ideally hybrid (vector plus keyword) for better accuracy\n* Grounded answer generation: the LLM answers from retrieved context only\n* Citations: each answer links back to the source document, page, and snippet\n* \"I don't know\" handling: a graceful response when the documents don't contain the answer\n* Chat interface with streaming: tokens appear as they're generated\n* Conversation memory: follow-up questions work (\"what about the second one?\") through query rewriting using chat history\n* Document management: list, update, and delete documents, with chunks and vectors removed along with them\n* Multi-LLM support: switch models per request, with fallback if a provider fails\n* Reranking: a second-pass model that improves the order of retrieved passages\n* Metadata filters: restrict answers to certain documents, dates, or collections\n* User accounts and workspaces: separate data per user or team, with access control\n* Feedback buttons: thumbs up/down on answers, to find weak spots\n* Usage and cost tracking: tokens, latency, and spend per model\n* Admin view: see what was retrieved and why, for debugging bad answers",
    version="0.1.0",
)

# The SPA runs on a different origin than the API, so the browser refuses its calls
# unless that origin is allowed here. In development that is the Vite dev server; when
# deployed, the platform injects the frontend's real URL as ALLOWED_ORIGINS (comma
# separated). Point ALLOWED_ORIGINS at the real thing and nothing else has to change.
_dev_origins = ["http://localhost:5173", "http://127.0.0.1:5173"]
_allowed_origins = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "").split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=_allowed_origins or _dev_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# The scaffold ships no migrations, so the tables are created from the models on
# startup. Replace this with Alembic before anything holds data worth keeping.
Base.metadata.create_all(bind=engine)


@app.get("/health")
async def health() -> dict[str, object]:
    """Liveness probe, and the only route here that is not a stub."""
    return {"status": "ok", "services": configured_services()}
