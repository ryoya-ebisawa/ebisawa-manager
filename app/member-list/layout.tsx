import AddMember from '../components/AddMember'

export default async function MemberListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="py-5 sm:px-6 lg:px-8">
        <AddMember />
      </div>
      {children}
    </div>
  )
}
