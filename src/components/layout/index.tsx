import { PropsWithChildren, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { clsx } from '../../utils';


const Layout = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add('!opacity-100');
    }, 100);
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        'min-h-screen bg-white overflow-x-hidden transition-all duration-[2000ms]',
        'opacity-0'
      )}
    >
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-white/50 -z-10"></div>

      <div className="fixed top-20 left-10 animate-float opacity-20 pointer-events-none">
        <Heart className="w-16 h-16 text-rose-300 fill-current" />
      </div>
      <div className="fixed top-40 right-20 animate-float-delayed opacity-20 pointer-events-none">
        <Heart className="w-12 h-12 text-pink-300 fill-current" />
      </div>
      <div className="fixed bottom-40 left-1/4 animate-float-slow opacity-20 pointer-events-none">
        <Heart className="w-10 h-10 text-rose-400 fill-current" />
      </div>
      <div className="fixed bottom-20 right-20 animate-float-delayed opacity-20 pointer-events-none">
        <Heart className="w-16 h-16 text-rose-400 fill-current" />
      </div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
