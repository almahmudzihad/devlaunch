import { Course, courses } from "@/data/courses";

const STORAGE_KEY = "courses";

export const getCourses = (): Course[] => {
  if (typeof window === "undefined") return courses;

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    return courses;
  }

  return JSON.parse(stored);
};

export const saveCourses = (data: Course[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addCourse = (course: Course) => {
  const data = getCourses();
  data.push(course);
  saveCourses(data);
};
export const deleteCourse = (id: number) => {
  const data = getCourses().filter((course) => course.id !== id);
  saveCourses(data);
};