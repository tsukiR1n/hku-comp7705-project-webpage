import React, { useMemo, useState } from "react";

const projectMeta = {
  title:
    "A Conversational Multimodal Agent for Evidence-Grounded Question Answering over Lecture-Style Educational Videos",
  subtitle:
    "A modular prototype for evidence-grounded question answering over lecture-style educational videos.",
  tagline:
    "This webpage tracks our ongoing project progress. Phase 2 converted lecture videos into timestamped evidence units, and Phase 3 builds retrieval and initial grounded QA on top of those units.",
  badges: [
    "Multimodal Agent",
    "Evidence Grounding",
    "Lecture Video QA",
    "Temporal Retrieval",
  ],
  currentStage: "Phase 3 – Retrieval and Initial Grounded QA",
  status: "Ongoing Project Webpage",
};

const teamMembers = [
  "Bi Yifeng (Team Lead)",
  "Han Jiapeng",
  "Li Siyao",
  "Yu Zhengting",
];

const overviewParagraphs = [
  "Long-form lecture video question answering is more difficult than image question answering because the relevant evidence may be distributed across multiple timestamps, multiple shots, and multiple modalities such as speech, slides, board writing, and on-screen text.",
  "Directly applying large models to raw long-form videos is inefficient and often unreliable. Practical limitations include context length constraints, inference cost, and weak grounding when answers are not tied back to explicit temporal evidence.",
  "For that reason, this project focuses on lecture-style educational videos rather than general-purpose video QA. The system follows a modular engineering approach: multimedia parsing, timestamped evidence construction, retrieval/localization, evidence aggregation, and grounded answer generation, rather than training a new multimodal foundation model.",
];

const objectives = [
  "Support conversational question answering over lecture-style educational videos.",
  "Parse multimedia inputs through ASR, keyframe extraction, and OCR.",
  "Construct structured timestamped evidence units for downstream use.",
  "Retrieve and localize temporally relevant evidence segments.",
  "Generate grounded answers based on retrieved evidence.",
  "Provide explainable responses with timestamps and supporting references.",
  "Implement the workflow on top of an existing multi-agent framework in a practical, modular way.",
];

const practicalMotivation = [
  "Locate where a concept is explained in a lecture.",
  "Locate where an example or procedural step is demonstrated.",
  "Combine evidence from multiple moments in a long-form video.",
  "Extract or verify text shown on slides or demonstration interfaces.",
  "Provide answers with explicit supporting evidence rather than unsupported generation.",
];

const competitiveRows = [
  {
    approach: "YouTube / platform transcript search",
    limitation:
      "Mainly searches speech transcript and does not integrate OCR or visual evidence.",
    ourFocus:
      "Combine transcript, OCR cues, visual references, and timestamps into unified evidence units.",
  },
  {
    approach: "General LLM video summary",
    limitation:
      "Can summarize broadly but often lacks precise timestamp grounding and supporting evidence.",
    ourFocus:
      "Answer specific user questions with retrieved temporal evidence segments.",
  },
  {
    approach: "Manual lecture review",
    limitation:
      "Accurate but time-consuming when users need to locate a concept, formula, or example quickly.",
    ourFocus:
      "Retrieve relevant lecture moments and show the evidence used for the answer.",
  },
];

const baselineRows = [
  {
    item: "Baseline",
    description:
      "Transcript-only retrieval over ASR text. This gives us a simple comparison point for whether speech transcript alone is enough for localization and QA.",
  },
  {
    item: "Current prototype",
    description:
      "Retrieval over timestamped evidence units that combine ASR transcript, OCR text, timestamp metadata, and visual references where available.",
  },
  {
    item: "Future comparison",
    description:
      "Evaluate whether multimodal-derived evidence improves grounding and temporal localization compared with transcript-only retrieval.",
  },
];

const datasetCards = [
  {
    label: "Current prototype dataset",
    value: "1 fully processed lecture-style video",
    detail:
      "The current end-to-end prototype has been validated on one selected English lecture-style educational video about linear algebra.",
  },
  {
    label: "Approximate duration",
    value: "About 9–10 minutes",
    detail:
      "The video is long enough to test concept explanation, examples, visual teaching content, and temporal localization.",
  },
  {
    label: "Content characteristics",
    value: "Speech + visual teaching content",
    detail:
      "The video contains spoken explanation, on-screen text, and visual demonstrations, making it suitable for ASR, OCR, keyframe extraction, and evidence construction.",
  },
  {
    label: "Planned expansion",
    value: "More lecture-style videos",
    detail:
      "Later evaluation will add additional lecture-style videos to test whether retrieval and grounding generalize beyond the current prototype case.",
  },
];

const futureApplications = [
  "Lecture archive question answering",
  "Meeting recording retrieval",
  "Corporate training video QA",
  "Court hearing or legal proceeding recording QA",
  "Customer support video knowledge base",
];

