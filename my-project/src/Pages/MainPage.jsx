import Slider from "../Components/Slider";
import { useI18n } from "../Components/i18nContext";



export default function MainPage() {
    const { translations } = useI18n();


    return (
        <>
            <div id="main" className=" mb-20 relative">
                <div className="text-center font-bold relative">
                    <div className="w-full ">
                        <img src="/fotosTargetes/fotosBBQ/fotosReplace.jpg" alt="" className="w-full" />
                        <h1 className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                            {translations.maintexts.text}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}