import Link from "next/link"
import { useEffect, useState } from "react"
import { FaEye } from "react-icons/fa"

export default function Projects() {
    const [active, setActive] = useState(null)
    let data = [
        {
            id:1,
            title:"Website Berita Polres Metro Bekasi",
            description:"Projek pembuatan website berita untuk Polres Metro Bekasi, agar memudahkan para warga bekasi untuk mengakses berita terbaru yang terjadi di Kabupaten Bekasi",
            image:"/images/beritabekasi.jpg",
            link:"https://tribratanews-metrobekasi.metro.polri.go.id/",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive", "Microservices", "TailwindCSS"]
        },
        {
            id:2,
            title:"Website Builder",
            description:"Projek inovasi dari saya dengan mengembangkan website dengan tujuan untuk memudahkan perusahaan dalam memantau dan mengelola kinerja pekerja. Situs ini dapat membangun sebuah website khususnya website untuk dokumentasi yang simpel dengan hanya drag and drop. Tidak hanya itu saja website ini terdapat 3 fitur lainnya yaitu 'Notes' untuk membuat catatan, 'Error Knowledge' untuk mencatat setiap permasalahan yang terjadi dalam perusahaan, dan Minutes Of Meeting untuk mencatat setiap poin dalam meeting",
            image:"/images/gactivity.jpg",
            link:"https://g-activity.gnusa.id/",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive", "TailwindCSS", "Content Editable", "Draggable", "Microservices"]
        },
        {
            id:3,
            title:"Koneksi dengan OpenAI",
            description:"Projek pembuatan website yang terkoneksi dengan Artificial Intelligence dari OpenAI. Website ini terdapat 2 pilihan untuk memberikan pengetahuan terlebih dahulu kepada AI yaitu Upload PDF, dan Link Website. Setelah itu AI akan mempelajarinya, lalu membukakan chat untuk bertanya seputar hal terkait yang sudah diupload kepadanya",
            image:"/images/glibary.jpg",
            link:"https://glibrary.gnusa.id/",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive", "TailwindCSS", "Multiple Role", "Artificial Intelligence"]
        },
        {
            id:4,
            title:"Chat",
            description:"Projek pengembangan website chatting untuk keperluan perusahaan",
            image:"/images/chatgnusa.png",
            link:"https://chat.gnusa.id/",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive", "TailwindCSS", "Chat", "Socket", "Layout Grid"]
        },
        {
            id:5,
            title:"Website Psychotest Jobseeker bagi Perusahaan",
            description:"Projek pembuatan website yang bertujuan menyediakan platform bagi perusahaan untuk membuat, menginformasikan dan menyiarkan lowongan kerjanya sesuai kualifikasi dari perusahaan serta dengan fitur psychotest, memungkinkan untuk perusahaan menyediakan psychotest yang bisa didapatkan dari pycholog, psychotest yang disediakan gratis maupun untuk membuatnya sendiri",
            image:"/images/psychotest-client.jpg",
            link:"https://psychotest-client.gnusa.id/",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive", "TailwindCSS", "Multiple Role", "Content Editable"]
        },
        {
            id:6,
            title:"Website Psychotest Jobseeker bagi Kandidat",
            description:"Projek pembuatan website yang bertujuan menyediakan platform bagi kandidat pencari kerja untuk menemukan informasi lowongan pekerjaan dari berbagai perusahaan dan industri seperti bidang pekerjaan, lokasi, gaji, dan persyaratan lainnya. Setelah melamar mereka secara otomatis akan melalui psychotest yang telah disediakan pihak perusahaan",
            image:"/images/psychotest.jpg",
            link:"https://psychotest.gnusa.id/",
            label:["Web Design", "Next JS", "SEO", "PWA", "TailwindCSS"]
        },
        {
            id:7,
            title:"Profil Perusahaan Restoran Sushimoo",
            description:"Projek pembuatan landing page untuk profil perusahaan sebuah restoran sushi terkenal di Indonesia, yaitu sushimoo",
            image:"/images/sushimoo.jpg",
            link:"https://sushimoo.gnusa.id",
            label:["Web Design", "Next JS", "PWA", "SEO", "Responsive"]
        },
        {
            id:8,
            title:"Marketplace Komindo UMKM Sejahtera",
            description:"Projek pembuatan website marketplace sebuah koperasi di Indonesia, yaitu Komindo. Untuk menyediakan platform bagi para UMKM agar dapat memasarkan produk mereka secara efektif dengan harapan dapat membangun dan mewujudkan UMKM yang sejahtera",
            image:"/images/marketplace.jpg",
            link:"https://marketplace.umkmsejahtera.id",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive"]
        },
        {
            id:9,
            title:"MMS Marketplace Komindo UMKM Sejahtera",
            description:"Website yang menjadi platform bagi penjual untuk memasarkan produknya dan memiliki full akses untuk mengelola dagangannya disini",
            image:"/images/mmsumkmsejahtera.jpg",
            link:"https://mms.umkmsejahtera.id",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive"]
        },
        {
            id:10,
            title:"Profil Koperasi Komindo Sejahtera",
            description:"Projek pembuatan website profil koperasi dari Komindo Sejahtera untuk memperkenalkan koperasinya termasuk Info tentang simpanan, Berita, Informasi seputar koperasi, dan Kontak yang bisa dihubungi",
            image:"/images/komindocp.jpg",
            link:"https://umkmsejahtera.id",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive"]
        },
        {
            id:11,
            title:"Profil Koperasi Mitra Usaha Sentosa",
            description:"Projek pembuatan website profil koperasi dari KMUS atau Koperasi Mitra Usaha Sentosa untuk memperkenalkan koperasinya termasuk Filosofi Logo, Visi dan Misi, Izin Usaha, Tim Koperasi, dan Kontak yang bisa dihubungi",
            image:"/images/kmuscp.jpg",
            link:"https://kmus.org",
            label:["Web Design", "Next JS", "SEO", "PWA", "Responsive"]
        },
        {
            id:12,
            title:"Sinau Website Belajar",
            description:"Projek pembuatan website media interaksi antara Guru dan Siswa untuk kelancaran kegiatan belajar dan mengajar secara daring dalam perlombaan KKSI (Kamp Kreatif SMK Indonesia) bidang Smart School tahun 2019. Pada projek ini saya sebagai Full Stack Developer menggunakan Laravel",
            image:null,
            link:"https://www.youtube.com/watch?v=HnLDkPxYVeEd",
            label:["Web Design", "Laravel", "KKSI", "Livewire"]
        },
        {
            id:13,
            title:"EzSchool Website Kantin",
            description:"Projek Perlombaan KKSI bidang Smart School tahun 2020 saat masih SMK. Platform yang menyediakan kebutuhan sekolah dalam bentuk digital sehingga dapat mengefisienkan aktivitas siswa dan guru. Pada projek ini saya sebagai Full Stack Developer menggunakan teknologi Laravel",
            image:"/images/ezschool.jpg",
            link:"https://ezschool-smkn26.000webhostapp.com/",
            label:["Web Design", "Laravel", "MySQL", "Livewire", "KKSI"]
        }
        
    ]

    useEffect(() => {
        if(!active){
            setActive(data[0].id)
        }
    }, [])

    const handlerNext = () => {
        setActive(active + 1)
    }

    const handlerPrevious = () => {
        setActive(active - 1)
    }

  return (
    <section id='projects' class="bg-white dark:bg-gray-900">
          <div class="relative flex">
              <div class="min-h-screen lg:w-1/3"></div>
              <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

              <div
                  class="container flex flex-col justify-center w-full min-h-screen px-2 md:px-32 py-10 mx-auto lg:absolute lg:inset-x-0">
                  <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                      My Recent <span className="text-blue-500">Project</span>
                  </h1>
                  <div>
                    {
                        data ? data.map((item, key) => {
                            return (
                                <div key={key} class={`${active == item.id ? "opacity-100 not-sr-only":"sr-only opacity-0"} transition-all duration-500 delay-300 mt-10 lg:mt-20 lg:flex`}>
                                    <img class="object-cover object-center w-full lg:w-auto rounded-lg h-96 shadow-lg" src={item.image} alt=""/>

                                    <div class="mt-8 lg:px-10 lg:mt-0">
                                        <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                            {item.title}
                                        </h1>

                                        <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-300 dark:text-gray-400">{item.description}</p>

                                        <div className="flex items-center flex-wrap w-full gap-2 mt-5">
                                            {
                                                item.label.map((lab, keylab) => {
                                                    return (
                                                        <span key={keylab} className="inline-block bg-blue-500 rounded-md py-2 px-5 text-sm text-white font-bold">#{lab}</span>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="mt-20 flex items-center gap-2">
                                            <Link href={`/detail/${item.id}`} legacyBehavior>
                                                <a className='bg-zinc-500 flex items-center gap-2 py-2 px-5 rounded-lg text-sm text-white hover:bg-zinc-600 transition-colors duration-300 ease-in-out'>
                                                    Detail
                                                    <FaEye/>
                                                </a>
                                            </Link>
                                            <a target="_blank" href={item.link} className="border border-gray-500 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out text-sm">
                                                Go To Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :"Waiting"
                    }

                    <div class="flex items-center justify-between mt-12 lg:justify-start gap-6">
                        <button disabled={active == 1 ? true:false} onClick={() => handlerPrevious()} title="left arrow" class="disabled:bg-zinc-300 p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex items-end gap-1">
                            <h1 className="text-3xl text-gray-500 dark:text-gray-300 font-bold">{active}</h1>
                            <h1 className="text-gray-400 text-sm font-bold">/ {data.length}</h1>
                        </div>

                        <button disabled={active == data.length ? true:false} onClick={() => handlerNext()} title="right arrow" class="disabled:bg-zinc-300 p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                  </div>
              </div>
          </div>
        </section>
  )
}
