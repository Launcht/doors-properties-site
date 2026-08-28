import { Link } from "react-router-dom";
import { useSeo } from "@/lib/seo";
import Wordmark from "@/components/doors/Wordmark";

/**
 * On-brand 404. The generic shadcn card that used to sit here rendered in the
 * default theme, so a visitor who mistyped a URL landed on a page that looked
 * like a different website. It also console.error'd on every hit.
 */
const NotFound = () => {
  useSeo({
    title: "Page not found | DOORS Properties",
    description: "That page does not exist.",
    noindex: true,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0908] px-6 text-center">
      <Link to="/" aria-label="DOORS home" className="mb-12">
        <Wordmark tone="gold" size="lg" />
      </Link>
      <p className="text-[#C9A961] text-[11px] tracking-[0.4em] uppercase mb-6">Not found</p>
      <h1 className="font-serif text-[#F8F6F3] text-4xl sm:text-5xl font-light leading-tight mb-6">
        This door does not open.
      </h1>
      <p className="text-[#F8F6F3]/70 font-light max-w-md mb-10 leading-relaxed">
        The page you were looking for is not here. It may have moved, or the address may
        have been mistyped.
      </p>
      <Link
        to="/"
        className="text-[11px] tracking-[0.25em] uppercase text-[#F8F6F3] border border-[#F8F6F3]/70 px-9 py-4 hover:bg-[#F8F6F3] hover:text-[#2C2C2C] transition-colors"
      >
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
