import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroArea from '@/components/HeroArea';
import NewsletterSection from '@/components/NewsletterSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroArea/>
      <ServicesSection/>
      <WorkSection/>
      <NewsletterSection/>
      <Footer/>
    </div>
  );
}
