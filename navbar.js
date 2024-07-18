// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl">Affordable Designer Wear</div>
        <div>
          <Link href="/shop"><a className="text-white mr-4">Shop</a></Link>
          <Link href="/cart"><a className="text-white mr-4">Cart</a></Link>
          <Link href="/account"><a className="text-white">Account</a></Link>
        </div>
      </div>
    </nav>
  );
}
