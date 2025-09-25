import Link from "next/link";

export default function NoticeHeader() {
  return (
    <div className="bg-maroon   text-white p-[0.10rem]" role="alert">
      {/* <p className="font-bold">सूचना</p> */}
      {/* <p className="mt-2 text-center">
        <span className="font-bold">आध्यात्मिक उपधान </span>प्रवेश: मार्गशीर्ष वद ६, बुधवार | 10-12-2025 <a href="/form/updhan-18" className="underline font-semibold">Register</a>
      </p> */}

      <div className="grid max-w-3xl mx-auto text-center sm:grid-cols-3 grid-cols-1">
        <div className="font-bold ">आध्यात्मिक उपधान</div>
        <div className="">प्रवेश: मार्गशीर्ष वद ६, बुधवार | 10-12-2025 </div>
        <Link href="/pages/form/updhan-18" className="underline font-semibold">Register</Link>
      </div>
    </div>
  );
}