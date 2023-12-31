import Footer from "../components/Footer";
import "../mainpage.css";
const Sponsors = () => {
  return (
    <>
      <img
        className="absolute lg:top-5 lg:left-28 lg:w-24 lg:h-24 md:top-7 md:left-12 md:w-16 md:h-16 top-7 left-12 w-12 h-12"
        alt="logo"
        src="./assets/logos/logocream.png"
      />

      <div className=" bg-[#390035] w-full h-fit overflow-x-hidden bg-center bg-cover flex flex-col items-center bg-[url('./assets/bg-vectors/team-bg.svg')] bg-no-repeat pb-28">
        <div className="[font-family:Amboy] text-[#ffd1a8] text-center tracking-[0] leading-[normal] bg-[#20001E] mt-24 mb-0 p-2 text-3xl md:text-6xl rounded-md">
          Sponsors
        </div>
        <div className="grid grid-cols-1 mx-12 sm:mx-32 md:mx-56 lg:flex lg:w-[30rem]">
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000] my-24 justify-center">
            <h2 className="text-2xl text-center font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
              <a href="https://pureev.in/" target="_blank">Purev - Title sponsor</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/Pureev.jpeg"/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mx-12 md:mx-24">
          
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://galaxe.com/" target="_blank">Galaxe Solutions - Co-Title Sponsor</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/galaxySolutions.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://www.onlinesbi.sbi/" target="_blank">Sbi - Banking partner</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/SBI_bank.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://canarabank.com/" target="_blank">Canara - Silver sponsor</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/Canara_bank.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://tihan.iith.ac.in/" target="_blank">Tihan - Innovation partner</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/Tihan.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://instagram.com/choco.stone.ice.creams?igshid=NzZhOTFlYzFmZQ==" target="_blank">Chocostone - Hospitality partner</a>
            
            </h2>
            <img className="" alt="sponsor" src="sponsors/Chocostone.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://www.monsterenergy.com/en-us/" target="_blank">Monster - Energy partner</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/Monster.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://qoptars.com/" target="_blank">Qoptars - Media partner</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/qoptars.jpeg"/>
          </div>
          <div className="bg-[#20001E] rounded-3xl p-6 flex flex-col items-center w-fit shadow-lg shadow-[#000]">
            <h2 className="text-xl font-bold text-[#FFD1A8] mb-4 bg-[#700035] p-4 rounded-lg">
            <a href="https://makersofmilkshakes.com/india/index.html" target="_blank">Makers of Milkshakes - Food and beverages partner</a>
            </h2>
            <img className="" alt="sponsor" src="sponsors/makers_of_milkshakes.jpeg"/>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
    // <div className="bg-[#390035] flex flex-row justify-center w-full">
    //   <div className="bg-[#390035] overflow-hidden w-[1437px] h-[1945px]">
    //     <div className="relative w-[1545px] h-[1945px] left-[-55px]">
    //       <img
    //         className="absolute w-[1437px] h-[1945px] top-0 left-[55px]"
    //         alt="Vector"
    //         src="./assets/bg-vectors/team-bg.svg"
    //       />
    //       <img
    //         className="absolute w-[110px] h-[117px] top-[64px] left-[115px] object-cover"
    //         alt="Red logo"
    //         src="./assets/logos/logocream.png"
    //       />
    //       <div className="absolute w-[431px] h-[431px] top-[484px] left-[558px] bg-[#20001d] rounded-[20px]" />
    //       <div className="absolute w-[339px] h-[238px] top-[632px] left-[131px] bg-[#700035] rounded-[20px]" />
    //       <div className="absolute w-[339px] h-[85px] top-[529px] left-[132px] bg-[#700035] rounded-[20px]" />
    //       <div className="absolute w-[339px] h-[85px] top-[530px] left-[605px] bg-[#700035] rounded-[20px]" />
    //       <div className="absolute w-[339px] h-[85px] top-[530px] left-[1079px] bg-[#700035] rounded-[20px]" />
    //       <div className="absolute w-[339px] h-[238px] top-[632px] left-[603px] bg-[#700035] rounded-[20px]" />
    //       <div className="absolute w-[339px] h-[238px] top-[632px] left-[1079px] bg-[#700035] rounded-[20px]" />
    //       <div className="absolute w-[431px] h-[431px] top-[972px] left-[557px] bg-[#20001d] rounded-[20px]" />
    //       <div className="absolute w-[431px] h-[431px] top-[1460px] left-[558px] bg-[#20001d] rounded-[20px]" />
    //       <div className="absolute w-[513px] h-[128px] top-[201px] left-[517px] bg-[#20001d] rounded-[20px]" />
    //       <div className="absolute w-[593px] h-[287px] top-[121px] left-[477px] [font-family:'Amboy_-Black',Helvetica] font-black text-[#ffd1a8] text-[96px] text-center tracking-[0] leading-[normal]">
    //         Sponsors
    //       </div>
    //       <div className="absolute w-[593px] h-[287px] top-[613px] left-[477px] [font-family:'Amboy_-Black',Helvetica] font-black text-[#ffd1a8] text-[40px] text-center tracking-[0] leading-[normal]">
    //         pics
    //       </div>
    //       <div className="left-[952px] absolute w-[593px] h-[287px] top-[613px] [font-family:'Amboy_-Black',Helvetica] font-black text-[#ffd1a8] text-[40px] text-center tracking-[0] leading-[normal]">
    //         pics
    //       </div>
    //       <div className="left-0 absolute w-[593px] h-[287px] top-[613px] [font-family:'Amboy_-Black',Helvetica] font-black text-[#ffd1a8] text-[40px] text-center tracking-[0] leading-[normal]">
    //         pics
    //       </div>
    //       <div className="left-[4px] absolute w-[593px] h-[287px] top-[428px] [font-family:'Ariana_Pro-Regular',Helvetica] font-normal text-[#ffd1a8] text-[48px] text-center tracking-[0] leading-[normal]">
    //         Sponsors
    //       </div>
    //       <div className="left-[477px] absolute w-[593px] h-[287px] top-[428px] [font-family:'Ariana_Pro-Regular',Helvetica] font-normal text-[#ffd1a8] text-[48px] text-center tracking-[0] leading-[normal]">
    //         Sponsors
    //       </div>
    //       <div className="left-[952px] absolute w-[593px] h-[287px] top-[428px] [font-family:'Ariana_Pro-Regular',Helvetica] font-normal text-[#ffd1a8] text-[48px] text-center tracking-[0] leading-[normal]">
    //         Sponsors
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sponsors;
