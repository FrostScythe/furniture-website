const NewsLetter = () => {
  return (
    <section className="bg-[#fdfcfa] py-20 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">
        Join Our Newsletter
      </h2>
      <p className="text-base text-[#4a4a4a] mb-8">
        Stay updated on the latest trends, exclusive offers, and new arrivals.
      </p>
      <button
        className="bg-[#e7cbbd] text-[#121212] font-semibold py-2 px-6 rounded-full hover:bg-[#e3c0b0] transition"
        aria-label="Subscribe to newsletter"
      >
        Subscribe
      </button>
    </section>
  );
};

export default NewsLetter;