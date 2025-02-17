import React from "react";
import { Card, Carousel, Tag, Image } from "antd";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	return (
		<div className={styles.cardContainer}>
			<Card
				title={project.name}
				extra={
					<div className={styles.cardLinks}>
						{project.link && (
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								在线地址
							</a>
						)}
						{project.link && project.git && <span> | </span>}
						{project.git && (
							<a href={project.git} target="_blank" rel="noopener noreferrer">
								Git 仓库
							</a>
						)}
					</div>
				}
			>
				<div className={styles.cardTimes}>
					<span>
						创建时间: {new Date(project.createTime).toLocaleDateString()}
					</span>
					{" | "}
					<span>
						最后更新时间: {new Date(project.updateTime).toLocaleDateString()}
					</span>
				</div>
				<p>{project.desc}</p>
				<div>
					{project.stacks.map((stack) => (
						<Tag key={stack}>{stack}</Tag>
					))}
				</div>
				{project.imgs.length > 0 && (
					<div className={styles.carouselContainer}>
						<Carousel
							autoplay
							autoplaySpeed={2000}
							arrows
							draggable
							adaptiveHeight
							infinite
						>
							{project.imgs.map((img, index) => (
								<div className={styles.carouselSlide} key={index}>
									<Image
										src={img}
										alt={`Screenshot ${index + 1}`}
										className={styles.carouselImage}
										preview={isMobile}
									/>
								</div>
							))}
						</Carousel>
					</div>
				)}
			</Card>
		</div>
	);
};

export default ProjectCard;
