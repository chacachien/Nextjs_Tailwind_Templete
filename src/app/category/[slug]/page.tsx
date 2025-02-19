import FeaturedProducts from '@/components/product/listProduct';
import {Metadata} from "next";
type Props = {
    params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;

    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {slug?.replace('-', ' ')} Products
      </h1>
        <FeaturedProducts />
    </div>
  );
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const formattedSlug = slug.replace('-', ' ');

    return {
        title: `${formattedSlug} Products`,
        description: `Browse our ${formattedSlug} collection`,
    };
}

