import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import { api } from '@/store/api/api';
import styles from './ProfileMenu.module.scss';

const ProfileMenu: FC = () => {
	const { user } = useAuth();

	const { data, isLoading } = api.useGetProfileQuery(null, { skip: !user });

	const { ref, isShow, setIsShow } = useOutside(false);

	const { logout } = useActions();

	if (isLoading) return null;

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					src={data?.avatarPath || ''}
					alt={data?.name}
					width={40}
					height={40}
					priority
				/>
				<span className={styles.name}>{data?.name}</span>
				{isShow ? <GoChevronUp /> : <GoChevronDown />}
			</button>

			{isShow && (
				<div className={styles['profile-name']}>
					<ul>
						<li>
							<Link href={`/c/${user?.id}`}>
								<a>Мой канал</a>
							</Link>
						</li>
						<li>
							<Link href='/studio'>
								<a>В студию</a>
							</Link>
						</li>
						<li>
							<button onClick={logout}>Выйти</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileMenu;
