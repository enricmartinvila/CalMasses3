import catJson from '../languaguesFiles/cat.json'

export default function MenuLateral() {

    return (
        <>
            <div className=" absolute right-10 bottom-10">
                <ul className=' no-underline font-bold'>
                    <li className='text-xl hover:text-2xl cursor-pointer'>1 {catJson.menu.main}</li>
                    <li className='text-xl hover:text-2xl cursor-pointer'>2 {catJson.menu.spaces}</li>
                    <li className='text-xl hover:text-2xl cursor-pointer'>3 {catJson.menu.aboutus}</li>
                    <li className='text-xl hover:text-2xl cursor-pointer'>4 {catJson.menu.contact}</li>
                </ul>
            </div>
        </>
    );
}