import { InstagramEmbed, FacebookEmbed } from 'react-social-media-embed';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
const Social = () => {
    return (
        <>
        <div className='w-screen flex justify-center items-center pt-5 gap-5'>
            <h1 className='underline'>Follow us on Social Media!</h1>
            <FaInstagram size={45} />
            <FaFacebook size={40} />
        </div>
        <div className='w-screen z-50'>
            <div className='flex justify-around gap-5 pt-5 mx-5'>
                <>
                    <InstagramEmbed url="https://www.instagram.com/p/C58dBEauU8i/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </>
                <>
                    <InstagramEmbed url="https://www.instagram.com/p/CuR1aw1uNud/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </>
                <>
                    <InstagramEmbed url="https://www.instagram.com/p/CmOilhJOPrT/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </>
                <>
                    <InstagramEmbed url="https://www.instagram.com/p/CFzGsClFVzu/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </>
                <>
                    <InstagramEmbed url="https://www.instagram.com/p/C1Dmr__MDI9/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </>
            </div>
        </div>
        <div className='w-screen z-50'>
        <div className='flex justify-center gap-5 pt-5 mx-5'>
            <>
                <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/855091313286549" />
            </>
            <>
                <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/963641089098237" />
            </>
            <>
                <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/957980502997629" />
            </>
            <>
                <FacebookEmbed url="https://www.facebook.com/VibraWood/posts/811499604312387" />
            </>
        </div>
    </div>
    </>
    );
  };

export default Social;