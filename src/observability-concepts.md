> ## Documentation Index
> Fetch the complete documentation index at: https://docs.langchain.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Observability concepts

This page covers key concepts that are important to understand when logging traces to LangSmith.

A [*trace*](#traces) records the sequence of steps your application takes—from receiving an input, through intermediate processing, to producing a final output. Each step within a trace is represented by a [*run*](#runs). Multiple traces are grouped together within a [*project*](#projects), and traces from multi-turn conversations can be linked together as a [*thread*](#threads).

The following diagram displays these concepts in the context of a simple RAG app, which retrieves documents from an index and generates an answer.

<img className="block dark:hidden" src="https://mintcdn.com/langchain-5e9cc07a/Tf5b6pnNY9Uj6Vtl/langsmith/images/primitives.png?fit=max&auto=format&n=Tf5b6pnNY9Uj6Vtl&q=85&s=50c5f4d966f8fe4f8ae0be0beaf11bc4" alt="Primitives of LangSmith Project, Trace, Run in the context of a question and answer RAG app." width="2701" height="1739" data-path="langsmith/images/primitives.png" />

<img className="hidden dark:block" src="https://mintcdn.com/langchain-5e9cc07a/Tf5b6pnNY9Uj6Vtl/langsmith/images/primitives-dark.png?fit=max&auto=format&n=Tf5b6pnNY9Uj6Vtl&q=85&s=3ca35a8a6cec65b9a5139e7ac8cac470" alt="Primitives of LangSmith Project, Trace, Run in the context of a question and answer RAG app." width="2919" height="1752" data-path="langsmith/images/primitives-dark.png" />

## Runs

A *run* is a span representing a single unit of work or operation within your LLM application. This could be anything from a single call to an LLM or chain, to a prompt formatting call, to a runnable lambda invocation. If you are familiar with [OpenTelemetry](https://opentelemetry.io/), you can think of a run as a span.

<img className="block dark:hidden" src="https://mintcdn.com/langchain-5e9cc07a/CUls3RywIRCq3f1n/langsmith/images/run-page-light.png?fit=max&auto=format&n=CUls3RywIRCq3f1n&q=85&s=d71be856c86c7ffa5d3ca8eb94f6a000" alt="Run details page in the LangSmith UI." width="2416" height="1012" data-path="langsmith/images/run-page-light.png" />

<img className="hidden dark:block" src="https://mintcdn.com/langchain-5e9cc07a/CUls3RywIRCq3f1n/langsmith/images/run-page-dark.png?fit=max&auto=format&n=CUls3RywIRCq3f1n&q=85&s=1064b0452922ce6ccb60f63fd9f96567" alt="Run details page in the LangSmith UI." width="2406" height="906" data-path="langsmith/images/run-page-dark.png" />

## Traces

A *trace* is a collection of runs for a single operation. For example, if you have a user request that triggers a chain, and that chain makes a call to an LLM, then to an output parser, and so on, all of these runs would be part of the same trace. If you are familiar with [OpenTelemetry](https://opentelemetry.io/), you can think of a LangSmith trace as a collection of spans. Runs are bound to a trace by a unique trace ID.

<img className="block dark:hidden" src="https://mintcdn.com/langchain-5e9cc07a/rZXm112T7ucuciF-/langsmith/images/trace-light.png?fit=max&auto=format&n=rZXm112T7ucuciF-&q=85&s=9ec9979b7900cc0e748fe83a3467522f" alt="Trace with individual runs in the LangSmith UI." width="1656" height="1220" data-path="langsmith/images/trace-light.png" />

<img className="hidden dark:block" src="https://mintcdn.com/langchain-5e9cc07a/rZXm112T7ucuciF-/langsmith/images/trace-dark.png?fit=max&auto=format&n=rZXm112T7ucuciF-&q=85&s=66d15d3ecd2965af2419f886c3346867" alt="Trace with individual runs in the LangSmith UI." width="1634" height="1224" data-path="langsmith/images/trace-dark.png" />

## Threads

A *thread* is a sequence of traces representing a single conversation. Many LLM applications have a chatbot-like interface in which the user and the LLM application engage in a multi-turn conversation. Each turn in the conversation is represented as its own trace, but these traces are linked together by being part of the same thread. The most recent trace in a thread is the latest message exchange.

To group traces into threads, you pass a special metadata key (`session_id`, `thread_id`, or `conversation_id`) with a unique identifier value that links the traces together.

[Learn how to configure threads](/langsmith/threads).

<img className="block dark:hidden" src="https://mintcdn.com/langchain-5e9cc07a/zLS2qlRr5r04zU3G/langsmith/images/thread-overview-light.png?fit=max&auto=format&n=zLS2qlRr5r04zU3G&q=85&s=f7af4c3904073d5f58f28c656603ca19" alt="Thread representing a sequence of traces in a multi-turn conversation." width="1273" height="757" data-path="langsmith/images/thread-overview-light.png" />

<img className="hidden dark:block" src="https://mintcdn.com/langchain-5e9cc07a/zLS2qlRr5r04zU3G/langsmith/images/thread-overview-dark.png?fit=max&auto=format&n=zLS2qlRr5r04zU3G&q=85&s=f738de4cac932ed2b8657e8f3b706b77" alt="Thread representing a sequence of traces in a multi-turn conversation." width="1273" height="753" data-path="langsmith/images/thread-overview-dark.png" />

<Callout type="info" icon="feather">
  Use **[Polly](/langsmith/polly)** to analyze traces, runs, and threads. Polly helps you understand agent performance, debug issues, and gain insights from conversation threads without manually digging through data.
</Callout>

## Projects

A *project* is a collection of traces. You can think of a project as a container for all the traces that are related to a single application or service. You can have multiple projects, and each project can have multiple traces.

<img className="block dark:hidden" src="https://mintcdn.com/langchain-5e9cc07a/6YP22KFwiun35bYp/langsmith/images/project-light.png?fit=max&auto=format&n=6YP22KFwiun35bYp&q=85&s=5791bc120d8643f055fd03147d46a675" alt="Project containing traces in the LangSmith UI with the + Project button at the top of the table." width="2456" height="496" data-path="langsmith/images/project-light.png" />

<img className="hidden dark:block" src="https://mintcdn.com/langchain-5e9cc07a/6YP22KFwiun35bYp/langsmith/images/project-dark.png?fit=max&auto=format&n=6YP22KFwiun35bYp&q=85&s=88bea30702900bb98c9fcec71597b9bb" alt="Project containing traces in the LangSmith UI with the + Project button at the top of the table." width="2452" height="504" data-path="langsmith/images/project-dark.png" />

For more details on project setup and traces, refer to [Log traces to a project](/langsmith/log-traces-to-project).

## Feedback

*Feedback* allows you to score an individual run based on certain criteria. Each feedback entry consists of a feedback tag and feedback score, and is bound to a run by a unique run ID. Feedback can be continuous or discrete (categorical), and you can reuse feedback tags across different runs within an organization.

You can collect feedback on runs in a number of ways:

1. [Sent up along with a trace](/langsmith/attach-user-feedback) from the LLM application.
2. Generated by a user in the app [inline](/langsmith/annotate-traces-inline) or in an [annotation queue](/langsmith/annotation-queues).
3. Generated by an automatic evaluator during [offline evaluation](/langsmith/evaluate-llm-application).
4. Generated by an [online evaluator](/langsmith/online-evaluations-llm-as-judge).

To learn more about how feedback is stored in the application, refer to the [Feedback data format guide](/langsmith/feedback-data-format).

## Tags

*Tags* are collections of strings that can be attached to runs. You can use tags to do the following in the LangSmith UI:

* Categorize runs for easier search.
* Filter runs.
* Group runs together for analysis.

[Learn how to attach tags to your traces](/langsmith/add-metadata-tags).

## Metadata

*Metadata* is a collection of key-value pairs that you can attach to runs. You can use metadata to store additional information about a run, such as the version of the application that generated the run, the environment in which the run was generated, or any other information that you want to associate with a run. Similarly to tags, you can use metadata to filter runs in the LangSmith UI or group runs together for analysis.

[Learn how to add metadata to your traces](/langsmith/add-metadata-tags).

<img className="block dark:hidden" src="https://mintcdn.com/langchain-5e9cc07a/hK2pmvV-T-NqHYP3/langsmith/images/metadata-light.png?fit=max&auto=format&n=hK2pmvV-T-NqHYP3&q=85&s=766daba50db0fdb07761e1f2700cafe8" alt="Metadata for a run in the LangSmith UI." width="1350" height="1252" data-path="langsmith/images/metadata-light.png" />

<img className="hidden dark:block" src="https://mintcdn.com/langchain-5e9cc07a/hK2pmvV-T-NqHYP3/langsmith/images/metadata-dark.png?fit=max&auto=format&n=hK2pmvV-T-NqHYP3&q=85&s=618489b407f15e68d661b535fe46d019" alt="Metadata for a run in the LangSmith UI." width="1322" height="1142" data-path="langsmith/images/metadata-dark.png" />

## Data storage and retention

For traces ingested on or after Wednesday, May 22, 2024, LangSmith (SaaS) retains trace data for a maximum of 400 days past the date and time the trace was inserted into the LangSmith trace database.

After 400 days, the traces are permanently deleted from LangSmith, with a limited amount of metadata retained for the purpose of showing accurate statistics, such as historic usage and cost.

For more information on data retention tiers, pricing, and auto-upgrade scenarios, refer to [Usage and billing: Data retention](/langsmith/administration-overview#data-retention).

<Note>
  If you wish to keep tracing data longer than the data retention period, you can add it to a dataset. A [dataset](/langsmith/manage-datasets) allows you to store the trace inputs and outputs (e.g., as a key-value dataset), and will persist indefinitely, even after the trace gets deleted.
</Note>

## Deleting traces from LangSmith

If you need to remove a trace from LangSmith before its expiration date, you can do so by deleting the project that contains it.

You can delete a project with one of the following ways:

* In the [LangSmith UI](https://smith.langchain.com), select the **Delete** option on the project's overflow menu.
* With the [`delete_tracer_sessions`](https://api.smith.langchain.com/redoc#tag/tracer-sessions/operation/delete_tracer_session_api_v1_sessions__session_id__delete) API endpoint
* With the `delete_project()` ([Python](https://reference.langchain.com/python/langsmith/observability/sdk/)) or `deleteProject()` ([JS/TS](https://reference.langchain.com/javascript/modules/langsmith.html)) in the LangSmith SDK.

To delete individual traces, see [Data purging for compliance](/langsmith/data-purging-compliance).

***

<div className="source-links">
  <Callout icon="edit">
    [Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/observability-concepts.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).
  </Callout>

  <Callout icon="terminal-2">
    [Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
  </Callout>
</div>