const scopeIncluded = [
  "Lecture-style educational video question answering.",
  "ASR transcript, OCR text, keyframe references, and timestamped evidence representation.",
  "Evidence indexing and retrieval/localization over evidence units.",
  "Initial grounded QA with evidence references.",
  "A Multi-Agent-GPT-style bridge verified through CLI.",
  "Explainable responses through timestamps, transcript snippets, OCR snippets, and visual references where available.",
];

const scopeExcluded = [
  "Training a new multimodal foundation model from scratch.",
  "Large-scale distributed model training.",
  "Full real-time long-video processing.",
  "Production-grade deployment infrastructure.",
  "Final multi-agent orchestration, which belongs to Phase 4.",
];

const pipelineStages = [
  { id: "routing", label: "Agent Routing", status: "planned" },
  { id: "parsing", label: "Multimedia Parsing", status: "completed" },
  {
    id: "evidence",
    label: "Timestamped Evidence Construction",
    status: "completed",
  },
  { id: "retrieval", label: "Retrieval / Localization", status: "current" },
  { id: "aggregation", label: "Evidence Aggregation", status: "current" },
  {
    id: "answer",
    label: "Grounded Answer Generation",
    status: "current",
  },
];

const phaseTimeline = [
  {
    id: "phase1",
    title: "Phase 1: Project Initialization and Detailed Planning",
    status: "completed",
    period: "Feb 2026 – 27 Mar 2026",
    summary:
      "Problem definition, architecture framing, evidence schema planning, and detailed proposal preparation.",
  },
  {
    id: "phase2",
    title: "Phase 2: Initial Multimedia Parsing Prototype",
    status: "completed",
    period: "28 Mar 2026 – 14 Apr 2026",
    summary:
      "Converted lecture-video content into timestamped evidence units using transcript, OCR, keyframes, and time alignment.",
  },
  {
    id: "phase3",
    title: "Phase 3: Retrieval / Localization Module and Evidence Indexing",
    status: "current",
    period: "15 Apr 2026 – 5 May 2026",
    summary:
      "Built evidence indexing, temporal retrieval, and a CLI-verified initial grounded QA workflow.",
  },
  {
    id: "phase4",
    title: "Phase 4: Multi-Agent Orchestration and Interim Prototype",
    status: "upcoming",
    period: "6 May 2026 – 1 Jun 2026",
    summary:
      "Integrate routing, parsing, retrieval, and answer grounding into an end-to-end interim prototype.",
  },
  {
    id: "phase5",
    title: "Phase 5: Evaluation and System Refinement",
    status: "upcoming",
    period: "2 Jun 2026 – 16 Jun 2026",
    summary:
      "Refine stability, grounding quality, evaluation cases, and error analysis.",
  },
  {
    id: "phase6",
    title: "Phase 6: Final System Completion and Webpage Consolidation",
    status: "upcoming",
    period: "17 Jun 2026 – 13 Jul 2026",
    summary:
      "Finalize the prototype, consolidate the webpage, and prepare demo materials.",
  },
  {
    id: "phase7",
    title: "Phase 7: Final Report and Oral Examination Preparation",
    status: "upcoming",
    period: "14 Jul 2026 – End of Jul 2026",
    summary:
      "Complete final testing, reporting, slides, demo script, and oral examination preparation.",
  },
];

