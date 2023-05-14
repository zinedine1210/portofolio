import { useState } from "react"

export default function About() {
    const [active, setActive] = useState(1)
  return (
    <div id='aboutme' className='dark:bg-gray-700 bg-light p-5 min-h-screen flex items-center justify-center'>
        <div className='container mx-auto px-2 md:px-32'>
        <div className='text-center'>
            <h1 className='text-blue-300 uppercase font-extrabold tracking-wider'>About me</h1>

            <div className='flex items-center justify-center gap-10 mt-5'>
            <span className='h-1 bg-gray-300 rounded-md w-20 inline-block'></span>
            <h1 className='text-3xl md:text-5xl uppercase font-light text-gray-600 dark:text-gray-400'>introduction</h1>
            <span className='h-1 bg-gray-300 rounded-md w-20 inline-block'></span>
            </div>
            <p className='text-center text-gray-500 dark:text-gray-300 mt-8 md:mt-12 w-full md:w-1/2 mx-auto'>Hallo, saya <span className='font-bold'>Zinedine Ziddan Fahdlevy</span>, saya lulusan Jurusan Sistem Informatika, Jaringan dan Aplikasi di SMK Negeri 26 Jakarta</p>
        </div>

        <div className='md:flex gap-32 mt-10 md:mt-16'>
            <div className='w-full h-full md:w-1/2'>
                <div className='backdrop-blur-lg rounded-md shadow-xl h-full w-full'>
                    <img src="/images/zinedine.png" alt="" className='w-auto h-96 mx-auto' />
                </div>
            </div>
            <div className='w-full md:w-3/4'>
            <div className='flex items-center border-b border-gray-300'>
                <button onClick={() => setActive(1)} className={`${active == 1 ? "text-blue-500 border-blue-500 border-b-2":"text-gray-700 dark:text-gray-500 dark:text-gray-300"} px-5 md:px-10 py-5 uppercase font-bold text-sm w-1/3`}>Personality</button>
                <button onClick={() => setActive(2)} className={`${active == 2 ? "text-blue-500 border-blue-500 border-b-2":"text-gray-700 dark:text-gray-500 dark:text-gray-300"} px-5 md:px-10 py-5 uppercase font-bold text-sm w-1/3`}>Experience</button>
                <button onClick={() => setActive(3)} className={`${active == 3 ? "text-blue-500 border-blue-500 border-b-2":"text-gray-700 dark:text-gray-500 dark:text-gray-300"} px-5 md:px-10 py-5 uppercase font-bold text-sm w-1/3`}>Certificates</button>
            </div>
            <div className='mt-10'>
                {
                    active == 1 ?
                    <>
                        <p className='text-gray-500 dark:text-gray-300 leading-7 mb-5'>Saya memiliki pengalaman bekerja selama 2 tahun di beberapa bidang pengembangan Aplikasi, termasuk Front End Developer, Back End Developer, dan Full Stack Developer. Saya ahli dalam membuat berbagai keperluan Website dengan antarmuka yang responsif serta berhasil meningkatkan muat halaman website hingga 50% dan meningkatkan konversi sebesar 25% dengan meminimalkan penggunaan paket pihak ketiga, file javascript, dan CSS menggunakan framework Next JS, React JS, TailwindCSS</p>
                        <p className='text-gray-500 dark:text-gray-300 leading-7'>Saya orang yang bertanggung jawab, pekerja keras, mempunyai rasa penasaran yang kuat, dapat bekerja sama sebagai tim dan disiplin dalam mengerjakan segala hal. Selama disekolah saya selalu dilatih dan diberikan tantangan baru agar saya selalu bisa mengerjakan sesuatu dengan baik dan cepat. Selain itu, saya juga orang yang sangat tertarik di dunia programming, oleh sebabnya saya sangat antusias mempelajari tentang teknologi dan lingkungan baru</p>
                    </>
                    :""
                }
                {
                    active == 2 ?
                    <>
                        <h1 className="font-bold">PT. Gateway Internusa (Tangerang, Indonesia)</h1>
                        <p className="font-light mb-5 text-sm">Front End Developer (Mei 2019 - April 2023)</p>
                        <p className="text-gray-500 dark:text-gray-300 leading-7 mb-2">Bertanggung jawab penuh dalam merancang dan membangun program dari sisi klien untuk tampilan program yang user-friendly dan tampilan yang responsif di berbagai platform device. Dalam membuat website saya sangat memerhatikan performance, accessibility, best practices dan SEO website agar mendapatkan aksesibilitas ke database server berkecepatan tinggi.</p>
                        <p className="text-gray-500 dark:text-gray-300 leading-7">Berpengalaman diarahkan menjadi Backend membuat rest API untuk keperluan aplikasi Jobseeker yang memiliki fitur psychotest dengan menggunakan program python</p>
                    </>
                    :""
                }
                {
                    active == 3 ?
                    <>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Penghargaan siswa teladan SMPN 256 Jakarta</li>
                            <li>UT Youth Movement Generation</li>
                            <li>Penghargaan Danton Terbaik BBTKLPP Pramuka</li>
                            <li>Kamp Kreatif SMK Indonesia bidang perlombaan Data Science Harapan 2</li>
                            <li>Sayembara Kamp Kreatif SMK Indonesia bidang perlombaan Smart School / Digital School</li>
                            <li>Kamp Kreatif SMK Indonesia bidang perlombaan Animasi 2D untuk Game Edukasi</li>
                            <li>Adinusa Cyber Security Sub Batch 1</li>
                            <li>Siswa Penggerak Digitalisasi Sekolah</li>
                            <li>SITCOM 2022 IT Club SMKN 26 Jakarta</li>
                            <li>Sertifikat Apresiasi Pelaksanaan PKL sebagai Front End Developer di PT. Gateway Internusa</li>
                        </ul>
                    </>
                    :""
                }
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
