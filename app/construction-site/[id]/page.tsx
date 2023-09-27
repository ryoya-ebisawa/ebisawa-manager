import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/database.types'

type typePageProps = {
  params: { id: string }
}

type TypeConstructionSite =
  Database['public']['Tables']['construction_site']['Row']

export default async function ConstructionSiteEdit({ params }: typePageProps) {
  const supabase = createServerComponentClient({ cookies })
  const { data: construction_site, error } = await supabase
    .from('construction_site')
    .select('*')
    .eq('id', params.id)
}
