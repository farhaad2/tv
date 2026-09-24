export const OTHER_OPTION = {
  id: "other",
  label: "سایر",
  hint: "گزینه دلخواه خود را در کادر زیر بنویسید",
} as const;

export const CITIES = [
  { id: "تهران", label: "تهران" },
  { id: "کرج", label: "کرج" },
  { id: "اصفهان", label: "اصفهان" },
  { id: "مشهد", label: "مشهد" },
  { id: "شیراز", label: "شیراز" },
  { id: "تبریز", label: "تبریز" },
  { id: "اهواز", label: "اهواز" },
  { id: "قم", label: "قم" },
  { id: "رشت", label: "رشت" },
  { id: "کرمان", label: "کرمان" },
  { id: "یزد", label: "یزد" },
  { id: "ارومیه", label: "ارومیه" },
  { id: "کیش", label: "کیش" },
  { id: "سایر", label: "سایر شهرها" },
] as const;

export const BUSINESS_TYPES = [
  { id: "physical", label: "فروشگاه حضوری", hint: "شعبه فروش پوشاک و لوازم ورزشی دارید" },
  { id: "online", label: "فقط آنلاین", hint: "می‌خواهید فروش فقط از سایت انجام شود" },
  { id: "both", label: "حضوری + آنلاین", hint: "سایت کنار شعبه، مثل فروشگاه‌های بزرگ ورزشی" },
  OTHER_OPTION,
] as const;

export const EXISTING_WEBSITE = [
  { id: "none", label: "سایت ندارم", hint: "از صفر می‌خواهیم بسازیم" },
  { id: "have", label: "سایت دارم", hint: "می‌خواهیم ارتقا یا جایگزین شود" },
  { id: "redesign", label: "نیاز به بازطراحی", hint: "سایت فعلی جواب نمی‌دهد" },
  OTHER_OPTION,
] as const;

export const BRANDS = [
  { id: "nike", label: "نایکی" },
  { id: "adidas", label: "آدیداس" },
  { id: "puma", label: "پوما" },
  { id: "underarmour", label: "آندر آرمور" },
  { id: "newbalance", label: "نیو بالانس" },
  { id: "asics", label: "اسیکس" },
  { id: "reebok", label: "ریباک" },
  { id: "local", label: "برندهای ایرانی", hint: "تولید داخل یا برند اختصاصی خودتان" },
  { id: "other", label: "برندهای دیگر", hint: OTHER_OPTION.hint },
] as const;

export const PRODUCT_CATEGORIES = [
  { id: "men", label: "پوشاک ورزشی مردانه", hint: "تیشرت، شلوار، گرمکن و لباس تمرین" },
  { id: "women", label: "پوشاک ورزشی زنانه", hint: "لباس تمرین، رانینگ و باشگاه" },
  { id: "kids", label: "بچگانه", hint: "پوشاک و کفش ورزشی کودک" },
  { id: "footwear", label: "کفش ورزشی", hint: "رانینگ، فوتبال، بسکتبال و روزمره" },
  { id: "team", label: "ورزش‌های تیمی", hint: "توپ، لباس تیم و لوازم فوتبال و بسکتبال" },
  { id: "fitness", label: "تجهیزات بدنسازی", hint: "دمبل، کش، مت و لوازم باشگاه خانگی" },
  { id: "outdoor", label: "فضای باز", hint: "کوهنوردی، کمپ و دوچرخه" },
  { id: "accessories", label: "اکسسوری", hint: "جوراب، کلاه، بطری، ساک و مچ‌بند" },
  { id: "all", label: "همه دسته‌ها", hint: "کاتالوگ کامل مثل یک فروشگاه بزرگ ورزشی" },
  OTHER_OPTION,
] as const;

export const PRODUCT_VOLUME = [
  { id: "small", label: "کمتر از ۳۰۰ کالا", hint: "فروشگاه تخصصی با تنوع محدود" },
  { id: "medium", label: "۳۰۰ تا ۳ هزار کالا", hint: "با احتساب رنگ و سایز" },
  { id: "large", label: "بیش از ۳ هزار کالا", hint: "کاتالوگ گسترده مثل نمشی" },
  OTHER_OPTION,
] as const;

export const INVENTORY_SOURCE = [
  { id: "manual", label: "ثبت دستی", hint: "کالا، رنگ و سایز را در پنل وارد می‌کنیم" },
  { id: "excel", label: "اکسل / CSV", hint: "ورود گروهی از فایل تأمین‌کننده" },
  { id: "api", label: "API تأمین‌کننده", hint: "اتصال به موجودی برند یا پخش‌کننده" },
  { id: "erp", label: "نرم‌افزار حسابداری", hint: "یکپارچه با موجودی شعبه" },
  { id: "variants", label: "موجودی هر سایز و رنگ", hint: "هر ترکیب جداگانه کم و زیاد شود" },
  OTHER_OPTION,
] as const;

