import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Cursor } from "@/components/cursor"
import { Loader } from "@/components/loader"

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <main className="min-h-screen bg-background relative noise-overlay">
        <Header />
        <Hero />
        <Marquee />
        <Gallery />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
