import "./welcome.css";
import { useRef, useLayoutEffect } from "react";
import parallaxTiltEffect from "./parallaxTiltEffect";
import dragon from "./assets/dragon_animated.svg";
import { useHistory } from "react-router-dom";

export default function Welcome() {
  let history = useHistory();
  const ref_wrap1 = useRef(null);
  const ref_wrap2 = useRef(null);
  const ref_wrap3 = useRef(null);

  useLayoutEffect(() => {
    if (ref_wrap1.current && ref_wrap2.current && ref_wrap3.current) {
      const wrap1 = new parallaxTiltEffect({
        element: ref_wrap1.current,
        tiltEffect: "reverse",
      });

      const wrap2 = new parallaxTiltEffect({
        element: ref_wrap2.current,
        tiltEffect: "normal",
      });

      const wrap3 = new parallaxTiltEffect({
        element: ref_wrap3.current,
        tiltEffect: "reverse",
      });
    }
  }, []);

  return (
    <body className="welcome" id="welcome">
      <section>
        <h1>Algo Royale</h1>
      </section>
      <section class="main">
        <div class="wrap wrap--1" ref={ref_wrap1}>
          <div class="container container--1 container-inactive">
            <div class="container-inner">
              <p>Roulette</p>
            </div>
          </div>
        </div>

        <div
          class="wrap wrap--2"
          style={{ scale: "1.2" }}
          ref={ref_wrap2}
          onClick={() => history.push("./sicbo")}
        >
          <div class="container container--2">
            <div class="container-inner">
              <object type="image/svg+xml" data={dragon}></object>
            </div>
            <p style={{ paddingRight: "1rem" }}>Sic Bo</p>
          </div>
        </div>

        <div class="wrap wrap--3" ref={ref_wrap3}>
          <div class="container container--3 container-inactive">
            <div class="container-inner">
              <p>Blackjack</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>A product by XPact</p>
      </footer>
    </body>
  );
}
