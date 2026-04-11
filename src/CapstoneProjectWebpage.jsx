import React, { useMemo, useState } from "react";

const projectMeta = {
  title:
    "A Conversational Multimodal Agent for Evidence-Grounded Question Answering over Lecture-Style Educational Videos",
  subtitle:
  "A modular prototype for evidence-grounded question answering over lecture-style educational videos.",
  tagline:
    "This project aims to build a conversational multimodal agent that answers user questions over lecture-style educational videos by first parsing multimedia content into structured, timestamped evidence and then grounding answers in the retrieved evidence.",
  badges: ["Multimodal Agent", "Evidence Grounding", "Lecture Video QA"],
  currentStage: "Phase 2 – Initial Multimedia Parsing Prototype",
  status: "Work in Progress",
};

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

const scopeIncluded = [
  "A conversational interface for question answering over lecture-style educational videos.",
  "Support for follow-up questions over previously uploaded multimedia content.",
  "A multimedia parsing pipeline for videos and related screenshots or images.",
  "Speech transcription, OCR, keyframe extraction, and evidence organization.",
  "Timestamped evidence storage and indexing for retrieval.",
  "Temporal evidence retrieval or localization for user queries.",
  "Grounded answer generation using retrieved evidence.",
  "Explicit multi-agent role design and orchestration logic for the end-to-end workflow.",
  "Explainable responses through timestamps, snippets, and visual references.",
  "Integration of the proposed capability into an existing multi-agent framework.",
];

const scopeExcluded = [
  "Training a new multimodal foundation model from scratch.",
  "Large-scale distributed model training.",
  "Full support for all video QA domains.",
  "Highly optimized real-time processing of very long videos.",
  "Production-grade cloud deployment infrastructure.",
];

