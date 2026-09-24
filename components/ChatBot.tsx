"use client";

import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { cn } from "@/lib/cn";

type Msg = { from: "bot" | "user"; text: string };

const FAQ: Array<{ test: RegExp; answer: string }> = [
  {
    test: /فرم|نیازمندی|سایت/,
    answer:
      "این فرم برای کسی است که می‌خواهد فروشگاه اینترنتی ورزشی بسازد. شما می‌گویید سایت چه دسته‌ها، برندها و امکاناتی داشته باشد؛ خریدار نهایی اینجا ثبت‌نام یا خرید نمی‌کند.",
  },
  {
    test: /کاتالوگ|برند|محصول|دسته/,
    answer:
      "در مرحله کاتالوگ برندها، دسته‌های کالا مثل کفش و پوشاک، حجم کاتالوگ و نحوه ورود موجودی سایز و رنگ را مشخص می‌کنید.",
  },
  {
    test: /مشتری|خرید|سایز|فیلتر/,
    answer:
      "مرحله تجربه خرید درباره نیاز خریدار فروشگاه شماست: راهنمای سایز، فیلتر رشته ورزشی، انتخاب رنگ و سایز، نظر خریداران و چت.",
  },
  {
    test: /پرداخت|ارسال|مرجوع|تعویض|گارانتی/,
    answer:
      "در مرحله پرداخت و خدمات، درگاه، ارسال سریع یا تحویل از شعبه، تعویض سایز و نمایش هزینه ارسال قبل از پرداخت را مشخص می‌کنید.",
  },
  {
    test: /پنل|مدیریت|سفارش/,
    answer:
      "مرحله پنل مدیریت ابزارهایی را که خودتان برای مدیریت فروشگاه می‌خواهید پوشش می‌دهد؛ مثل سفارش، موجودی و چند کاربره.",
  },
];

export function ChatBot() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "سلام! من راهنمای فرم نیازمندی‌های سایت هستم. اگر درباره مراحل فرم سؤالی دارید بپرسید.",
    },
  ]);

  function send(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((current) => [...current, { from: "user", text }]);

    const hit = FAQ.find((item) => item.test.test(text));
    setMessages((current) => [
      ...current,
      {
        from: "bot",
        text:
          hit?.answer ||
          "برای ثبت نیازمندی‌های فروشگاه از منوی «فرم نیازمندی‌ها» استفاده کنید. هر مرحله را می‌توانید نیمه‌کاره ذخیره کنید.",
      },
    ]);
  }

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {open && (
        <div className="mb-3 flex h-[420px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101826] shadow-2xl">
          <div className="bg-amber-400 px-4 py-3 text-black">
            <p className="font-bold">راهنمای فرم نیازمندی‌ها</p>
            <p className="text-xs opacity-80">سؤالات درباره مراحل طراحی سایت فروشگاه</p>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={`${msg.from}-${index}`}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 leading-6",
                  msg.from === "bot"
                    ? "bg-white/8 text-white"
                    : "mr-auto bg-amber-400 text-black",
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="سؤال خود را بنویسید..."
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-amber-400 px-3 text-sm font-bold text-black"
            >
              ارسال
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full bg-amber-400 px-4 py-3 text-sm font-black text-black shadow-lg shadow-amber-400/30"
        aria-label="باز کردن راهنمای فرم"
      >
        <span className="text-lg">{open ? "×" : "💬"}</span>
        راهنمای فرم
      </button>
    </div>
  );
}
