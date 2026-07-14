export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  price: number;
  rating: number;
  duration: string;
  image: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete React Development",
    category: "Frontend",
    instructor: "John Smith",
    price: 49,
    rating: 4.8,
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    description: "Master React.js from beginner to advanced level."
  },

  {
    id: 2,
    title: "Node.js & Express",
    category: "Backend",
    instructor: "David Wilson",
    price: 59,
    rating: 4.7,
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    description: "Build scalable backend applications."
  },

  {
    id: 3,
    title: "UI UX Design",
    category: "Design",
    instructor: "Emma Watson",
    price: 39,
    rating: 4.6,
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    description: "Learn modern UI/UX design principles."
  },

  {
    id: 4,
    title: "TypeScript Masterclass",
    category: "Programming",
    instructor: "Michael Lee",
    price: 69,
    rating: 4.9,
    duration: "9 Weeks",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    description: "Become confident with TypeScript."
  },

  {
    id: 5,
    title: "Next.js Full Course",
    category: "Frontend",
    instructor: "Sarah Parker",
    price: 79,
    rating: 4.9,
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    description: "Build production-ready applications using Next.js."
  },

  {
    id: 6,
    title: "MongoDB Bootcamp",
    category: "Database",
    instructor: "Alex Brown",
    price: 45,
    rating: 4.7,
    duration: "7 Weeks",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
    description: "Learn MongoDB from scratch."
  },

  {
    id: 7,
    title: "Python for Beginners",
    category: "Programming",
    instructor: "Robert King",
    price: 35,
    rating: 4.5,
    duration: "5 Weeks",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
    description: "Start programming with Python."
  },

  {
    id: 8,
    title: "Advanced JavaScript",
    category: "Programming",
    instructor: "Sophia Adams",
    price: 55,
    rating: 4.8,
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    description: "Deep dive into modern JavaScript."
  },
  
{
  id: 9,
  title: "Vue.js Essentials",
  category: "Frontend",
  instructor: "Daniel Carter",
  price: 42,
  rating: 4.6,
  duration: "6 Weeks",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  description: "Learn Vue.js fundamentals and build interactive web applications."
},
{
  id: 10,
  title: "Laravel From Scratch",
  category: "Backend",
  instructor: "Olivia Brown",
  price: 62,
  rating: 4.7,
  duration: "9 Weeks",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
  description: "Build secure and scalable web applications with Laravel."
},
{
  id: 11,
  title: "Figma UI Design",
  category: "Design",
  instructor: "Sophia Green",
  price: 30,
  rating: 4.5,
  duration: "5 Weeks",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
  description: "Design beautiful user interfaces using Figma."
},
{
  id: 12,
  title: "Java Programming",
  category: "Programming",
  instructor: "Chris Martin",
  price: 50,
  rating: 4.7,
  duration: "8 Weeks",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
  description: "Master Java programming from beginner to advanced."
},
{
  id: 13,
  title: "Next.js Advanced",
  category: "Frontend",
  instructor: "Emily White",
  price: 89,
  rating: 4.9,
  duration: "10 Weeks",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
  description: "Advanced techniques for building scalable Next.js applications."
},
{
  id: 14,
  title: "SQL Database Mastery",
  category: "Database",
  instructor: "James Wilson",
  price: 40,
  rating: 4.6,
  duration: "7 Weeks",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  description: "Learn SQL queries, joins, indexing, and database optimization."
},
{
  id: 15,
  title: "Python Automation",
  category: "Programming",
  instructor: "William Scott",
  price: 48,
  rating: 4.8,
  duration: "6 Weeks",
  image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
  description: "Automate repetitive tasks using Python scripts."
},
{
  id: 16,
  title: "Modern JavaScript ES2025",
  category: "Programming",
  instructor: "Lucas Anderson",
  price: 57,
  rating: 4.9,
  duration: "8 Weeks",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
  description: "Master the latest JavaScript features and best practices."
}

];