export const PAYMENT_GATEWAYS = [
  { id: "zarinpal", label: "زرین‌پال" },
  { id: "idpay", label: "آیدی‌پی" },
  { id: "snappay", label: "اسنپ‌پی" },
  { id: "card", label: "کارت‌به‌کارت + تأیید دستی" },
  { id: "installment", label: "اقساط / اعتباری", hint: "برای کفش و پوشاک گران‌تر" },
  { id: "cod", label: "پرداخت در محل", hint: "رایج در خرید پوشاک و کفش" },
  OTHER_OPTION,
] as const;

export const DELIVERY_METHODS = [
  { id: "standard", label: "ارسال عادی", hint: "تحویل درب منزل در چند روز" },
  { id: "express", label: "ارسال سریع", hint: "همان‌روز یا روز بعد در شهرهای اصلی" },
  { id: "pickup", label: "تحویل از شعبه", hint: "مشتری سفارش آنلاین را از فروشگاه می‌گیرد" },
  { id: "exchange", label: "ارسال تعویض سایز", hint: "مسیر جدا برای برگرداندن کفش و لباس" },
  OTHER_OPTION,
] as const;

export const DESIGN_STYLES = [
  { id: "modern", label: "مدرن و تصویرمحور", hint: "عکس بزرگ کالا، منوی دسته و خرید سریع با موبایل" },
  { id: "premium", label: "برند ورزشی سطح بالا", hint: "حس فروشگاه‌هایی مثل نایکی و آدیداس" },
  { id: "budget", label: "حراج و تخفیف‌محور", hint: "قیمت خط‌خورده و کمپین در صفحه اول" },
  { id: "custom", label: "طراحی سفارشی", hint: "الهام از سایت‌هایی که خودتان معرفی می‌کنید" },
  OTHER_OPTION,
] as const;

export const BUYER_FEATURES = [
  { id: "variants", label: "انتخاب رنگ و سایز", hint: "مشتری روی خود کالا سایز و رنگ را عوض کند" },
  { id: "sizeguide", label: "راهنمای سایز", hint: "جدول اندازه لباس و کفش قبل از خرید" },
  { id: "filters", label: "فیلتر پیشرفته", hint: "رشته ورزشی، جنسیت، برند، سایز، رنگ و قیمت" },
  { id: "search", label: "جستجوی سریع", hint: "پیشنهاد کالا هنگام تایپ نام برند یا مدل" },
  { id: "wishlist", label: "لیست علاقه‌مندی", hint: "ذخیره برای خرید بعدی" },
  { id: "reviews", label: "نظر خریداران", hint: "امتیاز، عکس و تجربه سایز روی کالا" },
  { id: "outfit", label: "کالای مکمل", hint: "مثلاً کنار کفش رانینگ، جوراب و لباس پیشنهاد شود" },
  { id: "sale", label: "صفحه حراج", hint: "کمپین تخفیف و کالاهای پرفروش" },
  { id: "chat", label: "چت با فروشگاه", hint: "پرسش درباره سایز و موجودی" },
  { id: "blog", label: "مجله ورزشی", hint: "راهنمای انتخاب کفش، برنامه تمرین و معرفی کالا" },
  OTHER_OPTION,
] as const;

export const ADMIN_FEATURES = [
  { id: "orders", label: "مدیریت سفارش", hint: "وضعیت پرداخت، بسته‌بندی و ارسال" },
  { id: "returns", label: "مرجوعی و تعویض", hint: "درخواست تعویض سایز و بازگشت وجه" },
  { id: "inventory", label: "موجودی سایز و رنگ", hint: "کالاهای ناموجود و پرفروش به تفکیک تنوع" },
  { id: "campaigns", label: "کمپین تخفیف", hint: "درصد تخفیف روی دسته، برند یا کد تخفیف" },
  { id: "sms", label: "پیامک به مشتری", hint: "اطلاع ارسال، موجود شدن سایز و حراج" },
  { id: "staff", label: "چند کاربره", hint: "دسترسی جدا برای انبار، پشتیبانی و مدیر" },
  OTHER_OPTION,
] as const;

export function labelsFor(
  ids: string[],
  catalog: ReadonlyArray<{ id: string; label: string }>,
) {
  return ids
    .map((id) => catalog.find((item) => item.id === id)?.label)
    .filter(Boolean) as string[];
}

export function labelOf(
  id: string,
  catalog: ReadonlyArray<{ id: string; label: string }>,
) {
  return catalog.find((item) => item.id === id)?.label ?? "—";
}

function formatOtherLabel(otherText: string) {
  const text = otherText.trim();
  return text ? `سایر (${text})` : OTHER_OPTION.label;
}

export function labelWithOther(
  id: string,
  catalog: ReadonlyArray<{ id: string; label: string }>,
  otherText: string,
) {
  if (id === OTHER_OPTION.id) return formatOtherLabel(otherText);
  return labelOf(id, catalog);
}

export function labelsWithOther(
  ids: string[],
  catalog: ReadonlyArray<{ id: string; label: string }>,
  otherText: string,
) {
  return ids.map((id) => {
    if (id === OTHER_OPTION.id) return formatOtherLabel(otherText);
    return labelOf(id, catalog);
  });
}
