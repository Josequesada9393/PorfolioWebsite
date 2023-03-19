import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-20 pt-10">
      <div className="w-full bg-red mx-auto">
        <SocialMediaIcons mx={'mx-10 pt-2'}/>
        <div className="md:flex justify-center mx-10  md:justify-between text-center ">
          <p className="font-playfair font-semibold text-xl  text-yellow">
           Jose Gomez
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 JG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;