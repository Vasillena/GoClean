export default function BackToTop() {

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

  return (
    <div className="back-to-top">
              <button className="back-to-top-button" onClick={toTop}>
           <img src="../../../public/images/angle-up-solid.svg" alt="arrow" />
            </button>
    </div>
  );
}
