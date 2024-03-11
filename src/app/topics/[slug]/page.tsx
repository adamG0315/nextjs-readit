import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { fetchPostByTopicSlug } from '@/db/queries/posts';
import React from 'react';

interface Props {
	params: {
		slug: string
	}
}

const TopicShowPage: React.FC<Props> = ({params}) => {
	const {slug} = params
	return (
		<div className='grid grid.cols-4 gap-4 p-4'>
			<div className='col-span-3'>
				<h1 className='text-2xl font-bold mb-2'>
					{slug}
				</h1>
				<PostList fetchData={() => fetchPostByTopicSlug(slug)}/>
			</div>
			<div>
				<PostCreateForm slug={slug}/>
			</div>
		</div>
	);
};

export default TopicShowPage;