import "../styles/globals.css";
import { useRouter, Router } from "next/router";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("components/Header"));
const Footer = dynamic(() => import("components/Footer"), { ssr: false });
const SmoothScroll = dynamic(() => import("components/SmoothScroll"), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const { pathname } = useRouter();

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);

  const enter = (node) => {
    gsap.from(node, {
      duration: 1,
      autoAlpha: 0,
    });
  };

  const exit = (node) => {
    gsap.to(node, {
      duration: 1,
      autoAlpha: 0,
    });
  };

  return (
    <SwitchTransition>
      <Transition
        key={router.pathname}
        timeout={1000}
        in={false}
        onEnter={enter}
        onExit={exit}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <SmoothScroll>
          <Header />

          <Component {...pageProps} key={router.route} />

          {pathname === "/" ? (
            <Footer classes="home-footer grey-shadow-top" />
          ) : (
            <Footer />
          )}
        </SmoothScroll>
      </Transition>
    </SwitchTransition>
  );
}

export default MyApp;
