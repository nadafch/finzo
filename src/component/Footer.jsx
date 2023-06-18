import { RiArrowDownSLine } from "react-icons/ri";
import UK from "../assets/image/uk.svg";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Logo from "../assets/image/Logo-white.svg";

function Footer() {
  return (
    <div className="w-full bg-gulf-harbour-500 text-white px-8 md:px-24 py-4">
      <div className="w-full max-w-screen-xl lg:flex flex-col md:flex-row flex-wrap mt-10">
        <div className="w-full lg:w-2/3 grid grid-cols-4 gap-4">
          <div className="col-span-1 flex flex-col gap-3">
            <h2 className="font-medium text-lg">Platform</h2>
            <p className="font-light">Multi-virtual Card</p>
            <p className="font-light">Invesment</p>
            <p className="font-light">Learn</p>
          </div>
          <div className="col-span-1 flex flex-col  gap-3">
            <h2 className="font-medium text-lg">Solutions</h2>
            <p className="font-light">Exchange & Pro</p>
            <p className="font-light">Wallet</p>
            <p className="font-light">Commerce</p>
            <p className="font-light">Taxes</p>
          </div>
          <div className="col-span-1 flex flex-col  gap-3">
            <h2 className="font-medium text-lg">Features</h2>
            <p className="font-light">Transfer</p>
            <p className="font-light">Investor Index</p>
            <p className="font-light">Exchange</p>
          </div>
          <div className="col-span-1 flex flex-col  gap-3">
            <h2 className="font-medium text-lg">Company</h2>
            <p className="font-light">About Us</p>
            <p className="font-light">Career</p>
            <p className="font-light">Blog</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
          <h1 className="font-medium text-lg">Follow our newsletter </h1>
          <div className="p-1 mt-6 bg-white rounded-xl flex">
            <input
              placeholder="Your work email"
              className="w-full px-1 rounded-xl outline-none text-black"
            />
            <button className="p-3 rounded-xl text-gulf-harbour-500 bg-frosty-dawn">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="py-3 mt-10 mb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={UK} />
            <p>English</p>
            <span className="mt-1">
              <RiArrowDownSLine size={20} />
            </span>
          </div>
          <div className="flex items-center gap-3">
            <p>Follow us on</p>
            <AiFillFacebook size={24} />
            <AiFillLinkedin size={24} />
            <AiFillTwitterSquare size={24} />
          </div>
        </div>
        <div className="w-full border-t border-white/30 flex justify-between items-center py-4">
          <img src={Logo} className="w-[80px] md:w-fit" />
          <p className="text-xs md:text-sm">© Finzo. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-1 md:gap-4 text-xs md:text-base">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Security</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
