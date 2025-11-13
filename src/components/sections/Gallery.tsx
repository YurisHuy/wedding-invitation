import { Heart } from 'lucide-react';
import { clsx } from '../../utils';
import { SectionProps } from './types';

export const Gallery = ({ visible, id }: SectionProps) => {
  return (
    <section id={id} data-animate className="pt-16 pb-8 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div
          className={clsx(
            'transition-all duration-1000',
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-center mb-3 text-gray-800">
            Khoảnh Khắc Của Chúng Tôi
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-rose-300"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            <div className="h-px w-16 bg-rose-300"></div>
          </div>
        </div>

        <div
          className={clsx(
            'grid grid-cols-12 gap-4 auto-rows-[200px] transition-all duration-1000 delay-300',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          )}
        >
          <div className="col-span-12 md:col-span-5 md:row-span-2 group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center relative">
              <img
                src="/wedding-invitation/img/1.jpg"
                alt="1"
                className="absolute inset-0 w-full h-full object-cover object-[center_87%] md:object-[center_90%]"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center relative">
              <img
                src="/wedding-invitation/img/2.jpg"
                alt="2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-200 flex items-center justify-center relative">
              <img
                src="/wedding-invitation/img/3.jpg"
                alt="3"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:row-span-1 group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center relative">
              <img
                src="/wedding-invitation/img/4.jpg"
                alt="4"
                className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 md:row-span-2 group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer md:col-span-8">
            <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center relative">
              <img
                src="/wedding-invitation/img/5.jpg"
                alt="5"
                className="absolute inset-0 w-full h-full object-cover object-bottom"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hidden md:block">
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-200 flex items-center justify-center relative">
              <img
                src="/wedding-invitation/img/6.jpg"
                alt="6"
                className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
              />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 italic">
          Album ảnh cưới sẽ được cập nhật sau buổi lễ
        </p>
      </div>
    </section>
  );
};
