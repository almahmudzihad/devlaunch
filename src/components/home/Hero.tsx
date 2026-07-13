"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-base-200">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="hero-content flex-col-reverse gap-12 lg:flex-row">

          {/* Left Content */}
          <div className="flex-1">
            <span className="badge badge-primary mb-5">
              Learn • Build • Launch
            </span>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Launch Your
              <span className="text-primary"> Developer Career</span>
            </h1>

            <p className="mt-6 max-w-xl text-base-content/70">
              Master modern web development through practical courses,
              real-world projects, expert mentors, and career guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/explore"
                className="btn btn-primary"
              >
                Explore Courses
              </Link>

              <Link
                href="/register"
                className="btn btn-outline"
              >
                Get Started
              </Link>
            </div>

            <div className="mt-10 flex gap-10">
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  10K+
                </h2>
                <p className="text-sm opacity-70">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary">
                  120+
                </h2>
                <p className="text-sm opacity-70">
                  Courses
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary">
                  98%
                </h2>
                <p className="text-sm opacity-70">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <Image
                src="/images/hero.png"
                alt="Hero"
                width={700}
                height={600}
                className="w-full rounded-3xl"
                />
          </div>

        </div>
      </div>
    </section>
  );
}