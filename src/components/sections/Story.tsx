import { Heart } from 'lucide-react';
import { clsx } from '../../utils';

interface Props {
  visibleSections: Set<string>
}

export const Story = ({ visibleSections }: Props) => {
  return (
    <section className="pt-16 pb-8 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div
          className={clsx(
            'transition-all duration-1000',
            visibleSections.has("story") ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
          id="story" data-animate
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-center mb-3 text-gray-800">
            Câu Chuyện Tình Yêu
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-rose-300"></div>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
            <div className="h-px w-16 bg-rose-300"></div>
          </div>
        </div>

        <div className="space-y-8">
          <div
            className={clsx(
              'grid md:grid-cols-2 gap-8 items-center transition-all duration-[2000ms] delay-400',
              visibleSections.has("first")
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            )}
            id="first" data-animate
          >
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-200 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group-hover:shadow-2xl transition-shadow">
                  <img
                    src="/wedding-invitation/img/first.jpg"
                    alt="Meet"
                    className="absolute inset-0 w-full h-full "
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block bg-rose-100 rounded-full px-4 py-2">
                <p className="text-rose-600 font-semibold text-base">
                  Mùa Đông 2017
                </p>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-800">
                Lần Đầu Gặp Gỡ
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-sans">
                Họ gặp nhau lần đầu tiên tại 1 buổi sinh hoạt nọ của Câu Lạc Bộ Tiếng Nhật Niko Niko.
                Người anh khóa trên và cô em khóa dưới... Vì có kết bạn facebook nên họ cứ thế trò chuyện
                với tư cách là bạn bè xã giao thế thôi.
              </p>
            </div>
          </div>

          <div
            className={clsx(
              'grid md:grid-cols-2 gap-8 items-center transition-all duration-[2000ms] delay-400',
              visibleSections.has("first-meet") ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            )}
            id="first-meet" data-animate
          >
            <div className="space-y-4">
              <div className="inline-block bg-pink-100 rounded-full px-4 py-2">
                <p className="text-pink-600 font-semibold text-base">
                  Lễ Noel 2018
                </p>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-800">
                Ngày Hẹn Hò Đầu Tiên
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-sans">
                Buổi hẹn hò đầu tiên của họ vào 24/12/2018 là ở quán ăn, sau đó thì đi xem phim.
                Ảnh nhát nên ảnh không dám nói trực tiếp mà về nhà mới nhắn tin:
                "Mình yêu được chưa?".
                Rồi cái gì tới cũng tới, ảnh với chỉ chính thức bắt đầu yêu nhau và chọn Noel hàng năm là ngày kỷ niệm.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-pink-200 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group-hover:shadow-2xl transition-shadow">
                <img
                  src="/wedding-invitation/img/first_date.jpg"
                  alt="FirstDate"
                  className="absolute inset-0 w-full h-full "
                />
              </div>
            </div>
          </div>

          <div
            className={clsx(
              'grid md:grid-cols-2 gap-8 items-center transition-all duration-[2000ms] delay-400',
              visibleSections.has("anniversary") ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            )}
            id="anniversary" data-animate
          >
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-rose-300 rounded-full opacity-40 blur-xl group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group-hover:shadow-2xl transition-shadow">
                  <img
                    src="/wedding-invitation/img/anniversary.jpg"
                    alt="Anniversary"
                    className="absolute inset-0 w-full h-full object-cover object-[center_90%]"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block bg-rose-100 rounded-full px-4 py-2">
                <p className="text-rose-600 font-semibold text-base">
                  Noel hằng năm
                </p>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-800">
                Kỷ niệm "ngày gì đó"
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-sans">
                Ngày 24/12 hàng năm, ảnh với chỉ luôn tổ chức ngày kỷ niệm.
                Họ đi ăn, đi uống, rồi đi mua cho nhau cái quần cái áo mặc hàng ngày.
                Series "Hôm nay là ngày gì đó!" cứ tiếp tục... đến 24/12/2024 là 6 chữ "gì", tức là 6 năm bên nhau rồi.
              </p>
            </div>
          </div>

          <div
            className={clsx(
              'relative overflow-hidden rounded-3xl shadow-2xl border-2 border-rose-200 group transition-all duration-[2000ms] delay-400',
              visibleSections.has("proposal") ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'
            )}
            id="proposal" data-animate
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-100 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="relative grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-4 bg-white/50 backdrop-blur-sm">
                <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 rounded-full px-4 py-2 self-start">
                  <p className="text-white font-semibold text-base">
                    Tháng Ba 2025
                  </p>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-800">
                  Cầu Hôn
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-sans">
                  Tối 15/3/2025, ảnh đã quỳ gối cầu hôn chỉ
                  tại một nhà hàng nọ với không khí đầy lãng mạn. Với chiếc nhẫn trên tay, ảnh hỏi: "Làm vợ anh nha?"
                  Chỉ đã gật đầu "Dạ!" với nụ cười hạnh phúc. Khoảnh khắc có phần ngài ngại nhưng nó là khoảnh
                  khắc đẹp nhất trong cuộc đời của họ.
                </p>
              </div>
              <div className="relative min-h-[300px] md:min-h-[400px]">
                <img
                  src="/wedding-invitation/img/proposal.jpg"
                  alt="Proposal"
                  className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
