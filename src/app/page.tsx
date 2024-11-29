import Header from "./components/Header";
import Footer from "./components/Footer";
import LatestQuestions from "./components/LatestQuestion";


import HeroSectionHeader from "./components/TopContributers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Header />
     <HeroSectionHeader />
    <div className="mt-20">
    
     <LatestQuestions /></div>
    
    <div className="mt-20">
     <Footer />
    </div>
    </main>
  );
}
