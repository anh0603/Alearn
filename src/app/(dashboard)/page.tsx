import { CourseGrid } from '@/components/common'
import CourseItem from '@/components/course/CourseItem'
import Headiing from '@/components/typography/Headiing'
import createUser from '@/lib/action/user.action'
import React from 'react'

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    email_address: "ducanh2762003@gmail.com",
    username: "anhjun0603"
  })
  return (
     <div>
      <Headiing>Khám phá</Headiing>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
     </div>
  )
}

export default page