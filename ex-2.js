// Exercise #2: Promotion Conditions //full time

//กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์
//         และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
//กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum"

//ผู้ซื้อจะได้รับโปรโมชั่นถ้ากรณีข้อใดข้อหนึ่งต่อไปนี้เป็นจริง (ไม่จำเป็นต้องเป็นจริงทั้งสองข้อ)

// Start coding here
let lastMonthPaidMoreThan4000 = true; // john spent 4001
let isWeekday = true; // john went on shopping on Friday
let hasBoughtProductFromITCategory = true; // john has never purchased any products under IT category
let hasAttendedDiscountEvent = true; // john attended discount event before
let isPlatinum = true; // john is a gold member

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent) ||
  !isPlatinum;

console.log(hasPromotion);
