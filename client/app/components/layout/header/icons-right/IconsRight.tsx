import { FC } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AuthForm from '../auth-form/AuthForm';
import ProfileMenu from '../profile-menu/ProfileMenu';
import UploadVideo from '../upload-video/UploadVideo';
import styles from './IconsRight.module.scss';

const IconsRight: FC = () => {
	const { user } = useAuth();

	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	);
};

export default IconsRight;
