import { FC, useState } from 'react';
import { HiUpload } from 'react-icons/hi';
import { videoApi } from '@/store/api/video.api';
import stylesIcons from '../icons-right/IconsRight.module.scss';
import styles from './UploadVideo.module.scss';

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [videoId, setVideoId] = useState<number>(0);

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation();

	return (
		<>
			<button
				className={stylesIcons.button}
				disabled={isLoading}
				onClick={() => {
					createVideo()
						.unwrap()
						.then((id) => {
							setVideoId(+id);
							setIsOpen(true);
						});
				}}
			>
				<HiUpload />
			</button>
		</>
	);
};

export default UploadVideo;
