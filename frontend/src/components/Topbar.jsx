export default function Topbar({ user, initials }) {
  return (
    <div className="flex justify-between text-[#0B0F1A] bg-[#ffffff] p-3 items-center border-b border-[#E8E7E2] text-base">
      <div className="font-normal ml-4 flex justify-center items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1A3CFF] mr-2"></div>
        <div className="font-medium text-lg">ZePay</div>
      </div>
      <div className="font-normal flex items-center">
        <div className="font-medium">
          <span className="text-[#8A8F9E] font-normal">Welcome,</span> {user}
        </div>
        <div className="rounded-full text-white bg-[#1A3CFF] w-10 h-10 flex justify-center items-center ml-2 mr-4">
          <div>{initials}</div>
        </div>
      </div>
    </div>
  );
}

// #0B0F1A black main fonts
// #1A3CFF blue button
// border gray 400
// blind text #8A8F9E
