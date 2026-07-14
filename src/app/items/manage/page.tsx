"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Course } from "@/data/courses";
import {
  deleteCourse,
  getCourses,
} from "@/lib/courseStorage";
import AdminRoute from "@/components/auth/AdminRoute";

export default function ManageCoursePage() {
  const [courseList, setCourseList] = useState<Course[]>([]);

  useEffect(() => {
    setCourseList(getCourses());
  }, []);

  const handleDelete = (id: number) => {
    deleteCourse(id);

    setCourseList(getCourses());

    toast.success("Course Deleted Successfully");
  };

  return (
    <AdminRoute>
      <main className="mx-auto max-w-7xl px-4 py-12">

        <h1 className="text-3xl font-bold mb-8">
          Manage Courses
        </h1>

        {courseList.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No Course Found
            </h2>
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="table table-zebra">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Instructor</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {courseList.map((course, index) => (
                  <tr key={course.id}>

                    <td>{index + 1}</td>

                    <td>{course.title}</td>

                    <td>{course.category}</td>

                    <td>{course.instructor}</td>

                    <td>${course.price}</td>

                    <td>{course.rating}</td>

                    <td>

                      <button
                        onClick={() =>
                          handleDelete(course.id)
                        }
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </main>
    </AdminRoute>
  );
}