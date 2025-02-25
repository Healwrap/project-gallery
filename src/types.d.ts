declare interface ProjectStatusType {
	[key: string]: { label: string; color: string };
}

declare interface Project {
	name: string;
	status?: ProjectStatusType[keyof ProjectStatusType];
	stacks: string[];
	link: string;
	git: string;
	desc: string;
	imgs: string[];
	category: string[];
	createTime: string;
	updateTime: string;
	enable: boolean;
}
