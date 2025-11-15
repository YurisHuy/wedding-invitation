import { Heart } from 'lucide-react';
import { SectionProps } from './types';
import { clsx } from '../../utils';

export const Couple = ({ visible,id }: SectionProps) => {
  return (
    <section
      id={id}
      data-animate
      className="pt-8 lg:pt-16 pb-8 px-6 bg-gradient-to-b from-white to-rose-50/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={clsx(
            'transition-all duration-[2000ms]',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          )}
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-center mb-3 text-gray-800">
            Cô Dâu & Chú Rể
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-rose-300"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            <div className="h-px w-16 bg-rose-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={clsx(
              'text-center order-2 md:order-1 transition-all duration-[2000ms] delay-300',
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            )}
          >
            <div className="bg-gradient-to-br from-rose-200 to-pink-200 w-80 h-80 lg:w-96 lg:h-96 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl overflow-hidden">
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/wedding-invitation/img/bridal.jpg"
                  alt="bridal"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-playfair mb-4 text-gray-800">
              Tạ Thị Thu Thủy
            </h3>
            <p className="text-rose-600 font-medium mb-3 text-xl">Cô Dâu</p>
            <p className="text-gray-500 text-base mb-4">
              Ngày sinh: 20/01/1999
            </p>
            <div className="max-w-sm mx-auto">
              <p className="text-gray-600 leading-relaxed font-sans italic mb-4 text-lg">
                "Tình yêu không phải là nhìn vào mắt nhau, mà là cùng nhau nhìn
                về một hướng"
              </p>
              <p className="text-gray-500 text-base">
                Con gái ông Tạ Bé
                <br />
                và bà Cao Thị Phượng
              </p>
            </div>
          </div>

          <div
            className={clsx(
              'text-center order-1 md:order-2 transition-all duration-[2000ms] delay-500',
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            )}
          >
            <div className="bg-gradient-to-br from-rose-200 to-pink-200 w-80 h-80 lg:w-96 lg:h-96 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl overflow-hidden">
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/wedding-invitation/img/groom.jpg"
                  alt="groom"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-playfair mb-4 text-gray-800">
              Bùi Đức Huy
            </h3>
            <p className="text-rose-600 font-medium mb-3 text-xl">Chú Rể</p>
            <p className="text-gray-500 text-base mb-4">
              Ngày sinh: 27/04/1997
            </p>
            <div className="max-w-sm mx-auto">
              <p className="text-gray-600 leading-relaxed font-sans italic mb-4 text-lg">
                "Chuyện tình mình cũng đã đến hồi kết. ‘Hồi kết hôn’."
              </p>
              <p className="text-gray-500 text-base">
                Con trai ông Bùi Quang Hà
                <br />
                và bà Nguyễn Thị Ánh Nguyệt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
