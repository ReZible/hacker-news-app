interface IStory {
	id: string;
	by: string;
	score: number;
	time: number;
	title: string;
	kids: string[] | null;
}

interface IComment {
	id: string;
	by: string;
	deleted?: boolean;
	paernt: IStory | IComment;
	text: string;
	time: number;
	kids?: string[] | null;
}

export type { IComment, IStory };
