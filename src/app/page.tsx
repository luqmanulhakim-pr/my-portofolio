import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen bg-black">
        <div className="flex flex-col justify-center items-center min-h-screen text-center bg-[url(https://images.unsplash.com/photo-1542633008-b0047073391e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JleSUyMG1vdW50YWlufGVufDB8fDB8fHww)] bg-cover bg-center grayscale brightness-75 contrast-125">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h1 className="text-4xl md:text-6xl font-bold pb-6 md:pb-8 text-white drop-shadow-lg leading-tight">
              Selamat Datang di Portofolio Saya
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-100 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
              Kenali saya lebih dekat sebagai seorang mahasiswa Informatika
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-200" id="about">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Tentang Saya
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mari berkenalan lebih dekat dengan perjalanan saya di dunia
              teknologi dan pengembangan diri
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-2/5">
              <img
                src="profile.jpeg"
                className="w-80 h-80 md:w-96 md:h-96 mx-auto object-cover rounded-xl shadow-2xl border-4 border-gray-600"
                alt="Luqmanul Hakim - Mahasiswa Informatika ITENAS"
              />
            </div>

            <div className="w-full md:w-3/5">
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-2xl border-2 border-gray-600">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
                  Profil Saya
                </h3>

                <div className="space-y-6 md:space-y-8 text-gray-800">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-3">
                      Tentang Saya
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed">
                      Nama saya
                      <span className="font-semibold">Luqmanul Hakim</span>,
                      saya tinggal di Bandung dan saat ini sedang menempuh
                      pendidikan di
                      <span className="font-semibold">
                        Institut Teknologi Nasional Bandung (ITENAS)
                      </span>
                      jurusan Informatika. Saya merupakan pribadi yang pekerja
                      keras, tekun, disiplin, serta memiliki semangat tinggi
                      untuk menghadapi berbagai tantangan baru.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-black mb-3">
                      Prinsip & Hobi
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed">
                      Prinsip saya adalah selalu berusaha memberikan yang
                      terbaik dan tidak mudah menyerah dalam menyelesaikan
                      setiap tugas. Selain fokus pada dunia akademik, saya
                      memiliki hobi
                      <span className="font-semibold">
                        menonton film, menikmati musik, dan mendaki gunung
                      </span>
                      yang membantu meningkatkan kreativitas serta menumbuhkan
                      rasa cinta terhadap alam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
