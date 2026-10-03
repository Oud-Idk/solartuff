import { homeButtonTranslations } from "@/constants/translations";
import Button from "./Button";

export default async function HomeButtons({ params, className }: { params: Promise<{ lang: string }>, className: string }) {
  const { lang } = await params;

  const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

  return (
    <div className={className}>
      <Button href="about-solartuff" className="hero-rise hero-step-4">{t.aboutSolartuff}</Button>
      <Button href="product-knowledge" className="hero-rise hero-step-5">{t.productKnowledge}</Button>
      <Button href="product-selection" className="hero-rise hero-step-6">{t.productSelection}</Button>
      <Button href="contact-us" className="hero-rise hero-step-7">{t.contactUs}</Button>
    </div>
  );
}
