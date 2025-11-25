import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { EditIcon } from "@/components/icons";
import { useState } from "react";

const methodDetails = {
  copilot: {
    title: "Microsoft Copilot",
    description: "Upload all 15,000 documents into Microsoft Copilot and request a consolidated output table that organizes extracted compliance data into a clear, standardized format for rapid review and submission.",
    icon: (
      <svg width="61" height="54" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="61" height="54" rx="8" fill="white" fillOpacity="0.1" />
        <circle cx="30.5" cy="27" r="19" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  idp: {
    title: "Intelligent Document Processing",
    description: "Leverage the new Intelligent Document Processing (IDP) solution to ingest all 15,000 documents and automatically extract predefined compliance fields into a structured, standardized dataset for seamless validation and submission.",
    icon: (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="31" height="31" rx="4" stroke="white" strokeWidth="2" fill="none" />
        <line x1="8" y1="20" x2="39" y2="20" stroke="white" strokeWidth="1.5" />
        <line x1="14" y1="28" x2="33" y2="28" stroke="white" strokeWidth="1.5" />
        <line x1="14" y1="35" x2="33" y2="35" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
};

export default function TaskExecution() {
  const { taskId, methodId } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const method = methodId && methodDetails[methodId as keyof typeof methodDetails];

  if (!method || !methodId) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="body-text">Method not found</p>
        </main>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <button
          onClick={() => navigate(`/task/${taskId}/select-method`)}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors mb-10 font-cathay-sans text-base"
        >
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56234 0.0403331L0.0800382 2.65057C-0.0266794 2.73057 -0.0266794 2.89063 0.0800382 2.97063L3.56234 5.58087C3.6942 5.6797 3.88229 5.58563 3.88229 5.42085V3.56313H19.8C19.9105 3.56313 20 3.47359 20 3.36314V2.25808C20 2.14762 19.9105 2.05809 19.8 2.05809H3.88229V0.200369C3.88229 0.0355732 3.6942 -0.0585046 3.56234 0.0403331Z" fill="currentColor"/>
          </svg>
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="heading-lg mb-4">
              Urgent Legal Filings
            </h1>
            <h2 className="heading-sm text-2xl text-foreground/80 font-normal mb-6">
              Task 1: Extract key details from forms
            </h2>
            <p className="body-text text-foreground/75 mb-8">
              To meet the 48-hour deadline, your first priority is extracting critical compliance details. Choose between 1) Microsoft Copilot for rapid AI assistance or 2) our IDP solution for structured, automated document intelligence.
            </p>

            {/* Selected Method Info */}
            <div className="border border-white/10 bg-white/5 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 text-white">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="heading-sm text-2xl mb-2">
                    Selected: {method.title}
                  </h3>
                  <p className="body-sm text-foreground/75">
                    {method.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="heading-sm text-lg font-gt-walsheim block mb-4">
                  Prompt to {method.title === "Microsoft Copilot" ? "Microsoft Copilot" : "IDP"}
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="I have uploaded 15,000 documents as attachments, please..."
                  className="w-full bg-white/5 border border-white/10 rounded text-foreground placeholder-foreground/40 p-4 font-cathay-sans text-base focus:outline-none focus:border-white/30 transition-colors"
                  rows={5}
                  disabled={submitted}
                />
              </div>

              <button
                type="submit"
                disabled={submitted || !prompt.trim()}
                className={`flex items-center justify-center gap-2 w-full px-8 py-3 rounded font-cathay-sans text-base transition-all ${
                  submitted
                    ? "bg-green-600 text-white"
                    : "bg-white text-background hover:bg-gray-100"
                }`}
              >
                {submitted ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.67 5.33L8 13.99 3.33 9.33" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 10L17 10M12 5L17 10L12 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Submit
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar - Tips */}
          <div className="lg:col-span-1 space-y-6">
            {/* Responsible AI Reminder */}
            <div className="border border-green-600/30 bg-green-600/10 rounded-lg p-6">
              <h4 className="text-lg font-gt-walsheim text-green-400 mb-3">
                Responsible AI reminder
              </h4>
              <p className="body-sm text-green-200">
                When crafting prompts in Copilot, apply Responsible AI principles: ensure clarity, avoid bias, respect privacy, and validate outputs for accuracy and compliance before acting on them. Always prioritize transparency and accountability.
              </p>
            </div>

            {/* Tips */}
            <div className="border border-amber-600/30 bg-amber-600/10 rounded-lg p-6">
              <h4 className="text-lg font-gt-walsheim text-amber-400 mb-3">
                Tips for this task
              </h4>
              <p className="body-sm text-amber-200">
                Keep prompts clear and specific, avoid sensitive or biased language. Always prioritize privacy and compliance when handling large document sets.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
