import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { DiscoverPage } from '@/pages/discover'
import { RestaurantPage } from '@/pages/restaurant'
import { PendingPage } from '@/pages/pending'
export default function App() {
  return <Routes><Route element={<Layout/>}><Route index element={<DiscoverPage/>}/><Route path="restaurants/:id" element={<RestaurantPage/>}/>
    <Route path="saved" element={<PendingPage title="Saved restaurants" detail="Add the course favorites interaction here."/>}/>
    <Route path="login" element={<PendingPage title="Sign in" detail="Connect Spring Security session login and the course SessionProvider."/>}/>
    <Route path="signup" element={<PendingPage title="Create an account" detail="Add validated registration and the /signup endpoint."/>}/>
    <Route path="cart" element={<PendingPage title="Your cart" detail="Implement the customer-scoped cart service, then connect TanStack Query mutations."/>}/>
    <Route path="checkout" element={<PendingPage title="Checkout" detail="Connect the course /cart/checkout endpoint after authentication and cart integration."/>}/>
    <Route path="order-confirmation" element={<PendingPage title="Order confirmation" detail="Only show a receipt after a verified successful operation."/>}/>
    <Route path="*" element={<PendingPage title="Page not found" detail="This route is not part of the project yet."/>}/>
  </Route></Routes>
}
