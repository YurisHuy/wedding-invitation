import { Heart } from 'lucide-react';

interface Props {
  visible: boolean;
  onClick: () => void;
}

const WeddingEnvelope: React.FC<Props> = ({ visible, onClick }) => {
  if (!visible) return <></>;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">
      <div className="relative cursor-pointer group" onClick={onClick}>
        <div className="relative w-80 h-96 perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-4 border-4 border-white/30 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <Heart size={40} className="mb-4 text-rose-500 fill-current animate-pulse" />
              <p className="text-2xl font-playfair mb-2">Đức Huy & Thu Thủy</p>
              <p className="text-sm tracking-widest mb-6">WEDDING INVITATION</p>
              <div className="mt-4 px-8 py-3 border-2 border-white rounded-full text-sm font-medium group-hover:bg-white group-hover:text-rose-600 transition-all duration-300">
                Mở thiệp mời
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-bounce">
          Nhấn để mở
        </div>
      </div>
    </div>
  );
};

export default WeddingEnvelope;