const phaseDetails = {
  phase1: {
    summary:
      "This phase established the project definition, narrowed the target setting to lecture-style educational videos, and prepared the detailed implementation plan for subsequent prototype work.",
    tasks: [
      "Finalize the problem definition and target scenario.",
      "Study the structure of the existing multi-agent framework and identify suitable extension points.",
      "Review representative work related to Video-RAG, long-form video retrieval, and lecture-video understanding.",
      "Define the overall architecture, agent organization, and evidence schema.",
      "Determine a feasible first-stage implementation scope.",
      "Initialize the project webpage and development plan.",
      "Prepare and submit the Detailed Project Proposal.",
    ],
    memberDetails: {
      A: {
        label: "Role A",
        status: "completed",
        responsibility: "Planning support for the multimedia parsing workstream.",
        workDone:
          "Participated in phase-level problem refinement and helped shape the first-stage parsing direction for later prototype development.",
        output: "Proposal input for parsing-related scope and implementation planning.",
        blockers:
          "Individual planning artifacts are not separately exposed on the current webpage version.",
        nextStep:
          "Continue into Phase 2 ASR implementation and transcript output refinement.",
      },
      B: {
        label: "Role B",
        status: "completed",
        responsibility:
          "Planning support for keyframe extraction and OCR-related work.",
        workDone:
          "Participated in architecture and feasibility discussion for visual parsing and selected-frame text extraction.",
        output: "Proposal input for image/frame parsing tasks in later prototype work.",
        blockers:
          "Detailed implementation outputs were not part of Phase 1 and are not shown as finished artifacts.",
        nextStep:
          "Move into Phase 2 keyframe extraction and OCR implementation.",
      },
      C: {
        label: "Role C",
        status: "completed",
        responsibility:
          "Planning support for evidence schema and downstream integration.",
        workDone:
          "Participated in defining the timestamped evidence direction and how parsing outputs should support later retrieval/localization.",
        output: "Proposal input for evidence schema and interface planning.",
        blockers:
          "Schema work at this stage remained planning-oriented rather than finalized implementation.",
        nextStep:
          "Connect Phase 2 parsing outputs to evidence-unit design and storage format.",
      },
      D: {
        label: "Role D",
        status: "completed",
        responsibility:
          "Planning coordination, webpage initialization, and milestone organization.",
        workDone:
          "Participated in detailed planning, milestone organization, and preparation for a continuously updated project webpage.",
        output:
          "Planning structure for timeline, progress communication, and later webpage updates.",
        blockers:
          "The webpage is intentionally maintained as a living project artifact rather than a one-time static page.",
        nextStep:
          "Continue Phase 2 coordination, webpage iteration, and progress-update preparation.",
      },
    },
    outputs: {
      transcript: {
        status: "completed",
        kind: "planning artifact",
        content:
          "Detailed proposal submitted; no prototype transcript output belongs to Phase 1.",
      },
      ocr: {
        status: "pending",
        kind: "not applicable yet",
        content: "OCR output is not part of Phase 1 deliverables.",
      },
      keyframe: {
        status: "pending",
        kind: "not applicable yet",
        content: "Keyframe output is not part of Phase 1 deliverables.",
      },
      evidenceUnit: {
        status: "prototype planning",
        kind: "schema planning",
        content:
          "Initial evidence schema direction was defined at planning level, with implementation deferred to Phase 2.",
      },
    },
    notes: [
      "Phase 1 was mainly about narrowing scope and defining a feasible engineering path.",
      "The project is explicitly framed as a modular prototype rather than a full production QA system.",
    ],
    nextStep:
      "Start the initial multimedia parsing pipeline and prepare materials for the first progress update.",
  },

  phase2: {
    summary:
      "Phase 2 is completed at the prototype level. The key achievement is converting raw lecture-video content into timestamped evidence units that can support downstream retrieval and grounded QA.",
    tasks: [
      "Implement the initial multimedia parsing pipeline.",
      "Support basic speech-to-text for videos.",
      "Support keyframe extraction.",
      "Support OCR for images and selected video frames.",
      "Define the first version of timestamped evidence units and storage format.",
      "Prepare materials for progress communication / progress update.",
    ],
    memberDetails: {
      A: {
        label: "Role A: ASR — Han Jiapeng",
        status: "prototype output",
        responsibility:
          "Produce the speech-transcript evidence needed for later retrieval and grounding.",
        workDone:
          "Generated the transcript segments for the selected linear algebra lecture video and aligned them with the shared video timeline used by the rest of the team.",
        output:
          "Timestamped transcript segments that serve as the speech-based evidence source.",
        blockers:
          "This remains a Phase 2 baseline result. The source content changed because the video source changed, not because the transcript schema changed. Optional later cleanup may still be needed for segmentation and transcription quality.",
        nextStep:
          "Keep the current schema stable and support downstream retrieval / localization based on the updated transcript.",
      },
      B: {
        label: "Role B: Keyframe Extraction + OCR — Li Siyao",
        status: "prototype output",
        responsibility:
          "Extract visual evidence from the lecture video through selected keyframes and OCR text.",
        workDone:
          "Produced timestamped visual evidence from the selected lecture video, including keyframes and OCR text that can later be aligned with the transcript.",
        output:
          "Timestamped visual/OCR evidence for integration into evidence units.",
        blockers:
          "OCR quality is still uneven on lecture-video frames. Some outputs contain noise, mixed-language fragments, or incomplete text, so later cleaning and deduplication are still needed.",
        nextStep:
          "Refine OCR cleaning and threshold settings while keeping the current output format stable for integration.",
      },
      C: {
        label: "Role C: Evidence Schema + Parsing Integration — Yu Zhengting",
        status: "prototype output",
        responsibility:
          "Integrate speech and visual evidence into a unified timestamped evidence representation.",
        workDone:
          "Aligned transcript segments with visual/OCR evidence by timestamp and produced the first version of structured evidence units. The current prototype contains 148 timestamped evidence units, including 26 units with OCR text.",
        output:
          "A unified evidence-unit representation for Phase 3 indexing and retrieval.",
        blockers:
          "The quality of integrated evidence still depends on upstream OCR quality, and the current unit granularity may be too fine for later retrieval in some cases.",
        nextStep:
          "Keep evidence schema v1 stable and connect it to retrieval / localization in the next phase.",
      },
      D: {
        label: "Role D: Coordination + Webpage + Demo/Progress Materials — Bi Yifeng (Team Lead)",
        status: "completed",
        responsibility:
          "Coordinate the phase, maintain the webpage, and prepare progress/demo materials.",
        workDone:
          "Coordinated the Phase 2 workstreams, helped align member outputs, and updated the webpage so the parsing and evidence-construction results are presented as an executive summary rather than an internal file list.",
        output:
          "Updated project webpage structure and progress communication materials.",
        blockers:
          "The webpage must remain incremental because member outputs do not finish at the same time and need to be synchronized carefully before presentation.",
        nextStep:
          "Keep the webpage updated as the current parsing and integration outputs are refined.",
      },
    },
    outputs: {
      transcript: {
        status: "prototype output",
        kind: "speech evidence",
        content:
          "The selected lecture video was converted into 148 timestamped transcript segments. These segments provide the main speech-based evidence for retrieval and grounded QA.",
      },
      ocr: {
        status: "prototype output",
        kind: "visual text evidence",
        content:
          "The visual parsing output contains 51 OCR items aligned to the video timeline. OCR is usable for evidence construction, although noisy frame text remains a refinement issue.",
      },
      keyframe: {
        status: "prototype output",
        kind: "visual evidence",
        content:
          "Selected keyframes provide visual context for lecture moments and can later be surfaced as visual supporting evidence.",
      },
      evidenceUnit: {
        status: "prototype output",
        kind: "unified evidence representation",
        content:
          "Speech, OCR, visual references, and timestamps were aligned into 148 timestamped evidence units. This representation is the main handoff from Phase 2 to Phase 3 retrieval.",
      },
    },
    notes: [
      "Phase 2 emphasis: multimedia parsing and timestamped evidence construction.",
      "The current prototype uses one selected linear algebra lecture video as the end-to-end validation case.",
      "The Phase 2 result is not just a set of files; it is a reusable evidence representation for Phase 3 retrieval.",
    ],
    nextStep:
      "Use the evidence-unit representation as the retrieval base for Phase 3 while continuing to improve ASR/OCR quality and alignment.",
  },

  phase3: {
    summary:
      "Phase 3 is completed at the preliminary prototype level. It builds directly on the Phase 2 evidence units by indexing them, retrieving relevant temporal evidence, and generating initial grounded answers from retrieved evidence.",
    tasks: [
      "Use the Phase 2 evidence units as the fixed input interface for retrieval.",
      "Build an evidence index over timestamped evidence units.",
      "Implement Top-K temporal evidence retrieval for selected user questions.",
      "Generate initial grounded answers with supporting timestamped evidence.",
      "Validate the retrieval and QA workflow through CLI-based tests.",
      "Prepare materials for Project Progress Update 2.",
    ],
    memberDetails: {
      A: {
        label: "Direction 1: Evidence Indexing — Han Jiapeng",
        status: "prototype output",
        responsibility:
          "Prepare the Phase 2 evidence units for retrieval and build the vector index used by downstream modules.",
        workDone:
          "Built an evidence index from the cleaned Phase 2 evidence units for the selected linear algebra lecture video. This index is used as the retrieval backend for the later retrieval and QA workflow.",
        output:
          "A reusable indexed evidence representation for the selected lecture-video prototype.",
        blockers:
          "The current minimum demo can return timestamps and ASR/OCR evidence. More complete visual keyframe references will be improved in later phases.",
        nextStep:
          "Keep the evidence schema and index interface stable for Phase 4 integration.",
      },
      B: {
        label: "Direction 2: Retrieval / Localization — Li Siyao",
        status: "prototype output",
        responsibility:
          "Implement temporal evidence retrieval over the evidence index and expose a stable retrieval interface for the QA agent.",
        workDone:
          "Implemented a VideoEvidenceRetriever that returns Top-K temporal evidence segments with timestamps, transcript/OCR snippets, retrieval scores, and support labels. Sample questions such as vector definition and vector addition were used for validation.",
        output:
          "A retrieval module that returns timestamped evidence for downstream grounded QA.",
        blockers:
          "Top-K retrieval can find relevant evidence, but Top-1 ranking and OCR-oriented retrieval still need refinement.",
        nextStep:
          "Improve reranking, OCR-aware retrieval, and keyframe reference display.",
      },
      C: {
        label: "Direction 3: Agent Integration + Grounded QA — Yu Zhengting",
        status: "prototype output",
        responsibility:
          "Connect the retrieval module to an initial agent QA workflow and package it as a Multi-Agent-GPT-style bridge.",
        workDone:
          "Implemented an initial QA agent workflow that calls retrieval, selects supporting evidence, and generates grounded answers with timestamped support. The Multi-Agent-GPT-style bridge has been verified through CLI.",
        output:
          "Initial grounded QA workflow and Multi-Agent-GPT-style bridge for evidence-based video QA.",
        blockers:
          "This is an initial Phase 3 integration rather than the full Phase 4 multi-agent orchestration. Local webpage behavior may vary with Gradio package versions, but CLI validation is stable.",
        nextStep:
          "Use this workflow as the base for Phase 4 routing, retrieval, grounding, and verification agents.",
      },
      D: {
        label: "Direction 4: Coordination + Evaluation + Webpage — Bi Yifeng (Team Lead)",
        status: "completed",
        responsibility:
          "Coordinate Phase 3 planning, divide tasks, verify member outputs, provide feedback, and maintain the project webpage as an ongoing progress artifact.",
        workDone:
          "Planned the Phase 3 work breakdown, assigned the four directions, tested and verified Directions 1–3, identified remaining limitations, and updated the frontend webpage to reflect the current project status.",
        output:
          "Phase 3 task plan, validation notes, testing feedback, progress summary, and updated React project webpage.",
        blockers:
          "The webpage must avoid overstating maturity: the current implementation is a preliminary retrieval and grounded QA workflow, not the final multi-agent system.",
        nextStep:
          "Prepare Progress Update 2 materials and keep the webpage aligned with Phase 4 work.",
      },
    },
    outputTitles: {
      transcript: "Indexing Output",
      ocr: "Retrieval Output",
      keyframe: "Grounded QA Output",
      evidenceUnit: "Validation Notes",
    },
    outputs: {
      transcript: {
        status: "prototype output",
        kind: "evidence indexing",
        content:
          "The Phase 2 evidence units were indexed so the system can search relevant lecture moments for a user question.",
      },
      ocr: {
        status: "prototype output",
        kind: "retrieval sample",
        content:
          "For the query about vector addition, the retriever returned relevant timestamped evidence in the Top-K results, including a segment explaining coordinate-wise addition.",
      },
      keyframe: {
        status: "prototype output",
        kind: "grounded QA sample",
        content:
          "The initial QA workflow generated an answer about vector addition and cited supporting evidence from retrieved transcript segments such as 400.64s–405.92s and 90.52s–94.90s.",
      },
      evidenceUnit: {
        status: "verified",
        kind: "phase validation",
        content:
          "The CLI tests verified the core path from indexed evidence to retrieval and grounded answer generation. Remaining work includes reranking, OCR cleanup, visual reference display, and full Phase 4 multi-agent orchestration.",
      },
    },
    notes: [
      "Phase 3 is built directly on top of Phase 2 evidence units rather than replacing them.",
      "The current QA agent is grounded on multimodal-derived evidence units: ASR text, OCR text, visual references, and timestamps.",
      "The system has been validated through CLI outputs even if local Gradio behavior varies across machines.",
    ],
    nextStep:
      "Proceed to Phase 4 by turning the current retrieval and grounded QA workflow into fuller multi-agent orchestration with routing, retrieval, answer grounding, and verification roles.",
  },

  phase4: {
    summary:
      "This phase will integrate routing, parsing, retrieval, and answer grounding into an interim end-to-end prototype.",
    tasks: [
      "Implement the interaction flow for routing, parsing, retrieval, and answer grounding.",
      "Integrate the lecture-video QA capability into the existing framework.",
      "Improve end-to-end query handling.",
      "Support timestamped or evidence-referenced answers.",
      "Prepare interim report and presentation materials.",
    ],
    notStarted: true,
  },

  phase5: {
    summary:
      "This phase will refine system stability, grounding quality, and evaluation coverage.",
    tasks: [
      "Improve system stability and response quality.",
      "Refine retrieval, evidence aggregation, and answer grounding.",
      "Design representative evaluation cases.",
      "Analyze failure cases and improve robustness.",
      "Prepare materials for Project Progress Update 3.",
    ],
    notStarted: true,
  },

  phase6: {
    summary:
      "This phase will finalize the prototype and consolidate the project webpage and demo materials.",
    tasks: [
      "Finalize the main system functions and interaction flow.",
      "Complete the prototype for final demonstration.",
      "Update and consolidate the project webpage.",
      "Prepare screenshots, architecture illustrations, and demo materials.",
      "Complete the work required for Project Progress Update 4.",
    ],
    notStarted: true,
  },

  phase7: {
    summary:
      "This phase will focus on final testing, reporting, and oral examination preparation.",
    tasks: [
      "Conduct final testing and evaluation.",
      "Summarize the final system design, implementation, and findings.",
      "Complete the final project report.",
      "Prepare presentation slides, demo script, and oral examination materials.",
      "Organize each member’s individual contribution for the oral examination.",
    ],
    notStarted: true,
  },
};

