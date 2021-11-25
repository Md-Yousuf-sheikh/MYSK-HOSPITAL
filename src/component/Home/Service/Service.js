import useService from '../../Hooks/useService';
import ServItem from './ServItem';

const Service = () => {
    const [service] = useService([])


    return (

        <>
            <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl text-center mt-5 font-bold ">Our Hospital Services</h1>
            <p className="text-center mb-3 text-1xl md:text-2xl my-3 font-serif ">Our all Service in this time !</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 mt-5">
                {
                    service.map(item => <ServItem item={item} key={item.id} />)
                }

            </div>
        </>
    );
};

export default Service;