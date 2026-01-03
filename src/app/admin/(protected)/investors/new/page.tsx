import InvestorDocumentForm from '@/components/admin/InvestorDocumentForm';

export default function NewInvestorDocument() {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Add New Document</h1>
          <p className="text-gray-600">Add a new investor document</p>
        </div>
        <InvestorDocumentForm />
      </div>
    </div>
  );
}



