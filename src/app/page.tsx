import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <Container className="py-20">
      <SectionTitle
        title="Welcome to DevLaunch"
        subtitle="Learn modern technologies and build your career."
      />

      <div className="flex gap-4 justify-center mb-10">
        <Button>Primary Button</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>

      <Card className="p-8">
        <h3 className="text-xl font-bold">
          Reusable Card Component
        </h3>

        <p className="mt-2 text-gray-600">
          This card will be reused across the project.
        </p>
      </Card>
    </Container>
  );
}
