"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getCourses } from "@/lib/courseStorage";
import type { Course } from "@/data/courses";

export default function FeaturedCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const allCourses = getCourses();

    // Highest rated 4 courses
    const featured = [...allCourses]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

    setCourses(featured);
  }, []);

  return (
    <section className="py-20 bg-base-100">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Courses
          </h2>

          <p className="mt-3 text-base-content/70">
            Explore our most popular courses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="card bg-base-100 shadow-xl border"
            >
              <figure>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">

                <div className="badge badge-primary">
                  {course.category}
                </div>

                <h2 className="card-title">
                  {course.title}
                </h2>

                <p className="text-sm text-base-content/70">
                  Instructor: {course.instructor}
                </p>

                <p>
                  ⏱ {course.duration}
                </p>

                <p>
                  ⭐ {course.rating}
                </p>

                <p className="font-semibold text-primary">
                  ${course.price}
                </p>

                <Link
                  href={`/explore/${course.id}`}
                  className="btn btn-primary mt-3"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/explore"
          className="btn btn-primary btn-wide"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
}