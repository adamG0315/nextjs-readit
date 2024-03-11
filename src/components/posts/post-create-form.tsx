'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'
import FormButton from '../shared/form-buttom'

import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@nextui-org/react'

interface Props {
    slug: string
}

const PostCreateForm: React.FC<Props> = ({ slug }) => {
    const [formState, action] = useFormState(
        actions.createPost.bind(null, slug),
        {
            errors: {},
        },
    )
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create a Post</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg"> Create a post</h3>
                        <Input
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(', ')}
                        />
                        <Textarea
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="content"
                            isInvalid={!!formState.errors.content}
                            errorMessage={formState.errors.content?.join(', ')}
                        />
                        {formState.errors._form && (
                            <div className="rounded p-2 bg-red-200 border-red-400">
                                {formState.errors._form.join(', ')}
                            </div>
                        )}
                        <FormButton>Create Post</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}

export default PostCreateForm
