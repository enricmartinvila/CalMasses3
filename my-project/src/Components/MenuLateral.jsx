import { useI18n } from "../Components/i18nContext";

export default function MenuLateral() {

    const { translations } = useI18n();


    return (
        <>
            <div className=" absolute right-10 bottom-10">
                <ul className=' no-underline font-bold'>
                    <li className='text-xl hover:text-2xl cursor-pointer text-[#556B2F]'>1 {translations.menu.main}</li>
                    <li className='text-xl hover:text-2xl cursor-pointer text-[#556B2F]'>2 {translations.menu.aboutus}</li>
                    <li className='text-xl hover:text-2xl cursor-pointer text-[#556B2F]'>3 {translations.menu.spaces}</li>
                    <li className='text-xl hover:text-2xl cursor-pointer text-[#556B2F]'>4 {translations.menu.contact}</li>
                </ul>
            </div>
        </>
    );
}