import PageContent from "@/components/PageContent";
import { Phone, Clock, AtSign, ExternalLink } from "lucide-react";
import React from "react";

// --- Icons ---
const FacebookIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

// --- Reusable Sub-Components ---
interface ContactItemProps {
    icon: React.ReactNode;
    iconBgClass: string;
    label: string;
    children: React.ReactNode;
}

const ContactItem = ({ icon, iconBgClass, label, children }: ContactItemProps) => (
    <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${iconBgClass}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm">{label}</p>
            {children}
        </div>
    </div>
);

interface SocialLinkCardProps {
    href: string;
    icon: React.ReactNode;
    iconBgClass: string;
    name: string;
    handle: string;
}

const SocialLinkCard = ({ href, icon, iconBgClass, name, handle }: SocialLinkCardProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-5 bg-surface border border-border rounded-xl hover:bg-surface-hover transition-all"
    >
        <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${iconBgClass}`}>
            {icon}
        </div>
        <div>
            <p className="text-text font-semibold">{name}</p>
            <p className="text-xs text-text-muted">{handle}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-text-muted ml-auto" />
    </a>
);

// --- Translations ---
interface TranslationContent {
    header: string;
    helpDesk: string;
    description1: string;
    consultationTitle: string;
    consultationText: string;
    contactLabel: string;
    workingHours: string;
    days: string;
    holidays: string;
    cta: string;
    visitOffice: string;
    socialUser: string;
}

const translations: Record<"en" | "id", TranslationContent> = {
    en: {
        header: "Contact Us",
        helpDesk: "Help Desk Service",
        description1: "To provide additional comfort, our Help Desk is always available to assist with any technical issues or installation questions.",
        consultationTitle: "Free Consultation:",
        consultationText: "Our staff will gladly provide product explanations and pricing details at no additional cost before your purchase.",
        contactLabel: "Contact Us",
        workingHours: "Working Hours",
        days: "Mon - Sat (09:00 - 17:00)",
        holidays: "EXCEPT HOLIDAYS",
        cta: "Chat on WhatsApp",
        visitOffice: "Visit Our Office",
        socialUser: "@solartuff"
    },
    id: {
        header: "Hubungi Kami",
        helpDesk: "Layanan Help Desk",
        description1: "Untuk memberikan kenyamanan ekstra, Help Desk kami selalu siap membantu Anda dengan masalah teknis atau pertanyaan seputar pemasangan.",
        consultationTitle: "Konsultasi Gratis:",
        consultationText: "Staf kami dengan senang hati akan memberikan penjelasan produk dan rincian harga tanpa biaya tambahan sebelum Anda melakukan pembelian.",
        contactLabel: "Hubungi Kami",
        workingHours: "Jam Operasional",
        days: "Sen - Sab (09:00 - 17:00)",
        holidays: "KECUALI HARI LIBUR",
        cta: "Chat di WhatsApp",
        visitOffice: "Kunjungi Kantor Kami",
        socialUser: "@solartuff"
    }
};

export default async function ContactSupport({ params }: { params: Promise<{ lang: "en" | "id" }> }) {
    const { lang } = await params;
    const t = translations[lang];

    return (
        <PageContent header={t.header}>
            <section className="max-w-4xl mx-auto py-16 space-y-10 px-4">

                {/* Contact Info + CTA */}
                <div className="bg-surface border border-border rounded-2xl p-8 space-y-8 text-text">
                    {/* Vertical list of contacts */}
                    <div className="flex flex-col gap-6">
                        {/* Phone */}
                        <ContactItem
                            icon={<Phone className="w-6 h-6 text-success" />}
                            iconBgClass="bg-success-bg"
                            label={t.contactLabel}
                        >
                            <p className="text-lg font-semibold tracking-wide">+62 811 612 830</p>
                        </ContactItem>

                        {/* Working Hours */}
                        <ContactItem
                            icon={<Clock className="w-6 h-6 text-warning" />}
                            iconBgClass="bg-warning-bg"
                            label={t.workingHours}
                        >
                            <p className="text-lg font-semibold tracking-wide">{t.days}</p>
                            <p className="text-xs text-text-faint mt-1 italic">{t.holidays}</p>
                        </ContactItem>

                        {/* Email */}
                        <ContactItem
                            icon={<AtSign className="w-6 h-6 text-danger" />}
                            iconBgClass="bg-danger-bg"
                            label="Email"
                        >
                            <a
                                href="mailto:info@solartuff.co.id"
                                className="text-lg font-semibold tracking-wide hover:text-primary transition-colors"
                            >
                                info@solartuff.co.id
                            </a>
                        </ContactItem>
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.link/eoq498"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full p-4 bg-success-strong hover:bg-success text-text font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-success-shadow"
                    >
                        {t.cta}
                    </a>
                </div>

                {/* Map Embed */}
                <div className="rounded-2xl overflow-hidden border border-border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8435930551664!2d98.67040287563336!3d3.623192050054429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031321c2d6dcb97%3A0xe1c313e6f0ccb7a8!2sSolarTuff%20-%20Solar%20Water%20Heater%20(Pemanas%20Air%20Tenaga%20Matahari)!5e0!3m2!1sen!2sid!4v1788785409114!5m2!1sen!2sid"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="w-full"
                    />
                </div>

                {/* Help Desk Description */}
                <div className="bg-surface border border-border rounded-2xl p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-brand">{t.helpDesk}</h2>
                    <p className="text-text-secondary leading-relaxed">
                        {t.description1}
                    </p>
                    <p className="text-sm bg-info-bg border border-info-border p-4 rounded-xl text-info">
                        <strong>{t.consultationTitle}</strong> {t.consultationText}
                    </p>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SocialLinkCard
                        href="https://facebook.com/solartuff"
                        icon={<FacebookIcon className="w-6 h-6 text-social-blue" />}
                        iconBgClass="bg-social-blue-bg"
                        name="Facebook"
                        handle={t.socialUser}
                    />
                    <SocialLinkCard
                        href="https://www.instagram.com/solartuffindonesia"
                        icon={<InstagramIcon className="w-6 h-6 text-social-pink" />}
                        iconBgClass="bg-social-pink-bg"
                        name="Instagram"
                        handle={t.socialUser}
                    />
                </div>

            </section>
        </PageContent>
    );
}
