import Button from "@elements/Button/widgets/Default";
export default function FallbackSection() {
  return <section className="section-wrap section-block">
    <p className="eyebrow">404 / PAGE NOT FOUND</p>
    <h1>Nothing here just yet.</h1>
    <p>The page you’re looking for doesn’t exist.</p>
    <Button href="/">Back to home ↗</Button>
  </section>;
}
