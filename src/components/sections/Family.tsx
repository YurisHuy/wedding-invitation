import { Heart, Home, MapPin } from 'lucide-react';
import { SectionProps } from './types';
import { clsx } from '../../utils';

export const Family = ({ visible, id }: SectionProps) => {
  return (
    <section
      id={id}
      data-animate
      className="pt-16 pb-8 px-6 bg-gradient-to-b from-white to-rose-50/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={clsx(
            'transition-all duration-1000',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          )}
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-center mb-3 text-gray-800">
            Gia Đình Hai Bên
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-rose-300"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            <div className="h-px w-16 bg-rose-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={clsx(
              'bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 shadow-lg border border-rose-100 transition-all duration-1000 delay-300',
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            )}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                <Home className="w-10 h-10 text-rose-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Gia Đình Nhà Gái
            </h3>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-gray-600 mb-1">Bố</p>
                <p className="font-semibold text-lg text-gray-800">
                  Ông Tạ Bé
                </p>
              </div>
              <div className="h-px bg-rose-200"></div>
              <div className="text-center">
                <p className="text-gray-600 mb-1">Mẹ</p>
                <p className="font-semibold text-lg text-gray-800">
                  Bà Cao Thị Phượng
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-rose-200">
              <p className="text-center text-gray-600 leading-relaxed">
                <MapPin className="w-4 h-4 inline mr-1 text-rose-500" />
                Xã An Phú
                <br />
                Thành phố Quảng Ngãi
              </p>
            </div>
          </div>

          <div
            className={clsx(
              'bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-lg border border-rose-100 transition-all duration-1000 delay-500',
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            )}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                <Home className="w-10 h-10 text-rose-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Gia Đình Nhà Trai
            </h3>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-gray-600 mb-1">Bố</p>
                <p className="font-semibold text-lg text-gray-800">
                  Ông Bùi Quang Hà
                </p>
              </div>
              <div className="h-px bg-rose-200"></div>
              <div className="text-center">
                <p className="text-gray-600 mb-1">Mẹ</p>
                <p className="font-semibold text-lg text-gray-800">
                  Bà Nguyễn Thị Ánh Nguyệt
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-rose-200">
              <p className="text-center text-gray-600 leading-relaxed">
                <MapPin className="w-4 h-4 inline mr-1 text-rose-500" />
                Tổ Dân Phố 6, Phường Buôn Hồ
                <br />
                Tỉnh Đăk Lăk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
