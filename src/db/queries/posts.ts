import type { Post } from "@prisma/client";
import { db } from "..";

export type PostWithDetails = (
	Post & {
		topic: {slug: string};
		user: {name: string | null};
		_count: {comments: number}
	}
)

// export type PostWithDetails = Awaited<ReturnType<typeof fetchPostByTopicSlug>>[number]

export function fetchPostByTopicSlug(slug: string): Promise<PostWithDetails[]> {
	return db.post.findMany({
		where: {topic: {slug}},
		include: {
			topic: {select: {slug: true}},
			user: {select: {name: true}},
			_count: {select: {comments: true}}
		}
	})
}

export function fetchTopPosts(): Promise<PostWithDetails[]> {
	return db.post.findMany({
		orderBy: [
			{
				comments: {
					_count: "desc"
				}
			}
		],
		include: {
			topic: {select: {slug: true}},
			user: {select: {name: true, image: true}},
			_count: {select: {comments: true}}
		},
		take: 5
	})
}

export function fetchPostsBySearchTerm(term: string): Promise<PostWithDetails[]> {
	return db.post.findMany({
		include: {
			topic: {select: {slug: true}},
			user: {select: {name: true, image: true}},
			_count: {select: {comments: true}}
		},
		where: {
			OR: [
				{title: {contains: term}},
				{content: {contains: term}},
			]
		}
	})
}