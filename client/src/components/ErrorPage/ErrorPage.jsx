export default function ErrorPage() {
  return (
    <section
      className="error-page"
      style={{
        background: "url(/images/thank-you.svg)",
        backgroundSize: "60% auto",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="error-text">
        <h1>404</h1>
        <h1>
         The page you are looking for doesn't exist or another error occurred.
        </h1>
      </div>
    </section>
  );
}
