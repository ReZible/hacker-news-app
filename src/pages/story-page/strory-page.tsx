import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { StoryDetails } from '../../components/story-details/story-details';
import { IStory } from '../../models/stories';
import { Loader } from '../../components/loader/loader';

function StoryPage() {
	const { story } = useLoaderData() as { story?: Promise<IStory> };

	return (
		<Suspense fallback={<Loader />}>
			<Await resolve={story}>
				{(resolverStory: IStory) => (
					<StoryDetails story={resolverStory} />
				)}
			</Await>
		</Suspense>
	);
}

export { StoryPage };
