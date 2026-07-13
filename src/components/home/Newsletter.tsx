export default function Newsletter() {
  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">

        <h2 className="text-4xl font-bold">
          Stay Updated with DevLaunch
        </h2>

        <p className="mt-4 text-lg opacity-90">
          Get the latest courses, programming tips, and career opportunities
          directly in your inbox.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-md text-black"
          />

          <button className="btn btn-secondary">
            Subscribe
          </button>

        </div>

        <p className="mt-4 text-sm opacity-80">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}