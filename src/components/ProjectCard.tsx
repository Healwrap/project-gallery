import React from "react";
import { Card, Carousel, Tag, Image, Badge } from "antd";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const colorArr = [
		"blue",
		"purple",
		"cyan",
		"green",
		"magenta",
		"pink",
		"red",
		"orange",
		"yellow",
		"volcano",
		"geekblue",
		"lime",
		"gold",
	];
	return (
		<div className={styles.cardContainer}>
			<Badge.Ribbon text={project.status?.label} color={project.status?.color}>
				<Card
					title={project.name}
					extra={
						<div className={styles.cardLinks}>
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
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
					<div
						className={styles.desc}
						dangerouslySetInnerHTML={{ __html: project.desc }}
					></div>
					<div>
						{project.stacks.map((stack, index) => (
							<Tag
								bordered={false}
								key={stack}
								color={colorArr[index % colorArr.length]}
								style={{ marginBottom: "5px" }}
							>
								{stack}
							</Tag>
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
			</Badge.Ribbon>
		</div>
	);
};

export default ProjectCard;
