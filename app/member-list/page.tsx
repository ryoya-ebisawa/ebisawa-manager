import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import MemberItem from '../components/MemberItem'

export default async function MemberList() {
  const supabase = createServerComponentClient({ cookies })
  const { data: members } = await supabase.from('members').select('*')

  return (
    <div className='className="py-5 sm:px-6 lg:px-8'>
      <table className="min-w-full border-collapse block">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              名前
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              会社
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              作成日
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              編集
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {members?.map((member) => (
            <MemberItem key={member.id} {...member} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
