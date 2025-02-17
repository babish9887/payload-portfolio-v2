import payloadConfig from '@/payload.config'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

async function GetCVLink() {
  try {
    const payload = await getPayload({ config: payloadConfig })
    const cvlink = await payload.find({
      collection: 'cvlink',
      sort: 'createdAt',
    })
    console.log(cvlink.docs)
    if (!cvlink)
      return NextResponse.json({ success: false, message: 'Failed to send Email' }, { status: 400 })
    return NextResponse.json(
      { success: true, message: 'Got CV link Successfully', link: cvlink.docs },
      { status: 200 },
    )
  } catch (e: any) {
    console.log(e)
    return NextResponse.json({ success: true, message: 'Internal Server Error' }, { status: 500 })
  }
}

export { GetCVLink as GET, GetCVLink as POST }
