import { homeButtonTranslations } from "@/constants/translations";
import Button from "./Button";

export default async function HomeButtons({ params, className }: { params: Promise<{ lang: string }>, className: string }) {
  const { lang } = await params;

  const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

  console.log(lang)

  return (
    <div className={className}>
      <Button href="about-solartuff">{t.aboutSolartuff}</Button>
      <Button href="product-knowledge">{t.productKnowledge}</Button>
      <Button href="product-selection">{t.productSelection}</Button>
      <Button href="contact-us">{t.contactUs}</Button>
    </div>
  );
}
