import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Categories />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
    </>
  );
}