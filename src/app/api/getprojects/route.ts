import payloadConfig from '@/payload.config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

async function GetProjects() {
  try {
    const payload = await getPayload({ config: payloadConfig })
    const projects = await payload.find({
      collection: 'projects',
      sort: 'createdAt',
    })
    if (!projects)
      return NextResponse.json({ success: false, message: 'Failed to send Email' }, { status: 400 })
    return NextResponse.json(
      { success: true, message: 'Projects fetched Successfully', projects: projects },
      { status: 200 },
    )
  } catch (e: any) {
    console.log(e)
    return NextResponse.json({ success: true, message: 'Internal Server Error' }, { status: 500 })
  }
}

export { GetProjects as GET, GetProjects as POST }
