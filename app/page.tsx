import Navbar from "@/components/Navbar";
import HeroInstitucional from "@/components/HeroInstitucional";
import TrustBar from "@/components/TrustBar";
import Institucional from "@/components/Institucional";
import Models from "@/components/Models";
import ScooterVideos from "@/components/ScooterVideos";
import MakShowcase from "@/components/MakShowcase";
import SocialProof from "@/components/SocialProof";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import TestDrive from "@/components/TestDrive";
import Comparator from "@/components/Comparator";
import FAQ from "@/components/FAQ";
import InstagramFeed from "@/components/InstagramFeed";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroInstitucional />
        <TrustBar />
        <Institucional />
        <Models />
        <ScooterVideos />
        <MakShowcase />
        <SocialProof />
        <Differentials />
        <HowItWorks />
        <TestDrive />
        <Comparator />
        <FAQ />
        <InstagramFeed />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
