import { FC } from 'react';
import VideoItem from '@/components/ui/video-item/VideoItem';
import styles from './Search.module.scss';
import { useSearch } from './useSearch';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Поиск видео...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src='/img/common/search.svg' alt='Search' />
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map((video) => (
							<VideoItem key={video.id} item={video} isSmall />
						))
					) : (
						<div className='text-white'>Видео не найдены!</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
