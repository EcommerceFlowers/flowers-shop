import { cx } from '@utils/tools';

export default function RegisterPage() {
  return (
    <div className="bg-whitesmoke w-full h-[808px] overflow-hidden text-left text-lg text-gray font-roboto" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="absolute top-[62px] left-[232px] w-[976px] h-[673px]">
        <img
          className="absolute top-[0px] left-[488px] w-[488px] h-[673px] object-cover"
          alt=""
          src="/images/register.jpg"
        />
        <div className="absolute top-[0px] left-[0px] bg-white w-[488px] h-[673px]" />
      </div>
      <div className="absolute top-[92px] left-[280px] text-4xl text-black font-normal">
        Register
      </div>
      <div className="absolute top-[105px] left-[540px] w-[131px] h-[22.4px] text-black">
        <button className="absolute top-[0px] left-[21px] inline-block w-[110px] h-[22.4px] font-normal bg-transparent border-none cursor-pointer">
          Back to home
        </button>
        <img
          className="absolute top-[6px] left-[0px] w-[17px] h-4 overflow-hidden"
          alt=""
          src="/images/home.svg"
        />
      </div>
      <div className="absolute top-[146.3px] left-[282px] opacity-50">
        Register and help us help you
      </div>
      <div className="absolute top-[480px] left-[280px] text-[16px] leading-[25px] inline-block w-[391px] h-[45px]">
        <span className="opacity-50">{`with registering your accepting our `}</span>
        <button className="text-coral">terms</button>
        <span className="opacity-50">{` and `}</span>
        <button className="text-coral">privacy policy</button>
      </div>
      <div className="absolute top-[218px] left-[280px] rounded box-border w-[391px] h-[63px] border-[2px] border-solid border-gainsboro">
        <input
          className="w-full h-full p-2 border-none outline-none"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="absolute top-[295px] left-[280px] rounded box-border w-[391px] h-[63px] border-[2px] border-solid border-gainsboro">
        <input
          className="w-full h-full p-2 border-none outline-none"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="absolute top-[372px] left-[280px] rounded box-border w-[391px] h-[63px] border-[2px] border-solid border-gainsboro">
        <input
          className="w-full h-full p-2 border-none outline-none"
          type="text"
          placeholder="Password"
        />
      </div>
      <button className="absolute top-[537px] left-[280px] rounded bg-coral w-[391px] h-[57px] flex items-center justify-center cursor-pointer">
        <span className="text-xl text-white">Register</span>
      </button>
      <div className="absolute top-[669px] left-[335px] text-xl">
        <span className="opacity-50">{`Already have an account? `}</span>
        <button className="text-coral bg-transparent border-none cursor-pointer">Login</button>
      </div>
    </div>
  );
}
