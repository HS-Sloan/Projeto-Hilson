import { useState } from "react";
import "../styles/JobList.css";

export default function JobList() {
  const [jobs] = useState([
    { id: 1, empresa: "TechCorp", cargo: "Desenvolvedor Frontend" },
    { id: 2, empresa: "EduJobs", cargo: "Analista de Dados" },
  ]);

  return (
    <div className="job-list">
      <h2>Vagas Disponíveis</h2>
      <ul>
        {jobs.map(j => (
          <li key={j.id} className="job-item">
            <strong>{j.empresa}</strong> - {j.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
}
