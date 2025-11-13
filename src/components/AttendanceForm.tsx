import { FormEventHandler, useState } from 'react';
import { Send, HeartCrack } from 'lucide-react';
import { useAttendanceForm } from '../hooks';
import { getSupabaseClient } from '../libs/supabase';
import { clsx } from '../utils';
import { EVENT_OPTIONS, NUMBER_OF_GUEST } from '../constants';

interface Props {
  visible?: boolean;
}

const AttendanceForm: React.FC<Props> = ({ visible }) => {
  const [status, setStatus] = useState<
    'initial' | 'pending' | 'success' | 'error'
  >('initial');

  const { formData, updateForm, updateEvent, reset } = useAttendanceForm();

  const onCloseModal = () => {
    setStatus('initial');
    reset();
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (formData.attending && formData.events.length == 0) {
       setStatus('error');
       return;
    }

    setStatus('pending');

    try {
      const supabase = getSupabaseClient();
      if (!supabase) throw new Error('No Supabase client found');

      const { error } = await supabase
        .from('wedding_guests')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    }
  };

  return (
    <>
      {/* Success Modal */}
      {status == "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onCloseModal}
          />
          <div className="relative z-10 mx-4 w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden">
              <div className={clsx("bg-gradient-to-r p-4 text-white text-center", formData.attending ? "from-rose-500 to-pink-500" : "from-gray-500 to-stone-500")}>
                <p className="text-lg font-semibold">
                  Gửi xác nhận thành công
                </p>
              </div>
              <div className="p-6 text-center">
                {formData.attending ? (
                  <p className="text-gray-700 mb-4">
                    Cảm ơn bạn đã xác nhận! Chúng tôi rất mong được gặp bạn.
                  </p>
                ) : (
                  <>
                    <HeartCrack size={60} className="text-rose-500 mx-auto mb-4" />
                    <p className="text-gray-700 mb-4">
                      Cảm ơn bạn đã phản hồi. Rất tiếc vì bạn không thể tham dự,
                      hy vọng sẽ gặp bạn vào dịp khác!
                    </p>
                  </>
                )}
                <button
                  onClick={onCloseModal}
                  className={clsx("w-full bg-gradient-to-r text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]", formData.attending ? "from-rose-600 to-pink-600" : "from-gray-500 to-stone-500")}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={clsx(
          'bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-rose-100 transition-all duration-1000 delay-300',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        )}
      >
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Họ và tên <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            name="name"
            onChange={(e) => updateForm({ name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
            placeholder="Nhập họ và tên của bạn"
          />
        </div>
        {formData.attending && (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Số lượng khách tham dự <span className="text-rose-600">*</span>
              </label>
              <select
                value={formData.guests}
                onChange={(e) => updateForm({ guests: parseInt(e.target.value) })}
                name="guests"
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              >
                {NUMBER_OF_GUEST.map((n) => (
                  <option key={n} value={n}>
                    {n} người
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Loại sự kiện tham dự <span className="text-rose-600">*</span>
              </label>
              <div className="flex flex-col space-y-2">
                {EVENT_OPTIONS.map((option) => (
                  <label key={option.value} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      value={option.value}
                      name="events"
                      checked={formData.events.includes(option.value)}
                      onChange={(e) =>
                        updateEvent(e.target.value, e.target.checked)
                      }
                      className="w-5 h-5 rounded border border-rose-200 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
              {formData.events.length === 0 && formData.attending && status == "error" && (
                <p className="text-rose-600 text-sm mt-1">
                  Vui lòng chọn ít nhất một sự kiện.
                </p>
              )}
            </div>
          </>)
        }
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Bạn có thể tham dự? <span className="text-rose-600">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex-1">
              <input
                type="radio"
                name="attending"
                checked={formData.attending}
                onChange={() => updateForm({ attending: true })}
                className="sr-only peer"
              />
              <div className="px-6 py-3 rounded-xl border-2 border-rose-200 cursor-pointer peer-checked:border-rose-500 peer-checked:bg-rose-50 text-center transition-all hover:border-rose-300">
                <p className="font-semibold text-gray-800">Có, tôi sẽ đến</p>
              </div>
            </label>
            <label className="flex-1">
              <input
                type="radio"
                name="attending"
                checked={!formData.attending}
                onChange={() => updateForm({ attending: false })}
                className="sr-only peer"
              />
              <div className="px-6 py-3 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-gray-400 peer-checked:bg-gray-50 text-center transition-all hover:border-gray-300">
                <p className="font-semibold text-gray-800">
                  Rất tiếc, tôi không thể
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Lời chúc của bạn
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => updateForm({ message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
            placeholder="Gửi lời chúc của bạn đến cô dâu chú rể..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'pending'}
          className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'pending' ? (
            'Đang gửi...'
          ) : (
            <>
              <Send size={20} />
              Gửi xác nhận
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default AttendanceForm;
