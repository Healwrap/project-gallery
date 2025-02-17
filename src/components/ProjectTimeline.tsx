import React, { useState } from "react";
import { Timeline, Tag } from "antd";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectTimeline.module.scss";

interface ProjectTimelineProps {
	projects: Project[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
	const [category, setCategory] = useState("全部");

	// 提取所有独立的项目类型
	const categories = Array.from(
		new Set(projects.flatMap((project) => project.category))
	);

	const filteredProjects = projects
		.filter(
			(project) => category === "全部" || project.category.includes(category)
		)
		.sort(
			(a, b) =>
				new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
		);

	return (
		<>
			<div className={styles.tagContainer}>
				<Tag
					key="全部"
					onClick={() => setCategory("全部")}
					className={`${styles.tag} ${
						category === "全部" ? styles.active : ""
					}`}
				>
					全部
				</Tag>
				{categories.map((cat) => (
					<Tag
						key={cat}
						onClick={() => setCategory(cat)}
						className={`${styles.tag} ${category === cat ? styles.active : ""}`}
					>
						{cat}
					</Tag>
				))}
			</div>
			<div className={styles.timelineContainer}>
				<Timeline>
					{filteredProjects.map((project) => (
						<Timeline.Item key={project.name}>
							<div>
								<strong>
									{new Date(project.createTime).toLocaleDateString()}
								</strong>
							</div>
							<ProjectCard project={project} />
						</Timeline.Item>
					))}
				</Timeline>
			</div>
		</>
	);
};

export default ProjectTimeline;
