import { useI18n } from "../Components/i18nContext";


export default function Contacte() {
    const { translations } = useI18n();


    return (
        <>
            <div className=' items-center justify-center text-center'>
                <h1 className="text-3xl m-5 font-bold my-24">{translations.titles.contact}</h1>
                <div className="flex items-center justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.633208479499!2d1.8204971757808384!3d41.72843307477199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4580d736c2c79%3A0xcf0af0fca977fed9!2sCarrer%20de%20Carri%C3%B3%2C%2022%2C%2008242%20Manresa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1694506738146!5m2!1ses!2ses" style={{ width: "600px", height: "300px" }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p className=''>Cal Masses -- Alba</p>
                <div className=''>
                    <a href='https://www.google.com/maps/dir//Carrer+de+Carri%C3%B3,+22+08242+Manresa+Barcelona/@41.7284291,1.8230721,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4580d736c2c79:0xcf0af0fca977fed9!2m2!1d1.8230721!2d41.7284291?entry=ttu' className='contacto__ubicacion__texto'>Carrer Carrio n.22</a>
                    <a href='https://www.google.com/maps/dir//Carrer+de+Carri%C3%B3,+22+08242+Manresa+Barcelona/@41.7284291,1.8230721,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4580d736c2c79:0xcf0af0fca977fed9!2m2!1d1.8230721!2d41.7284291?entry=ttu' className='contacto__ubicacion__texto2'>08241 Manresa</a>
                </div>
                <div className=''>
                    <a className='cursor-pointer font-semibold' href='mailto:calmasses@gmail.com'>calmasses@gmail.com</a>
                </div>
                <div className=''>
                    <a className='cursor-pointer font-semibold' href='tel:calmasses@gmail.com'> +34 690332521</a>
                </div>
            </div>
        </>
    )
}