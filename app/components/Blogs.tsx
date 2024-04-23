import React from "react";
import Blog from "../../public/blog.png";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className=" h-auto w-screen mb-24 mt-11 flex flex-row-reverse items-center justify-center">
      <div className="h-[90%] w-[82%] ">
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
        <div className="flex w-full mt-14 gap-7">
          {/* image part  */}
          <div className="w-[50%]">
            <Image src={Blog} alt="blog" width={752} height={500} />
          </div>

          {/* actual description  */}
          <div className="w-[50%] self-center text-color-secondary flex flex-col gap-6">
            <h3 className="text-[54px] leading-tight">
              Beautiful Italy <br /> Let’s travel
            </h3>
            <article className="text-font-md">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master- builder of human
              happiness. No one rejects, dislike, or avoids plasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremly painful. Nor again is there anyone who loves or pursues.
            </article>
            <p style={{ color: "#FF7757", fontSize: "24px" }}>
              Read More right arrow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
