export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="space-y-6">

        <div className="skeleton h-10 w-72"></div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow border"
            >
              <div className="skeleton h-48 w-full"></div>

              <div className="card-body space-y-3">

                <div className="skeleton h-5 w-3/4"></div>

                <div className="skeleton h-4 w-full"></div>

                <div className="skeleton h-4 w-1/2"></div>

                <div className="skeleton h-10 w-full"></div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}