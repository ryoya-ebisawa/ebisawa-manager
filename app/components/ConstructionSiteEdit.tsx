'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { Database } from '@/database.types'

type TypeConstructionSite =
  Database['public']['Tables']['construction_site']['Row']

type TypeFormData = {
  id: string
  name: string | null
  director: string | null
  company: string
  completed: boolean
  startDate: string
  endDate: string | null
}

const ConstructionSiteEdit = ({
  constructionSite,
}: {
  constructionSite: TypeConstructionSite
}) => {
  const [formData, setFormData] = useState<TypeFormData>({
    id: constructionSite.id,
    name: constructionSite.name,
    director: constructionSite.director,
    company: constructionSite.company,
    completed: constructionSite.completed,
    startDate: constructionSite.start_date,
    endDate: constructionSite.end_date,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="mx-10 mt-5">
      <form onSubmit={() => console.log('submit')}>
        {/* 現場名 */}
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-900 "
          >
            現場名
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            value={formData.name ? formData.name : ''}
            onChange={handleChange}
          />
        </div>
        {/* 監督名の情報 */}
        <div className="sm:flex mb-3">
          {/* 監督の名前 */}
          <div className="mb-3 sm:mr-3 sm:w-1/2">
            <label
              htmlFor="director"
              className="block mb-2 font-medium text-gray-900 "
            >
              監督名
            </label>
            <input
              type="text"
              id="director"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              value={formData.director ? formData.director : ''}
            />
          </div>
          {/* 監督の会社 */}
          <div className="sm:w-1/2">
            <label
              htmlFor="company"
              className="block mb-2 font-medium text-gray-900 "
            >
              監督の会社
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              value={formData.company ? formData.company : ''}
            />
          </div>
        </div>
        {/* 作業開始 / 終了 */}
        <div className="sm:flex mb-3">
          {/* 作業開始日 */}
          <div className="sm:mr-3 sm:w-1/2 mb-3">
            <label
              htmlFor="start"
              className="block mb-2 font-medium text-gray-900 "
            >
              作業開始日
            </label>
            <input
              type="text"
              id="start"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              value={formData.startDate}
            />
          </div>
          {/* 作業終了日 */}
          <div className="sm:mr-3 sm:w-1/2">
            <label
              htmlFor="end"
              className="block mb-2 font-medium text-gray-900 "
            >
              作業終了日
            </label>
            <input
              type="text"
              id="end"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              value={formData.endDate ? formData.endDate : ''}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
export default ConstructionSiteEdit
