import { json, defer } from 'react-router-dom';
import { baseApi } from '../../services/api';
import { AppDispatch } from '../../store/store';

interface ICustomError extends Error {
	status: number;
}

export function defferedLoaderStory(dispatch: AppDispatch, storyId: string) {
	const loader = dispatch(baseApi.endpoints.getStoryById.initiate(storyId));
	try {
		const story = loader.unwrap();

		return defer({
			story,
		});
	} catch (error: unknown) {
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		throw json('', { status: (error as ICustomError).status });
	} finally {
		loader.unsubscribe();
	}
}
