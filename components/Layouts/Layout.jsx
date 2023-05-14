import Footer from "../Footer"
import Navbar from "../Navbar"
import Seo from "../Seo"

export default function Layout({children, title, description, image, lang}) {
  return (
    <>
      <Seo 
        title={title}
        description={description}
        image={image ? image:null}
      />
      
      <section>
        <Navbar />
        {children}
        <Footer />
      </section>
    </>
  )
}
