import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'

export default function Tier1Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <div className="bg-brand-white min-h-screen">
        {children}
      </div>
      <Footer />
    </CartProvider>
  )
}
