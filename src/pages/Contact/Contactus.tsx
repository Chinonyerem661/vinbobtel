export default function ContactInfo() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#2d4a6b] font-semibold leading-relaxed mb-12">
          For more information about our solutions and how Vinbobtel can benefit
          your business, please visit our website or contact our sales team
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-[#0f1f3d] font-bold text-lg mb-2">Office Address</h3>
            <p className="text-[#2d4a6b]">
              Level 3, Ebene House, Hotel Avenue, 33 Cybercity,
              <br />
              Ebene, 72201 Mauritius.
            </p>
          </div>

          <div>
            <h3 className="text-[#0f1f3d] font-bold text-lg mb-2">Email</h3>
            <a
              href="mailto:contact@vinbobtel.com"
              className="text-[#2d4a6b] font-semibold hover:underline"
            >
              contact@vinbobtel.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}