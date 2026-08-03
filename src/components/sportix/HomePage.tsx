// Généré par framer-port.mjs — port FIDÈLE du SSR Framer (ne pas reconstruire, brancher Payload sur les noeuds de contenu).
// Styles exacts : importer "framer.css" une seule fois (layout global).
import './framer.css';
import { PriceCard } from './PriceCard'
import { MENSUEL, COURTES } from './formules'
import ClubVideo from './ClubVideo'
import AvisAvatar from './AvisAvatar'

export type HeroPromo = { titre?: string | null; texte?: string | null; url?: string | null }
type CardData = { name: string; price: string; period: string; desc: string; features: string[] }

export default function AccueilPage({ promo, mensuel, courtes }: { promo?: HeroPromo | null; mensuel?: CardData[]; courtes?: CardData[] }) {
  // Formules éditables via Payload (fallback sur formules.ts si la base est vide)
  const MENSUEL_DATA = mensuel && mensuel.length ? mensuel : MENSUEL
  const COURTES_DATA = courtes && courtes.length ? courtes : COURTES
  return (
    <>
      <div id={"main"}>
        <div className={"framer-9MYi8 framer-13v9dm1"} data-layout-template={"true"} style={{ minHeight: "100vh", width: "auto" }}>
          <div className={"framer-xf0KU framer-gbuwA framer-80BYq framer-1eSXM framer-Suf9V framer-fN9WN framer-72rtr7"} style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
            <div className={"framer-ugsd3w-container"}>
              <div className={"ssr-variant hidden-ugdvmg hidden-9md6lv"}>
                <nav className={"framer-dN4YR framer-X8adU framer-SgNSh framer-DiAdc framer-12z1cd1 framer-v-12z1cd1"} data-framer-name={"Desktop"} style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                  <div className={"framer-171f0ex"} data-framer-name={"Content Wrapper With BG"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-4580e86a-481f-4c10-8f6a-561fe8ab47a4, rgba(0, 0, 0, 0.25))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                    <div className={"framer-rpv4hj"} data-framer-name={"Base Container"}>
                      <div className={"framer-1l6gsd6"} data-framer-name={"Mobile Menu Wrapp"}>
                        <div className={"framer-1jlunes-container"}>
                          <a className={"framer-hD525 framer-do1alt framer-v-do1alt framer-4j1ocn"} data-framer-name={"Logo Company White"} href={"/"} style={{ height: "100%", width: "100%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/FlqF1c3trclcifp0T0UiAlLAY.svg"} alt={"Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </a>
                        </div>
                      </div>
                      <nav className={"framer-k1prli"} data-framer-name={"Nav Links Wrapper"}>
                        <div className={"framer-ncrdxr"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/espaces"}>
                              Nos espaces
                            </a>
                          </p><div data-bg-submenu="true"><a href="/espaces">Nos espaces</a><a href="/espaces/fonctionnel">Entraînement fonctionnel</a><a href="/espaces/cross-cardio">Cross / Cardio</a><a href="/location-de-terrain">Location de terrain</a></div>
                        </div>
                        <div className={"framer-9ynktl"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/cours"}>
                              Nos cours
                            </a>
                          </p><div data-bg-submenu="true"><a href="/cours">Tous les cours</a><a href="/coaching">Coaching</a></div>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/planning"}>
                              Planning
                            </a>
                          </p>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/contact"}>
                              Contact
                            </a>
                          </p>
                        </div>
                      </nav>
                      <div className={"framer-155lzj3-container"} style={{ opacity: "1", transform: "none" }}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/seance-essai"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Séance d&rsquo;essai
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                <nav className={"framer-dN4YR framer-X8adU framer-SgNSh framer-DiAdc framer-12z1cd1 framer-v-rmgbzb"} data-framer-name={"Phone"} style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                  <div className={"framer-171f0ex"} data-framer-name={"Content Wrapper With BG"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-4580e86a-481f-4c10-8f6a-561fe8ab47a4, rgba(0, 0, 0, 0.25))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                    <div className={"framer-rpv4hj"} data-framer-name={"Base Container"}>
                      <div className={"framer-1l6gsd6"} data-framer-name={"Mobile Menu Wrapp"}>
                        <div className={"framer-1jlunes-container"}>
                          <a className={"framer-hD525 framer-do1alt framer-v-do1alt framer-4j1ocn"} data-framer-name={"Logo Company White"} href={"/"} style={{ height: "100%", width: "100%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/FlqF1c3trclcifp0T0UiAlLAY.svg"} alt={"Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </a>
                        </div>
                        <div className={"framer-ziwl7k"} data-framer-name={"Mobile Menu Icon"} role="button" aria-label="Ouvrir le menu" data-highlight={"true"} style={{ filter: "none", WebkitFilter: "none" }} tabIndex={"0"}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"28"} height={"17"} src={"/assets/framerusercontent.com/images/Cv0ecyyfNeYOMPPw1LoMTUqtz3g.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className={"ssr-variant hidden-ugdvmg hidden-72rtr7"}>
                <nav className={"framer-dN4YR framer-X8adU framer-SgNSh framer-DiAdc framer-12z1cd1 framer-v-1e93pkh"} data-framer-name={"Tablet"} style={{ width: "100%", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                  <div className={"framer-171f0ex"} data-framer-name={"Content Wrapper With BG"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-4580e86a-481f-4c10-8f6a-561fe8ab47a4, rgba(0, 0, 0, 0.25))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "100px", borderTopRightRadius: "100px" }}>
                    <div className={"framer-rpv4hj"} data-framer-name={"Base Container"}>
                      <div className={"framer-1l6gsd6"} data-framer-name={"Mobile Menu Wrapp"}>
                        <div className={"framer-1jlunes-container"}>
                          <a className={"framer-hD525 framer-do1alt framer-v-do1alt framer-4j1ocn"} data-framer-name={"Logo Company White"} href={"/"} style={{ height: "100%", width: "100%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/FlqF1c3trclcifp0T0UiAlLAY.svg"} alt={"Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </a>
                        </div>
                      </div>
                      <nav className={"framer-k1prli"} data-framer-name={"Nav Links Wrapper"}>
                        <div className={"framer-ncrdxr"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/espaces"}>
                              Nos espaces
                            </a>
                          </p><div data-bg-submenu="true"><a href="/espaces">Nos espaces</a><a href="/espaces/fonctionnel">Entraînement fonctionnel</a><a href="/espaces/cross-cardio">Cross / Cardio</a><a href="/location-de-terrain">Location de terrain</a></div>
                        </div>
                        <div className={"framer-9ynktl"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/cours"}>
                              Nos cours
                            </a>
                          </p><div data-bg-submenu="true"><a href="/cours">Tous les cours</a><a href="/coaching">Coaching</a></div>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/tarifs"}>
                              Tarifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/planning"}>
                              Planning
                            </a>
                          </p>
                        </div>
                        <a className={"framer-syx9gz-container"} href={"/contact"} style={{ textDecoration: "none" }}>
                          <div className={"framer-YEzW6 framer-X8adU framer-1mk5516 framer-v-1mk5516"} data-framer-name={"Default"} data-highlight={"true"}>
                            <div className={"framer-2cc3a7"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ht2NPA9Z3-XC_5sBkkp)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-ht2NPA9Z3-XC_5sBkkp": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-yWUYpr9Dg-XC_5sBkkp": "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ht2NPA9Z3-XC_5sBkkp))" }}>
                                Contact
                              </p>
                            </div>
                            <div data-framer-name={"Icon"} style={{ imageRendering: "pixelated", flexShrink: "0", fill: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", color: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }} className={"framer-155m2hi"} aria-hidden={"true"}>
                              <div className={"svgContainer"} style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                <svg style={{ width: "100%", height: "100%" }} viewBox={"0 0 24 24"}>
                                  <use href={"#svg1231980477_257"} />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      </nav>
                      <div className={"framer-155lzj3-container"} style={{ opacity: "1", transform: "none" }}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/seance-essai"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Séance d&rsquo;essai
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <section className={"framer-1ucpv17"} data-framer-name={"Hero Banner Section"}>
              <div className={"ssr-variant hidden-ugdvmg hidden-9md6lv"}>
                <div className={"framer-r65kbw"} data-framer-name={"Hero Banner"}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                    <img decoding={"async"} width={"1920"} height={"940"} sizes={"(min-width: 1280px) 100vw, (max-width: 991px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw"} srcSet={"/assets/beauregard/hero.webp"} src={"/assets/beauregard/hero.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "right center", objectFit: "cover" }} />
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(180deg, rgba(10,20,15,0.25) 0%, rgba(10,20,15,0.55) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                <div className={"framer-r65kbw"} data-framer-name={"Hero Banner"}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                    <img decoding={"async"} width={"1920"} height={"940"} sizes={"(min-width: 1280px) 100vw, (max-width: 991px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw"} srcSet={"/assets/beauregard/hero.webp"} src={"/assets/beauregard/hero.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "81.8% 37.9%", objectFit: "cover" }} />
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(180deg, rgba(10,20,15,0.25) 0%, rgba(10,20,15,0.55) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className={"ssr-variant hidden-ugdvmg hidden-72rtr7"}>
                <div className={"framer-r65kbw"} data-framer-name={"Hero Banner"}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                    <img decoding={"async"} width={"1920"} height={"940"} sizes={"(min-width: 1280px) 100vw, (max-width: 991px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw"} srcSet={"/assets/beauregard/hero.webp"} src={"/assets/beauregard/hero.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "97.2% 35.3%", objectFit: "cover" }} />
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(180deg, rgba(10,20,15,0.25) 0%, rgba(10,20,15,0.55) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className={"framer-1qe2nuw"} data-framer-name={"Base Container"}>
                <div className={"framer-hx6bo0"} data-framer-name={"Text Content Wrapper"}>
                  <div className={"framer-1321gch"} data-framer-name={"Title Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"ssr-variant hidden-ugdvmg hidden-9md6lv"}>
                      <div className={"framer-1j19498"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h1 style={{ "--font-selector": "SW50ZXItRXh0cmFCb2xk", "--framer-font-family": "&quot", "--framer-font-size": "80px", "--framer-font-weight": "800", "--framer-letter-spacing": "-1.92px", "--framer-line-height": "1em", "--framer-text-color": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Le meilleur du
                          </span>
                          {" "}sport & de la nature.
                        </h1>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                      <div className={"framer-1j19498"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h1 style={{ "--font-selector": "SW50ZXItRXh0cmFCb2xk", "--framer-font-family": "&quot", "--framer-font-size": "48px", "--framer-font-weight": "800", "--framer-letter-spacing": "-1.92px", "--framer-line-height": "1.1em", "--framer-text-color": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Le meilleur du
                          </span>
                          {" "}sport & de la nature.
                        </h1>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-ugdvmg hidden-72rtr7"}>
                      <div className={"framer-1j19498"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h1 style={{ "--font-selector": "SW50ZXItRXh0cmFCb2xk", "--framer-font-family": "&quot", "--framer-font-size": "62px", "--framer-font-weight": "800", "--framer-letter-spacing": "-1.92px", "--framer-line-height": "1em", "--framer-text-color": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))" }} className={"framer-text"}>
                          <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                            Le meilleur du
                          </span>
                          {" "}sport & de la nature.
                        </h1>
                      </div>
                    </div>
                    <div className={"framer-clr3bu"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))" }}>
                        Le Parc Beauregard, votre destination fitness, bien-être et coaching en bord de Loire, à Rochecorbon.
                      </p>
                    </div>
                  </div>
                  <div className={"framer-13iq7p0"} data-framer-name={"Button Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"ssr-variant hidden-ugdvmg"}>
                      <div className={"framer-1c3uda1-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/cours"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Nos cours
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                      <div className={"framer-1c3uda1-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", maxWidth: "100%", width: "100%", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/cours"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Nos cours
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-ugdvmg"}>
                      <div className={"framer-147oupp-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5991b8f4-4409-4988-9af9-ed84b35a240c, rgb(28, 57, 23))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Devenir membre
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                      <div className={"framer-147oupp-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", maxWidth: "100%", width: "100%", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-5991b8f4-4409-4988-9af9-ed84b35a240c, rgb(28, 57, 23))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Devenir membre
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"framer-1etvfel"} data-framer-name={"Content Wrapper"}>
                  <div className={"framer-1t9jkhq"} data-framer-name={"Testimonials Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"framer-msmimb"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }}>
                        Rejoignez une communauté de{" "}
                        <span style={{ "--framer-text-color": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))" }} className={"framer-text"}>
                          sportifs et passionnés
                        </span>
                        {" "}qui se dépassent chaque jour, en pleine nature au bord de la Loire.
                      </p>
                    </div>
                    <div className={"framer-eanrls"} data-framer-name={"Profile Wrapper"}>
                      <div className={"framer-vcil6l"} data-framer-name={"Avatars Wrapper"}>
                        <div className={"framer-mpjaqz"} data-border={"true"} data-framer-name={"Image Wrapper"}>
                          <div className={"framer-1nl5rij"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"640"} height={"640"} sizes={"(min-width: 1280px) 42px, (min-width: 992px) and (max-width: 1279px) 42px, (max-width: 991px) 42px"} srcSet={"/assets/beauregard/avatar-1.webp"} src={"/assets/beauregard/avatar-1.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-1e0v27t"} data-border={"true"} data-framer-name={"Image Wrapper"}>
                          <div className={"framer-gazwll"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"640"} height={"640"} sizes={"(min-width: 1280px) 42px, (min-width: 992px) and (max-width: 1279px) 42px, (max-width: 991px) 42px"} srcSet={"/assets/beauregard/avatar-2.webp"} src={"/assets/beauregard/avatar-2.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-18igyt6"} data-border={"true"} data-framer-name={"Image Wrapper"}>
                          <div className={"framer-faz4m3"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"640"} height={"640"} sizes={"(min-width: 1280px) 42px, (min-width: 992px) and (max-width: 1279px) 42px, (max-width: 991px) 42px"} srcSet={"/assets/beauregard/avatar-3.webp"} src={"/assets/beauregard/avatar-3.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-148a4o5"} data-border={"true"} data-framer-name={"Image Wrapper"}>
                          <div className={"framer-jw7xoz"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"640"} height={"640"} sizes={"(min-width: 1280px) 42px, (min-width: 992px) and (max-width: 1279px) 42px, (max-width: 991px) 42px"} srcSet={"/assets/beauregard/avatar-4.webp"} src={"/assets/beauregard/avatar-4.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1154i6j"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-1pwuzz7"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                          <h6 className={"framer-text framer-styles-preset-gmdg5a"} data-styles-preset={"XCvretOoF"} style={{ "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }}>
                            40
                          </h6>
                        </div>
                        <div className={"framer-o9qhcw"} data-framer-name={"Body"} style={{ transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))" }}>
                            cours collectifs / semaine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-m6je2h"} data-framer-name={"Testimonials Slider Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"ssr-variant hidden-ugdvmg"}>
                      <div className={"framer-10vvm2b-container"}>
                        <div className={"framer-fRk35 framer-ovLcB framer-gbuwA framer-glftlv framer-v-glftlv"} data-framer-name={"Default"} style={{ maxWidth: "100%", width: "100%" }}>
                          <div className={"framer-nau4xd"} data-framer-name={"Testimonials"}>
                            <div className={"framer-7nb9c6"} data-framer-name={"Testimonials 1"}>
                              <div className={"framer-kw9hc"} data-framer-name={"Heading"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  « Un lieu magnifique »
                                </h3>
                              </div>
                              <div className={"framer-68cjjs"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  Janelle L.
                                </p>
                              </div>
                            </div>
                            <div className={"framer-1poeglk"} data-framer-name={"Testimonials 2"} style={{ transform: "translateY(-50%)" }}>
                              <div className={"framer-vqz9pp"} data-framer-name={"Heading"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  « Très bonne ambiance ! »
                                </h3>
                              </div>
                              <div className={"framer-14x0unj"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  Christele P.
                                </p>
                              </div>
                            </div>
                            <div className={"framer-uhrh4m"} data-framer-name={"Testimonials 3"} style={{ transform: "translateY(-50%)" }}>
                              <div className={"framer-ru10e4"} data-framer-name={"Heading"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  « Une équipe à votre écoute »
                                </h3>
                              </div>
                              <div className={"framer-aetaog"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  Jemsa F.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1ydz0hg"} data-framer-name={"Dots Wrapper"}>
                            <div className={"framer-8zspcm"} data-framer-name={"Dots"} data-highlight={"true"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} tabIndex={"0"} />
                            <div className={"framer-36borw"} data-framer-name={"Dots"} data-highlight={"true"} style={{ backgroundColor: "var(--token-ebc97e9b-043d-45c1-8613-8642c9de28e6, rgba(255, 255, 255, 0.5))", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} tabIndex={"0"} />
                            <div className={"framer-1eaumol"} data-framer-name={"Dots"} data-highlight={"true"} style={{ backgroundColor: "var(--token-ebc97e9b-043d-45c1-8613-8642c9de28e6, rgba(255, 255, 255, 0.5))", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} tabIndex={"0"} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                      <div className={"framer-10vvm2b-container"}>
                        <div className={"framer-fRk35 framer-ovLcB framer-gbuwA framer-glftlv framer-v-xifo4v"} data-framer-name={"Phone"} style={{ maxWidth: "100%", width: "100%" }}>
                          <div className={"framer-nau4xd"} data-framer-name={"Testimonials"}>
                            <div className={"framer-7nb9c6"} data-framer-name={"Testimonials 1"}>
                              <div className={"framer-kw9hc"} data-framer-name={"Heading"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  « Un lieu magnifique »
                                </h3>
                              </div>
                              <div className={"framer-68cjjs"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  Janelle L.
                                </p>
                              </div>
                            </div>
                            <div className={"framer-1poeglk"} data-framer-name={"Testimonials 2"} style={{ transform: "translateY(-50%)" }}>
                              <div className={"framer-vqz9pp"} data-framer-name={"Heading"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  « Très bonne ambiance ! »
                                </h3>
                              </div>
                              <div className={"framer-14x0unj"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  Christele P.
                                </p>
                              </div>
                            </div>
                            <div className={"framer-uhrh4m"} data-framer-name={"Testimonials 3"} style={{ transform: "translateY(-50%)" }}>
                              <div className={"framer-ru10e4"} data-framer-name={"Heading"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  « Une équipe à votre écoute »
                                </h3>
                              </div>
                              <div className={"framer-aetaog"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                  Jemsa F.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1ydz0hg"} data-framer-name={"Dots Wrapper"}>
                            <div className={"framer-8zspcm"} data-framer-name={"Dots"} data-highlight={"true"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} tabIndex={"0"} />
                            <div className={"framer-36borw"} data-framer-name={"Dots"} data-highlight={"true"} style={{ backgroundColor: "var(--token-ebc97e9b-043d-45c1-8613-8642c9de28e6, rgba(255, 255, 255, 0.5))", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} tabIndex={"0"} />
                            <div className={"framer-1eaumol"} data-framer-name={"Dots"} data-highlight={"true"} style={{ backgroundColor: "var(--token-ebc97e9b-043d-45c1-8613-8642c9de28e6, rgba(255, 255, 255, 0.5))", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} tabIndex={"0"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-y9zl1l"} data-framer-name={"Video Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <ClubVideo />
                    <div className={"framer-1q7n2ul"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <h5 className={"framer-text framer-styles-preset-1a2qg92"} data-styles-preset={"Hrg3DnSgc"} style={{ "--framer-text-color": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))" }}>
                        Le club comme si vous y étiez : la visite en vidéo.
                      </h5>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-8sf830"}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                          <img decoding={"async"} width={"1920"} height={"2880"} sizes={"(min-width: 1280px) max((min(100vw, 1320px) - 146px) / 2, 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px) - 40px, 220px), (min-width: 992px) and (max-width: 1279px) calc(min(100vw, 1320px) - 80px)"} srcSet={"/assets/beauregard/events.webp"} src={"/assets/beauregard/events.webp"} alt={"Adhérents pendant un événement du club"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "30.7% 9.8%", objectFit: "cover" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={"framer-1o000nw"} data-framer-name={"Classes Section"}>
              <div className={"framer-15x7s02"} data-framer-name={"Base Container"}>
                <div className={"framer-1nrk238"} data-framer-name={"Top Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                  <div className={"framer-23amme"} data-framer-name={"Title Wrapper"}>
                    <div className={"framer-1abk861"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))" }}>
                        Nos offres
                      </p>
                    </div>
                    <div className={"ssr-variant hidden-ugdvmg"}>
                      <div className={"framer-tq98f2"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h2 style={{ "--framer-font-size": "50px", "--framer-letter-spacing": "-1.5px", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                          Nous réinventons votre façon{" "}
                          <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                            de vivre le{" "}
                          </span>
                          sport.
                        </h2>
                      </div>
                    </div>
                    <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                      <div className={"framer-tq98f2"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                        <h2 style={{ "--framer-font-size": "40px", "--framer-letter-spacing": "-1.5px", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                          Nous réinventons votre façon{" "}
                          <span style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-weight": "700" }} className={"framer-text"}>
                            de vivre le{" "}
                          </span>
                          sport.
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-1dv6csd-container hidden-ugdvmg"}>
                    <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/cours"}>
                      <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                          Tous nos services
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className={"framer-1x8ll3j"}>
                  <div className={"ssr-variant hidden-ugdvmg"}>
                    <div className={"ssr-variant"}>
                      <div className={"framer-1di4wcj-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                        <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-16nx98q framer-maxoa4"} data-framer-name={"Default"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/coaching"}>
                          <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                            <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                            <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px), 1px)"} srcSet={"/assets/beauregard/coaching.webp"} src={"/assets/beauregard/coaching.webp"} alt={"Séance de coaching au Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                          <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                            <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Coaching
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
                                    <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-1di4wcj-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                        <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-16nx98q framer-maxoa4"} data-framer-name={"Default"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/cours"}>
                          <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                            <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                            <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(max(min(100vw, 1320px) - 60px, 1px), 1px), 100vw), (min-width: 992px) and (max-width: 1279px) max(max(max(min(100vw, 1320px) - 40px, 1px), 1px), 100vw), (max-width: 991px) max(max(max(min(100vw, 1320px) - 40px, 280px), 1px), 100vw)"} srcSet={"/assets/beauregard/cours.webp"} src={"/assets/beauregard/cours.webp"} alt={"Cours collectif au Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </div>
                          <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                            <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                Cours
                              </h3>
                            </div>
                          </div>
                          <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                            <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                              <div className={"framer-1th3nxd-container"}>
                                <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                  <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                      40 cours / semaine
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
                                    <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-1di4wcj-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                        <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-16nx98q framer-maxoa4"} data-framer-name={"Default"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/location-de-terrain"}>
                          <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                            <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                            <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"1500"} height={"1000"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px)"} srcSet={"/assets/beauregard/location.webp"} src={"/assets/beauregard/location.webp"} alt={"Terrain de football en pelouse synthétique"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "36.3% 0.9%", objectFit: "cover" }} />
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
                                    <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                    <div className={"framer-1di4wcj-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-14kd23d framer-maxoa4"} data-framer-name={"Phone"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/coaching"}>
                        <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                          <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                          <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(min(100vw, 1320px) - 60px, 1px), 1px), (min-width: 992px) and (max-width: 1279px) max(max(min(100vw, 1320px) - 40px, 1px), 1px), (max-width: 991px) max(max(min(100vw, 1320px) - 40px, 280px), 1px)"} srcSet={"/assets/beauregard/coaching.webp"} src={"/assets/beauregard/coaching.webp"} alt={"Séance de coaching au Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                          <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Coaching
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
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={"framer-1di4wcj-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <a className={"framer-nURDP framer-ovLcB framer-zUcIZ framer-16nx98q framer-v-14kd23d framer-maxoa4"} data-framer-name={"Phone"} style={{ width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} href={"/cours"}>
                        <div className={"framer-1m8bp3k"} data-framer-name={"Thumbnail"} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "translateX(-50%)" }}>
                          <div className={"framer-1o8anf"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-617eea88-08bd-4f71-aa3d-29b363f5895a, rgba(0, 0, 0, 0.3))" }} />
                          <div className={"framer-r69y6i"} data-framer-name={"Image"} style={{ transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(max(min(100vw, 1320px) - 60px, 1px), 1px), 100vw), (min-width: 992px) and (max-width: 1279px) max(max(max(min(100vw, 1320px) - 40px, 1px), 1px), 100vw), (max-width: 991px) max(max(max(min(100vw, 1320px) - 40px, 280px), 1px), 100vw)"} srcSet={"/assets/beauregard/cours.webp"} src={"/assets/beauregard/cours.webp"} alt={"Cours collectif au Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                          </div>
                        </div>
                        <div className={"framer-25lc8r"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}>
                          <div className={"framer-4ec7ix"} data-framer-name={"Title"} style={{ "--extracted-a0htzi": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <h3 className={"framer-text framer-styles-preset-h6qwrh"} data-styles-preset={"CPtY7F2OK"} style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Cours
                            </h3>
                          </div>
                        </div>
                        <div className={"framer-lmih86"} data-framer-name={"Buttom Wrapper"}>
                          <div className={"framer-53fwqu"} data-framer-name={"Label Wrapper"}>
                            <div className={"framer-1th3nxd-container"}>
                              <div className={"framer-yEmYD framer-fN9WN framer-OI0K7 framer-1en4hj5 framer-v-1en4hj5"} data-framer-name={"Default"} style={{ backdropFilter: "blur(34px)", backgroundColor: "var(--token-22c4b526-658d-4b78-8039-4a786402e87a, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(34px)", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                                <div className={"framer-1uixvs3"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--variable-reference-AOW62B2JF-Qi9kGBGTT)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-AOW62B2JF-Qi9kGBGTT": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                                  <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-AOW62B2JF-Qi9kGBGTT))" }}>
                                    40 cours / semaine
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
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/lTza15jEdDwI9K68idF0h1rBJNo.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
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
                  <div className={"framer-e5m509-container hidden-72rtr7 hidden-9md6lv"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/cours"}>
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
            <section className={"framer-13tuqya"} data-framer-name={"À propos Section"}>
              <div className={"framer-1cz7dli"} data-framer-name={"Base Container"}>
                <div className={"framer-pdn7zp"} data-framer-name={"Title Wrapper"}>
                  <div className={"framer-ukjoyl"} data-framer-name={"Body"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))" }}>
                      À propos
                    </p>
                  </div>
                  <div className={"ssr-variant hidden-ugdvmg"}>
                    <div className={"framer-1kolcvt"} data-framer-name={"Heading"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "50px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "center", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                        La destination ultime{" "}
                        <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                          du sport & du bien-être.
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                    <div className={"framer-1kolcvt"} data-framer-name={"Heading"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "40px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-alignment": "center", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                        La destination ultime{" "}
                        <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                          du sport & du bien-être.
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className={"framer-kf258p"} data-framer-name={"Body"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))" }}>
                      Bien plus qu'une salle de sport : une communauté tournée vers le mouvement, la motivation et l'excellence, en pleine nature au bord de la Loire.
                    </p>
                  </div>
                </div>
                <div className={"framer-9d17r8"} data-framer-name={"Bottom Content Wrapper"}>
                  <div className={"framer-cdntrg"} data-framer-name={"À propos Items Wrapper"}>
                    <div className={"framer-o1rhxk-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"ssr-variant hidden-ugdvmg"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1asic4e"} data-framer-name={"Default"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1275"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/nature.webp"} src={"/assets/beauregard/nature.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "46.7% 52.5%", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Excellence sportive
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1kfa5dh"} data-framer-name={"Phone"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1275"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/nature.webp"} src={"/assets/beauregard/nature.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "46.7% 52.5%", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Excellence sportive
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"framer-yaitn3-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"ssr-variant hidden-ugdvmg"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1asic4e"} data-framer-name={"Default"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1876"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/fonctionnel.webp"} src={"/assets/beauregard/fonctionnel.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Communauté & Support
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1kfa5dh"} data-framer-name={"Phone"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1876"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/fonctionnel.webp"} src={"/assets/beauregard/fonctionnel.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Communauté & Support
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"framer-zhpylp-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"ssr-variant hidden-ugdvmg"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1asic4e"} data-framer-name={"Default"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1282"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/coachs-group.webp"} src={"/assets/beauregard/coachs-group.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Accessible à tous
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1kfa5dh"} data-framer-name={"Phone"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1282"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/coachs-group.webp"} src={"/assets/beauregard/coachs-group.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Accessible à tous
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"framer-1p6x4i4-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"ssr-variant hidden-ugdvmg"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1asic4e"} data-framer-name={"Default"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/hero-alt.webp"} src={"/assets/beauregard/hero-alt.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Progrès & innovation
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1kfa5dh"} data-framer-name={"Phone"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/hero-alt.webp"} src={"/assets/beauregard/hero-alt.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Progrès & innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"framer-8aw89s-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"ssr-variant hidden-ugdvmg"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1asic4e"} data-framer-name={"Default"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/cardio-alt.webp"} src={"/assets/beauregard/cardio-alt.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Bien-être & équilibre
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1kfa5dh"} data-framer-name={"Phone"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) 100vw, (min-width: 992px) and (max-width: 1279px) 100vw, (max-width: 991px) 100vw"} srcSet={"/assets/beauregard/cardio-alt.webp"} src={"/assets/beauregard/cardio-alt.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Bien-être & équilibre
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"framer-1gnv7e7-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"ssr-variant hidden-ugdvmg"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1asic4e"} data-framer-name={"Default"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(max(min(100vw, 1320px) - 60px, 1px), 1px), 100vw), (min-width: 992px) and (max-width: 1279px) max(max(max(min(100vw, 1320px) - 40px, 1px), 1px), 100vw), (max-width: 991px) max(max(max(min(100vw, 1320px) - 40px, 280px), 1px), 100vw)"} srcSet={"/assets/beauregard/cours.webp"} src={"/assets/beauregard/cours.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Passion du mouvement
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                        <div className={"framer-wvjDD framer-fN9WN framer-OI0K7 framer-1asic4e framer-v-1kfa5dh"} data-framer-name={"Phone"}>
                          <div className={"framer-w3ryt"} data-framer-name={"Image"} style={{ borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(max(max(min(100vw, 1320px) - 60px, 1px), 1px), 100vw), (min-width: 992px) and (max-width: 1279px) max(max(max(min(100vw, 1320px) - 40px, 1px), 1px), 100vw), (max-width: 991px) max(max(max(min(100vw, 1320px) - 40px, 280px), 1px), 100vw)"} srcSet={"/assets/beauregard/cours.webp"} src={"/assets/beauregard/cours.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                            </div>
                            <div className={"framer-1ii3au0"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-2775fadf-40f0-4080-9144-72cb182f28db, rgba(0, 0, 0, 0.5))" }} />
                          </div>
                          <div className={"framer-9wvgr8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Passion du mouvement
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"framer-1dpw84l-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"ssr-variant hidden-ugdvmg"}>
                      <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/espaces"}>
                        <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                            En savoir plus
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                      <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/espaces"}>
                        <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                            En savoir plus
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={"framer-16lo9m0"} data-framer-name={"Our Values Section"}>
              <div className={"framer-1gtllgb"} data-framer-name={"Base Container"}>
                <div className={"framer-1awmkcd"} data-framer-name={"Text Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                  <div className={"framer-1yshyzr"} data-framer-name={"Title Wrapper"}>
                    <div className={"framer-1bgl8t6"} data-framer-name={"Body"} style={{ transform: "none" }}>
                      <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))" }}>
                        Nos valeurs
                      </p>
                    </div>
                    <div className={"framer-jxlopv"} data-framer-name={"Heading"} style={{ transform: "none" }}>
                      <h2 style={{ "--font-selector": "SW50ZXItQm9sZA==", "--framer-font-family": "&quot", "--framer-font-size": "50px", "--framer-font-weight": "700", "--framer-letter-spacing": "-1.5px", "--framer-text-color": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))" }} className={"framer-text"}>
                        <span style={{ "--font-selector": "SW50ZXI=", "--framer-font-family": "&quot", "--framer-font-weight": "400" }} className={"framer-text"}>
                          Une communauté portée par{" "}
                        </span>
                        la passion, la performance et le progrès.
                      </h2>
                    </div>
                  </div>
                  <div className={"framer-rfmzw2"} data-framer-name={"Values Wrapper"}>
                    <div className={"ssr-variant"}>
                      <div className={"framer-zkgnir-container"}>
                        <div className={"framer-S1s5k framer-zUcIZ framer-kEOSd framer-ibos86 framer-v-ibos86"} data-border={"true"} data-framer-name={"Default"} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                          <div className={"framer-1xbb7zo"} data-framer-name={"Icon"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"27"} height={"32"} src={"/assets/framerusercontent.com/images/f1PRfD5Uxe55WYuC6fWEJVDypA.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                          <div className={"framer-fhxo2a"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                              Excellence
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-utgg03-container"}>
                        <div className={"framer-S1s5k framer-zUcIZ framer-kEOSd framer-ibos86 framer-v-ibos86"} data-border={"true"} data-framer-name={"Default"} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                          <div className={"framer-1xbb7zo"} data-framer-name={"Icon"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"27"} height={"32"} src={"/assets/framerusercontent.com/images/CHCVeiB1ujTRQAPQK3xYLcMiZ8.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                          <div className={"framer-fhxo2a"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                              Communauté
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-236xw8-container"}>
                        <div className={"framer-S1s5k framer-zUcIZ framer-kEOSd framer-ibos86 framer-v-ibos86"} data-border={"true"} data-framer-name={"Default"} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                          <div className={"framer-1xbb7zo"} data-framer-name={"Icon"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"27"} height={"32"} src={"/assets/framerusercontent.com/images/6zSK36f8nPc0YDZURvTVaj3Y.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                          <div className={"framer-fhxo2a"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                              Motivation
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"ssr-variant"}>
                      <div className={"framer-19w0x50-container"}>
                        <div className={"framer-S1s5k framer-zUcIZ framer-kEOSd framer-ibos86 framer-v-ibos86"} data-border={"true"} data-framer-name={"Default"} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8f4f0a97-886c-442e-9b68-fba0a777697e, rgb(229, 229, 229))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>
                          <div className={"framer-1xbb7zo"} data-framer-name={"Icon"}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"26"} height={"27"} src={"/assets/framerusercontent.com/images/gKavYaGgysPZA7KY5btL71nGBE.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                          <div className={"framer-fhxo2a"} data-framer-name={"Heading"} style={{ "--extracted-1eung3n": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h4 className={"framer-text framer-styles-preset-1f6c2a0"} data-styles-preset={"VAATHvepD"} style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                              Bien-être & équilibre
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant"}>
                  <div className={"framer-wk1fme"} style={{ willChange: "transform", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"1920"} height={"2880"} sizes={"(min-width: 1280px) max((min(100vw, 1320px) - 138px) / 2, 1px), (max-width: 991px) calc(min(100vw, 1320px) - 40px), (min-width: 992px) and (max-width: 1279px) max((min(100vw, 1320px) - 80px) / 2, 1px)"} srcSet={"/assets/beauregard/community.webp"} src={"/assets/beauregard/community.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "57.1% 35.8%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={"framer-1l26hcq"} data-framer-name={"Testimonials Section"}>
              <div className={"framer-1rc5e1g"} data-framer-name={"Base Container"}>
                <div className={"ssr-variant hidden-ugdvmg hidden-9md6lv"}>
                  <div className={"framer-1n8chwp-container"}>
                    <div className={"framer-pZWsA framer-fN9WN framer-gbuwA framer-1attmxx framer-v-1attmxx"} data-framer-name={"Desktop"} style={{ width: "100%", willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-135qqv"} data-framer-name={"Top Content Wrapper"}>
                        <div className={"framer-1kne1lv"} data-framer-name={"Title Wrapper"}>
                          <div className={"framer-qk0nfc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                              Témoignages
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
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className={"framer-pnxu2m-container"}>
                            <button className={"framer-NEM2f framer-c2t8k9 framer-v-c2t8k9"} data-framer-name={"Default"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "1" }} tabIndex={"0"}>
                              <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1gf08qd"} data-framer-name={"Testimonials Wrapper"}>
                        <div className={"framer-1sa6cnf"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-k0ee4n-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Très bonne ambiance ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Super bien ! Les coachs sont très pro et sympa, très bonne ambiance ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Christele P.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"CP"} photo={"/assets/beauregard/avis/christele-p.webp"} illu={"/assets/beauregard/avis/illu-1.svg"} auteur={"Christele P."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-kgast6-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Une équipe à votre écoute »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Super club de sport, le personnel est à votre écoute pour vous aider à atteindre vos objectifs : perte de poids, reprise du sport, amélioration des performances… »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Jemsa F.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"JF"} photo={"/assets/beauregard/avis/jemsa-f.webp"} illu={"/assets/beauregard/avis/illu-2.svg"} auteur={"Jemsa F."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1vr0nqt-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1ymzwmf"} data-framer-name={"Default"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Un lieu magnifique »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'ai découvert ce club lors de l'événement avec Romain Prevedello. J'adore ! Le lieu est magnifique, avec un espace extérieur très agréable et calme. Je recommande ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Janelle L.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"JL"} photo={"/assets/beauregard/avis/janelle-l.webp"} illu={"/assets/beauregard/avis/illu-3.svg"} auteur={"Janelle L."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
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
                <div className={"ssr-variant hidden-72rtr7 hidden-9md6lv"}>
                  <div className={"framer-1n8chwp-container"}>
                    <div className={"framer-pZWsA framer-fN9WN framer-gbuwA framer-1attmxx framer-v-v55uu4"} data-framer-name={"Phone"} style={{ width: "100%", willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-135qqv"} data-framer-name={"Top Content Wrapper"}>
                        <div className={"framer-1kne1lv"} data-framer-name={"Title Wrapper"}>
                          <div className={"framer-qk0nfc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                              Témoignages
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
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Très bonne ambiance ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Super bien ! Les coachs sont très pro et sympa, très bonne ambiance ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Christele P.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"CP"} photo={"/assets/beauregard/avis/christele-p.webp"} illu={"/assets/beauregard/avis/illu-1.svg"} auteur={"Christele P."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-kgast6-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Une équipe à votre écoute »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Super club de sport, le personnel est à votre écoute pour vous aider à atteindre vos objectifs : perte de poids, reprise du sport, amélioration des performances… »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Jemsa F.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"JF"} photo={"/assets/beauregard/avis/jemsa-f.webp"} illu={"/assets/beauregard/avis/illu-2.svg"} auteur={"Jemsa F."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1vr0nqt-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-ss1i62"} data-framer-name={"Phone"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Un lieu magnifique »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'ai découvert ce club lors de l'événement avec Romain Prevedello. J'adore ! Le lieu est magnifique, avec un espace extérieur très agréable et calme. Je recommande ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Janelle L.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"JL"} photo={"/assets/beauregard/avis/janelle-l.webp"} illu={"/assets/beauregard/avis/illu-3.svg"} auteur={"Janelle L."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
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
                                <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className={"framer-qrpm0j-container"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                          <button className={"framer-NEM2f framer-c2t8k9 framer-v-tzf896"} data-framer-name={"Phone"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "1" }} tabIndex={"0"}>
                            <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"ssr-variant hidden-ugdvmg hidden-72rtr7"}>
                  <div className={"framer-1n8chwp-container"}>
                    <div className={"framer-pZWsA framer-fN9WN framer-gbuwA framer-1attmxx framer-v-1attmxx"} data-framer-name={"Desktop"} style={{ width: "100%", willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-135qqv"} data-framer-name={"Top Content Wrapper"}>
                        <div className={"framer-1kne1lv"} data-framer-name={"Title Wrapper"}>
                          <div className={"framer-qk0nfc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49)))" }}>
                              Témoignages
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
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className={"framer-pnxu2m-container"}>
                            <button className={"framer-NEM2f framer-c2t8k9 framer-v-c2t8k9"} data-framer-name={"Default"} data-highlight={"true"} data-reset={"button"} style={{ backgroundColor: "var(--token-ce7cac9b-68d2-43aa-b17a-9ff7b974f476, rgb(207, 231, 203))", height: "100%", width: "100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderTopLeftRadius: "50%", borderTopRightRadius: "50%", opacity: "1" }} tabIndex={"0"}>
                              <div className={"framer-5ddiju"} data-framer-name={"Icon"} style={{ opacity: "1" }}>
                                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                                  <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/husH6l0yBVPfc3Ir95YwAn8hww.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={"framer-1gf08qd"} data-framer-name={"Testimonials Wrapper"}>
                        <div className={"framer-1sa6cnf"} data-framer-name={"Testimonials Wrapp"}>
                          <div className={"framer-k0ee4n-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Très bonne ambiance ! »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Super bien ! Les coachs sont très pro et sympa, très bonne ambiance ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Christele P.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"CP"} photo={"/assets/beauregard/avis/christele-p.webp"} illu={"/assets/beauregard/avis/illu-1.svg"} auteur={"Christele P."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-kgast6-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Une équipe à votre écoute »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « Super club de sport, le personnel est à votre écoute pour vous aider à atteindre vos objectifs : perte de poids, reprise du sport, amélioration des performances… »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Jemsa F.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"JF"} photo={"/assets/beauregard/avis/jemsa-f.webp"} illu={"/assets/beauregard/avis/illu-2.svg"} auteur={"Jemsa F."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"framer-1vr0nqt-container"}>
                            <div className={"framer-wnAi6 framer-zUcIZ framer-gbuwA framer-fN9WN framer-1ymzwmf framer-v-1wqgbq2"} data-framer-name={"Tablet"} style={{ backgroundColor: "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", width: "100%", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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
                                    « Un lieu magnifique »
                                  </h4>
                                </div>
                                <div className={"framer-lpsxj0"} data-framer-name={"Testimonials Wrapper"}>
                                  <div className={"framer-1akfa26"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                                      « J'ai découvert ce club lors de l'événement avec Romain Prevedello. J'adore ! Le lieu est magnifique, avec un espace extérieur très agréable et calme. Je recommande ! »
                                    </p>
                                  </div>
                                  <div className={"framer-1egm2r7"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                    <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                                      Janelle L.
                                    </p>
                                  </div>
                                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
                                    <AvisAvatar initiales={"JL"} photo={"/assets/beauregard/avis/janelle-l.webp"} illu={"/assets/beauregard/avis/illu-3.svg"} auteur={"Janelle L."} />
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgb(115, 115, 115)", fontFamily: '"Inter", sans-serif' }}>
                                      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
                                      Avis Google certifié
                                    </span>
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
              </div>
            </section>
          </div>
          <div id={"overlay"} />
          <div className={"framer-1hytouz"} />
          <div className={"framer-blqbix-container"}>
            <div className={"ssr-variant hidden-1k2w4ql hidden-ok5eee"}>
              <section className={"framer-RJVT7 framer-fN9WN framer-TvPE6 framer-80BYq framer-za4ptn framer-v-za4ptn"} data-framer-name={"Desktop"} style={{ "--tvmdtq": "0px 0px 130px 0px", "--xh5mh9": "0px 0px 130px 0px", backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%" }}>
                <div className={"framer-p1h63k"} data-framer-name={"Base Container"}>
                  <div className={"framer-t4bbi2"} data-framer-name={"Image Wrapper"} style={{ willChange: "transform", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(min(100vw - NaNpx, 1320px) - 60px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(100vw - NaNpx, 1320px) - 40px, 1px), (max-width: 991.98px) max(min(100vw - NaNpx, 1320px) - 40px, 1px)"} srcSet={"/assets/beauregard/events.webp"} src={"/assets/beauregard/events.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "50% 40%", objectFit: "cover" }} />
                    </div>
                    <div className={"framer-1ob2n22"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-6f61ded6-e6ed-47f8-ab65-d17743e9ab35, rgba(0, 0, 0, 0.7))" }} />
                    <div className={"framer-1gjros1"} data-framer-name={"Text Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-b7det5"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-75712a"} data-framer-name={"Label Wrapper"}>
                          <div className={"framer-3cp5pc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Événements
                            </p>
                          </div>
                          <div className={"framer-1o67ouv"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h2 className={"framer-text framer-styles-preset-1bv9ryn"} data-styles-preset={"BpSVcpaxx"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Nos prochains rendez-vous
                            </h2>
                          </div>
                        </div>
                        <div className={"framer-274hjw"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            Toute l'année, le Parc Beauregard réunit sport et communauté autour d'événements, de challenges et de rencontres pour vous motiver et vous dépasser.
                          </p>
                        </div>
                      </div>
                      <div className={"framer-1rwmebu-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/evenements"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Tous les événements
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-ok5eee"}>
              <section className={"framer-RJVT7 framer-fN9WN framer-TvPE6 framer-80BYq framer-za4ptn framer-v-1yqq8nb"} data-framer-name={"Tablet"} style={{ "--tvmdtq": "0px 0px 130px 0px", "--xh5mh9": "0px 0px 80px 0px", backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%" }}>
                <div className={"framer-p1h63k"} data-framer-name={"Base Container"}>
                  <div className={"framer-t4bbi2"} data-framer-name={"Image Wrapper"} style={{ willChange: "transform", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(min(100vw - NaNpx, 1320px) - 60px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(100vw - NaNpx, 1320px) - 40px, 1px), (max-width: 991.98px) max(min(100vw - NaNpx, 1320px) - 40px, 1px)"} srcSet={"/assets/beauregard/events.webp"} src={"/assets/beauregard/events.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "50% 40%", objectFit: "cover" }} />
                    </div>
                    <div className={"framer-1ob2n22"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-6f61ded6-e6ed-47f8-ab65-d17743e9ab35, rgba(0, 0, 0, 0.7))" }} />
                    <div className={"framer-1gjros1"} data-framer-name={"Text Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-b7det5"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-75712a"} data-framer-name={"Label Wrapper"}>
                          <div className={"framer-3cp5pc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Événements
                            </p>
                          </div>
                          <div className={"framer-1o67ouv"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h2 className={"framer-text framer-styles-preset-1bv9ryn"} data-styles-preset={"BpSVcpaxx"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Nos prochains rendez-vous
                            </h2>
                          </div>
                        </div>
                        <div className={"framer-274hjw"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            Toute l'année, le Parc Beauregard réunit sport et communauté autour d'événements, de challenges et de rencontres pour vous motiver et vous dépasser.
                          </p>
                        </div>
                      </div>
                      <div className={"framer-1rwmebu-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/evenements"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Tous les événements
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-1k2w4ql"}>
              <section className={"framer-RJVT7 framer-fN9WN framer-TvPE6 framer-80BYq framer-za4ptn framer-v-1n1pbi3"} data-framer-name={"Phone"} style={{ "--tvmdtq": "0px 0px 130px 0px", "--xh5mh9": "0px 0px 80px 0px", backgroundColor: "var(--token-c7f7b4a7-d22a-4efb-a894-f6581be9e186, rgb(245, 245, 245))", width: "100%" }}>
                <div className={"framer-p1h63k"} data-framer-name={"Base Container"}>
                  <div className={"framer-t4bbi2"} data-framer-name={"Image Wrapper"} style={{ willChange: "transform", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"1920"} height={"1280"} sizes={"(min-width: 1280px) max(min(100vw - NaNpx, 1320px) - 60px, 1px), (min-width: 992px) and (max-width: 1279.98px) max(min(100vw - NaNpx, 1320px) - 40px, 1px), (max-width: 991.98px) max(min(100vw - NaNpx, 1320px) - 40px, 1px)"} srcSet={"/assets/beauregard/events.webp"} src={"/assets/beauregard/events.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "50% 40%", objectFit: "cover" }} />
                    </div>
                    <div className={"framer-1ob2n22"} data-framer-name={"BG Color"} style={{ backgroundColor: "var(--token-6f61ded6-e6ed-47f8-ab65-d17743e9ab35, rgba(0, 0, 0, 0.7))" }} />
                    <div className={"framer-1gjros1"} data-framer-name={"Text Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-b7det5"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-75712a"} data-framer-name={"Label Wrapper"}>
                          <div className={"framer-3cp5pc"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Événements
                            </p>
                          </div>
                          <div className={"framer-1o67ouv"} data-framer-name={"Heading"} style={{ "--extracted-1of0zx5": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                            <h2 className={"framer-text framer-styles-preset-1bv9ryn"} data-styles-preset={"BpSVcpaxx"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                              Nos prochains rendez-vous
                            </h2>
                          </div>
                        </div>
                        <div className={"framer-274hjw"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            Toute l'année, le Parc Beauregard réunit sport et communauté autour d'événements, de challenges et de rencontres pour vous motiver et vous dépasser.
                          </p>
                        </div>
                      </div>
                      <div className={"framer-1rwmebu-container"}>
                        <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/evenements"}>
                          <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                            <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                              Tous les événements
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className={"framer-qmpe10-container"}>
            <div className={"ssr-variant hidden-1k2w4ql hidden-ok5eee"}>
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
                          {MENSUEL_DATA.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <div data-ptab="courtes">
                          {COURTES_DATA.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <p style={{ textAlign: "center", fontSize: 14, color: "#737373", margin: "24px 0 0", fontFamily: '"Inter", sans-serif' }}>Bilan forme sur demande.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-ok5eee"}>
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
                          {MENSUEL_DATA.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <div data-ptab="courtes">
                          {COURTES_DATA.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <p style={{ textAlign: "center", fontSize: 14, color: "#737373", margin: "24px 0 0", fontFamily: '"Inter", sans-serif' }}>Bilan forme sur demande.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-1k2w4ql"}>
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
                          {MENSUEL_DATA.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <div data-ptab="courtes">
                          {COURTES_DATA.map((f) => (<PriceCard key={f.name} {...f} />))}
                        </div>
                        <p style={{ textAlign: "center", fontSize: 14, color: "#737373", margin: "24px 0 0", fontFamily: '"Inter", sans-serif' }}>Bilan forme sur demande.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className={"framer-1ihplqe-container"}>
            <div className={"ssr-variant hidden-1k2w4ql hidden-ok5eee"}>
              <section className={"framer-2DJX0 framer-lEoIm framer-gbuwA framer-1x780xc framer-v-1x780xc"} data-framer-name={"Desktop"} style={{ width: "100%" }}>
                <div className={"framer-zq98jp"} data-framer-name={"Base Container"}>
                  <div className={"framer-2zmwll"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", willChange: "transform", borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "0px", opacity: "1", transform: "none" }}>
                    <div className={"framer-dp08aq"} data-framer-name={"Title Wrapper"}>
                      <div className={"framer-1kim826"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-1m7dt58"} data-framer-name={"Icon"}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"51"} height={"51"} src={"/assets/framerusercontent.com/images/gLzzi4G1EAaaoQVJVeUlmYMO3g0.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </div>
                        <div className={"framer-1blde6r"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <div className={"framer-text framer-styles-preset-1p8sfvs"} data-styles-preset={"Lsvad3fWJ"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            Offre limitée
                          </div>
                        </div>
                      </div>
                      <div className={"framer-5q6jwk"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                          Inscrivez-vous aujourd'hui et profitez de votre première séance de coaching offerte !
                        </p>
                      </div>
                    </div>
                    <div className={"framer-1xjk87t-container"}>
                      <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                        <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                            Je commence maintenant
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={"framer-194m59v"} style={{ willChange: "transform", borderBottomLeftRadius: "0px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"2250"} height={"1500"} sizes={"(min-width: 1280px) max(max((min(100vw, 1320px) - 60px) / 2, 1px), 573px), (min-width: 992px) and (max-width: 1279.98px) min(max((min(100vw, 1320px) - 40px) / 2, 1px), 400px), (max-width: 991.98px) calc(min(100vw, 1320px) - 40px)"} srcSet={"/assets/beauregard/community.webp"} src={"/assets/beauregard/community.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "32% 30.5%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-ok5eee"}>
              <section className={"framer-2DJX0 framer-lEoIm framer-gbuwA framer-1x780xc framer-v-1j9pejo"} data-framer-name={"Tablet"} style={{ width: "100%" }}>
                <div className={"framer-zq98jp"} data-framer-name={"Base Container"}>
                  <div className={"framer-2zmwll"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", willChange: "transform", borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "0px", opacity: "1", transform: "none" }}>
                    <div className={"framer-dp08aq"} data-framer-name={"Title Wrapper"}>
                      <div className={"framer-1kim826"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-1m7dt58"} data-framer-name={"Icon"}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"51"} height={"51"} src={"/assets/framerusercontent.com/images/gLzzi4G1EAaaoQVJVeUlmYMO3g0.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </div>
                        <div className={"framer-1blde6r"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <div className={"framer-text framer-styles-preset-1p8sfvs"} data-styles-preset={"Lsvad3fWJ"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            Offre limitée
                          </div>
                        </div>
                      </div>
                      <div className={"framer-5q6jwk"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                          Inscrivez-vous aujourd'hui et profitez de votre première séance de coaching offerte !
                        </p>
                      </div>
                    </div>
                    <div className={"framer-1xjk87t-container"}>
                      <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                        <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                            Je commence maintenant
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={"framer-194m59v"} style={{ willChange: "transform", borderBottomLeftRadius: "0px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"2250"} height={"1500"} sizes={"(min-width: 1280px) max(max((min(100vw, 1320px) - 60px) / 2, 1px), 573px), (min-width: 992px) and (max-width: 1279.98px) min(max((min(100vw, 1320px) - 40px) / 2, 1px), 400px), (max-width: 991.98px) calc(min(100vw, 1320px) - 40px)"} srcSet={"/assets/beauregard/community.webp"} src={"/assets/beauregard/community.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "32% 30.5%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={"ssr-variant hidden-13v9dm1 hidden-1k2w4ql"}>
              <section className={"framer-2DJX0 framer-lEoIm framer-gbuwA framer-1x780xc framer-v-14bcpmq"} data-framer-name={"Phone"} style={{ width: "100%" }}>
                <div className={"framer-zq98jp"} data-framer-name={"Base Container"}>
                  <div className={"framer-2zmwll"} data-framer-name={"Text Content Wrapper"} style={{ backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", willChange: "transform", borderBottomLeftRadius: "0px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", opacity: "1", transform: "none" }}>
                    <div className={"framer-dp08aq"} data-framer-name={"Title Wrapper"}>
                      <div className={"framer-1kim826"} data-framer-name={"Title Wrapper"}>
                        <div className={"framer-1m7dt58"} data-framer-name={"Icon"}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} width={"51"} height={"51"} src={"/assets/framerusercontent.com/images/gLzzi4G1EAaaoQVJVeUlmYMO3g0.svg"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                          </div>
                        </div>
                        <div className={"framer-1blde6r"} data-framer-name={"Heading"} style={{ "--extracted-tcooor": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <div className={"framer-text framer-styles-preset-1p8sfvs"} data-styles-preset={"Lsvad3fWJ"} style={{ "--framer-text-color": "var(--extracted-tcooor, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                            Offre limitée
                          </div>
                        </div>
                      </div>
                      <div className={"framer-5q6jwk"} data-framer-name={"Body"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1116k3j"} data-styles-preset={"CclRS3ecL"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                          Inscrivez-vous aujourd'hui et profitez de votre première séance de coaching offerte !
                        </p>
                      </div>
                    </div>
                    <div className={"framer-1xjk87t-container"}>
                      <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-tp32ut framer-5eqsdb"} data-framer-name={"Phone"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/contact"}>
                        <div className={"framer-145drjp"} style={{ "--extracted-r6o4lv": "var(--variable-reference-ypfpfVkT4-gRwIgGm9Y)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fpKzsO89l-gRwIgGm9Y": "var(--token-fcc50f27-48bf-4381-8929-2fd53a7bb0e3, rgb(55, 97, 49))", "--variable-reference-ypfpfVkT4-gRwIgGm9Y": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-ypfpfVkT4-gRwIgGm9Y))" }}>
                            Je commence maintenant
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={"framer-194m59v"} style={{ willChange: "transform", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "0px", opacity: "1", transform: "none" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                      <img decoding={"async"} width={"2250"} height={"1500"} sizes={"(min-width: 1280px) max(max((min(100vw, 1320px) - 60px) / 2, 1px), 573px), (min-width: 992px) and (max-width: 1279.98px) min(max((min(100vw, 1320px) - 40px) / 2, 1px), 400px), (max-width: 991.98px) calc(min(100vw, 1320px) - 40px)"} srcSet={"/assets/beauregard/community.webp"} src={"/assets/beauregard/community.webp"} alt={""} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "32% 30.5%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className={"framer-70fgct-container"}>
            <div className={"ssr-variant hidden-1k2w4ql hidden-ok5eee"}>
              <footer className={"framer-xjjiV framer-Zs9Jp framer-ucIfD framer-QlV1W framer-FUgh0 framer-fN9WN framer-80BYq framer-DiAdc framer-jmfSm framer-RZlrj framer-NttII framer-1wbsmcg framer-v-1wbsmcg"} data-framer-name={"Desktop"} style={{ width: "100%" }}>
                <div className={"framer-qvx5l"} data-framer-name={"Base Container"}>
                  <div className={"framer-84ot7o"} data-framer-name={"Top Content Wrapper"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                    <div className={"framer-1tmpf7x"} data-framer-name={"Logo Wrapper"}>
                      <div className={"framer-1dyyacx-container"}>
                        <a className={"framer-hD525 framer-do1alt framer-v-13f11kk framer-4j1ocn"} data-framer-name={"Logo Company Dark"} href={"/"} style={{ height: "100%", width: "100%" }}>
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                            <img decoding={"async"} loading={"lazy"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
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
                          Le club
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
                        <div className={"framer-dxazlk"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/evenements"}>
                              Événements
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-r6i6g2"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-7lbril"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Infos
                        </p>
                      </div>
                      <nav className={"framer-1aczhrj"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/coaching"}>
                              Notre équipe
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/faq"}>
                              FAQ
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/blog"}>
                              Blog
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
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/cours"}>
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
                      </nav>
                    </div>
                    <div className={"framer-bxt6qb"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-p2b2a8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Nos offres
                        </p>
                      </div>
                      <nav className={"framer-lmls2j"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-t860hw"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/coaching"}>
                              Coaching
                            </a>
                          </p>
                        </div>
                        <div className={"framer-8t66ro"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/cours"}>
                              Cours collectifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-6yqmv5"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/location-de-terrain"}>
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
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/seance-essai"}>
                              Séance d&rsquo;essai
                            </a>
                          </p>
                        </div>
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/planning"}>
                              Planning
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
                      <div className={"framer-19zhfuo"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                          <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/mentions-legales"}>Mentions légales</a>
                        </p>
                      </div>
                    </div>
                    <nav className={"framer-1omppqv"} data-framer-name={"Social Links Wrapper"}>
                      <div className={"framer-a7tk75-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.instagram.com/parcbeauregard/"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Instagram"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"framer-13tpyxv-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.facebook.com/parcbeauregard"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} loading={"lazy"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Facebook"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
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
                            <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
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
                          Le club
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
                        <div className={"framer-dxazlk"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/evenements"}>
                              Événements
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-r6i6g2"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-7lbril"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Infos
                        </p>
                      </div>
                      <nav className={"framer-1aczhrj"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/coaching"}>
                              Notre équipe
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/faq"}>
                              FAQ
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/blog"}>
                              Blog
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
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/cours"}>
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
                      </nav>
                    </div>
                    <div className={"framer-bxt6qb"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-p2b2a8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Nos offres
                        </p>
                      </div>
                      <nav className={"framer-lmls2j"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-t860hw"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/coaching"}>
                              Coaching
                            </a>
                          </p>
                        </div>
                        <div className={"framer-8t66ro"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/cours"}>
                              Cours collectifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-6yqmv5"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/location-de-terrain"}>
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
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/seance-essai"}>
                              Séance d&rsquo;essai
                            </a>
                          </p>
                        </div>
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/planning"}>
                              Planning
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
                      <div className={"framer-19zhfuo"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                          <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/mentions-legales"}>Mentions légales</a>
                        </p>
                      </div>
                    </div>
                    <nav className={"framer-1omppqv"} data-framer-name={"Social Links Wrapper"}>
                      <div className={"framer-a7tk75-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.instagram.com/parcbeauregard/"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Instagram"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"framer-13tpyxv-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-1m5vfgs framer-9dk433"} data-framer-name={"Default"} style={{ height: "100%", width: "100%" }} href={"https://www.facebook.com/parcbeauregard"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Facebook"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
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
                            <img decoding={"async"} width={"111"} height={"23"} src={"/assets/framerusercontent.com/images/eMs4EJNenduD63PdYh3FSUcrWk.svg"} alt={"Parc Beauregard"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
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
                          Le club
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
                        <div className={"framer-dxazlk"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/evenements"}>
                              Événements
                            </a>
                          </p>
                        </div>
                      </nav>
                    </div>
                    <div className={"framer-r6i6g2"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-7lbril"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Infos
                        </p>
                      </div>
                      <nav className={"framer-1aczhrj"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/coaching"}>
                              Notre équipe
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/faq"}>
                              FAQ
                            </a>
                          </p>
                        </div>
                        <div className={"framer-bph9ui"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/blog"}>
                              Blog
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
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/cours"}>
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
                      </nav>
                    </div>
                    <div className={"framer-bxt6qb"} data-framer-name={"Nav Links Column"} style={{ willChange: "auto", opacity: "1", transform: "none" }}>
                      <div className={"framer-p2b2a8"} data-framer-name={"Heading"} style={{ "--extracted-r6o4lv": "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-1hcnkal"} data-styles-preset={"G4jBfKTMe"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0)))" }}>
                          Nos offres
                        </p>
                      </div>
                      <nav className={"framer-lmls2j"} data-framer-name={"Nav Links Column"}>
                        <div className={"framer-t860hw"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/coaching"}>
                              Coaching
                            </a>
                          </p>
                        </div>
                        <div className={"framer-8t66ro"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/cours"}>
                              Cours collectifs
                            </a>
                          </p>
                        </div>
                        <div className={"framer-6yqmv5"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/location-de-terrain"}>
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
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/seance-essai"}>
                              Séance d&rsquo;essai
                            </a>
                          </p>
                        </div>
                        <div className={"framer-2cdfj0"} data-framer-name={"Nav Link"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", transform: "none" }}>
                          <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                            <a className={"framer-text framer-styles-preset-dhuzcc"} data-styles-preset={"JJzO8aUgV"} href={"/planning"}>
                              Planning
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
                      <div className={"framer-hvf79x"} data-framer-name={"Copyright"} style={{ "--extracted-r6o4lv": "var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64))", willChange: "auto", opacity: "1", transform: "none" }}>
                        <p className={"framer-text framer-styles-preset-kk5vcb"} data-styles-preset={"OSGlMNwCr"} style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-c3674009-0fe5-49c4-b319-05dd4e6ff53e, rgb(64, 64, 64)))" }}>
                          <a className={"framer-text framer-styles-preset-1ml9phj"} data-styles-preset={"L9EMt_vMH"} href={"/mentions-legales"}>Mentions légales</a>
                        </p>
                      </div>
                    </div>
                    <nav className={"framer-1omppqv"} data-framer-name={"Social Links Wrapper"}>
                      <div className={"framer-a7tk75-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-19k8o50 framer-9dk433"} data-framer-name={"Phone"} style={{ height: "100%", width: "100%" }} href={"https://www.instagram.com/parcbeauregard/"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/Iuxn2IKqLv969r5YSTa6R0gGvk.svg"} alt={"Instagram"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"framer-13tpyxv-container"}>
                        <a className={"framer-gVN13 framer-1m5vfgs framer-v-19k8o50 framer-9dk433"} data-framer-name={"Phone"} style={{ height: "100%", width: "100%" }} href={"https://www.facebook.com/parcbeauregard"} target={"_blank"} rel={"noopener"}>
                          <div className={"framer-zjn98h"} data-framer-name={"Icon"} style={{ filter: "none", WebkitFilter: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}>
                              <img decoding={"async"} width={"24"} height={"24"} src={"/assets/framerusercontent.com/images/sHD949ZXROnvjFnhglMci6beA.svg"} alt={"Facebook"} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} />
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
