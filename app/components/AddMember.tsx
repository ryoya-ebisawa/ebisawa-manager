'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'
import supabase from '@/utils/supabase'

export default function AddMember() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }
  function onChangeCompany(e: React.ChangeEvent<HTMLInputElement>) {
    setCompany(e.target.value)
  }

  async function onSubmitAddMember(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(company)
    const { data, error } = await supabase
      .from('members')
      .insert([{ name: name, company: company }])
      .select()
    router.refresh()
    setName('')
    setCompany('')
  }

  return (
    <form onSubmit={onSubmitAddMember} className="w-full max-w-sm">
      {/* 名前 */}
      <div className="sm:flex sm:items-center mb-2 ">
        <div className="sm:ml-2">
          <label
            className="block text-gray-500 font-bold sm:text-right mb-1 sm:mb-0 pr-4 ml-2 sm:ml-0"
            htmlFor="inline-full-name"
          >
            名前
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded sm:w-full w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300 ml-2 sm:ml-0"
            id="inline-full-name"
            type="text"
            onChange={onChangeName}
            value={name}
            required
          />
        </div>
      </div>

      {/* 会社 */}
      <div className="sm:flex sm:items-center mb-2">
        <div className="sm:ml-2">
          <label
            className="block text-gray-500 font-bold sm:text-right mb-1 sm:mb-0 pr-4 ml-2 sm:ml-0"
            htmlFor="inline-company"
          >
            会社
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded sm:w-full w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300 ml-2 sm:ml-0"
            id="inline-company"
            onChange={onChangeCompany}
            type="text"
            value={company}
          />
        </div>
      </div>
      {/* ボタン */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6  ml-6 sm:ml-14 mt-2 mr-3 border border-blue-500 rounded"
        type="submit"
      >
        追加
      </button>
    </form>
  )
}
