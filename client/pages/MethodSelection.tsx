import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { EditIcon } from "@/components/icons";

interface Method {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  documents: string;
  timeEstimate: string;
  costEstimate?: string;
  details: string;
}

const methodsByTask = {
  "legal-filings": [
    {
      id: "copilot",
      title: "Microsoft Copilot",
      description: "Upload all 15,000 documents into Microsoft Copilot and request a consolidated output table that organizes extracted compliance data into a clear, standardized format for rapid review and submission.",
      icon: (
        <svg width="61" height="54" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="61" height="54" rx="8" fill="white" fillOpacity="0.1"/>
          <circle cx="30.5" cy="27" r="19" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      documents: "10,000",
      timeEstimate: "1 hours",
      costEstimate: "~$500",
      details: "Leverage Microsoft Copilot's AI capabilities for rapid data extraction with minimal setup required.",
    },
    {
      id: "idp",
      title: "Intelligent Document Processing",
      description: "Leverage the new Intelligent Document Processing (IDP) solution to ingest all 15,000 documents and automatically extract predefined compliance fields into a structured, standardized dataset for seamless validation and submission.",
      icon: (
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="31" height="31" rx="4" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="8" y1="20" x2="39" y2="20" stroke="white" strokeWidth="1.5"/>
          <line x1="14" y1="28" x2="33" y2="28" stroke="white" strokeWidth="1.5"/>
          <line x1="14" y1="35" x2="33" y2="35" stroke="white" strokeWidth="1.5"/>
        </svg>
      ),
      documents: "80,000",
      timeEstimate: "3 hours",
      costEstimate: "~$2000",
      details: "Advanced document processing with structured field extraction and validation.",
    },
  ],
};

interface MethodCardProps {
  method: Method;
  onSelect: (methodId: string) => void;
}

function MethodCard({ method, onSelect }: MethodCardProps) {
  return (
    <div className="border border-white/10 bg-background rounded-lg p-8 hover:bg-white/5 transition-colors">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 text-white">{method.icon}</div>
        <div className="flex-1">
          <h3 className="heading-sm text-2xl mb-2">{method.title}</h3>
          <p className="body-text text-foreground/75 mb-4">
            {method.description}
          </p>
        </div>
      </div>
      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
        <div>
          <div className="text-sm text-foreground/60 mb-1">Documents</div>
          <div className="heading-sm text-xl">{method.documents}</div>
        </div>
        <div>
          <div className="text-sm text-foreground/60 mb-1">Time</div>
          <div className="heading-sm text-xl">{method.timeEstimate}</div>
        </div>
        <div>
          <div className="text-sm text-foreground/60 mb-1">Cost</div>
          <div className="heading-sm text-xl">{method.costEstimate || "~$1000"}</div>
        </div>
      </div>
      <button
        onClick={() => onSelect(method.id)}
        className="w-full btn-primary"
      >
        Select
      </button>
    </div>
  );
}

export default function MethodSelection() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const methods = taskId ? methodsByTask[taskId as keyof typeof methodsByTask] : null;

  if (!methods) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="body-text">Task not found</p>
        </main>
      </div>
    );
  }

  const handleMethodSelect = (methodId: string) => {
    navigate(`/task/${taskId}/execute/${methodId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <button
          onClick={() => navigate(`/task/${taskId}`)}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors mb-10 font-cathay-sans text-base"
        >
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56234 0.0403331L0.0800382 2.65057C-0.0266794 2.73057 -0.0266794 2.89063 0.0800382 2.97063L3.56234 5.58087C3.6942 5.6797 3.88229 5.58563 3.88229 5.42085V3.56313H19.8C19.9105 3.56313 20 3.47359 20 3.36314V2.25808C20 2.14762 19.9105 2.05809 19.8 2.05809H3.88229V0.200369C3.88229 0.0355732 3.6942 -0.0585046 3.56234 0.0403331Z" fill="currentColor"/>
          </svg>
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 text-white pt-1">
              <EditIcon />
            </div>
            <div className="flex-1">
              <h1 className="heading-lg mb-2">
                Urgent Legal Filings
              </h1>
              <h2 className="heading-sm text-2xl text-foreground/80 font-normal">
                Task 1: Extract key details from forms
              </h2>
              <p className="body-text text-foreground/75 mt-4">
                To meet the 48-hour deadline, your first priority is extracting critical compliance details. Choose between 1) Microsoft Copilot for rapid AI assistance or 2) our IDP solution for structured, automated document intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {methods.map((method) => (
            <MethodCard
              key={method.id}
              method={method}
              onSelect={handleMethodSelect}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
