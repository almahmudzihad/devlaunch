const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Frontend Developer",
    image: "/images/testimonials/user1.jpg",
    review:
      "DevLaunch completely changed my learning journey. The hands-on projects helped me land my first frontend developer job.",
  },
  {
    id: 2,
    name: "Rahim Hossain",
    role: "Full Stack Developer",
    image: "/images/testimonials/user2.jpg",
    review:
      "The instructors explain everything clearly. Building real-world applications gave me the confidence to attend interviews.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image: "/images/testimonials/user3.jpg",
    review:
      "The platform is easy to use, and the career support was amazing. I highly recommend DevLaunch to beginners.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            What Our Students Say
          </h2>

          <p className="mt-3 text-base-content/70">
            Hear from learners who transformed their careers with DevLaunch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-bold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-base-content/70">
                      {item.role}
                    </p>
                  </div>

                </div>

                <div className="mt-5 text-warning text-xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="mt-3 text-base-content/80 leading-7">
                  "{item.review}"
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}