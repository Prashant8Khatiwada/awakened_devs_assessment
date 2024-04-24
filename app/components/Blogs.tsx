import React from "react";
import Blog from "../../public/blog.png";
import Image from "next/image";
import rightArrow from "../../public/svg/Arrow 1.png";

const Blogs = () => {
  return (
    <div className=" h-auto w-screen mb-24 mt-11 flex flex-row items-center justify-center">
      <div className="h-[90%] w-[82%] lrg:w-[90%] ">
        {/* Title Part  */}

        <div className="flex flex-col gap-3  ">
          <h3 className="text-font-lg leading-tight ">Blogs</h3>
          <hr
            style={{
              width: "30%",
              borderWidth: "1.9px",
              borderColor: "#FF7757",
              fontWeight: "bold",
            }}
          />

          <p className="text-font-md text-color-secondary-light">
            An insight the incredible experience in the world
          </p>
        </div>

        {/* Descriptor Part  */}
        <div className="flex w-full mt-14 gap-7 sml:flex-col">
          {/* image part  */}
          <div className="w-[50%] h-[590px] sml:w-[100%] sml:h-[455px] relative rounded-[26px] overflow-hidden">
            <Image
              src={Blog}
              alt="blog"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          {/* actual description  */}
          <div className="w-[50%] sml:w-[100%] self-center text-color-secondary flex flex-col gap-6">
            <h3 className="text-[54px] leading-tight mid:text-[40px]">
              Beautiful Italy <br /> Let’s travel
            </h3>
            <article className="text-font-md mid:text-font-sm">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master- builder of human
              happiness. No one rejects, dislike, or avoids plasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremly painful. Nor again is there anyone who loves or pursues.
            </article>
            <p className="text-font-md flex items-center gap-2 text-color-btn-primary">
              Read More
              <Image className="ml-2" src={rightArrow} alt="RightArrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
