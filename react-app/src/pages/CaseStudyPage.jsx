import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../data/content";

export function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <section>
        <h1>Case study not found</h1>
        <Link to="/work" className="text-link">
          Back to work
        </Link>
      </section>
    );
  }

  return (
    <section>
      <p className="eyebrow">{study.category}</p>
      <h1>{study.title}</h1>
      <img className="hero-image" src={study.image} alt={study.title} />
      <article className="card rich-copy">
        <p>{study.summary}</p>
        <h3>Key highlights</h3>
        <ul className="feature-list">
          {study.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
      <Link to="/work" className="text-link">
        Back to all case studies
      </Link>
    </section>
  );
}
