export function BotanicalCircuit() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -right-28 top-0 h-[28rem] w-[28rem] text-moss/65 opacity-80 sm:h-[36rem] sm:w-[36rem]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M321 50C296 144 322 219 395 291C465 360 493 435 458 550"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M320 172C254 154 205 117 179 60C245 71 293 109 320 172Z"
          className="fill-fern/35"
        />
        <path
          d="M391 287C458 268 514 283 560 331C495 352 437 337 391 287Z"
          className="fill-lilac/24"
        />
        <path
          d="M441 448C377 428 333 389 309 330C372 340 416 379 441 448Z"
          className="fill-clay/24"
        />
        <circle cx="321" cy="50" r="5" className="fill-moss" />
        <circle cx="395" cy="291" r="5" className="fill-moss" />
        <circle cx="458" cy="550" r="5" className="fill-moss" />
      </svg>

      <svg
        className="absolute -left-16 bottom-20 h-[18rem] w-[18rem] text-fern/55 opacity-70 sm:h-[22rem] sm:w-[22rem]"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M294 326C255 285 212 238 164 184C123 138 86 92 54 46" stroke="currentColor" strokeWidth="1.4" />
        <path d="M182 206C245 197 291 218 321 269C258 278 212 257 182 206Z" className="fill-fern/28" />
        <path d="M121 132C169 144 201 173 217 219C170 207 138 178 121 132Z" className="fill-lilac/20" />
        <circle cx="54" cy="46" r="4.5" className="fill-fern" />
        <circle cx="164" cy="184" r="4.5" className="fill-fern" />
        <circle cx="294" cy="326" r="4.5" className="fill-fern" />
      </svg>

      <div className="absolute left-8 top-28 h-56 w-56 rounded-full bg-fern/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute bottom-12 right-16 h-64 w-64 rounded-full bg-lilac/14 blur-3xl" />
      <div className="absolute right-24 top-1/3 h-40 w-40 rounded-full bg-clay/12 blur-3xl" />
    </div>
  );
}
