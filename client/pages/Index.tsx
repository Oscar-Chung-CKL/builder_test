import { Header } from "@/components/Header";
import { ActionCard } from "@/components/ActionCard";
import { EditIcon, MoneyIcon, DeliveryIcon } from "@/components/icons";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="heading-xl mb-4">
            Welcome to Space Travel Control Centre, <span className="font-bold">Group 1</span>
          </h1>
          <p className="body-text text-foreground/80 max-w-2xl">
            It's 2030. As Cathay enters the era of space travel, this portal harnesses state-of-the-art AI tools to power safe, efficient, and innovative mission launches. Your decisions here will shape outcomes and guarantee a smooth, successful launch of our next frontier.
          </p>
        </div>

        {/* Pending Action Items */}
        <div className="mb-8">
          <h2 className="heading-md mb-8 uppercase tracking-widest text-foreground/80">
            Pending Action Items
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ActionCard
              icon={<EditIcon />}
              title="Urgent Legal Filings"
              description="Cathay receives an urgent directive from the International Spaceflight Authority: submit all compliance filings within 48 hours to secure approval for commercial space travel operations."
              status="easy"
              href="/task/legal-filings"
            />

            <ActionCard
              icon={<MoneyIcon />}
              title="Pricing Strategy Under Customer Surge"
              description="Our announcement of space travel has gone viral, and thousands of customers are requesting quotes and booking details."
              status="medium"
              href="/task/pricing-strategy"
            />

            <ActionCard
              icon={<DeliveryIcon />}
              title="Supply Chain Disruption Before Launch"
              description="We are two weeks away from our first space flight launch when a critical supply chain disruption occurs: life-support system components are delayed due to geopolitical restrictions."
              status="hard"
              href="/task/supply-chain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
