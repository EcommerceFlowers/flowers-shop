// import { cx } from '@utils/tools';

export default function LoginPage() {
  return (
    <div className="relative bg-whitesmoke w-full h-[808px] overflow-hidden text-left text-lg text-gray font-roboto" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="absolute top-[88px] left-[232px] w-[976px] h-[632px]">
        <img
          className="absolute top-[0px] left-[488px] w-[488px] h-[632px] object-cover"
          alt=""
          src="/images/login.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-white w-[488px] h-[632px]" />
      </div>
      <div className="absolute top-[121px] left-[280px] text-[32px] text-black">
        Login
      </div>
      {/* <div className="absolute top-[250px] left-[280px] rounded box-border w-[391px] h-[63px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[271px] left-[309px] opacity-50">Username</div>
      <div className="absolute top-[327px] left-[280px] rounded box-border w-[391px] h-[63px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[348px] left-[309px] opacity-50">Password</div> */}
      <div>
        <div className="absolute top-[250px] left-[280px] rounded box-border w-[391px] h-[63px] border-[1px] border-solid border-gainsboro">
          <input
            className="w-full h-full p-2 border-none outline-none"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="absolute top-[327px] left-[280px] rounded box-border w-[391px] h-[63px] border-[1px] border-solid border-gainsboro">
          <input
            className="w-full h-full p-2 border-none outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <button className="absolute top-[500px] left-[280px] rounded bg-coral w-[391px] h-[57px]" />
      <button className="absolute top-[519px] left-[451px] text-xl text-white font-normal">
        Login
      </button>
      <div className="absolute top-[413px] left-[280px] w-[129px] h-[21px]">
        <div className="absolute top-[3px] left-[0px] bg-gainsboro w-4 h-4" style={{ backgroundColor: '#DCDCDC' }} />
        <div className="absolute top-[0px] left-[21px] opacity-50 text-base">Remember me</div>
      </div>
      <div className="absolute top-[630px] left-[336px] text-xl">
        <span className="opacity-50">{`Don't have an account? `}</span>
        <button className="text-coral">Register</button>
      </div>
      <div className="absolute top-[134px] left-[540px] w-[131px] h-[21px] text-black">
        <button className="absolute top-[0px] left-[21px] font-normal">Back to home</button>
        <img
          className="absolute top-[6px] left-[0px] w-[17px] h-[15px] overflow-hidden"
          alt=""
          src="/images/home.svg"
        />
      </div>
      <div className="absolute top-[172px] left-[282px] opacity-50">
        Login and have more fun
      </div>
    </div>
  );
}
