import { Link, NavLink, Outlet } from 'react-router-dom'
import { Utensils } from 'lucide-react'
export function Layout() {
  return <><header><Link className="brand" to="/"><Utensils size={22}/> QuickBite</Link><nav aria-label="Main navigation"><NavLink to="/">Discover</NavLink><NavLink to="/cart">Cart</NavLink><NavLink to="/login">Sign in</NavLink></nav></header><div className="notice">COURSE PROJECT · WORK IN PROGRESS · SYNTHETIC MENU DATA</div><main><Outlet/></main><footer>Java + Spring Boot / React + TypeScript · Authentication and ordering are next.</footer></>
}
