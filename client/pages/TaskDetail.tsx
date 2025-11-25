import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { StatusBadge } from "@/components/StatusBadge";
import { EditIcon } from "@/components/icons";

const tasks = {
  "legal-filings": {
    id: "legal-filings",
    title: "Urgent Legal Filings",
    subtitle: "EASY",
    status: "easy" as const,
    icon: <EditIcon />,
    description: "Cathay receives an urgent directive from the International Spaceflight Authority: submit all compliance filings within 48 hours to secure approval for commercial space travel operations.",
    taskDescription: "You will need to figure out how to extract key compliance data quickly, populate standardized forms, and submit filings across multiple regulatory portals before the deadline.",
    buttonLabel: "Start now",
  },
  "pricing-strategy": {
    id: "pricing-strategy",
    title: "Pricing Strategy Under Customer Surge",
    subtitle: "MEDIUM",
    status: "medium" as const,
    icon: <EditIcon />,
    description: "Our announcement of space travel has gone viral, and thousands of customers are requesting quotes and booking details.",
    taskDescription: "Develop a dynamic pricing strategy that maximizes revenue while maintaining customer satisfaction and managing inventory constraints.",
    buttonLabel: "Start now",
  },
  "supply-chain": {
    id: "supply-chain",
    title: "Supply Chain Disruption Before Launch",
    subtitle: "HARD",
    status: "hard" as const,
    icon: <EditIcon />,
    description: "We are two weeks away from our first space flight launch when a critical supply chain disruption occurs: life-support system components are delayed due to geopolitical restrictions.",
    taskDescription: "Identify alternative suppliers, negotiate expedited delivery, and assess the impact on launch timeline.",
    buttonLabel: "Start now",
  },
};

export default function TaskDetail() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = taskId && tasks[taskId as keyof typeof tasks];

  if (!task) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="body-text">Task not found</p>
          <Link to="/" className="text-white hover:underline mt-4 inline-block">
            Back to Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white hover:text-gray-300 mb-8"
        >
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56234 0.0403331L0.0800382 2.65057C-0.0266794 2.73057 -0.0266794 2.89063 0.0800382 2.97063L3.56234 5.58087C3.6942 5.6797 3.88229 5.58563 3.88229 5.42085V3.56313H19.8C19.9105 3.56313 20 3.47359 20 3.36314V2.25808C20 2.14762 19.9105 2.05809 19.8 2.05809H3.88229V0.200369C3.88229 0.0355732 3.6942 -0.0585046 3.56234 0.0403331Z" fill="white"/>
          </svg>
          <span className="body-text">Back to Home</span>
        </button>

        {/* Task Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 text-white">{task.icon}</div>
            <div className="flex-1">
              <div className="flex items-baseline gap-4 mb-4">
                <h1 className="heading-lg">{task.title}</h1>
                <StatusBadge status={task.status} />
              </div>
              <p className="body-text text-foreground/80">
                {task.description}
              </p>
            </div>
          </div>
        </div>

        {/* Task Content Container */}
        <div className="border border-border bg-card rounded-lg p-8">
          <p className="body-text text-foreground/80 mb-6">
            {task.taskDescription}
          </p>

          <button className="btn-primary">
            {task.buttonLabel}
          </button>
        </div>
      </main>
    </div>
  );
}
