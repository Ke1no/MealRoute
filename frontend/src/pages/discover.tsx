import { Link } from 'react-router-dom'
import { useRestaurants } from '@/lib/queries'
export function DiscoverPage() {
  const query = useRestaurants()
  return <><p className="eyebrow">THE NEXT GOOD BITE</p><h1>Find something<br/>worth a break.</h1><p className="intro">A small starting point for your food-ordering application.</p>
    {query.isPending && <p role="status">Loading restaurants…</p>}
    {query.isError && <section role="alert"><h2>Backend unavailable</h2><p>Start the Spring Boot server on port 8080, then retry.</p><button onClick={() => void query.refetch()}>Retry</button></section>}
    {query.data && <div className="grid">{query.data.map((r, i) => <Link className="card" to={`/restaurants/${r.id}`} key={r.id}><div className={`cover tone-${i % 2}`}><span>{i % 2 ? 'NOODLES' : 'FRESH & SIMPLE'}</span></div><div className="card-body"><p className="eyebrow">DEMO RESTAURANT</p><h2>{r.name}</h2><p>{r.menu_items.length} menu items · View menu →</p></div></Link>)}</div>}
  </>
}
