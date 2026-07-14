export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">

      <div className="grid gap-10 lg:grid-cols-2">

        <div className="skeleton h-[400px] rounded-xl"></div>

        <div className="space-y-5">

          <div className="skeleton h-10 w-2/3"></div>

          <div className="skeleton h-5 w-full"></div>

          <div className="skeleton h-5 w-4/5"></div>

          <div className="skeleton h-5 w-1/2"></div>

          <div className="skeleton h-12 w-40"></div>

        </div>

      </div>

    </main>
  );
}