import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function RootBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <div>Page not found</div>;
		}

		if (error.status === 401) {
			return <div>You must be logged in to view this page.</div>;
		}

		if (error.status === 503) {
			return <div>The connection is rejected or not established.</div>;
		}
	}

	return <div>Something went wrong :C</div>;
}

export { RootBoundary };
