import { FC } from 'react';
import Line from '@/components/ui/Line';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { IMenuItem } from './menu.interface';

interface IMenu {
	title: string;
	items: IMenuItem[];
}

const Menu: FC<IMenu> = ({ title, items }) => {
	return (
		<nav className={styles.mnu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
			<Line />
		</nav>
	);
};

export default Menu;
