import { Link } from 'react-router-dom'
export function PendingPage({ title, detail }: { title: string; detail: string }) {
  return <section className="pending"><p className="eyebrow">NEXT DEVELOPMENT STEP</p><h1>{title}</h1><p className="intro">{detail}</p><p>No account, order or payment is created by this screen.</p><Link className="button" to="/">Back to discovering</Link></section>
}
