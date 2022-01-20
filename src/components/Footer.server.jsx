import {Link} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="relative bg-white border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Shop All</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/home">Products</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/home">Collections</Link>
              </li>
              {/* <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to={`/products/${product?.handle}`}>Product</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to={`/collections/${collection?.handle}`}>
                  Collection
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h2 className="text-md font-medium uppercase mb-4">About Us</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/about">about</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 md:px-8 bg-gray-50">
        <p className="text-gray-600">© 2022 Grotesque Toy Stories</p>
      </div>
    </footer>
  );
}
