import { redirect } from 'next/navigation';
import { productsData } from '@/data/productsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductRedirectPage({ params }: PageProps) {
  const resolvedParams = await params;
  redirect(`/${resolvedParams.slug}`);
}
