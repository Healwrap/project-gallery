import { useEffect, useState } from "react";
import "./App.scss";
import ProjectTimeline from "./components/ProjectTimeline";
import Footer from "./components/Footer";
import { projects as projectData } from "./projects";

function App() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		setProjects(projectData.filter((project) => project.enable));
	}, []);

	return (
		<div className="App">
			<h1>个人项目汇总</h1>
			<ProjectTimeline projects={projects} />
			<Footer />
		</div>
	);
}

export default App;
