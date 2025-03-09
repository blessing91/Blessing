import { CaseStudyPage } from '@/components/portfolio';

export default async function Page({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const id = (await params).id;
  return <CaseStudyPage id={id} />;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  // In a real implementation, you would fetch the case study data based on the ID
  // and generate dynamic metadata
  const id = (await params).id;
  return {
    title: `Case Study ${id} | Blessing Adenekan`,
    description:
      'Detailed case study showing the strategy, implementation, and results from this successful digital marketing campaign.',
  };
}