const evidenceUnitDesign = {
  description:
    "At the current stage, an evidence unit is the bridge between raw multimedia and grounded QA. It represents a short lecture moment with a time range, speech transcript, optional OCR text, and optional visual reference. Phase 2 constructs these units; Phase 3 indexes and retrieves them.",
  sample: {
    moment: "short lecture segment",
    time_range: "400.64s–405.92s",
    speech_evidence: "So the new vector has coordinates 1 plus 3 and 2 plus negative 1.",
    visual_text: "optional OCR text when available",
    visual_reference: "optional keyframe reference when available",
  },
  explanations: [
    "Temporal localization: each answer can point back to a lecture time range.",
    "Evidence grounding: answers are supported by transcript and OCR snippets.",
    "Multimodal-derived QA: the agent answers from structured ASR/OCR/keyframe evidence rather than directly sending raw audio or raw images to a model.",
    "Future visual grounding: keyframe references can be surfaced more clearly in later phases.",
  ],
};

const challenges = [
  "ASR errors on domain-specific terms.",
  "Repeated or noisy OCR across frames.",
  "Temporal alignment between ASR and OCR.",
  "Top-1 retrieval ranking is not always the most accurate even when Top-K contains relevant evidence.",
  "Visual keyframe references are not fully surfaced in the current answer display.",
  "Local Gradio webpage behavior can vary by Python package version; CLI validation is currently more stable.",
];

