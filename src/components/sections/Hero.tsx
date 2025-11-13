import { Heart } from 'lucide-react';
import { SectionProps } from './types';
import { clsx } from '../../utils';

export const Hero = ({ visible,id }: SectionProps) => {
  return (
    <section
      id={id}
      data-animate
      className="relative lg:min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div
        className={clsx(
          'text-center max-w-4xl transition-all duration-[2000ms]',
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'
        )}
      >
        <div className="mb-6">
          <Heart className="w-16 h-16 text-rose-600 mx-auto mb-4 animate-pulse" />
        </div>

        <h1 className="font-playfair  text-7xl md:text-9xl mb-8 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-clip-text text-transparent !leading-normal">
          Huy & Thủy
        </h1>

        <h2 className="text-4xl md:text-6xl text-gray-600 mb-6 font-light tracking-wider">
          TRÂN TRỌNG KÍNH MỜI
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-300"></div>
          <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>

        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-sans">
          Chúng tôi sẽ kết hôn!
        </p>

        <p className="text-xl md:text-2xl text-gray-600 font-sans">
          Hân hạnh được đón tiếp Quý khách tại Lễ cưới của chúng tôi
        </p>
      </div>
    </section>
  );
};
