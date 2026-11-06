import { StudentPosition } from '../types/game';

export const STORAGE_KEY_POSITIONS = 'chuyen_do_student_positions_lh_12_2_v2';

/**
 * DEFAULT COORDINATES FOR 41 STUDENTS OF CLASS 12.2 ON THE BOAT ARTWORK (image_63db981b.png)
 * Image Aspect Ratio: 16:9 (100% width, 100% height)
 * - 22 Female students in front rows (Áo dài trắng)
 * - 19 Male students in middle & back rows (Áo sơ mi trắng)
 * - Teacher (Thầy Trầm Thanh Tuấn) is on the left holding the oar (x: 17.2%, y: 46.5%)
 */
export const DEFAULT_STUDENT_POSITIONS: Record<string, StudentPosition> = {
  // === HÀNG 1 NỮ (11 Nữ hàng trước áo dài trắng - Từ trái sang phải) ===
  'lh-5': { x: 31.8, y: 56.0, radius: 4.5 }, // Thạch Thị Kim Chi (nữ đeo kính, tay tựa má)
  'lh-6': { x: 37.2, y: 56.5, radius: 4.5 }, // Huỳnh Thị Ngọc Diễm (nữ cười duyên, tay ôm má)
  'lh-7': { x: 42.8, y: 56.0, radius: 4.5 }, // Thạch Kim Thị Diễm (nữ cười hiền dịu)
  'lh-10': { x: 49.5, y: 55.5, radius: 4.5 }, // Lâm Ngọc Hà (nữ chính diện tạo hình trái tim)
  'lh-11': { x: 56.8, y: 55.8, radius: 4.5 }, // Thạch Thị Thanh Hà (nữ tựa cằm cười tươi)
  'lh-14': { x: 63.8, y: 56.5, radius: 4.5 }, // Trầm Thị Ngọc Hân (nữ đeo kính tròn tri thức)
  'lh-15': { x: 70.2, y: 57.0, radius: 4.5 }, // Thạch Thị Xuân Hoa (nữ nghiêng đầu cười xinh)
  'lh-21': { x: 77.0, y: 57.5, radius: 4.5 }, // Thạch Thị Thiên Lý (nữ tóc dài dịu dàng)
  'lh-23': { x: 83.2, y: 57.0, radius: 4.5 }, // Nguyễn Thị Quỳnh Ngân (nữ cười rạng rỡ)
  'lh-24': { x: 86.8, y: 59.5, radius: 4.5 }, // Trầm Thị Cẩm Nguyên (nữ cài hoa sen trên tóc)
  'lh-25': { x: 90.8, y: 53.5, radius: 4.5 }, // Trần Ngọc Thảo Nhân (nữ mạn phải thuyền hàng 1)

  // === HÀNG 2 NỮ (11 Nữ hàng giữa áo dài trắng - Từ trái sang phải) ===
  'lh-27': { x: 28.5, y: 43.5, radius: 4.2 }, // Sơn Thị Hiếu Phương (nữ kính cận bên trái)
  'lh-29': { x: 34.0, y: 43.8, radius: 4.2 }, // Nguyễn Lư Mai Thanh (nữ cười ấm áp)
  'lh-31': { x: 39.5, y: 42.8, radius: 4.2 }, // Dương Phương Thuỳ (nữ kính tròn tri thức)
  'lh-32': { x: 46.2, y: 44.2, radius: 4.2 }, // Ngô Thị Thanh Thuý (nữ dịu dàng)
  'lh-33': { x: 52.8, y: 43.8, radius: 4.2 }, // Nguyễn Lý Mỹ Tiên (nữ nụ cười tỏa nắng)
  'lh-34': { x: 60.2, y: 43.8, radius: 4.2 }, // Kim Thị Ngọc Trăm (nữ tóc đen óng mượt)
  'lh-35': { x: 67.0, y: 43.8, radius: 4.2 }, // Nguyễn Thanh Trúc (nữ nụ cười tươi tắn)
  'lh-36': { x: 73.5, y: 43.5, radius: 4.2 }, // Thạch Thị Thanh Trúc (nữ giơ tay chữ V chiến thắng)
  'lh-39': { x: 79.5, y: 43.8, radius: 4.2 }, // Trương Kim Ngọc Tươi (nữ nụ cười hiền hậu)
  'lh-40': { x: 86.0, y: 42.8, radius: 4.2 }, // Nhan Thiên Xuân (nữ kính cận mạn phải)
  'lh-41': { x: 92.5, y: 41.8, radius: 4.2 }, // Ngô Hải Yến (nữ mạn phải hàng 2)

  // === HÀNG 3 NAM (10 Nam hàng giữa áo sơ mi trắng - Từ trái sang phải) ===
  'lh-2': { x: 30.5, y: 34.0, radius: 4.0 }, // Châu Văn Bảo (nam cười tươi bên trái)
  'lh-3': { x: 36.2, y: 32.0, radius: 4.0 }, // Kim Trần Gia Bảo (nam khuôn mặt tuấn tú)
  'lh-4': { x: 41.5, y: 30.8, radius: 4.0 }, // Sơn Kim Bảo (nam cười rạng rỡ)
  'lh-8': { x: 44.5, y: 37.0, radius: 4.0 }, // Trần Hoàng Thiện Duy (nam hàng giữa)
  'lh-9': { x: 51.0, y: 34.5, radius: 4.0 }, // Phạm Huỳnh Phương Đông (nam chính diện)
  'lh-12': { x: 56.8, y: 34.5, radius: 4.0 }, // Thạch Huỳnh Hai (nam khuôn mặt khôi ngô)
  'lh-13': { x: 63.8, y: 34.2, radius: 4.0 }, // Trần Phú Hào (nam ánh mắt sáng)
  'lh-16': { x: 70.8, y: 33.8, radius: 4.0 }, // Võ Quốc Huy (nam năng động)
  'lh-17': { x: 77.2, y: 33.5, radius: 4.0 }, // Thạch Đức Kiên (nam nụ cười tự tin)
  'lh-18': { x: 83.5, y: 33.8, radius: 4.0 }, // Liêu Tuấn Kiệt (nam mạn phải hàng 3)

  // === HÀNG 4 NAM (9 Nam hàng sau cùng chân trời - Từ trái sang phải) ===
  'lh-19': { x: 46.8, y: 26.8, radius: 3.8 }, // Sơn Ngọc Lâm (nam hàng sau)
  'lh-20': { x: 52.2, y: 24.8, radius: 3.8 }, // Thạch Minh Lợi (nam nụ cười tươi)
  'lh-22': { x: 57.2, y: 24.8, radius: 3.8 }, // Kiến Gia Mẫn (nam vóc dáng cao)
  'lh-26': { x: 62.2, y: 23.8, radius: 3.8 }, // Thạch Phol (nam hàng sau trung tâm)
  'lh-28': { x: 68.0, y: 23.5, radius: 3.8 }, // Thạch Nhật Tâm (nam khuôn mặt rạng rỡ)
  'lh-30': { x: 73.8, y: 23.5, radius: 3.8 }, // Thạch Ngọc Thanh (nam ánh mắt sáng)
  'lh-37': { x: 79.8, y: 23.8, radius: 3.8 }, // Thạch Minh Tuấn (nam cười tươi)
  'lh-38': { x: 84.8, y: 24.8, radius: 3.8 }, // Thạch Trịnh Anh Tuấn (nam bên phải)
  'lh-1': { x: 89.8, y: 26.8, radius: 3.8 }, // Kiên Bình An (nam ngoài cùng giơ ngón tay cái Thumbs Up)
};

/**
 * Retrieve saved student positions or fallback to defaults
 */
export function getStoredStudentPositions(): Record<string, StudentPosition> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_POSITIONS);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Merge with defaults so any missing students are still covered
      return { ...DEFAULT_STUDENT_POSITIONS, ...parsed };
    }
  } catch (err) {
    console.warn('Could not read student positions from localStorage', err);
  }
  return DEFAULT_STUDENT_POSITIONS;
}

/**
 * Persist student positions to localStorage
 */
export function saveStoredStudentPositions(positions: Record<string, StudentPosition>): void {
  try {
    localStorage.setItem(STORAGE_KEY_POSITIONS, JSON.stringify(positions));
  } catch (err) {
    console.warn('Could not save student positions to localStorage', err);
  }
}

/**
 * Reset student positions to default mapping
 */
export function resetStoredStudentPositions(): Record<string, StudentPosition> {
  try {
    localStorage.removeItem(STORAGE_KEY_POSITIONS);
  } catch (err) {
    console.warn('Could not reset student positions', err);
  }
  return DEFAULT_STUDENT_POSITIONS;
}
