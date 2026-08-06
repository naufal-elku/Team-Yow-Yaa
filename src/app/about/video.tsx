import React from 'react';

const videoList = [
  { id: 1, title: 'Tentang Presensi' },
  { id: 2, title: 'Tutorial Penggunaan Presensi' },
  { id: 3, title: 'Kenali Kami Lebih Dekat' },
];

export default function Video() {
  return (
    <section className="font-montserrat">
      <div className="py-20 px-6 md:px-12 lg:px-[120px] max-w-[1440px] mx-auto">
        <h2 className="font-bold text-[32px] leading-10 text-center mb-[32px] md:mb-[64px]">
          Kenali Presensi Lebih Dekat Melalui Video
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] justify-items-center">
          {videoList.map((video) => (
            <div
              key={video.id}
              className="flex flex-col items-center group cursor-pointer w-full"
            >
              <div className="w-full max-w-[360px] aspect-video bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-blue-700 group-hover:-translate-y-1 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-5 h-5 text-gray-800 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-[20px] leading-[28px] font-semibold text-center text-hover">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}