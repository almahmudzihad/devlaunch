import {
  Award,
  BriefcaseBusiness,
  BookOpen,
  Users,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert Mentors",
    description:
      "Learn from experienced industry professionals with real-world expertise.",
    icon: Award,
  },
  {
    id: 2,
    title: "Real Projects",
    description:
      "Build practical projects that strengthen your portfolio and resume.",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "Career Support",
    description:
      "Receive interview preparation, CV reviews, and career guidance.",
    icon: Users,
  },
  {
    id: 4,
    title: "Lifetime Access",
    description:
      "Access all purchased courses anytime and learn at your own pace.",
    icon: BookOpen,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-base-100">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose DevLaunch?
          </h2>

          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            We provide everything you need to become a professional
            developer—from structured learning to career support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="card-body text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-content">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-base-content/70">
                    {feature.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}