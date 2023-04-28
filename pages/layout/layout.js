
const layout = ({children}) => {
    return (
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div>
                    <p> image</p>
                </div>
                <div className="right flex flex-col justify-evely bg-gray-500">
                    <div className="text-center py-10" >
                    {children}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default layout;