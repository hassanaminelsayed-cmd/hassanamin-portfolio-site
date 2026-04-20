import {
  ActivityHeart,
  BarChart07,
  Briefcase02,
  CheckVerified01,
  LayersThree01,
  Users01
} from "@untitledui/icons";
import { Link } from "react-router-dom";
import { caseStudies, experience } from "../data/content";

const metrics = [
  { value: "+40%", label: "User engagement increase on ICan Care" },
  { value: "92%", label: "Task success rate in usability testing" },
  { value: "+25%", label: "Increase in usable research data" },
  { value: "95%", label: "Stakeholder approval in delivery phases" }
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">AI Product Designer II at Procore</p>
          <h1>I design enterprise-grade experiences that scale across users, teams, and markets.</h1>
          <p className="lead">
            Senior UI/UX Designer with 4+ years building products through research, systems thinking,
            and clear collaboration with product and engineering teams.
          </p>
          <div className="cta-row">
            <Link to="/work" className="btn btn-primary">
              View Case Studies
            </Link>
            <a className="btn btn-secondary" href="https://www.behance.net/hassan-amin" target="_blank" rel="noreferrer">
              Behance Portfolio
            </a>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=80"
          alt="Modern product design artboards and interface sketches"
        />
      </section>

      <section className="metric-grid">
        {metrics.map((metric) => (
          <article className="card metric" key={metric.label}>
            <p className="metric-value">{metric.value}</p>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Case Studies</h2>
        <div className="card-grid">
          {caseStudies.map((item) => (
            <article className="card case-card" key={item.slug}>
              <img src={item.image} alt={item.title} />
              <p className="eyebrow">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link to={`/case/${item.slug}`} className="text-link">
                Read case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Career Highlights</h2>
        <div className="card-grid">
          {experience.map((item) => (
            <article className="card" key={item.company}>
              <h3>{item.role}</h3>
              <p className="muted">
                {item.company} - {item.period}
              </p>
              <p>{item.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Senior Product Design Capabilities</h2>
        <ul className="feature-list">
          <li>
            <Briefcase02 /> Business aligned UX decisions and roadmap collaboration.
          </li>
          <li>
            <ActivityHeart /> Research-led empathy and measurable usability improvement.
          </li>
          <li>
            <LayersThree01 /> Scalable design systems and component thinking.
          </li>
          <li>
            <BarChart07 /> Outcome focus: activation, retention, and efficiency metrics.
          </li>
          <li>
            <Users01 /> Team leadership, stakeholder alignment, and design ops maturity.
          </li>
          <li>
            <CheckVerified01 /> Certified UX and product management training foundation.
          </li>
        </ul>
      </section>
    </>
  );
}
