import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ConstructionSiteEditItem from '@/app/components/ConstructionSiteEdit'

type typePageProps = {
  params: { id: string }
}

export default async function ConstructionSiteEdit({ params }: typePageProps) {
  const supabase = createServerComponentClient({ cookies })
  const { data: constructionSite } = await supabase
    .from('construction_site')
    .select('*')
    .eq('id', params.id)
    .single()

  return <ConstructionSiteEditItem constructionSite={constructionSite} />
}
