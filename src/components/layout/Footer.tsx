import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <Heart className="w-8 h-8 text-rose-500 fill-current mx-auto mb-4" />
        <p className="text-gray-400">Đức Huy & Thu Thủy Wedding</p>
        <p className="text-gray-500 text-sm mt-2">Made with love</p>
      </div>
    </footer>
  );
};
