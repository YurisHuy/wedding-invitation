export const EVENT_OPTIONS = [
  { value: '1', label: 'Lễ Vu Quy' },
  { value: '2', label: 'Lễ Thành Hôn' },
  { value: '3', label: 'Lễ Báo Hỷ' }
] as const;

export const NUMBER_OF_GUEST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export const WEDDING_LOCATIONS = [
  {
    title: 'Lễ Vu Quy - Nhà Gái',
    date: 'Thứ Năm, 25 tháng 12 năm 2025',
    timeLine: [
      { time: '08:00', event: 'Lễ gia tiên' },
      { time: '11:30', event: 'Tiệc cưới' }
    ],
    place: [
      {
        venue: 'Tư Gia Nhà Gái',
        address: 'Gần chợ Vạn Tượng, Xã An Phú',
        city: 'Thành phố Quảng Ngãi',
        mapUrl: 'https://maps.app.goo.gl/o6bR8xEt8JvJvbkXA'
      }
    ],
    scheduleTime: new Date('2025-12-25T11:00:00'),
  },
  {
    title: 'Lễ Thành Hôn - Nhà Trai',
    date: 'Thứ Tư, 31 tháng 12 năm 2025',
    timeLine: [
      { time: '08:00', event: 'Lễ gia tiên' },
      { time: '11:30', event: 'Tiệc cưới' }
    ],
    place: [
      {
        venue: 'Tư Gia Nhà Trai',
        address: 'Tổ dân phố 6, Phường Buôn Hồ',
        city: 'Tỉnh Đăk Lăk',
        mapUrl: 'https://maps.app.goo.gl/tnsGG2TbMPhDssze6'
      },
      {
        venue: 'NHTC Trung Khoa',
        address: '1005 Hùng Vương, Phường Buôn Hồ',
        city: 'Đắk Lắk',
        mapUrl: 'https://maps.app.goo.gl/rT561LVLbZqdZS7y7'
      }
    ],
    scheduleTime: new Date('2025-12-31T11:00:00'),
  },
  {
    title: 'Lễ Báo Hỷ',
    date: 'Thứ Bảy, 10 tháng 1 năm 2026',
    timeLine: [
      { time: '18:00', event: 'Đón khách' },
      { time: '19:00', event: 'Tiệc cưới' }
    ],
    place: [
      {
        venue: 'NHTC Diamond Place II',
        address: '584 Âu Cơ, phường Bảy Hiền',
        city: 'Thành phố Hồ Chí Minh',
        mapUrl: 'https://maps.app.goo.gl/wgC9HB8ipHeVWZ9Q6'
      }
    ],
    scheduleTime: new Date('2026-01-10T18:00:00'),
  }
] as const;
