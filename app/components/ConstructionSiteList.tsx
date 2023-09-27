import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ConstructionSiteItem from './ConstructionSiteItem'

const ConstructionSiteList = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: construction_site } = await supabase
    .from('construction_site')
    .select('*')
  return (
    <div>
      <div className="mx-3 border-t">
        {construction_site?.map((cs) => (
          <ConstructionSiteItem key={cs.id} {...cs} cla />
        ))}
      </div>
    </div>
  )
}

export default ConstructionSiteList
