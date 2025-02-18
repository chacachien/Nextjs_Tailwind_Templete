import FeaturedProducts from '@/components/product/listProduct';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {params?.slug?.replace('-', ' ')} Products
      </h1>
        <FeaturedProducts />
    </div>
  );
}
export async function generateMetadata({
                                         params
                                       }: {
  params: { slug: string }
}) {
  return {
    title: `${params?.slug.replace('-', ' ')} Products`,
    description: `Browse our ${params?.slug.replace('-', ' ')} collection`,
  };
}
