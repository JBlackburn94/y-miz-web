import Card from "./Card";

export default function CardSection() {
  return (
    <section className="h-screen flex items-center justify-center gap-[131px] md:gap-[40px] flex-col lg:flex-row">
      <Card title="Latest Music" cardFooterText="Other" path="#" />
      <Card title="Merch" path="#" />
      <Card title="Social Media" path="#" />
    </section>
  );
}
