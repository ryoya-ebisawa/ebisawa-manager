import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ConstructionSiteItem from './ConstructionSiteItem'
import Link from 'next/link'

export default async function ConstructionSiteList() {
  const supabase = createServerComponentClient({ cookies })
  const { data: construction_site } = await supabase
    .from('construction_site')
    .select('*')
  return (
    <div>
      <Link href="/construction-site/create">
        <div className="sm:text-right text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 mt-1 mb-4 sm:mr-4 ml-4 rounded">
            現場を追加
          </button>
        </div>
      </Link>
      <div className="mx-3 border-t">
        {construction_site?.map((cs) => (
          <ConstructionSiteItem key={cs.id} {...cs} cla />
        ))}
      </div>
    </div>
  )
}
