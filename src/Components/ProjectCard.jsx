import '../public/Project.css'

export default function ProjectCard({card})
{
   const { image, name, sub, adj, amnt } = card;

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={sub} />
      </div>
      <div className="project-card-content">
        <h3 className="project-sub">{sub}</h3>
        <p className="project-name">{name}</p>
        <ul className="project-adj">
          {adj.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="project-amnt">
          <span>{amnt[0]}</span> | 
          <span> {amnt[1]}</span>
        </div>
      </div>
    </div>
  );
}