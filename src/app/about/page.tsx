import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AboutPage() {
  return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Welcome to our store! We are dedicated to providing the best products and services to our customers.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to deliver high-quality products while ensuring customer satisfaction through excellent service and competitive prices.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Quality First</li>
              <li>Customer Satisfaction</li>
              <li>Integrity</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>

  );
}
