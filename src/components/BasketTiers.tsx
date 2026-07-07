import { useEffect, useRef } from "react";
import "../styles/baskettiers.css";
import { Home, Sparkles, Building2 } from "lucide-react";

/* ── Scroll-reveal hook ── */
const useReveal = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
};

interface TierProps {
  icon: React.ReactNode;
  name: string;
  audience: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

const Tier = ({ icon, name, audience, description, delay, isLast }: TierProps) => {
  const ref = useReveal(delay);
  return (
    <div className={`nb-bt__tier reveal ${isLast ? "nb-bt__tier--last" : ""}`} ref={ref}>
      <div className="nb-bt__tier-icon">{icon}</div>
      <div className="nb-bt__tier-rule" />
      <div className="nb-bt__tier-name">{name}</div>
      <div className="nb-bt__tier-audience">{audience}</div>
      <p className="nb-bt__tier-desc">{description}</p>
      <button className="nb-bt__tier-btn">Enquire About This Basket</button>
    </div>
  );
};

const BasketTiers = () => {
  const headerRef = useReveal(0);

  return (
    <section className="nb-bt">

      {/* ── Left editorial column ── */}
      <div className="nb-bt__left reveal" ref={headerRef}>
        <div className="nb-bt__texture" aria-hidden="true" />

        <div className="nb-bt__left-inner">
          <span className="nb-bt__eyebrow">
            <span className="nb-bt__eyebrow-line" />
            Basket Subscriptions
          </span>

          <h2 className="nb-bt__heading">
            A basket<br />
            for every<br />
            <em>table.</em>
          </h2>

          <p className="nb-bt__statement">
            Whether you're a family, a hospital kitchen, or a corporate office —
            there's a subscription built around indigenous, farm-fresh produce
            for you.
          </p>

          <div className="nb-bt__divider" />

          <p className="nb-bt__footnote">
            Delivered weekly, fortnightly, or monthly — whichever rhythm suits you.
          </p>
        </div>
      </div>

      {/* ── Right tiers column ── */}
      <div className="nb-bt__right">

        <Tier
          icon={<Home size={30} strokeWidth={1.5} />}
          name="Household Basket"
          audience="For families and homes"
          description="Fresh indigenous vegetables, fruits, herbs, and root crops sized for everyday family cooking — sourced directly from trained smallholder farmers."
          delay={100}
        />

        <Tier
          icon={<Sparkles size={30} strokeWidth={1.5} />}
          name="Premium Basket"
          audience="For elevated everyday eating"
          description="An expanded selection featuring dried vegetables, indigenous flours, spice blends, and seasonal specialty produce for households who want more variety."
          delay={200}
        />

        <Tier
          icon={<Building2 size={30} strokeWidth={1.5} />}
          name="Institutional Basket"
          audience="Hospitals, schools, hotels & corporate offices"
          description="Bulk-volume baskets built for universities, hospitals, hotels, restaurants, corporate offices, and correctional facilities — consistent supply, consistent quality."
          delay={300}
          isLast
        />

      </div>

    </section>
  );
};

export default BasketTiers;