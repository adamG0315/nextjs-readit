import { db } from '@/db';
import paths from '@/paths';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';


interface Props {
}

const TopicList: React.FC<Props> = async ({ }) => {
	const topics = await db.topic.findMany()
	return (
		<div className='flex flex-row flex-wrap gap-2'>
		{/* <Chip */}
		{
			topics.map(topic=> (
				<div key={topic.id}>
					<Link href={paths.topicShow(topic.slug)}>
						<Chip color="warning" variant='shadow'>
							{topic.slug}
						</Chip>
					</Link>
				</div>
			))
		}
		</div>
	);
};

export default TopicList;