const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web",
    level: "Beginner",
    duration: "12 Weeks",
    students: "2.5K+",
    image: "/images/course1.jpg",
  },
  {
    id: 2,
    title: "React & Next.js",
    category: "Frontend",
    level: "Intermediate",
    duration: "8 Weeks",
    students: "1.8K+",
    image: "/images/course2.jpg",
  },
  {
    id: 3,
    title: "Node.js API Development",
    category: "Backend",
    level: "Intermediate",
    duration: "10 Weeks",
    students: "1.2K+",
    image: "/images/course3.jpg",
  },
  {
    id: 4,
    title: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    duration: "6 Weeks",
    students: "950+",
    image: "/images/course4.jpg",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-base-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Courses</h2>
          <p className="mt-3 text-base-content/70">
            Explore our most popular courses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <div className="badge badge-primary">
                  {course.category}
                </div>

                <h2 className="card-title">{course.title}</h2>

                <div className="text-sm opacity-70">
                  {course.level} • {course.duration}
                </div>

                <p>{course.students} Students</p>

                <button className="btn btn-primary mt-3">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}