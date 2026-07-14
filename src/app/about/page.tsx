import Link from "next/link";

export const metadata = {
  title: "About | SCIC",
  description: "Learn more about SCIC.",
};

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-primary text-primary-content py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <h1 className="text-5xl font-bold">
            About DevLaunch
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg">
            DevLaunch is an online learning platform that helps students
            build practical skills through high-quality courses taught
            by experienced instructors.
          </p>

        </div>
      </section>

      {/* Mission */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Students Learning"
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Our mission is to make quality education accessible to
              everyone. We provide practical courses in programming,
              design, databases, and modern technologies to help
              learners succeed in their careers.
            </p>

          </div>

        </div>
      </section>

      {/* Why Choose */}

      <section className="bg-base-200 py-20">

        <div className="mx-auto max-w-7xl px-4">

          <h2 className="text-center text-4xl font-bold mb-12">
            Why Choose DevLaunch?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-bold">
                  Expert Mentors
                </h3>

                <p>
                  Learn from experienced industry professionals.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-bold">
                  Flexible Learning
                </h3>

                <p>
                  Learn anytime, anywhere at your own pace.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-bold">
                  Practical Projects
                </h3>

                <p>
                  Gain real-world experience through projects.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="text-xl font-bold">
                  Career Growth
                </h3>

                <p>
                  Build skills that help you get your dream job.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="py-20">

        <div className="mx-auto max-w-5xl px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Values
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We believe in continuous learning, innovation,
            collaboration, and empowering every learner with the
            knowledge and confidence needed to achieve their goals.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-20">

        <div className="mx-auto max-w-5xl px-4">

          <div className="hero bg-primary rounded-3xl text-primary-content">

            <div className="hero-content text-center py-16">

              <div>

                <h2 className="text-4xl font-bold">
                  Start Learning Today
                </h2>

                <p className="py-6">
                  Join thousands of learners and explore our
                  professional courses.
                </p>

                <Link
                  href="/explore"
                  className="btn btn-warning"
                >
                  Explore Courses
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}