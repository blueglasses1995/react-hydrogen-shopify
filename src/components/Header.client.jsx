import {useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 lg:h-32" role="banner">
      <div
        className={`fixed z-20 h-10 lg:h-16 w-full border-b border-gray-200 px-6 md:px-8 md:py-2 lg:pt-0 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            {/* <CurrencySelector /> */}
            <MobileNavigation
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link
              className="font-black uppercase text-2xl tracking-widest"
              to="/"
            >
              {storeName}
            </Link>
            <Navigation />
            <CartToggle
              handleClick={() => {
                if (isMobileNavOpen) setIsMobileNavOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
