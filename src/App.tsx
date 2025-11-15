import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Layout from './components/layout';
import Section from './components/sections';
import WeddingEnvelope from './components/WeddingEnvelope';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set([])
  );

  const [guestName, setGuestName] = useState<string | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (nameParam && nameParam.trim()) {
      try {
        const decodedName = decodeURIComponent(nameParam.trim());
        setGuestName(decodedName);
      } catch {
        setGuestName(nameParam.trim());
      }
    }
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [envelopeOpened]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (envelopeOpened) {
      document.body.style.removeProperty('height');
      document.body.style.removeProperty('overflow');
      setTimeout(() => {
        setIsMusicPlaying(true);
      }, 2500);
    } else {
      setIsMusicPlaying(false);
      document.body.style.height = '100vh';
      document.body.style.overflow = 'hidden';
    }
  }, [envelopeOpened]);

  if (!envelopeOpened) {
    return (
      <WeddingEnvelope
        visible={!envelopeOpened}
        onClick={() => setEnvelopeOpened(true)}
      />
    );
  }

  return (
    <>
      {envelopeOpened && (
        <AudioPlayer 
          isPlaying={isMusicPlaying}
          onToggle={setIsMusicPlaying}
          loop={true}
        />
      )}
      <Layout>
        <Section.Hero id="hero" visible={visibleSections.has('hero')} guestName={guestName} />
        <Section.Couple id="couple" visible={visibleSections.has('couple')} />
        <Section.Story visibleSections={visibleSections} />
        <Section.Family id="family" visible={visibleSections.has('family')} />
        <Section.Gallery
          id="gallery"
          visible={visibleSections.has('gallery')}
        />
        <Section.Events id="events" visible={visibleSections.has('events')} />
        <Section.Attendance id="rsvp" visible={visibleSections.has('rsvp')} />

        <section className="py-16 px-6 bg-gradient-to-b from-white to-rose-50">
          <div className="container mx-auto max-w-4xl text-center">
            <Heart className="w-16 h-16 text-rose-600 fill-current mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-playfair mb-3 text-gray-800">
              Cảm ơn bạn!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chúng tôi rất vui mừng và biết ơn khi được có bạn bên cạnh trong
              ngày trọng đại này.
              <br />
              Sự hiện diện của bạn chính là món quà ý nghĩa nhất dành cho chúng
              tôi.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default App;
