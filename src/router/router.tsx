import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../pages/layouts/main-layout/main-layout';
import { ErrorPage } from '../pages/error-page/error-page';
import { StoryPage } from '../pages/story-page/strory-page';
import { MainPage } from '../pages/main-page/main-page';
import { PATHES } from './pathes';
import { defferedLoaderStory } from '../components/story-details/story-details-loader';
import { store } from '../store/store';

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: PATHES.MAIN,
				element: <MainPage />,
			},
			{
				path: `${PATHES.STORY}:storyId`,
				loader: ({ params }) => {
					const { storyId } = params;
					return defferedLoaderStory(
						store.dispatch,
						storyId as string
					);
				},
				element: <StoryPage />,
			},
		],
	},
]);
