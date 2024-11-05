const MobileApp = () => {
  return (
    <div className="md:container mx-auto flex justify-between items-center bg-primary-brand-color bg-mobile-app mt-6 md:rounded-lg text-white">
      <div className="flex flex-col text-left gap-y-3 p-6 md:p-10">
        <h3 className="text-[26px] font-bold tracking-tight">Getir'i indirin!</h3>
        <p className="font-semibold md:w-[360px]">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
        <nav className="mt-5 flex flex-wrap lg:flex-nowrap lg:justify-center gap-2">
          <a href="/">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" className="md:h-8 lg:h-auto" alt="" />
          </a>
          <a href="/">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" className="md:h-8 lg:h-auto" alt="" />
          </a>
          <a href="/">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" className="md:h-8 lg:h-auto" alt="" />
          </a>
        </nav>
      </div>
      <picture className="pt-6 hidden md:block md:self-end">
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="Mobil-app" />
      </picture>
    </div>
  )
}

export default MobileApp;
