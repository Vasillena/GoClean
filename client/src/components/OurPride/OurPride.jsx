export default function OurPride() {
  return (
    <section className="our-pride-section">
      <div className="our-pride-title">
        <h2>We Take Pride in Stories of Environmental Impact</h2>
      </div>
      <div className="our-pride-text">
        <div
          style={{
            background: "url(/images/bubble.png)",
            backgroundSize: "95% auto",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
          }}
          className="our-pride-paragraph"
        >
          <img src="./images/our-pride-1.jpg" alt="People" />
          <p>
            From Trash to Treasure: How a Community Transformed a Neglected Park
            into a Lush Oasis, Inspiring Unity and Pride.
          </p>
        </div>
        <div
          style={{
            background: "url(/images/bubble-2.png)",
            backgroundSize: "95% auto",
            backgroundPosition: "center 50%",
            backgroundRepeat: "no-repeat",
          }}
          className="our-pride-paragraph"
        >
          <img src="./images/our-pride-2.jpg" alt="Woman" />
          <p>
            Turning the Tide: Meet Jane, Who Led a Coastal Cleanup Movement,
            Mobilizing Volunteers to Restore Marine Ecosystems.
          </p>
        </div>
        <div
          style={{
            background: "url(/images/bubble-3.png)",
            backgroundSize: "95% auto",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
          }}
          className="our-pride-paragraph"
        >
          <img src="./images/our-pride-3.jpg" alt="Man" />
          <p>
            The Power of One: John&apos;s Journey of Adopting Zero Waste Lifestyle
            and Inspiring a Sustainable Movement in His City.
          </p>
        </div>
      </div>
    </section>
  );
}
