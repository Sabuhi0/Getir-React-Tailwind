import FooterMenu from "./ui/FooterMenu";
import { BiGlobe } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {

  const menus = [
    {
      title: 'Getir\'i Keşfedin',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Teknoloji Kariyerleri'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Teknoloji Kariyerleri'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Teknoloji Kariyerleri'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    }
  ]
  
  return (
    <div className="bg-white mt-10">
      <div className="md:container mx-auto px-4 md:px-0">
        <div className="grid gap-y-6 grid-cols-1 md:flex md:justify-between pt-5 md:pt-10">
          <section>
            <h1 className="text-lg text-primary-brand-color mb-4">Getir'i indirin!</h1>
            <nav className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1">
              <a href="/">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
              </a>
              <a href="/">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
              </a>
              <a href="/">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
              </a>
            </nav>
          </section>
          { 
            menus.map((menu, index) => <FooterMenu key={index} {...menu}/>)
          }
          <div className="hidden xl:block">
            <figure className="w-[104] h-[116px] flex items-center justify-center drop-shadow-lg bg-white p-4 rounded-lg">
              <img className="w-[72px] h-[84px]" src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2022 Getir
            <a href="/" className="text-primary-brand-color relative before:w-[3px] before:h-[3px] before:bg-primary-brand-color before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <ul className="flex gap-x-3">
            <li>
              <a href="/" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10" > <BsFacebook size={20}/> </a>
            </li>
            <li>
              <a href="/" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10" > <FaTwitter size={20}/> </a>
            </li>
            <li>
              <a href="/" className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10" > <FaInstagram size={20}/> </a>
            </li>
            <li>
              <a href="/" className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-primary-brand-color"> <BiGlobe size={1}/> Türkçe (TR) </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;