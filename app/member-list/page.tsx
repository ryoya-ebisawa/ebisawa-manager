import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function MemberList() {
  const supabase = createServerComponentClient({ cookies })
  const { data: members } = await supabase.from('members').select('*')

  return <ul className="my-6 mx-3">{members?.map((member) => member.name)}</ul>
}
