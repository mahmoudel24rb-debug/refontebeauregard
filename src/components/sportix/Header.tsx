import React from 'react'

// Extrait fidèle du header/footer Sportix porté (HomePage.tsx) pour réutilisation
// sur les nouvelles pages (cours hub + sous-pages). Stylé par framer.css global.
// Burger mobile câblé globalement par MobileNav. NE PAS éditer à la main : régénérer
// via extract-shell.mjs après un re-port.
export default function Header() {
  return (
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
                            <div className={"framer-czv41b"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/"}>
                                  Accueil
                                </a>
                              </p>
                            </div>
                            <div className={"framer-ncrdxr"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/espaces"}>
                                  Le parc
                                </a>
                              </p><div data-bg-submenu="true"><a href="/espaces">Nos espaces</a><a href="/espaces/fonctionnel">Entraînement fonctionnel</a><a href="/espaces/cross-cardio">Cross / Cardio</a><a href="/location-de-terrain">Location de terrain</a></div>
                            </div>
                            <div className={"framer-9ynktl"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/cours"}>
                                  Cours
                                </a>
                              </p><div data-bg-submenu="true"><a href="/cours">Tous les cours</a><a href="/planning">Planning de la rentrée</a></div>
                            </div>
                            <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/coaching"}>
                                  Coaching
                                </a>
                              </p>
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
                            <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/tarifs"}>
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
                            <div className={"framer-czv41b"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/"}>
                                  Accueil
                                </a>
                              </p>
                            </div>
                            <div className={"framer-ncrdxr"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/espaces"}>
                                  Le parc
                                </a>
                              </p><div data-bg-submenu="true"><a href="/espaces">Nos espaces</a><a href="/espaces/fonctionnel">Entraînement fonctionnel</a><a href="/espaces/cross-cardio">Cross / Cardio</a><a href="/location-de-terrain">Location de terrain</a></div>
                            </div>
                            <div className={"framer-9ynktl"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/cours"}>
                                  Cours
                                </a>
                              </p><div data-bg-submenu="true"><a href="/cours">Tous les cours</a><a href="/planning">Planning de la rentrée</a></div>
                            </div>
                            <div className={"framer-rsp9da"} data-framer-name={"Navigation Link"} style={{ "--extracted-r6o4lv": "var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255))", transform: "none" }}>
                              <p className={"framer-text framer-styles-preset-13c7ysj"} data-styles-preset={"QchegEuzx"} style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5b150902-af7d-44cd-9806-3cf99a174e98, rgb(255, 255, 255)))" }}>
                                <a className={"framer-text framer-styles-preset-169hqkb"} data-styles-preset={"DomZrqh6U"} href={"/coaching"}>
                                  Coaching
                                </a>
                              </p>
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
                            <a className={"framer-mAcoc framer-X8adU framer-5jm32v framer-v-5jm32v framer-5eqsdb"} data-framer-name={"Default"} style={{ backdropFilter: "blur(0px)", backgroundColor: "var(--token-97fc87a4-7472-48e0-baff-d882386fd651, rgb(0, 0, 0))", borderBottomLeftRadius: "70px", borderBottomRightRadius: "70px", borderTopLeftRadius: "70px", borderTopRightRadius: "70px" }} href={"/tarifs"}>
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
                </div>
  )
}
