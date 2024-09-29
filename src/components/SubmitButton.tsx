'use client'

import { LoaderCircle } from 'lucide-react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return pending ?
      <Button disabled className="flex w-fit gap-1 text-white">
        <LoaderCircle className="size-4 animate-spin" />
        <span>Loading...</span>
      </Button>
    : <Button type="submit" className="w-fit text-white">
        Save now
      </Button>
}

export default SubmitButton
