export default function Balance({balance}) {
    return (
        <div className="flex max-w-lg w-full bg-white mt-8 p-6 ml-10 mr-10 rounded-lg shadow-sm">
            <div>
                <div className="text-sm text-[#8A8F9E] font-normal">Your Balance
                </div>
                <div className="text-2xl font-medium mt-1">Rs {balance}</div>
            </div>
            
        </div>
    )
}

// 23:13 pm 