import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStory, IComment } from '../models/stories';

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://hacker-news.firebaseio.com/v0',
	}),
	endpoints: (builder) => ({
		getNewStrories: builder.query<string[], undefined>({
			query: () =>
				`/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`,
		}),
		getStoryById: builder.query<IStory, string>({
			query: (id) => `/item/${id}.json?print=pretty`,
		}),
		getCommentById: builder.query<IComment, string>({
			query: (id) => `/item/${id}.json?print=pretty`,
		}),
	}),
});

export const {
	useGetCommentByIdQuery,
	useGetNewStroriesQuery,
	useGetStoryByIdQuery,
	useLazyGetStoryByIdQuery,
} = baseApi;
