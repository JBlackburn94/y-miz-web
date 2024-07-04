import Card from "./Card";

export default function CardSection() {
  return (
    <section className="h-screen flex gap-[131px]">
      <Card title="Latest Music" cardFooterText="Other" path="#" />
      <Card title="Merch" path="#" />
      <Card title="Social Media" path="#" />
    </section>
  );
}
