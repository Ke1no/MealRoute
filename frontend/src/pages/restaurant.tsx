import { Link, useParams } from 'react-router-dom'
import { useMenu } from '@/lib/queries'
export function RestaurantPage() {
  const id = Number(useParams().id)
  const query = useMenu(id)
  if (!Number.isSafeInteger(id) || id <= 0) return <p role="alert">Invalid restaurant. <Link to="/">Go back</Link></p>
  return <><Link to="/">← All restaurants</Link><h1>On the menu.</h1><p className="intro">Preview items; cart integration is a future step.</p>
    {query.isPending && <p role="status">Loading menu…</p>}
    {query.isError && <p role="alert">{query.error.message}</p>}
    {query.data?.map(item => <article className="menu-row" key={item.id}><div><h2>{item.name}</h2><p>{item.description}</p></div><strong>${item.price.toFixed(2)}</strong><button disabled title="Cart integration pending">Add · coming next</button></article>)}
  </>
}
