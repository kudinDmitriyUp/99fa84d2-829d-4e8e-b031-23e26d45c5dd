"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Ristorante Eleganza"
          button={{
            text: "Reserve Table",
            href: "https://opentable.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="RISTORANTE ELEGANZA"
          description="Experience authentic Italian cuisine in the heart of Los Angeles, where tradition meets luxury dining"
          buttons={[
            {
              text: "Reserve Now",
              href: "https://opentable.com"
            },
            {
              text: "View Menu",
              href: "menu"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477521355-pkuo3pb2.jpg",
              imageAlt: "Elegant dining room with Italian decor"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477522405-q0m312hz.jpg",
              imageAlt: "Italian chef preparing fresh pasta"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477523522-pfmcyzcp.jpg",
              imageAlt: "Beautiful Italian food presentation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477524360-mm52vk56.jpg",
              imageAlt: "Wine cellar with premium Italian wines"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477524870-wg1lf8i8.jpg",
              imageAlt: "Romantic terrace dining experience"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Heritage"
          description="At Ristorante Eleganza, we honor four generations of Italian culinary tradition, bringing authentic recipes from Tuscany to Los Angeles with the finest imported ingredients and time-honored techniques that celebrate the soul of Italian gastronomy."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Culinary Excellence"
          description="Discover what makes our Italian dining experience truly exceptional"
          tag="Specialties"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Handcrafted Pasta",
              description: "Fresh pasta made daily using traditional Italian techniques and imported Tipo 00 flour",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477526612-efdne9wp.jpg",
              imageAlt: "Fresh handmade pasta being prepared"
            },
            {
              id: 2,
              title: "Curated Wine Selection",
              description: "Over 300 premium Italian wines from renowned vineyards across Italy's finest regions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477527149-ol0m6qmn.jpg",
              imageAlt: "Premium Italian wine collection"
            },
            {
              id: 3,
              title: "Wood-Fired Excellence",
              description: "Authentic Neapolitan pizza cooked in our imported Italian wood-fired oven",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477528233-23g3fd24.jpg",
              imageAlt: "Wood-fired pizza oven in action"
            },
            {
              id: 4,
              title: "Artisan Desserts",
              description: "Traditional Italian dolci crafted by our pastry chef using family recipes",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477528938-8u672427.jpg",
              imageAlt: "Italian desserts artfully presented"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Experience the warmth of Italian hospitality through our guests' stories"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sofia Martinez",
              role: "Food Critic, LA Times",
              testimonial: "Ristorante Eleganza transports you to Italy with every bite. The pasta is extraordinary and the service impeccable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477529470-7mr2uvn4.jpg",
              imageAlt: "Sofia Martinez dining at the restaurant"
            },
            {
              id: "2",
              name: "Alessandro Romano",
              role: "Executive Chef, Beverly Hills",
              testimonial: "As a fellow Italian chef, I can attest that this is the most authentic Italian cuisine in Los Angeles. Magnificent!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477530154-j0cun7hn.jpg",
              imageAlt: "Alessandro Romano enjoying his meal"
            },
            {
              id: "3",
              name: "Catherine Thompson",
              role: "Wine Sommelier",
              testimonial: "The wine pairing here is exceptional. Their cellar rivals the finest restaurants in Tuscany.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477531901-6zk6tqwe.jpg",
              imageAlt: "Catherine Thompson with wine selection"
            },
            {
              id: "4",
              name: "Marco Benedetti",
              role: "Italian Cultural Ambassador",
              testimonial: "This restaurant captures the essence of Italian dining culture. It feels like home in the heart of LA.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477532579-m2b18011.jpg",
              imageAlt: "Marco Benedetti at dinner table"
            },
            {
              id: "5",
              name: "Jennifer Park",
              role: "Lifestyle Blogger",
              testimonial: "The most romantic dining experience in Los Angeles. Perfect for special celebrations and intimate dinners.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477533226-47499ruc.jpg",
              imageAlt: "Jennifer Park romantic dinner setting"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Recognized Excellence"
          description="Featured and acclaimed by the most prestigious culinary publications and platforms"
          tag="Awards"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477533897-k4q5qzsa.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477534585-lso4un10.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477535105-77q1m8qm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477535822-zdg67zs2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477536569-yugiym7o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477537178-0jzcuoh0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477537854-0h5rnf4p.jpg"
          ]
          showCard={true}
          speed={35}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Dining Experiences"
          description="Choose from our carefully curated dining options for every occasion"
          tag="Menu"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "lunch",
              price: "$45",
              name: "Pranzo Lunch",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "https://opentable.com"
                },
                {
                  text: "View Menu",
                  href: "menu"
                }
              ],
              features: [
                "Three-course Italian lunch",
                "Complimentary bread & olive oil",
                "Choice of pasta or risotto",
                "Dessert & espresso included"
              ]
            },
            {
              id: "dinner",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$85",
              name: "Cena Dinner",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "https://opentable.com"
                },
                {
                  text: "View Menu",
                  href: "menu"
                }
              ],
              features: [
                "Five-course Italian dinner",
                "Antipasti & wine pairing",
                "Choice of meat or seafood",
                "Traditional Italian dessert",
                "Limoncello digestif"
              ]
            },
            {
              id: "degustazione",
              price: "$150",
              name: "Chef's Tasting",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "https://opentable.com"
                },
                {
                  text: "Learn More",
                  href: "tasting"
                }
              ],
              features: [
                "Eight-course tasting menu",
                "Wine pairing with each course",
                "Seasonal Italian ingredients",
                "Chef's special preparations",
                "Exclusive dining experience"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Join Our Famiglia"
          description="Subscribe to receive exclusive offers, seasonal menu updates, and invitations to special culinary events"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763477525732-bfkg3lo4.jpg"
          imageAlt="Italian family cooking tradition"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Ristorante Eleganza. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Ristorante Eleganza"
          copyrightText="© 2025 Ristorante Eleganza | All Rights Reserved"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Menu", href: "menu" },
                { label: "Wine List", href: "wines" },
                { label: "Private Dining", href: "private" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Reservations", href: "https://opentable.com" },
                { label: "Catering", href: "catering" },
                { label: "Events", href: "events" },
                { label: "Gift Cards", href: "gifts" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "Address", href: "contact" },
                { label: "Parking", href: "parking" },
                { label: "Directions", href: "directions" },
                { label: "Hours", href: "hours" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone", href: "tel:+1234567890" },
                { label: "Email", href: "mailto:info@ristoranteeleganza.com" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Instagram",
              href: "https://instagram.com/ristoranteeleganza",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: "Facebook",
              href: "https://facebook.com/ristoranteeleganza",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: "Twitter",
              href: "https://twitter.com/ristoranteeleganza",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}