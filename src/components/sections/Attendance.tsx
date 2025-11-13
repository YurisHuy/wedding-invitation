import { Heart } from 'lucide-react';
import AttendanceForm from '../AttendanceForm';
import { clsx } from '../../utils';
import { SectionProps } from './types';

export const Attendance = ({ visible, id }: SectionProps) => {
  return (
    <section id={id} data-animate className="pt-16 pb-8 px-6 bg-white">
      <div className="container mx-auto max-w-2xl">
        <div
          className={clsx(
            'transition-all duration-1000',
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-center mb-3 text-gray-800">
            Xác Nhận Tham Dự
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-rose-300"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            <div className="h-px w-16 bg-rose-300"></div>
          </div>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi
          </p>
        </div>

        <AttendanceForm visible={visible} />
      </div>
    </section>
  );
};
