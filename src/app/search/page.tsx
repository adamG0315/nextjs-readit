import PostList from '@/components/posts/post-list'
import { fetchPostsBySearchTerm } from '@/db/queries/posts'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props {
    searchParams: {
        term: string
    }
}

const SearchPage: React.FC<Props> = async ({ searchParams }) => {
    const { term } = searchParams

    if (!term) {
        redirect('/')
    }

    return (
        <div>
            <h1>Results</h1>
            <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
        </div>
    )
}

export default SearchPage
