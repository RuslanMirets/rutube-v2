import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import Catalog from './catalog/Catalog';
import Discover from './discover/Discover';

const Home: FC = () => {
	return (
		<Layout title='Rutube v2.0 | Видеохостинг'>
			<Discover />
			<Catalog />
		</Layout>
	);
};

export default Home;
