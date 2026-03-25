import Button from "../components/Button";
import InputBox from "../components/InputBox";

export default function SendMoney() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F0F2F5]">
      <div className="bg-[#ffffff] max-w-md w-full flex flex-col  shadow-sm rounded-lg">
        <div className="divide-y divide-gray-200">
          <div className="flex items-center px-5 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#3D4110"
              className="size-6 cursor-pointer hover:stroke-[#0B0F1A] transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="text-[#8A8F9E] text-sm pl-2">Send Money</div>
          </div>
          <div className="flex items-center py-7 px-5">
            <div className="rounded-full text-white bg-[#1A3CFF] w-10 h-10 flex justify-center items-center ml-2 mr-4 ">
              <div>P</div>
            </div>
            <div className="font-medium text-lg text-[#0B0F1A]">
              Rohan Dsouza
              <div className="text-sm text-[#8A8F9E] font-normal">Recipient</div>
            </div>
          </div>
          <div className="py-7 px-7 space-y-5">
            <InputBox
              label="Amount (in Rs)"
              placeholder="0.00"
              type="number"
            ></InputBox>
            <InputBox
              label="Note (optional)"
              placeholder="What's this for?"
            ></InputBox>
            <Button content={"Initiate Transfer"}></Button>
            <div className="text-[#8A8F9E] font-normal text-sm flex items-center flex-col">
              Transfers are instant and cannot be reversed
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
