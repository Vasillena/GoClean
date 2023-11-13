export default function ThankYou() {
  return (
    <section
      className="thank-you"
      style={{
        background: "url(/images/thank-you.svg)",
        backgroundSize: "60% auto",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="thank-you-text">
        <h1>
          Thank you for reaching out to us! We appreciate your interest and
          value your inquiry. Our team will do our best to respond to your
          question as soon as possible.
        </h1>
      </div>
    </section>
  );
}
