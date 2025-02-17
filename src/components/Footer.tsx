import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<p>
				使用Cursor辅助生成 | GitHub主页:&nbsp;
				<a
					href="https://github.com/pepedd864"
					target="_blank"
					rel="noopener noreferrer"
				>
					@pepedd864
				</a>
			</p>
		</div>
	);
};

export default Footer;
