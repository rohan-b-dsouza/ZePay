import SendMoneyButton from "./SendMoneyButton";

export function Users() {
  return (
    <div className="flex flex-col">
      <div className="mt-8 ml-10 font-medium">Users</div>
      <div className="max-w-full bg-white mt-4 p-4 ml-10 mr-10 rounded-lg shadow-sm mb-1">
        <input 
          className="w-full max-w-full px-1"
          type="search"
          placeholder="Search users..."
        />
      </div>
      <div className="max-w-full bg-white mt-4 ml-10 mr-10 rounded-lg shadow-sm">
        <div className="divide-y divide-gray-200 w-full">
          <div className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <div className="rounded-full text-white bg-[#1A3CFF] w-10 h-10 flex justify-center items-center ml-2 mr-4">
                <div>A</div>
              </div>
              <div>Aryan Mehta</div>
            </div>
            <SendMoneyButton></SendMoneyButton>
          </div>
          <div className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
              <div className="rounded-full text-white bg-[#1A3CFF] w-10 h-10 flex justify-center items-center ml-2 mr-4">
                <div>P</div>
              </div>
              <div>Priya Jagtap</div>
            </div>
            <SendMoneyButton></SendMoneyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
