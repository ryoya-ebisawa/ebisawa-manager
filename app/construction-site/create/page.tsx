'use client'

import { useForm, Controller } from 'react-hook-form'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { format, isValid, parse } from 'date-fns'

const isValidDate = (dateString: string): boolean => {
  // yyyymmdd形式の文字列を正規表現でチェック
  const dateRegex = /^\d{8}$/
  if (!dateRegex.test(dateString)) {
    // 数字以外であればエラー
    return false
  }
  // date-fnsで日付の妥当性を確認
  const parsedDate = parse(dateString, 'yyyyMMdd', new Date())
  return isValid(parsedDate)
}

type TypeFormData = {
  id: string
  name: string
  director: string | null
  company: string | null
  address: string | null
  completed: boolean
  startDate: string
  endDate: string | null
}

// 工事現場を新規登録
export default function Create() {
  // useFormの初期設定
  const today = new Date()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TypeFormData>({
    defaultValues: {
      startDate: format(new Date(today), 'yyyyMMdd'),
    },
  })

  const router = useRouter()
  //新規登録　フォームの情報をsupabaseへ
  async function createConfirm(formdata: TypeFormData) {
    const {} = await supabase
      .from('construction_site')
      .insert([{ name: formdata.name, start_date: formdata.startDate }])
      .select()
    router.push('/construction-site')
  }

  return (
    <div className="mx-10 mt-5">
      <p className="text-lg  sm:text-2xl font-bold text-center mb-1 text-indigo-800">
        🔨新規現場登録🔨
      </p>
      <form onSubmit={handleSubmit(createConfirm)}>
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
        <div className="mb-3">
          {/* 作業開始日 */}
          <div className="sm:mr-3 sm:w-1/2 mb-3">
            <label
              htmlFor="start"
              className="block mb-2 font-medium text-gray-900 "
            >
              作業開始日
            </label>
            <Controller
              control={control}
              name="startDate"
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  placeholder="yyyymmdd"
                />
              )}
              rules={{
                required: '日付は必須です',
                maxLength: {
                  value: 8,
                  message: '8桁で入力してください',
                },
                validate: {
                  isValidDate: (value) =>
                    isValidDate(value) || '正しい日付を入力してください',
                },
              }}
            />

            {errors.startDate && (
              <p className="text-red-500">{errors.startDate.message}</p>
            )}
          </div>
        </div>

        <div className="submit-button text-center">
          <button
            type="submit"
            className="mt-3 py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600  w-full sm:w-1/5 h-12"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  )
}
