import {
  Code,
  Palette,
  Smartphone,
  Database,
  Brain,
  Shield,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Web Development",
    icon: Code,
    courses: "24 Courses",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: Palette,
    courses: "18 Courses",
  },
  {
    id: 3,
    title: "Mobile Development",
    icon: Smartphone,
    courses: "16 Courses",
  },
  {
    id: 4,
    title: "Backend Development",
    icon: Database,
    courses: "20 Courses",
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    icon: Brain,
    courses: "14 Courses",
  },
  {
    id: 6,
    title: "Cyber Security",
    icon: Shield,
    courses: "12 Courses",
  },
];

export default function Categories() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Browse Categories
          </h2>

          <p className="mt-3 text-base-content/70">
            Choose your favorite learning path and start your journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="card cursor-pointer bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="card-body items-center text-center">

                  <div className="rounded-full bg-primary/10 p-5">
                    <Icon
                      size={40}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {category.title}
                  </h3>

                  <p className="text-base-content/70">
                    {category.courses}
                  </p>

                  <button className="btn btn-primary btn-sm mt-4">
                    Explore
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}