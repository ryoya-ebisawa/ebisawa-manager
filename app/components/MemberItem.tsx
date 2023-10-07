'use client'

import { useState } from 'react'
import type { Database } from '@/database.types'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import supabase from '@/utils/supabase'
import { TrashIcon } from '@heroicons/react/24/solid'

type Member = Database['public']['Tables']['members']['Row']

export default function MemberItem(member: Member) {
  const [name, setName] = useState(member.name)
  const [company, setCompany] = useState(member.company)
  const router = useRouter()

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }
  function onChangeCompany(e: React.ChangeEvent<HTMLInputElement>) {
    setCompany(e.target.value)
  }

  async function onClickSave(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (member.name != name && name != '') {
      const { error } = await supabase
        .from('members')
        .update({ name: name })
        .eq('id', member.id)
    } else {
      setName(member.name)
    }
    if (member.company != company) {
      const { error } = await supabase
        .from('members')
        .update({ company: company })
        .eq('id', member.id)
    }
    router.refresh()
  }
  async function deleteMember(id: string) {
    await supabase.from('members').delete().eq('id', id)
    router.refresh()
  }

  return (
    <>
      <tr className="bg-white border border-grey-500 text-gray-800 md:border-none block md:table-row ransition duration-500 ease-in-out hover:bg-gray-100">
        {/* 名前 */}
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span className="inline-block w-1/4 md:hidden font-bold">名前</span>
          <input
            className="bg-gray-50 appearance-none border border-gray-200 rounded  py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </td>

        {/* 会社 */}
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span className="inline-block w-1/4 md:hidden font-bold">会社</span>
          <input
            className="bg-gray-50 appearance-none border border-gray-200 rounded  py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
            type="text"
            value={company ? company : ''}
            onChange={onChangeCompany}
          />
        </td>

        {/* 作成日 */}
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span className="inline-block w-1/4 md:hidden font-bold">作成日</span>
          {format(new Date(member.created_at), 'yyyy/MM/dd')}
        </td>

        {/* 編集ボタン */}
        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
          <span className="inline-block w-1/4 md:hidden font-bold">編集</span>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 ml-1 mr-2 border border-blue-500 rounded"
            onClick={onClickSave}
          >
            Save
          </button>

          <TrashIcon
            className="h-8 w-10 cursor-pointer text-red-500 inline-block"
            onClick={(e) => deleteMember(member.id)}
          />
        </td>
      </tr>
    </>
  )
}