const nextSteps = [
  "Keep the Phase 2 evidence-unit schema and Phase 3 retrieval interface stable.",
  "Improve OCR cleaning and OCR-aware retrieval.",
  "Refine reranking and evidence aggregation for better Top-1 results.",
  "Integrate visual evidence references more clearly into the answer display.",
  "Move into Phase 4 full multi-agent orchestration: routing, retrieval, grounding, and verification agents.",
  "Expand the dataset beyond the current prototype video for broader validation.",
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function statusClasses(status) {
  const map = {
    completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    current: "bg-blue-50 text-blue-700 ring-blue-200",
    upcoming: "bg-slate-100 text-slate-600 ring-slate-200",
    planned: "bg-slate-100 text-slate-600 ring-slate-200",
    "usable baseline": "bg-blue-50 text-blue-700 ring-blue-200",
    "in progress": "bg-amber-50 text-amber-700 ring-amber-200",
    "pending integration": "bg-slate-100 text-slate-700 ring-slate-200",
    "pending update": "bg-slate-100 text-slate-700 ring-slate-200",
    "prototype output": "bg-blue-50 text-blue-700 ring-blue-200",
    verified: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    placeholder: "bg-slate-100 text-slate-700 ring-slate-200",
    pending: "bg-slate-100 text-slate-700 ring-slate-200",
    "prototype planning": "bg-sky-50 text-sky-700 ring-sky-200",
    "planning artifact": "bg-sky-50 text-sky-700 ring-sky-200",
    "not applicable yet": "bg-slate-100 text-slate-700 ring-slate-200",
  };
  return map[status] || "bg-slate-100 text-slate-700 ring-slate-200";
}

function Pill({ children, tone = "slate" }) {
  const tones = {
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    blue: "bg-blue-50 text-blue-700 ring-blue-200",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-200",
  };

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

function SectionShell({ title, subtitle, right, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                {subtitle}
              </p>
            ) : null}
          </div>
          {right ? <div className="shrink-0">{right}</div> : null}
        </div>
      </div>
      <div className="px-6 py-6 sm:px-8">{children}</div>
    </section>
  );
}