const pipelineStages = [
  { id: "routing", label: "Agent Routing", status: "planned" },
  { id: "parsing", label: "Multimedia Parsing", status: "current" },
  {
    id: "evidence",
    label: "Timestamped Evidence Construction",
    status: "current",
  },
  { id: "retrieval", label: "Retrieval / Localization", status: "upcoming" },
  { id: "aggregation", label: "Evidence Aggregation", status: "upcoming" },
  {
    id: "answer",
    label: "Grounded Answer Generation",
    status: "upcoming",
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
    status: "current",
    period: "28 Mar 2026 – 14 Apr 2026",
    summary:
      "Initial parsing prototype focused on ASR, keyframe extraction, OCR, and first-version timestamped evidence units.",
  },
  {
    id: "phase3",
    title: "Phase 3: Retrieval / Localization Module and Evidence Indexing",
    status: "upcoming",
    period: "15 Apr 2026 – 5 May 2026",
    summary:
      "Index parsed evidence and support retrieval/localization over temporal evidence units.",
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
      "This is the current phase. The focus is on building the initial multimedia parsing prototype and producing the first usable timestamped evidence inputs for downstream integration.",
    tasks: [
      "Implement the initial multimedia parsing pipeline.",
      "Support basic speech-to-text for videos.",
      "Support keyframe extraction.",
      "Support OCR for images and selected video frames.",
      "Define the first version of timestamped evidence units and storage format.",
      "Prepare materials for current progress communication / progress update.",
    ],
    memberDetails: {
      A: {
        label: "Role A: ASR",
        status: "usable baseline",
        responsibility:
          "Build the baseline ASR pipeline and produce integration-ready transcript output.",
        workDone:
          "Baseline ASR pipeline has been completed. A Whisper-based pipeline has produced a structured transcript JSON with the fields segment_id, start, end, and text. The current output is already usable for downstream integration by Role C.",
        output:
          "Integration-ready transcript JSON for downstream parsing/evidence work.",
        blockers:
          "Domain-specific term recognition errors still exist. 'Agentic AI', 'Agentic', and 'Evals' were misrecognized.",
        nextStep:
          "Keep the baseline stable and add domain-term correction/refinement later.",
      },
      B: {
        label: "Role B: Keyframe Extraction + OCR",
        status: "in progress",
        responsibility:
          "Implement keyframe extraction and OCR for images and selected video frames.",
        workDone:
          "Workstream is in progress. Final current outputs have not been added to this webpage yet.",
        output:
          "Pending update. Placeholder retained until keyframe/OCR results are available.",
        blockers:
          "Selected-frame strategy and OCR output quality still need to be stabilized.",
        nextStep:
          "Add first visible keyframe and OCR samples when the prototype outputs are ready.",
      },
      C: {
        label: "Role C: Evidence Schema + Parsing Integration",
        status: "pending integration",
        responsibility:
          "Define the first version of timestamped evidence units and connect parsing outputs for downstream use.",
        workDone:
          "Integration work is pending update. The current transcript output from Role A is already usable for downstream integration.",
        output:
          "Pending update. Evidence schema v1 and parsed-unit integration are being prepared.",
        blockers:
          "Schema granularity and cross-modal alignment still need to be finalized.",
        nextStep:
          "Finalize evidence schema v1 and connect transcript/visual parsing outputs into a consistent storage format.",
      },
      D: {
        label: "Role D: Coordination + Webpage + Demo/Progress Materials",
        status: "in progress",
        responsibility:
          "Coordinate current phase communication, maintain the webpage, and prepare progress/demo materials.",
        workDone:
          "Webpage iteration and progress-material preparation are in progress for the current prototype stage.",
        output:
          "Updated project webpage structure and current phase communication materials.",
        blockers:
          "The webpage must remain incremental because member outputs do not finish at the same time.",
        nextStep:
          "Keep the webpage updated as Role B/C outputs become available.",
      },
    },
    outputs: {
      transcript: {
        status: "prototype output",
        kind: "JSON sample",
        content: [
          {
            segment_id: 1,
            start: 0.0,
            end: 6.56,
            text: "[prototype transcript segment; current webpage shows output structure rather than final content]",
          },
        ],
      },
      ocr: {
        status: "pending update",
        kind: "placeholder",
        content:
          "OCR sample pending. This output area is reserved for Role B when the first stable OCR result is available.",
      },
      keyframe: {
        status: "pending update",
        kind: "placeholder",
        content:
          "Keyframe sample pending. This output area is reserved for Role B when the first selected-frame result is available.",
      },
      evidenceUnit: {
        status: "pending integration",
        kind: "placeholder",
        content:
          "Evidence unit sample pending. This area will be updated after Role C finalizes the first schema-integrated representation.",
      },
    },
    notes: [
      "Current phase emphasis: Multimedia Parsing and Timestamped Evidence Construction.",
      "Role A is baseline-complete but still requires later domain-term correction.",
      "Role B/C/D remain intentionally marked as in progress or pending update to avoid overstating prototype maturity.",
    ],
    nextStep:
      "Stabilize parsing outputs, add OCR/keyframe samples when available, and finalize the first evidence schema for downstream retrieval/localization work.",
  },

  phase3: {
    summary:
      "This phase will build indexing and retrieval/localization over parsed multimedia evidence.",
    tasks: [
      "Build indexing and retrieval over parsed multimedia evidence.",
      "Support retrieval of relevant temporal evidence units.",
      "Test retrieval/localization on selected lecture-video cases.",
      "Refine interfaces between parsing, evidence storage, and retrieval.",
      "Prepare materials for Project Progress Update 2.",
    ],
    notStarted: true,
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
    "The current project stage is not presented as a full QA product. The immediate goal is to parse lecture videos into structured timestamped evidence so that later retrieval, localization, and grounded answer generation can operate on explicit, reusable evidence units.",
  sample: {
    unit_id: "u_001",
    video_id: "video_01",
    start_time: 12.4,
    end_time: 18.9,
    asr_text: "Today we introduce Bayes formula.",
    ocr_text: ["Bayes Rule"],
    keyframe_refs: ["frame_001.png"],
  },
  explanations: [
    "ASR text captures spoken content.",
    "OCR text captures slide or screen text.",
    "Keyframe references link evidence back to visual context.",
    "Timestamps make retrieval, localization, and explanation possible.",
  ],
};

const challenges = [
  "ASR errors on domain-specific terms.",
  "Repeated or noisy OCR across frames.",
  "Temporal alignment between ASR and OCR.",
  "Choosing practical evidence granularity.",
  "Incremental integration across workstreams.",
];

const nextSteps = [
  "Stabilize parsing outputs.",
  "Add OCR results when available.",
  "Finalize evidence schema v1.",
  "Continue retrieval / localization in later phases.",
  "Keep the webpage updated incrementally.",
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
        <div className="border-t border-slate-100 px-6 py-6 sm:px-8">{children}</div>
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
        <h4 className="text-base font-semibold text-slate-900">{member.label}</h4>
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
          <span className="font-semibold text-slate-900">Blockers / notes:</span>{" "}
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
            <h3 className="text-base font-semibold text-slate-900">{phase.title}</h3>
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
          <p className="mt-2 text-sm leading-6 text-slate-600">{phase.summary}</p>
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
    evidence: false,
    challenges: false,
  });

  const [openPhases, setOpenPhases] = useState({
    phase1: false,
    phase2: true,
    phase3: false,
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
                    <Pill tone="blue">Multimedia Parsing</Pill>
                    <Pill tone="blue">Timestamped Evidence Construction</Pill>
                    </div>
                </div>
                </div>
            </div>
          </section>

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
            title="Why This Project / Practical Motivation"
            subtitle="The target use cases are practical learning scenarios where users need both an answer and supporting evidence."
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
          </CollapsibleSection>

          <SectionShell
            title="High-level System Pipeline"
            subtitle="The system is designed as a modular workflow over timestamped evidence rather than a single raw-video model call."
            right={<Pill tone="blue">Phase 2 focus highlighted</Pill>}
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
            title="Timeline / Milestones"
            subtitle="This is the core progress section of the webpage. Each phase can be expanded independently for tasks, member contributions, outputs, and next steps."
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
            title="Evidence Unit Design"
            subtitle="The current prototype stage is centered on converting raw multimedia into reusable timestamped evidence units."
            isOpen={openSections.evidence}
            onToggle={() => toggleSection("evidence")}
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <InfoCard title="Design Rationale">
                <p>{evidenceUnitDesign.description}</p>

                <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm leading-6 text-blue-900">
                  The page intentionally presents this as evidence construction work,
                  not as a fully completed end-to-end QA product.
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