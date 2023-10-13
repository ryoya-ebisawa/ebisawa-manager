'use client'

import { useForm } from 'react-hook-form'
import type { Database } from '@/database.types'

type TypeConstructionSite =
  Database['public']['Tables']['construction_site']['Row']

type TypeFormData = {
  id: string
  name: string | null
  director: string | null
  company: string | null
  address: string | null
  completed: boolean
  startDate: string
  endDate: string | null
}

export default function ConstructionSiteEditItem({
  constructionSite,
}: {
  constructionSite: TypeConstructionSite
}) {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<TypeFormData>({
    defaultValues: {
      id: constructionSite.id,
      name: constructionSite.name,
      director: constructionSite.director,
      company: constructionSite.company,
      address: constructionSite.address,
      completed: constructionSite.completed,
      startDate: constructionSite.start_date,
      endDate: constructionSite.end_date,
    },
  })

  const onSubmitConfirm = (data: TypeFormData) => {
    console.log(data)
  }

  return (
    <div className="mx-10 mt-5">
      <form onSubmit={handleSubmit(onSubmitConfirm)}>
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
            {...register('name', { required: '※入力必須です' })}
          />
          {errors.name?.message && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
        {/* 現場の住所 */}
        <div className="mb-3">
          <label
            htmlFor="address"
            className="block mb-2 font-medium text-gray-900 "
          >
            住所
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            {...register('address')}
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
              {...register('director')}
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
              {...register('company')}
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
              {...register('startDate', {
                required: '※入力必須です',
              })}
            />
            {errors.startDate?.message && (
              <p className="text-red-500">{errors.startDate.message}</p>
            )}
          </div>
          {/* 作業終了日 */}
          <div className="sm:mr-3 sm:w-1/2 mb-3">
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
              {...register('endDate')}
            />
          </div>
        </div>

        <div className="submit-button text-center">
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className="mt-3 py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600  w-full sm:w-1/5 h-12"
          >
            確定
          </button>
        </div>
      </form>
    </div>
  )
}
