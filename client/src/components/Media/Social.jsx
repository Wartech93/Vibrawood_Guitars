import { InstagramEmbed, FacebookEmbed } from 'react-social-media-embed';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
const Social = () => {
    return (
        <div className="min-h-screen w-screen bg-yellow-950">
          <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-amber-50 underline">Follow us on Social Media!</h1>
    
            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-5">
              <FaInstagram className='text-pink-500' size={45} />
              <FaFacebook className='text-blue-500' size={40} />
            </div>
    
            {/* Instagram Section */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 drop-shadow-lg">
              <InstagramEmbed url="https://www.instagram.com/p/C58dBEauU8i/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed url="https://www.instagram.com/p/CuR1aw1uNud/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed url="https://www.instagram.com/p/CmOilhJOPrT/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed url="https://www.instagram.com/p/CFzGsClFVzu/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed url="https://www.instagram.com/p/C1Dmr__MDI9/?utm_source=ig_embed&amp;utm_campaign=loading" />
              <InstagramEmbed url="https://www.instagram.com/p/Cmk6CimsYmO/?utm_source=ig_embed&amp;utm_campaign=loading" />
            </div>
    
            {/* Facebook Section */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 drop-shadow-lg">
              <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/855091313286549" />
              <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/963641089098237" />
              <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/957980502997629" />
              <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/811499604312387" />
              <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/797323702396644" />
              <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/750676237061391" />
            </div>
          </div>
        </div>
      );
  };

export default Social;