import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from './private-route.interface';

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser },
}) => {
	const { user, isLoading } = useAuth();
	const { replace, pathname } = useRouter();

	const Children = () => <>{children}</>;

	if (isLoading) return null;

	if (user) return <Children />;

	if (isOnlyUser) pathname !== '/' && replace('/');

	return null;
};

export default CheckRole;
