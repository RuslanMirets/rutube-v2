import Link from 'next/link';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
import Menu from './menu/Menu';
import { menu } from './menu/menu.data';

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles.logo}>Rutube 2.0</a>
			</Link>
			<Menu title='Меню' items={menu} />
			<div className={styles.copy}>© 2022 RUTUBE 2.0</div>
		</aside>
	);
};

export default Sidebar;
