import type { Database } from '@/database.types'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type TypeConstructionSite =
  Database['public']['Tables']['construction_site']['Row']

export default function ConstructionSiteItem(
  constructionSite: TypeConstructionSite
) {
  return (
    <div className="flex flex-col py-3 px-5  border-b">
      {/* 現場名 */}
      <div className="md:my-2 flex">
        <p className="text-lg border-black cursor-pointer">
          現場名:{constructionSite.name}
        </p>
      </div>
      {/* 監督 */}
      <div className="md:flex md:mb-2	">
        <p className="md:max-w-max mr-5 text-base">
          監督名:{constructionSite.director}
        </p>
        <p className="">監督の会社:{constructionSite.company}</p>
      </div>
      {/* 完了ステータス */}
      {/* 作業開始/終了日 編集*/}
      <div className="md:flex md:mb-2">
        <p className="max-w-max w-52 mr-3">
          作業開始日:{constructionSite.start_date}
        </p>
        <p className="w-52">作業終了日:{constructionSite.end_date}</p>
        <div className="flex md:mb-2">
          <p>完了:</p>
          {constructionSite.completed ? <p>完了</p> : <p>未完了</p>}
        </div>
        <div className="ml-auto text-blue-500">
          <Link
            key={constructionSite.id}
            href={`/construction-site/${constructionSite.id}`}
            className="flex cursor-pointer"
          >
            <PencilSquareIcon className="h-6 w-10 " />
            <p className="hover:bg-bray-100 inline-block ">編集 </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
