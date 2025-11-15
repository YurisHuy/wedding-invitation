import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { clsx } from '../../utils';

type NavbarItem = {
  href: string;
  id: number;
  title: string;
};

const navbarItems: {
  left: NavbarItem[];
  right: NavbarItem[];
} = {
  left: [
    {
      href: '#couple',
      id: 1,
      title: 'Cô Dâu & Chú Rể'
    },
    {
      href: '#story',
      id: 2,
      title: 'Câu Chuyện'
    },
    {
      href: '#family',
      id: 3,
      title: 'Gia Đình'
    }
  ],
  right: [
    {
      href: '#gallery',
      id: 4,
      title: 'Album'
    },
    {
      href: '#events',
      id: 5,
      title: 'Sự Kiện'
    },
    {
      href: '#rsvp',
      id: 6,
      title: 'Xác Nhận Tham Dự'
    }
  ]
};

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const render = (items: NavbarItem[]) => {
    return items.map((item) => (
      <a
        key={item.id}
        href={item.href}
        className="text-gray-600 hover:text-rose-600 transition-colors font-medium"
      >
        {item.title}
      </a>
    ));
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrollY > 50
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="px-4 py-4 navbar">
        <div className="flex justify-center items-center text-base">
          <div className="navbar-item">{render(navbarItems.left)}</div>

          <Heart size={40} className="text-rose-600 mx-6"/>

          <div className="navbar-item">{render(navbarItems.right)}</div>
        </div>
      </nav>
    </header>
  );
};
