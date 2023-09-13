export default function MemberAdd() {
  return (
    <form className="w-full max-w-sm ">
      <div className="sm:flex sm:items-center mb-2">
        <div className="sm:ml-2">
          <label
            className="block text-gray-500 font-bold sm:text-right mb-1 sm:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            名前
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
          />
        </div>
      </div>
    </form>
  )
}
