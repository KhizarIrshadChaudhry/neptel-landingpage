import Image from "next/image";

export default function UseCases() {
  const cases = [
    ["Financial Services", "/finance-icon.svg", "Analyze contracts, ensure compliance, detect anomalies — securely."],
    ["Legal Firms", "/legal-icon.svg", "Private clause search, precedent discovery, and contract summaries."],
    ["Healthcare", "/health-icon.svg", "EHR assistance, symptom support, and patient Q&A with full privacy."],
    ["Architecture", "/arch-icon.svg", "BR18 compliance, Rhino workflows, and material guidance in one click."],
    ["Municipalities", "/city-icon.svg", "Query public documents, answer citizen requests — locally."],
  ];

  return (
    <section
    id="use-cases" 
    className="py-24 px-6 sm:px-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Use Cases</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cases.map(([title, icon, desc]) => (
          <div key={title} className="bg-[#141A1F] p-6 rounded-2xl text-center hover:shadow-lg transition">
            <Image src={icon} alt={`${title} icon`} width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
