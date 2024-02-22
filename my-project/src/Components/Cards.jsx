import { useEffect, useState } from "react";

export default function Cards({ title, description }) {
    const [isClicked, setIsClicked] = useState(false);

//    useEffect(() => {
//     }, [isHovered]);

    switch (title) {
        case "Caseta":
            const caseta = ["/fotosTargetes/fotosCaseta/SliderHab1.jpg"];
        case "Exterior":
            const exterior = ["/fotosTargetes/fotosExterior/Exterior1.jpg"];
        case "Placeta":
            const placeta = ["/fotosTargetes/fotosPlaceta/Placeta1.jpg"];
        break;
        default:
            break;
    }


    return (
        <>
            <div className={"w-[270px] h-[420px] m-8 border rounded-xl relative overflow-hidden shadow-md cursor-pointer"}>
                <div className="h-full w-full rounded-xl">
                    <img
                        src="/fotosTargetes/fotosCaseta/SliderHab1.jpg"
                        alt="Imagen"
                        onClick={() => setIsClicked(!isClicked)}
                        className="object-cover rounded-lg h-full w-full shadow-md hover:filter hover:grayscale transition-transform duration-600"
                    />
                </div>
                {!isClicked ? (
                    <div className="absolute bottom-0 left-0 right-0 text-center z-10">
                        <div className="bg-black bg-opacity-25">
                            <p className="text-2xl text-white py-2">
                            {title}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="absolute bottom-0 left-0 right-0 text-center z-10">
                        <div className="bg-black bg-opacity-25">
                            <p className="text-2xl text-white py-2">
                            {description}
                            </p>
                        </div>
                    </div>
                )}
                
            </div>
        </>
    );
}
