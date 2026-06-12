// Généré par framer-port.mjs — port FIDÈLE du SSR Framer (ne pas reconstruire, brancher Payload sur les noeuds de contenu).
// Styles exacts : importer "framer.css" une seule fois (layout global).
import './framer.css';
import { PriceCard } from './PriceCard'
import { MENSUEL, COURTES } from './formules'

export default function Tarifs() {
  return (
    <>
      <div id={"main"}>
        <div className={"framer-9MYi8 framer-13v9dm1"} data-layout-template={"true"} style={{ minHeight: "100vh", width: "auto" }}>
          <div className={"framer-lRBlC framer-gbuwA framer-fN9WN framer-11tggmt"} style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
            <div className={"framer-hz0dba-container"}>
              <div className={"ssr-variant hidden-1rkk712 hidden-16q1mfx"}>
                <nav className={"framer-dN4YR framer-X8adU framer-SgNSh framer-DiAdc framer-12z1cd1 framer-v-12nfnzz"} data-framer-name={"Desktop Dark"} style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                  <div className={"framer-171f0ex"} data-framer-name={"Content Wrapper With BG"} style={{ backdropFilter: "none", backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", WebkitBackdropFilter: "none", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                    <div className={"framer-rpv4hj"} data-framer-name={"Base Container"}>
                      <div className={"framer-1l6gsd6"} data-framer-name={"Mobile Menu Wrapp"}>
                        <div className={"framer-1jlunes-container"}>
                          <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Logo Company"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </a>
                        </div>
                      </div>
                      <nav className={"framer-k1prli"} data-framer-name={"Nav Links Wrapper"}>
                        <div className={"framer-czv41b"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/"}>
                              Accueil
                            </a>
                          </p>
                        </div>
                        <div className={"framer-ncrdxr"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Nos espaces
                            </a>
                          </p><div data-bg-submenu="true"><a href="/espaces/cours-collectifs">Cours collectifs</a><a href="/espaces/fonctionnel">Entraînement fonctionnel</a><a href="/espaces/cross-cardio">Cross / Cardio</a></div>
                        </div>
                        <div className={"framer-9ynktl"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Services
                            </a>
                          </p>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                      </nav>
                      <div className={"framer-155lzj3-container"} style={{ opacity: "1", transform: "none" }}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Nous rejoindre
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className={"ssr-variant hidden-16q1mfx hidden-11tggmt"}>
                <nav className={"framer-dN4YR framer-X8adU framer-SgNSh framer-DiAdc framer-12z1cd1 framer-v-17k8gxp"} data-framer-name={"Tablet Dark"} style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                  <div className={"framer-171f0ex"} data-framer-name={"Content Wrapper With BG"} style={{ backdropFilter: "none", backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", WebkitBackdropFilter: "none", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                    <div className={"framer-rpv4hj"} data-framer-name={"Base Container"}>
                      <div className={"framer-1l6gsd6"} data-framer-name={"Mobile Menu Wrapp"}>
                        <div className={"framer-1jlunes-container"}>
                          <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Logo Company"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </a>
                        </div>
                      </div>
                      <nav className={"framer-k1prli"} data-framer-name={"Nav Links Wrapper"}>
                        <div className={"framer-czv41b"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/"}>
                              Accueil
                            </a>
                          </p>
                        </div>
                        <div className={"framer-ncrdxr"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Nos espaces
                            </a>
                          </p><div data-bg-submenu="true"><a href="/espaces/cours-collectifs">Cours collectifs</a><a href="/espaces/fonctionnel">Entraînement fonctionnel</a><a href="/espaces/cross-cardio">Cross / Cardio</a></div>
                        </div>
                        <div className={"framer-9ynktl"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Services
                            </a>
                          </p>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-syx9gz-container"} id={"undefined-syx9gz"}>
                          <div className={"framer-YEzW6 framer-X8adU framer-1mk5516 framer-v-1mk5516"} data-framer-name={"Default"} data-highlight={"true"}>
                            <div className={"framer-2cc3a7"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ht2NPA9Z3-XC_5sBkkp)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-ht2NPA9Z3-XC_5sBkkp": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--variable-reference-yWUYpr9Dg-XC_5sBkkp": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ht2NPA9Z3-XC_5sBkkp))" }}>
                                Contact
                              </p>
                            </div>
                            <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", color: "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }} className={"framer-155m2hi"} aria-hidden={"true"}>
                              <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                  <use href={"#svg1231980477_257"} />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <div className={"framer-155lzj3-container"} style={{ opacity: "1", transform: "none" }}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Nous rejoindre
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
                <nav className={"framer-dN4YR framer-X8adU framer-SgNSh framer-DiAdc framer-12z1cd1 framer-v-1bsk40c"} data-framer-name={"Phone Dark"} style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                  <div className={"framer-171f0ex"} data-framer-name={"Content Wrapper With BG"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                    <div className={"framer-rpv4hj"} data-framer-name={"Base Container"}>
                      <div className={"framer-1l6gsd6"} data-framer-name={"Mobile Menu Wrapp"}>
                        <div className={"framer-1jlunes-container"}>
                          <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Logo Company"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </a>
                        </div>
                        <div className={"framer-ziwl7k"} data-framer-name={"Mobile Menu Icon"} data-highlight={"true"} style={{ filter: "invert(1)", WebkitFilter: "invert(1)" }} tabIndex={"0"}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"28"} height={"17"} src={"/assets/framerusercontent.com/images/Cv0ecyyfNeYOMPPw1LoMTUqtz3g.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <section className={"framer-1rj7ox"} data-framer-name={"Inner Banner Section"}>
              <div className={"ssr-variant hidden-16q1mfx"}>
                <div className={"framer-1wzzy3d"} data-framer-name={"BG Element"}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                    <img decoding={"async"} width={"1920"} height={"375"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78_qbdfb3cb8.svg 512w,/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78_q1cb5febc.svg 1024w,/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg 1920w"} src={"/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"} alt={"Decorative Element"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                  </div>
                </div>
              </div>
              <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
                <div className={"framer-1wzzy3d"} data-framer-name={"BG Element"}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                    <img decoding={"async"} width={"1920"} height={"375"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78_qbdfb3cb8.svg 512w,/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78_q1cb5febc.svg 1024w,/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg 1920w"} src={"/assets/framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"} alt={"Decorative Element"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "left center", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
              <div className={"framer-egxm9j"} data-framer-name={"Base Container"}>
                <div className={"framer-3kq39y"} data-framer-name={"Title Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                  <div className={"ssr-variant hidden-1rkk712 hidden-16q1mfx"}>
                    <div className={"framer-186eloe"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                      <h1 style={{ "--framer-font-size": "80px", "--framer-letter-spacing": "-1.92px", "--framer-line-height": "1em", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                        Révélez votre potentiel avec{" "}
                        <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                          nos formules.
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-16q1mfx hidden-11tggmt"}>
                    <div className={"framer-186eloe"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                      <h1 style={{ "--framer-font-size": "62px", "--framer-letter-spacing": "-1.92px", "--framer-line-height": "1em", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                        Révélez votre potentiel avec{" "}
                        <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                          nos formules.
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
                    <div className={"framer-186eloe"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                      <h1 style={{ "--framer-font-size": "48px", "--framer-letter-spacing": "-1.92px", "--framer-line-height": "1em", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                        Révélez votre potentiel avec{" "}
                        <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                          nos formules.
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className={"framer-oyrlh2"} data-framer-name={"Text Wrapp"}>
                    <div className={"framer-1cb8i2h"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))" }}>
                        Que vous cherchiez un entraînement performant, du coaching expert ou de la récupération, nous avons la formule qu'il vous faut.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"framer-ti5xoy"} data-framer-name={"Inneer Banner Wrapper"} style={{ willChange: "transform", opacity: "1", transform: "none" }}>
                  <div className={"ssr-variant"}>
                    <div className={"framer-1laeo4g hidden-16q1mfx"} data-framer-name={"BG Element"}>
                      <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                        <img decoding={"async"} width={"2499"} height={"993"} sizes={"(min-width: 1280px) calc(min(100vw, 1320px) - 58px), (max-width: 991px) calc(min(100vw, 1320px) - 58px), (min-width: 992px) and (max-width: 1279px) calc(min(100vw, 1320px) - 38px)"} srcSet={"/assets/framerusercontent.com/images/svAeLHz91HhfHbYKLujxxdUWY_qbdfb3cb8.svg 512w,/assets/framerusercontent.com/images/svAeLHz91HhfHbYKLujxxdUWY_q1cb5febc.svg 1024w,/assets/framerusercontent.com/images/svAeLHz91HhfHbYKLujxxdUWY_q5fcbabc4.svg 2048w,/assets/framerusercontent.com/images/svAeLHz91HhfHbYKLujxxdUWY.svg 2499w"} src={"/assets/framerusercontent.com/images/svAeLHz91HhfHbYKLujxxdUWY.svg"} alt={"BG"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                  <div className={"ssr-variant"}>
                    <div className={"framer-1qbfvgw"} data-border={"true"}>
                      <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                        <img decoding={"async"} width={"2000"} height={"1334"} sizes={"(min-width: 1280px) max(min(100vw, 1320px) - 60px, 1px), (min-width: 992px) and (max-width: 1279px) max(min(100vw, 1320px) - 40px, 1px), (max-width: 991px) max(min(100vw, 1320px) - 40px, 1px)"} srcSet={"/assets/framerusercontent.com/images/vEaXU388Y31oyruvuQ3plm3etM_qbdfb3cb8.jpg 512w,/assets/framerusercontent.com/images/vEaXU388Y31oyruvuQ3plm3etM_q1cb5febc.jpg 1024w,/assets/framerusercontent.com/images/vEaXU388Y31oyruvuQ3plm3etM.jpg 2000w"} src={"/assets/framerusercontent.com/images/vEaXU388Y31oyruvuQ3plm3etM.jpg"} alt={"Athlete"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "67.6% 48.4%", objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className={"ssr-variant hidden-1rkk712 hidden-16q1mfx"}>
              <div className={"framer-ljuyy2-container"}>
                <section className={"framer-1Xy1R framer-fN9WN framer-1ts62ny framer-v-1ts62ny"} data-framer-name={"Desktop"} style={{ width: "100%" }}>
                  <div className={"framer-1kw3a1e"} data-framer-name={"Base Container"}>
                    <div className={"framer-1d3f6uw"} data-framer-name={"Title Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-m5cj5t"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                          Adhésion
                        </p>
                      </div>
                      <div className={"framer-1svd6ti"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "50px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Votre accès au meilleur{" "}
                          </span>
                          de votre forme physique et mentale.
                        </h2>
                      </div>
                    </div>
                    <div className={"framer-jw2ae6-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-cNZMU framer-fN9WN framer-1f2mbrn framer-v-1f2mbrn"} data-framer-name={"Default"} style={{ width: "100%" }}>
                        <div className={"framer-41sdu7"} data-framer-name={"Toggle Wrapper"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                          <div className={"framer-13lkngv"} data-framer-name={"Toggle BG"} style={{ backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }} />
                          <div className={"framer-14nh7xc"} data-framer-name={"Toggle"} data-highlight={"true"} tabIndex={"0"}>
                            <div className={"framer-9jttek"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Mensuel
                              </p>
                            </div>
                          </div>
                          <div className={"framer-5dz3i1"} data-framer-name={"Toggle"} data-highlight={"true"} tabIndex={"0"}>
                            <div className={"framer-db4itj"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                                Annuel
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1pryn50"} data-framer-name={"Tarifs Cards Wrapper"}>
                        <div data-ptab="mensuel">
                          {MENSUEL.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <div data-ptab="courtes">
                          {COURTES.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={"ssr-variant hidden-16q1mfx hidden-11tggmt"}>
              <div className={"framer-ljuyy2-container"}>
                <section className={"framer-1Xy1R framer-fN9WN framer-1ts62ny framer-v-eqdqmt"} data-framer-name={"Tablet"} style={{ width: "100%" }}>
                  <div className={"framer-1kw3a1e"} data-framer-name={"Base Container"}>
                    <div className={"framer-1d3f6uw"} data-framer-name={"Title Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-m5cj5t"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                          Adhésion
                        </p>
                      </div>
                      <div className={"framer-1svd6ti"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "50px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Votre accès au meilleur{" "}
                          </span>
                          de votre forme physique et mentale.
                        </h2>
                      </div>
                    </div>
                    <div className={"framer-jw2ae6-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-cNZMU framer-fN9WN framer-1f2mbrn framer-v-1f2mbrn"} data-framer-name={"Default"} style={{ width: "100%" }}>
                        <div className={"framer-41sdu7"} data-framer-name={"Toggle Wrapper"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                          <div className={"framer-13lkngv"} data-framer-name={"Toggle BG"} style={{ backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }} />
                          <div className={"framer-14nh7xc"} data-framer-name={"Toggle"} data-highlight={"true"} tabIndex={"0"}>
                            <div className={"framer-9jttek"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Mensuel
                              </p>
                            </div>
                          </div>
                          <div className={"framer-5dz3i1"} data-framer-name={"Toggle"} data-highlight={"true"} tabIndex={"0"}>
                            <div className={"framer-db4itj"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                                Annuel
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1pryn50"} data-framer-name={"Tarifs Cards Wrapper"}>
                        <div data-ptab="mensuel">
                          {MENSUEL.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <div data-ptab="courtes">
                          {COURTES.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
              <div className={"framer-ljuyy2-container"}>
                <section className={"framer-1Xy1R framer-fN9WN framer-1ts62ny framer-v-1qyxusb"} data-framer-name={"Phone"} style={{ width: "100%" }}>
                  <div className={"framer-1kw3a1e"} data-framer-name={"Base Container"}>
                    <div className={"framer-1d3f6uw"} data-framer-name={"Title Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-m5cj5t"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                          Adhésion
                        </p>
                      </div>
                      <div className={"framer-1svd6ti"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "50px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Votre accès au meilleur{" "}
                          </span>
                          de votre forme physique et mentale.
                        </h2>
                      </div>
                    </div>
                    <div className={"framer-jw2ae6-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-cNZMU framer-fN9WN framer-1f2mbrn framer-v-12d06jp"} data-framer-name={"Phone"} style={{ width: "100%" }}>
                        <div className={"framer-41sdu7"} data-framer-name={"Toggle Wrapper"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                          <div className={"framer-13lkngv"} data-framer-name={"Toggle BG"} style={{ backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }} />
                          <div className={"framer-14nh7xc"} data-framer-name={"Toggle"} data-highlight={"true"} tabIndex={"0"}>
                            <div className={"framer-9jttek"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Mensuel
                              </p>
                            </div>
                          </div>
                          <div className={"framer-5dz3i1"} data-framer-name={"Toggle"} data-highlight={"true"} tabIndex={"0"}>
                            <div className={"framer-db4itj"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                                Annuel
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1pryn50"} data-framer-name={"Tarifs Cards Wrapper"}>
                        <div data-ptab="mensuel">
                          {MENSUEL.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <div data-ptab="courtes">
                          {COURTES.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <section className={"framer-1kq4m4h"} data-framer-name={"Classes Section"}>
              <div className={"framer-1blkc1l"} data-framer-name={"Base Container"}>
                <div className={"framer-d9eh4p"} data-framer-name={"Top Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                  <div className={"framer-ufrv7r"} data-framer-name={"Title Wrapper"}>
                    <div className={"framer-16tz2ya"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))" }}>
                        Nos services
                      </p>
                    </div>
                    <div className={"ssr-variant hidden-16q1mfx"}>
                      <div className={"framer-sxlwgz"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "50px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Nous{" "}
                          </span>
                          réinventons votre façon de vivre le
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            {" "}sport.
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
                      <div className={"framer-sxlwgz"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "40px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Nous{" "}
                          </span>
                          réinventons votre façon de vivre le
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            {" "}sport.
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className={"ssr-variant"}>
                    <div className={"framer-19qnmlm-container hidden-16q1mfx"}>
                      <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/services"}>
                        <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                            Tous nos services
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={"framer-18i9ozy"}>
                  <div className={"ssr-variant hidden-16q1mfx"}>
                    <div className={"ssr-variant"}>
                      <div className={"framer-ynjz3h-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                        <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-16nx98q framer-maxoa4"} data-framer-name={"Default"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/services"}>
                          <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                            <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                            <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px), 1px)"} srcSet={"/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo_qbdfb3cb8.jpg 512w,/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo_q1cb5febc.jpg 1024w,/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo.jpg 1920w"} src={"/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo.jpg"} alt={"Thumbnail"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                          <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                            <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Beauregard Coaching
                              </h3>
                            </div>
                          </div>
                          <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                            <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                              <div className={"framer-1th3nxd-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      Sur-mesure
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1xl0han-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      Suivi perso
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={"framer-zzui6-container"}>
                              <div className={"framer-m46Yg framer-irosbm framer-v-irosbm"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                <div className={"framer-xwgz5u"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none", transform: "none" }}>
                                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                    <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-ynjz3h-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                        <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-16nx98q framer-maxoa4"} data-framer-name={"Default"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/services"}>
                          <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                            <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                            <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px), 1px)"} srcSet={"/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw_qbdfb3cb8.jpg 512w,/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw_q1cb5febc.jpg 1024w,/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw.jpg 1920w"} src={"/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw.jpg"} alt={"Thumbnail"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                          <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                            <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Beauregard Cours
                              </h3>
                            </div>
                          </div>
                          <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                            <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                              <div className={"framer-1th3nxd-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      ≈ 40 cours
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1xl0han-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      Tous niveaux
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={"framer-zzui6-container"}>
                              <div className={"framer-m46Yg framer-irosbm framer-v-irosbm"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                <div className={"framer-xwgz5u"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none", transform: "none" }}>
                                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                    <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-ynjz3h-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                        <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-16nx98q framer-maxoa4"} data-framer-name={"Default"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/services"}>
                          <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                            <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                            <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} loading={"lazy"} width={"1500"} height={"1000"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px)"} srcSet={"/assets/framerusercontent.com/images/mAoTVgQO8Czxkujh2Ajl040Ss_qbdfb3cb8.jpg 512w,/assets/framerusercontent.com/images/mAoTVgQO8Czxkujh2Ajl040Ss_q1cb5febc.jpg 1024w,/assets/framerusercontent.com/images/mAoTVgQO8Czxkujh2Ajl040Ss.jpg 1500w"} src={"/assets/framerusercontent.com/images/mAoTVgQO8Czxkujh2Ajl040Ss.jpg"} alt={"Thumbnail"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "36.3% 0.9%", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                          <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                            <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Location de terrain
                              </h3>
                            </div>
                          </div>
                          <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                            <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                              <div className={"framer-1th3nxd-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      Sport co
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1xl0han-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      Sur réservation
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={"framer-zzui6-container"}>
                              <div className={"framer-m46Yg framer-irosbm framer-v-irosbm"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                                <div className={"framer-xwgz5u"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none", transform: "none" }}>
                                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                    <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
                    <div className={"framer-ynjz3h-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-14kd23d framer-maxoa4"} data-framer-name={"Phone"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/services"}>
                        <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                          <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                          <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px), 1px)"} srcSet={"/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo_qbdfb3cb8.jpg 512w,/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo_q1cb5febc.jpg 1024w,/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo.jpg 1920w"} src={"/assets/framerusercontent.com/images/UStfeNRfnYKdGEcem4SqWsexo.jpg"} alt={"Thumbnail"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                          <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Beauregard Coaching
                            </h3>
                          </div>
                        </div>
                        <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                          <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                            <div className={"framer-1th3nxd-container"}>
                              <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                  <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                    Sur-mesure
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className={"framer-1xl0han-container"}>
                              <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                  <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                    Suivi perso
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-zzui6-container"}>
                            <div className={"framer-m46Yg framer-irosbm framer-v-y8kf80"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                              <div className={"framer-xwgz5u"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none", transform: "none" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={"framer-ynjz3h-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-14kd23d framer-maxoa4"} data-framer-name={"Phone"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/services"}>
                        <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                          <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                          <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px), 1px)"} srcSet={"/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw_qbdfb3cb8.jpg 512w,/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw_q1cb5febc.jpg 1024w,/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw.jpg 1920w"} src={"/assets/framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw.jpg"} alt={"Thumbnail"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                          <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Beauregard Cours
                            </h3>
                          </div>
                        </div>
                        <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                          <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                            <div className={"framer-1th3nxd-container"}>
                              <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                  <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                    ≈ 40 cours
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className={"framer-1xl0han-container"}>
                              <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                  <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                    Tous niveaux
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-zzui6-container"}>
                            <div className={"framer-m46Yg framer-irosbm framer-v-y8kf80"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                              <div className={"framer-xwgz5u"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none", transform: "none" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant"}>
                  <div className={"framer-j0mdx0-container hidden-11tggmt hidden-1rkk712"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/services"}>
                      <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                          Tous nos services
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className={"framer-1jrf1gc"} data-framer-name={"Testimonials Section"}>
              <div className={"framer-mlf4hv"} data-framer-name={"Base Container"}>
                <div className={"ssr-variant hidden-1rkk712 hidden-16q1mfx"}>
                  <div className={"framer-12dj4pv-container"}>
                    <div className={"framer-pZWsA framer-fN9WN framer-gbuwA framer-1attmxx framer-v-1attmxx"} data-framer-name={"Desktop"} style={{ width: "100%", willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-135qqv"} data-framer-name={"Top Content Wrapper"}>
                        <div className={"framer-1kne1lv"} data-framer-name={"Title Wrapper"}>
                          <div className={"framer-qk0nfc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                              Testimonials
                            </p>
                          </div>
                          <div className={"framer-1o9wodc"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h2 style={{ "--framer-font-size": "50px", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                              <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                                Notre communauté{" "}
                              </span>
                              est au cœur de tout ce que nous faisons.
                            </h2>
                          </div>
                          <div className={"framer-1ewkqpr"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                              Découvrez les adhérents qui ont transformé leur forme, leurs performances et leur mode de vie avec nous !
                            </p>
                          </div>
                        </div>
                        <div className={"framer-1jlpl75"} data-framer-name={"Button Wrapper"}>
                          <div className={"framer-9nphq7-container"} style={{ transform: "rotate(180deg)" }}>
                            <button className={"framer-NEM2f framer-c2t8k9 framer-v-1y76vsd"} data-framer-name={"Disabled"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "0.4" }} tabIndex={"0"}>
                              <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className={"framer-pnxu2m-container"}>
                            <button className={"framer-NEM2f framer-c2t8k9 framer-v-c2t8k9"} data-framer-name={"Default"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "1" }} tabIndex={"0"}>
                              <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1gf08qd"} data-framer-name={"Testimonials Wrapper"}>
                        <div className={"framer-1sa6cnf"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-k0ee4n-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « Ça a tout changé dans mon entraînement ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Marie L.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-kgast6-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « La meilleure décision pour ma santé ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Sophie B.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1vr0nqt-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « L'endroit parfait pour s'entraîner et se ressourcer ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Camille T.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1jxh0vi"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-hvmsss-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « La meilleure décision pour ma santé ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Thomas R.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-10lsvy7-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « Ça a tout changé dans mon entraînement ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Julien M.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-zsr5h9-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « L'endroit parfait pour s'entraîner et se ressourcer ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Chloé T.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant hidden-16q1mfx hidden-11tggmt"}>
                  <div className={"framer-12dj4pv-container"}>
                    <div className={"framer-pZWsA framer-fN9WN framer-gbuwA framer-1attmxx framer-v-1attmxx"} data-framer-name={"Desktop"} style={{ width: "100%", willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-135qqv"} data-framer-name={"Top Content Wrapper"}>
                        <div className={"framer-1kne1lv"} data-framer-name={"Title Wrapper"}>
                          <div className={"framer-qk0nfc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                              Testimonials
                            </p>
                          </div>
                          <div className={"framer-1o9wodc"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h2 style={{ "--framer-font-size": "50px", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                              <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                                Notre communauté{" "}
                              </span>
                              est au cœur de tout ce que nous faisons.
                            </h2>
                          </div>
                          <div className={"framer-1ewkqpr"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                              Découvrez les adhérents qui ont transformé leur forme, leurs performances et leur mode de vie avec nous !
                            </p>
                          </div>
                        </div>
                        <div className={"framer-1jlpl75"} data-framer-name={"Button Wrapper"}>
                          <div className={"framer-9nphq7-container"} style={{ transform: "rotate(180deg)" }}>
                            <button className={"framer-NEM2f framer-c2t8k9 framer-v-1y76vsd"} data-framer-name={"Disabled"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "0.4" }} tabIndex={"0"}>
                              <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className={"framer-pnxu2m-container"}>
                            <button className={"framer-NEM2f framer-c2t8k9 framer-v-c2t8k9"} data-framer-name={"Default"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "1" }} tabIndex={"0"}>
                              <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1gf08qd"} data-framer-name={"Testimonials Wrapper"}>
                        <div className={"framer-1sa6cnf"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-k0ee4n-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « Ça a tout changé dans mon entraînement ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Marie L.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-kgast6-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « La meilleure décision pour ma santé ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Sophie B.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1vr0nqt-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « L'endroit parfait pour s'entraîner et se ressourcer ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Camille T.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1jxh0vi"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-hvmsss-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « La meilleure décision pour ma santé ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Thomas R.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-10lsvy7-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « Ça a tout changé dans mon entraînement ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Julien M.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-zsr5h9-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « L'endroit parfait pour s'entraîner et se ressourcer ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Chloé T.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1rkk712 hidden-11tggmt"}>
                  <div className={"framer-12dj4pv-container"}>
                    <div className={"framer-pZWsA framer-fN9WN framer-gbuwA framer-1attmxx framer-v-v55uu4"} data-framer-name={"Phone"} style={{ width: "100%", willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-135qqv"} data-framer-name={"Top Content Wrapper"}>
                        <div className={"framer-1kne1lv"} data-framer-name={"Title Wrapper"}>
                          <div className={"framer-qk0nfc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                              Testimonials
                            </p>
                          </div>
                          <div className={"framer-1o9wodc"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h2 style={{ "--framer-font-size": "40px", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                              <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                                Notre communauté{" "}
                              </span>
                              est au cœur de tout ce que nous faisons.
                            </h2>
                          </div>
                          <div className={"framer-1ewkqpr"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                              Découvrez les adhérents qui ont transformé leur forme, leurs performances et leur mode de vie avec nous !
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1gf08qd"} data-framer-name={"Testimonials Wrapper"}>
                        <div className={"framer-1sa6cnf"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-k0ee4n-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « Ça a tout changé dans mon entraînement ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Marie L.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-kgast6-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « La meilleure décision pour ma santé ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Sophie B.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1vr0nqt-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « L'endroit parfait pour s'entraîner et se ressourcer ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Camille T.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1jxh0vi"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-hvmsss-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « La meilleure décision pour ma santé ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Le Parc Beauregard a tout ce qu'il me faut : coachs experts, super matériel et ambiance géniale. Je me sens plus forte et plus motivée que jamais ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Thomas R.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-10lsvy7-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « Ça a tout changé dans mon entraînement ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Les coachs sont au top ! J'ai énormément progressé en endurance et en force. Je recommande sans hésiter ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Julien M.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-zsr5h9-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                              <div className={"framer-1piw4sh"} data-framer-name={"Stars Wrapper"}>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-1h0by1z"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-asdo3a"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-wpa2ee"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-bkmer6"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                                <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))", color: "var(--token-84a6585a-d5ec-4d8a-bff9-2620e834b6f0, rgb(250, 208, 0))" }} className={"framer-41hb1"} aria-hidden={"true"}>
                                  <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                    <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                      <use href={"#svg-1111057538_458"} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className={"framer-1jzm1sk"} data-framer-name={"Text Content Wrapper"}>
                                <div className={"framer-z5u0fp"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                    « L'endroit parfait pour s'entraîner et se ressourcer ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'adore la communauté du Parc Beauregard. Les cours collectifs me poussent au-delà de mes limites, et je m'y suis fait de vrais amis ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Chloé T.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1wlm9jy"} data-framer-name={"Button Wrapper"}>
                        <div className={"framer-1eap3q4-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                          <button className={"framer-NEM2f framer-c2t8k9 framer-v-1y76vsd"} data-framer-name={"Disabled"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "0.4" }} tabIndex={"0"}>
                            <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className={"framer-qrpm0j-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                          <button className={"framer-NEM2f framer-c2t8k9 framer-v-tzf896"} data-framer-name={"Phone"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "1" }} tabIndex={"0"}>
                            <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id={"overlay"} />
          <div className={"framer-1hytouz"} />
          <div className={"framer-70fgct-container"}>
            <div className={"ssr-variant hidden-1k2w4ql hidden-ok5eee"}>
              <footer className={"framer-xjjiV framer-Zs9Jp framer-ucIfD framer-QlV1W framer-FUgh0 framer-fN9WN framer-80BYq framer-DiAdc framer-jmfSm framer-RZlrj framer-NttII framer-1wbsmcg framer-v-1wbsmcg"} data-framer-name={"Desktop"} style={{ width: "100%" }}>
                <div className={"framer-qvx5l"} data-framer-name={"Base Container"}>
                  <div className={"framer-84ot7o"} data-framer-name={"Top Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"framer-1tmpf7x"} data-framer-name={"Logo Wrapper"}>
                      <div className={"framer-1dyyacx-container"}>
                        <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} loading={"lazy"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Logo Company"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </a>
                      </div>
                      <div className={"framer-1ahvc85"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <h4 style={{ "--font-selector": "SW50ZXItRXh0cmFCb2xk", "--framer-font-family": "&quot", "--framer-font-size": "26px", "--framer-font-weight": "800", "--framer-letter-spacing": "-0.78px", "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Le meilleur du
                          </span>
                          {" "}sport & de la nature.
                        </h4>
                      </div>
                    </div>
                    <div className={"framer-1ms8iqn"} data-framer-name={"Link Wrapper"}>
                      <div className={"framer-5nybuo"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <div className={"framer-text framer-styles-preset-1k24v1r"} data-styles-preset={"uy86YYYaZ"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Une question ?
                        </div>
                      </div>
                      <div className={"framer-1r8w116"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <div className={"framer-text framer-styles-preset-7s7uzb"} data-styles-preset={"RPSS_EY_X"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          <a className={"framer-text framer-styles-preset-1jdxb4u"} data-styles-preset={"SOfESV2jq"} href={"mailto:rochecorbon@parcbeauregard.com"} target={"_blank"} rel={"noopener"}>
                            rochecorbon@parcbeauregard.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-3gh79q"} data-framer-name={"Nav Links Columns"}>
                    <div className={"framer-1u64p0y"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-sdr25v"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Accueil
                        </p>
                      </div>
                      <nav className={"framer-omcpzf"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-dxazlk"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/"}>
                              Accueil
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-r6i6g2"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-7lbril"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          À propos
                        </p>
                      </div>
                      <nav className={"framer-1aczhrj"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-3n768l"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              À propos
                            </a>
                          </p>
                        </div>
                        <div className={"framer-jmg0g1"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Notre mission
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Notre équipe
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-uhploo"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-1oq2gud"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Nos espaces
                        </p>
                      </div>
                      <nav className={"framer-1uskuzo"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-144bbg"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Cours collectifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-uqv70a"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Entraînement fonctionnel
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1giu5hf"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Cross / Cardio
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1mpi49a"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Yoga
                            </a>
                          </p>
                        </div>
                        <div className={"framer-12yg4yj"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Pilates
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1u3olo0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              École du dos
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-bxt6qb"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-p2b2a8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Services
                        </p>
                      </div>
                      <nav className={"framer-lmls2j"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-t860hw"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Beauregard Coaching
                            </a>
                          </p>
                        </div>
                        <div className={"framer-8t66ro"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Beauregard Cours
                            </a>
                          </p>
                        </div>
                        <div className={"framer-6yqmv5"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Location de terrain
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-1vydyy4"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-1wyr9xn"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Adhésion
                        </p>
                      </div>
                      <nav className={"framer-1ybk33w"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1c88qaj"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/contact"}>
                              FAQ
                            </a>
                          </p>
                        </div>
                        <div className={"framer-19ndjsh"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/contact"}>
                              Contact
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className={"framer-1eprmph"} data-border={"true"} data-framer-name={"Bottom Content Wrapper"} style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", willChange: "transform", opacity: "1", transform: "none" }}>
                    <div className={"framer-r05iym"} data-framer-name={"Copyright Wrapper"}>
                      <div className={"framer-hvf79x"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                          © Parc Beauregard. Tous droits réservés. Réalisé par
                        </p>
                      </div>
                      <div className={"framer-19zhfuo"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                          <a className={"framer-text framer-styles-preset-bfv2hb"} data-styles-preset={"Upx7ZfNvr"} href={"https://dgl-agency.fr/"} target={"_blank"} rel={"noopener"}>DGL Agency</a>
                        </p>
                      </div>
                    </div>
                    <nav className={"framer-1omppqv"} data-framer-name={"Social Links Wrapper"}>
                      <div className={"framer-a7tk75-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.instagram.com/parcbeauregard/"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"framer-13tpyxv-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.facebook.com/parcbeauregard"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </footer>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-ok5eee"}>
              <footer className={"framer-xjjiV framer-Zs9Jp framer-ucIfD framer-QlV1W framer-FUgh0 framer-fN9WN framer-80BYq framer-DiAdc framer-jmfSm framer-RZlrj framer-NttII framer-1wbsmcg framer-v-1qutuv"} data-framer-name={"Tablet"} style={{ width: "100%" }}>
                <div className={"framer-qvx5l"} data-framer-name={"Base Container"}>
                  <div className={"framer-84ot7o"} data-framer-name={"Top Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"framer-1tmpf7x"} data-framer-name={"Logo Wrapper"}>
                      <div className={"framer-1dyyacx-container"}>
                        <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Logo Company"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </a>
                      </div>
                      <div className={"framer-1ahvc85"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <h4 style={{ "--font-selector": "SW50ZXItRXh0cmFCb2xk", "--framer-font-family": "&quot", "--framer-font-size": "26px", "--framer-font-weight": "800", "--framer-letter-spacing": "-0.78px", "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Le meilleur du
                          </span>
                          {" "}sport & de la nature.
                        </h4>
                      </div>
                    </div>
                    <div className={"framer-1ms8iqn"} data-framer-name={"Link Wrapper"}>
                      <div className={"framer-5nybuo"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <div className={"framer-text framer-styles-preset-1k24v1r"} data-styles-preset={"uy86YYYaZ"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Une question ?
                        </div>
                      </div>
                      <div className={"framer-1r8w116"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <div className={"framer-text framer-styles-preset-7s7uzb"} data-styles-preset={"RPSS_EY_X"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          <a className={"framer-text framer-styles-preset-1jdxb4u"} data-styles-preset={"SOfESV2jq"} href={"mailto:rochecorbon@parcbeauregard.com"} target={"_blank"} rel={"noopener"}>
                            rochecorbon@parcbeauregard.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-3gh79q"} data-framer-name={"Nav Links Columns"}>
                    <div className={"framer-1u64p0y"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-sdr25v"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Accueil
                        </p>
                      </div>
                      <nav className={"framer-omcpzf"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-dxazlk"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/"}>
                              Accueil
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-r6i6g2"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-7lbril"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          À propos
                        </p>
                      </div>
                      <nav className={"framer-1aczhrj"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-3n768l"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              À propos
                            </a>
                          </p>
                        </div>
                        <div className={"framer-jmg0g1"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Notre mission
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Notre équipe
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-uhploo"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-1oq2gud"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Nos espaces
                        </p>
                      </div>
                      <nav className={"framer-1uskuzo"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-144bbg"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Cours collectifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-uqv70a"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Entraînement fonctionnel
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1giu5hf"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Cross / Cardio
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1mpi49a"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Yoga
                            </a>
                          </p>
                        </div>
                        <div className={"framer-12yg4yj"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              Pilates
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1u3olo0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/espaces"}>
                              École du dos
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-bxt6qb"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-p2b2a8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Services
                        </p>
                      </div>
                      <nav className={"framer-lmls2j"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-t860hw"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Beauregard Coaching
                            </a>
                          </p>
                        </div>
                        <div className={"framer-8t66ro"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Beauregard Cours
                            </a>
                          </p>
                        </div>
                        <div className={"framer-6yqmv5"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/services"}>
                              Location de terrain
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-1vydyy4"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-1wyr9xn"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Adhésion
                        </p>
                      </div>
                      <nav className={"framer-1ybk33w"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1c88qaj"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/contact"}>
                              FAQ
                            </a>
                          </p>
                        </div>
                        <div className={"framer-19ndjsh"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/contact"}>
                              Contact
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className={"framer-1eprmph"} data-border={"true"} data-framer-name={"Bottom Content Wrapper"} style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", willChange: "transform", opacity: "1", transform: "none" }}>
                    <div className={"framer-r05iym"} data-framer-name={"Copyright Wrapper"}>
                      <div className={"framer-hvf79x"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                          © Parc Beauregard. Tous droits réservés. Réalisé par
                        </p>
                      </div>
                      <div className={"framer-19zhfuo"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                          <a className={"framer-text framer-styles-preset-bfv2hb"} data-styles-preset={"Upx7ZfNvr"} href={"https://dgl-agency.fr/"} target={"_blank"} rel={"noopener"}>DGL Agency</a>
                        </p>
                      </div>
                    </div>
                    <nav className={"framer-1omppqv"} data-framer-name={"Social Links Wrapper"}>
                      <div className={"framer-a7tk75-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.instagram.com/parcbeauregard/"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"framer-13tpyxv-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.facebook.com/parcbeauregard"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </footer>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-1k2w4ql"}>
              <footer className={"framer-xjjiV framer-Zs9Jp framer-ucIfD framer-QlV1W framer-FUgh0 framer-fN9WN framer-80BYq framer-DiAdc framer-jmfSm framer-RZlrj framer-NttII framer-1wbsmcg framer-v-1b6dtn4"} data-framer-name={"Phone"} style={{ width: "100%" }}>
                <div className={"framer-qvx5l"} data-framer-name={"Base Container"}>
                  <div className={"framer-84ot7o"} data-framer-name={"Top Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"framer-1tmpf7x"} data-framer-name={"Logo Wrapper"}>
                      <div className={"framer-1dyyacx-container"}>
                        <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Logo Company"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </a>
                      </div>
                      <div className={"framer-1ahvc85"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <h4 style={{ "--font-selector": "SW50ZXItRXh0cmFCb2xk", "--framer-font-family": "&quot", "--framer-font-size": "26px", "--framer-font-weight": "800", "--framer-letter-spacing": "-0.78px", "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Le meilleur du
                          </span>
                          {" "}sport & de la nature.
                        </h4>
                      </div>
                    </div>
                    <div className={"framer-1ms8iqn"} data-framer-name={"Link Wrapper"}>
                      <div className={"framer-5nybuo"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <div className={"framer-text framer-styles-preset-1k24v1r"} data-styles-preset={"uy86YYYaZ"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Une question ?
                        </div>
                      </div>
                      <div className={"framer-1r8w116"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <div className={"framer-text framer-styles-preset-7s7uzb"} data-styles-preset={"RPSS_EY_X"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          <a className={"framer-text framer-styles-preset-1783udm"} data-styles-preset={"JOlgSsugd"} href={"mailto:rochecorbon@parcbeauregard.com"} target={"_blank"} rel={"noopener"}>
                            rochecorbon@parcbeauregard.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-3gh79q"} data-framer-name={"Nav Links Columns"}>
                    <div className={"framer-1u64p0y"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-sdr25v"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Accueil
                        </p>
                      </div>
                      <nav className={"framer-omcpzf"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-dxazlk"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/"}>
                              Accueil
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-r6i6g2"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-7lbril"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          À propos
                        </p>
                      </div>
                      <nav className={"framer-1aczhrj"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-3n768l"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              À propos
                            </a>
                          </p>
                        </div>
                        <div className={"framer-jmg0g1"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Notre mission
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Notre équipe
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-uhploo"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-1oq2gud"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Nos espaces
                        </p>
                      </div>
                      <nav className={"framer-1uskuzo"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-144bbg"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Cours collectifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-uqv70a"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Entraînement fonctionnel
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1giu5hf"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Cross / Cardio
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1mpi49a"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Yoga
                            </a>
                          </p>
                        </div>
                        <div className={"framer-12yg4yj"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              Pilates
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1u3olo0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/espaces"}>
                              École du dos
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-bxt6qb"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-p2b2a8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Services
                        </p>
                      </div>
                      <nav className={"framer-lmls2j"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-t860hw"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/services"}>
                              Beauregard Coaching
                            </a>
                          </p>
                        </div>
                        <div className={"framer-8t66ro"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/services"}>
                              Beauregard Cours
                            </a>
                          </p>
                        </div>
                        <div className={"framer-6yqmv5"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/services"}>
                              Location de terrain
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-1vydyy4"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-1wyr9xn"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Adhésion
                        </p>
                      </div>
                      <nav className={"framer-1ybk33w"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-1c88qaj"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/contact"}>
                              FAQ
                            </a>
                          </p>
                        </div>
                        <div className={"framer-19ndjsh"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/contact"}>
                              Contact
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className={"framer-1eprmph"} data-border={"true"} data-framer-name={"Bottom Content Wrapper"} style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", willChange: "transform", opacity: "1", transform: "none" }}>
                    <div className={"framer-r05iym"} data-framer-name={"Copyright Wrapper"}>
                      <div className={"framer-hvf79x"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", willChange: "auto", "--extracted-hl0iuy": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                          © Parc Beauregard. Tous droits réservés. Réalisé par{" "}
                          <a className={"framer-text framer-styles-preset-1862sd8"} data-styles-preset={"cWZXsG4am"} href={"https://dgl-agency.fr/"} target={"_blank"} rel={"noopener"}>
                            <span style={{ "--framer-text-color": "var(--extracted-hl0iuy, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }} className={"framer-text"}>
                              
                            </span>
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                    <nav className={"framer-1omppqv"} data-framer-name={"Social Links Wrapper"}>
                      <div className={"framer-a7tk75-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-19k8o50 framer-9dk433"} data-framer-name={"Phone"} style={{ height: "100%", width: "100%" }} href={"https://www.instagram.com/parcbeauregard/"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"framer-13tpyxv-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-19k8o50 framer-9dk433"} data-framer-name={"Phone"} style={{ height: "100%", width: "100%" }} href={"https://www.facebook.com/parcbeauregard"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Icon"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div id={"template-overlay"} />
      </div>
    </>
  );
}
