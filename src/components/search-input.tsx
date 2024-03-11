'use client'
import { Input } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import * as actions from '@/actions'

interface Props {}

const SearchInput: React.FC<Props> = ({}) => {
    const searchParams = useSearchParams()
    return (
        <form action={actions.search}>
            <Input name="term" defaultValue={searchParams.get('term') || ''} />
        </form>
    )
}

export default SearchInput
