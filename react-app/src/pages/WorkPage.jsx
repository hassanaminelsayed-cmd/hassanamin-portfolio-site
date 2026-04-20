import { Link } from "react-router-dom";
import { caseStudies } from "../data/content";

export function WorkPage() {
  return (
    <section>
      <p className="eyebrow">Work</p>
      <h1>Product Design Case Studies</h1>
      <p className="lead">A selected portfolio of healthcare, enterprise, and platform redesign projects.</p>
      <div className="card-grid">
        {caseStudies.map((item) => (
          <article className="card case-card" key={item.slug}>
            <img src={item.image} alt={item.title} />
            <p className="eyebrow">{item.category}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <Link to={`/case/${item.slug}`} className="text-link">
              Open details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
