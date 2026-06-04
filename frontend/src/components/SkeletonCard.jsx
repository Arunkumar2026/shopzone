
const SkeletonCard = () => {
  return (
    <div className="border rounded-lg p-4 shadow animate-pulse">
        <div className="h-48 bg-gray-300 rounded"></div>

        <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>

        <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>

        <div className="mt-4 h-10 bg-gray-300 rounded"></div>
    </div>
  )
}

export default SkeletonCard