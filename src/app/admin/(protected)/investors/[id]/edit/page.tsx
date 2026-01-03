import { getInvestorDocuments } from '@/lib/supabase/queries';
import { notFound } from 'next/navigation';
import InvestorDocumentForm from '@/components/admin/InvestorDocumentForm';

export default async function EditInvestorDocument({ params }: { params: { id: string } }) {
  const documents = await getInvestorDocuments();
  const document = documents.find((doc) => doc.id === params.id);

  if (!document) {
    notFound();
  }

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Edit Document</h1>
          <p className="text-gray-600">Update document information</p>
        </div>
        <InvestorDocumentForm document={document} />
      </div>
    </div>
  );
}



