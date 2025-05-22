const Footer = () => {
  return (
    <footer className="bg-[#f5f2e8] text-[#3a3835] text-center py-4 border-t border-[#a58b58]/40 mt-8 font-['Special_Elite']">
      <p className="text-sm">
        © {new Date().getFullYear()} Nexus News • All Rights Reserved
      </p>
      <p className="text-xs mt-1">
        Built by <span className="font-semibold">Suhas S</span> • 
        <a
          href="mailto:suhassunil2501@gmail.com"
          className="ml-1 underline hover:text-[#0f0f0f] transition"
        >
          suhassunil2501@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
