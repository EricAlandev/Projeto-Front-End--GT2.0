import { Link} from 'react-router-dom';

const Construction = () => {

    return(
        <div className='flex flex-col items-center gap-4'>
            <div className='flex justify-center'>
                <img src="/assets/error.webp" 
                alt="error photo" 
                className='w-[400px]'
                />
            </div>

            <div className='flex flex-col gap-4'>
            <h1 className="mt-[30px] ml-[40px] text-[26px] font-[Inter] font-light text-[#333]">
                 Página não encontrada.
                </h1>

                <p className='font-[Inter] font-light ml-[-10px] text-[18px] text-[#000]'>Ainda está em desenvolvimento. Volte depois!</p>

                <Link to={'/'}
                className="flex justify-center ml-[-10px] mt-[15px] mb-[15px] pb-1  font-[Inter] font-light border-b-2 text-[19px]    
                hover:border-b-0 hover:bg-black hover:text-white
            hover:text-center hover:pt-[5px] hover:pl-[10px] hover:pb-[5px] hover:pr-[10px] hover:rounded-[4px] duration-200"
                >Ir para home Page</Link>
            </div>


        </div>
    )
}

export default Construction;