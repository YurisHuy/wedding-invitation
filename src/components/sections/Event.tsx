import { Calendar, Gift, Heart, MapPin, Map, Clock } from 'lucide-react';
import { clsx } from '../../utils';
import { WEDDING_LOCATIONS } from '../../constants';
import { SectionProps } from './types';
import { Fragment } from 'react/jsx-runtime';

export const Events = ({ visible, id }: SectionProps) => {
  const now = new Date();
  const renderDaysLeft = (scheduleTime: Date) => {
    const timeLeft = scheduleTime.getTime() - now.getTime();
    const daysLeft = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    return (
      <>
        <Clock className="w-5 h-5 text-rose-600 flex-shrink-0" />
        <p className="text-gray-600 font-medium">Còn: {daysLeft} ngày nữa</p>
      </>
    )
  }
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
            Thông Tin Các Buổi Lễ
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-rose-300"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            <div className="h-px w-16 bg-rose-300"></div>
          </div>
          <p className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Chúng tôi tổ chức 3 buổi lễ tại các địa điểm khác nhau. <br />
            Quý khách vui lòng chọn buổi phù hợp để tham dự.
          </p>
        </div>

        <div className="space-y-4">
          {WEDDING_LOCATIONS.map((location, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  'bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl overflow-hidden shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-1000',
                  visible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-20'
                )}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-rose-200 to-pink-200 p-4 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {location.title}
                      </h3>
                      <h4 className="text-rose-600 font-bold text-lg mb-2">
                        {location.date}
                      </h4>
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block">
                        {location.timeLine.map((time, idx) => {
                          return (
                            <div key={idx} className="flex items-start text-gray-800 font-medium text-base text-left">
                              <span className="min-w-[60px]">{time.time}:</span>
                              <span className="pl-2">{time.event}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-4">
                    <div className="flex items-start gap-3 mb-4">
                      {location.place.map((p, kp1) => {
                        return (
                          <Fragment key={kp1}>
                            <MapPin className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-2xl text-gray-800 mb-2">
                                {p.venue}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {p.address}
                                <br />
                                {p.city}
                              </p>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>

                    <div className="mt-4 pt-2 border-t border-rose-200 flex flex-wrap gap-4">
                      {location.place.map((p, kp2) => {
                        return (
                          <button
                            key={kp2}
                            onClick={() => window.open(p.mapUrl, '_blank')}
                            className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl border-2 border-rose-200 text-rose-600 font-semibold hover:bg-rose-50 transition-all hover:scale-105 shadow-sm"
                          >
                            <Map className="w-5 h-5" />
                            Bản đồ đến {p.venue}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl border-2 border-rose-200 shadow-sm w-max mt-4">
                      {renderDaysLeft(location.scheduleTime)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-rose-100 via-pink-100 to-rose-100 rounded-3xl p-8 shadow-lg border border-rose-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
              <Gift className="w-8 h-8 text-rose-600" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Dress Code
              </h3>
              <p className="text-gray-700 text-lg">
                Gì cũng được miễn là thấy mình đẹp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
