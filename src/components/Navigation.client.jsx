import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation() {
  const menus = ['products', 'collections', 'about', 'contact'];

  return (
    <nav className="hidden lg:block text-center">
      {/* <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul> */}
      <ul className="md:flex items-center justify-center">
        {menus.map((menu) => (
          <li key={menu}>
            <Link className="block p-4 hover:opacity-80" to={'/' + menu}>
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
