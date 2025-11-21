import TaskList from "../components/TaskList";
import JobList from "../components/JobList";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Portal de Empregos e Tarefas</h1>
      <div className="dashboard-content">
        <TaskList />
        <JobList />
      </div>
    </div>
  );
}
