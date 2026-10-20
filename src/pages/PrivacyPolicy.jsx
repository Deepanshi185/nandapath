import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      <Navbar />

      <section className="pt-28 pb-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="bg-sky-100 text-sky-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            NandaPath Adventures
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#142957]">
            Privacy Policy & Terms
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-[#142957]">1. Information We Collect</h2>
          <p>
            When you book a trek, make an enquiry, or subscribe to our updates at NandaPath Adventures, we collect personal information such as your name, contact phone number, email address, physical fitness details, and emergency contact details. This data is strictly required for issuing forest permits, arranging emergency support, and ensuring safe trail logistics.
          </p>

          <h2 className="text-lg font-bold text-[#142957] pt-2">2. How We Use Your Information</h2>
          <p>
            Your information is used solely to organize your trekking expedition, obtain necessary local authority clearances, provide medical assistance if needed during high-altitude treks, and communicate trip updates.
          </p>

          <h2 className="text-lg font-bold text-[#142957] pt-2">3. Data Security & Privacy</h2>
          <p>
            We adhere strictly to privacy principles. NandaPath Adventures never sells, rents, or trades your personal information to third parties or marketing agencies. Personal details are shared only with official forest department authorities where mandatory for permit issuance.
          </p>

          <h2 className="text-lg font-bold text-[#142957] pt-2">4. Medical & Emergency Declarations</h2>
          <p>
            For safety on high-altitude passes (such as Bali Pass, Pin Parvati, and Rupin Pass), trekkers must submit accurate medical information. This information remains confidential between the participant, trek leader, and certified medical response team.
          </p>

          <h2 className="text-lg font-bold text-[#142957] pt-2">5. Contact Us</h2>
          <p>
            If you have questions regarding our Privacy Policy or booking terms, contact us at:
            <br />
            <strong>Email:</strong> info@nandapathadventures.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
            <br />
            <strong>Location:</strong> Dehradun, Uttarakhand, India
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1d3b] text-slate-300 text-center py-8 text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} NandaPath Adventures. All rights reserved.</p>
      </footer>
    </main>
  );
}