function CollapsibleSection({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
  right,
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/70 sm:px-8"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            {right}
          </div>
          {subtitle ? (
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600">
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {isOpen ? (
        <div className="border-t border-slate-100 px-6 py-6 sm:px-8">
          {children}
        </div>
      ) : null}
    </section>
  );
}

function InfoCard({ title, children, muted = false }) {
  return (
    <div
      className={cx(
        "rounded-2xl border p-5 shadow-sm",
        muted
          ? "border-slate-200 bg-slate-50/70"
          : "border-slate-200 bg-white"
      )}
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function JsonBlock({ value }) {
  const content = useMemo(() => {
    if (typeof value === "string") return value;
    return JSON.stringify(value, null, 2);
  }, [value]);

  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950/95 p-4 text-xs leading-6 text-slate-100">
      <code>{content}</code>
    </pre>
  );
}

function OutputCard({ title, data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
        <div className="flex flex-wrap gap-2">
          <span
            className={cx(
              "inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset",
              statusClasses(data.status)
            )}
          >
            {data.status}
          </span>
          <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
            {data.kind}
          </span>
        </div>
      </div>

      <div className="mt-4">
        {typeof data.content === "object" ? (
          <JsonBlock value={data.content} />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-600">
            {data.content}
          </div>
        )}
      </div>
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-base font-semibold text-slate-900">
          {member.label}
        </h4>
        <span
          className={cx(
            "inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
            statusClasses(member.status)
          )}
        >
          {member.status}
        </span>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
        <div>
          <span className="font-semibold text-slate-900">Responsibility:</span>{" "}
          {member.responsibility}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Work done:</span>{" "}
          {member.workDone}
        </div>
        <div>
          <span className="font-semibold text-slate-900">
            Expected / produced output:
          </span>{" "}
          {member.output}
        </div>
        <div>
          <span className="font-semibold text-slate-900">
            Blockers / notes:
          </span>{" "}
          {member.blockers}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Next step:</span>{" "}
          {member.nextStep}
        </div>
      </div>
    </div>
  );
}

function PhasePanel({ phase, detail, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50/70 sm:px-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              {phase.title}
            </h3>
            <span
              className={cx(
                "inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset",
                statusClasses(phase.status)
              )}
            >
              {phase.status}
            </span>
            <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
              {phase.period}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {phase.summary}
          </p>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600">
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {isOpen ? (
        <div className="border-t border-slate-100 px-5 py-6 sm:px-6">
          <div className="grid gap-6">
            <InfoCard title="Phase Summary">{detail.summary}</InfoCard>

            <InfoCard title="Phase Tasks">
              <ul className="space-y-2">
                {detail.tasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            {detail.notStarted ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                  Team Contributions in This Phase
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Not started yet. Detailed member updates will be added when this
                  phase begins.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                      Team Contributions in This Phase
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Member-level phase updates are kept within the phase panel and
                      can be revised incrementally as work progresses.
                    </p>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-2">
                    {Object.values(detail.memberDetails).map((member) => (
                      <MemberCard key={member.label} member={member} />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                      Phase Outputs / Sample Outputs
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Prototype outputs are shown only when available. Otherwise the
                      page preserves placeholders or pending markers.
                    </p>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-2">
                    <OutputCard
                      title="Transcript Sample"
                      data={detail.outputs.transcript}
                    />
                    <OutputCard title="OCR Sample" data={detail.outputs.ocr} />
                    <OutputCard
                      title="Keyframe Sample"
                      data={detail.outputs.keyframe}
                    />
                    <OutputCard
                      title="Evidence Unit Sample"
                      data={detail.outputs.evidenceUnit}
                    />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <InfoCard title="Notes">
                    <ul className="space-y-2">
                      {detail.notes.map((note) => (
                        <li key={note} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </InfoCard>

                  <InfoCard title="Next Step">{detail.nextStep}</InfoCard>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function CapstoneProjectWebpage() {
  const [openSections, setOpenSections] = useState({
    motivation: false,
    scope: false,
    extensions: false,
    evidence: false,
    challenges: false,
  });

  const [openPhases, setOpenPhases] = useState({
    phase1: false,
    phase2: false,
    phase3: true,
    phase4: false,
    phase5: false,
    phase6: false,
    phase7: false,
  });

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const togglePhase = (key) =>
    setOpenPhases((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-8">
          <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 shadow-sm">
            <div className="grid items-start gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[1.6fr_0.72fr] lg:px-10 lg:py-10">
              <div>
                <div className="flex flex-wrap gap-2">
                  {projectMeta.badges.map((badge) => (
                    <Pill key={badge} tone="blue">
                      {badge}
                    </Pill>
                  ))}
                </div>

                <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  {projectMeta.title}
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                  {projectMeta.subtitle}
                </p>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
                  {projectMeta.tagline}
                </p>
              </div>

              <div className="self-start rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  <Pill tone="blue">{projectMeta.currentStage}</Pill>
                  <Pill tone="amber">{projectMeta.status}</Pill>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Current emphasis
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Pill tone="blue">Evidence Indexing</Pill>
                    <Pill tone="blue">Temporal Retrieval</Pill>
                    <Pill tone="blue">Initial Grounded QA</Pill>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Team Members
                  </div>
                  <div className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                    {teamMembers.map((member) => (
                      <div key={member}>{member}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionShell
            title="Latest Update: Phase 3 Retrieval and Initial Grounded QA"
            subtitle="This section makes the webpage read as an ongoing project progress page rather than a static report."
            right={<Pill tone="blue">Current update</Pill>}
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <InfoCard title="What changed since Phase 2">
                <p>
                  Phase 2 produced timestamped evidence units from ASR, OCR, keyframes, and timestamps. Phase 3 now uses those units as the retrieval base: the team built an evidence index, implemented temporal retrieval, and connected retrieval results to an initial grounded QA agent.
                </p>
              </InfoCard>
              <InfoCard title="Current verified demo">
                <p>
                  The CLI workflow has been verified with lecture questions such as vector definition and vector addition. The system can return a grounded answer together with supporting timestamped evidence.
                </p>
              </InfoCard>
            </div>
          </SectionShell>

          <SectionShell
            title="Project Overview"
            subtitle="A focused academic prototype for evidence-grounded question answering over lecture-style educational videos."
          >
            <div className="grid gap-4">
              {overviewParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-5xl text-sm leading-7 text-slate-700 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            title="Objectives"
            subtitle="The project objectives are stated in a concise and proposal-aligned form."
          >
            <div className="grid gap-x-10 gap-y-3 md:grid-cols-2">
              {objectives.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-slate-700"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SectionShell>

          <CollapsibleSection
            title="Why This Project / Project Significance"
            subtitle="This section combines motivation and a light competitive analysis so the value of the project is clear before implementation details."
            isOpen={openSections.motivation}
            onToggle={() => toggleSection("motivation")}
          >
            <div className="grid gap-x-10 gap-y-3 md:grid-cols-2">
              {practicalMotivation.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-slate-700"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Existing approach</th>
                    <th className="px-4 py-3 font-semibold">Limitation</th>
                    <th className="px-4 py-3 font-semibold">Our focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {competitiveRows.map((row) => (
                    <tr key={row.approach}>
                      <td className="px-4 py-4 font-medium text-slate-900">
                        {row.approach}
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {row.limitation}
                      </td>
                      <td className="px-4 py-4 text-slate-700">
                        {row.ourFocus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CollapsibleSection>

          <SectionShell
            title="High-level System Pipeline"
            subtitle="The system is designed as a modular workflow over timestamped evidence rather than a single raw-video model call."
            right={<Pill tone="blue">Phase 2–3 progress highlighted</Pill>}
          >
            <div className="overflow-x-auto">
              <div className="flex min-w-max items-center gap-3 pb-2">
                {pipelineStages.map((stage, index) => (
                  <React.Fragment key={stage.id}>
                    <div
                      className={cx(
                        "w-56 shrink-0 rounded-2xl border p-4 shadow-sm",
                        stage.status === "current"
                          ? "border-blue-200 bg-blue-50"
                          : stage.status === "completed"
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-slate-200 bg-slate-50/80"
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-slate-900">
                          {stage.label}
                        </h3>
                        <span
                          className={cx(
                            "inline-flex rounded-full px-2 py-1 text-[11px] font-medium ring-1 ring-inset",
                            statusClasses(stage.status)
                          )}
                        >
                          {stage.status}
                        </span>
                      </div>
                    </div>

                    {index < pipelineStages.length - 1 ? (
                      <div className="shrink-0 px-1 text-slate-400">→</div>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </SectionShell>

          <SectionShell
            title="Baseline and Evaluation Plan"
            subtitle="This lightweight baseline plan prepares later evaluation without overstating the current prototype maturity."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              {baselineRows.map((row) => (
                <InfoCard key={row.item} title={row.item}>
                  <p>{row.description}</p>
                </InfoCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            title="Dataset Description"
            subtitle="This section states what data the current prototype has been tested on and what will be expanded later."
            right={<Pill tone="emerald">Added for feedback</Pill>}
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {datasetCards.map((card) => (
                <InfoCard key={card.label} title={card.label}>
                  <div className="text-lg font-semibold text-slate-950">
                    {card.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.detail}
                  </p>
                </InfoCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            title="Timeline / Milestones"
            subtitle="Dataset and evaluation context are shown before this progress section, following the latest review suggestions. Each phase can still be expanded independently."
            right={<Pill tone="slate">Core section</Pill>}
          >
            <div className="space-y-4">
              {phaseTimeline.map((phase) => (
                <PhasePanel
                  key={phase.id}
                  phase={phase}
                  detail={phaseDetails[phase.id]}
                  isOpen={openPhases[phase.id]}
                  onToggle={() => togglePhase(phase.id)}
                />
              ))}
            </div>
          </SectionShell>

          <CollapsibleSection
            title="Scope"
            subtitle="Included and excluded scope are kept explicit so the webpage does not overstate prototype maturity."
            isOpen={openSections.scope}
            onToggle={() => toggleSection("scope")}
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <InfoCard title="Included Scope">
                <ul className="space-y-2">
                  {scopeIncluded.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Excluded Scope" muted>
                <ul className="space-y-2">
                  {scopeExcluded.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Potential Extensions"
            subtitle="These are not current implementation promises, but they show why the approach could matter beyond one classroom demo."
            isOpen={openSections.extensions}
            onToggle={() => toggleSection("extensions")}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {futureApplications.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Evidence Unit Design"
            subtitle="Evidence units are no longer only a Phase 2 output; they are now the retrieval base for Phase 3."
            isOpen={openSections.evidence}
            onToggle={() => toggleSection("evidence")}
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <InfoCard title="Design Rationale">
                <p>{evidenceUnitDesign.description}</p>

                <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm leading-6 text-blue-900">
                  The current QA agent answers from retrieved multimodal-derived evidence units. It does not directly send raw audio or raw images to a multimodal model for end-to-end reasoning.
                </div>
              </InfoCard>

              <div className="space-y-4">
                <InfoCard title="Sample Evidence Unit">
                  <JsonBlock value={evidenceUnitDesign.sample} />
                </InfoCard>

                <InfoCard title="Interpretation">
                  <ul className="space-y-2">
                    {evidenceUnitDesign.explanations.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </InfoCard>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Challenges and Next Steps"
            subtitle="Current issues are shown explicitly so the webpage stays honest about prototype maturity."
            isOpen={openSections.challenges}
            onToggle={() => toggleSection("challenges")}
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <InfoCard title="Challenges">
                <ul className="space-y-2">
                  {challenges.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Next Steps">
                <ul className="space-y-2">
                  {nextSteps.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
}