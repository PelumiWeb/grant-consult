import React from "react";
import CustomButton from "../../components/CustomButton";
import LabelInput from "../../components/LabelInput";

type Props = {};
type ArticleContent = {
  header?: string;
  paragraph?: string;
};

const ArticleContent = (props: ArticleContent) => {
  return (
    <div className="my-2">
      {props.header && (
        <p className="font-bold text-[20px] leading-[61px] text-primary">
          {props.header}
        </p>
      )}
      <p className="font-medium text-[13px] leading-[29px]">
        {props.paragraph}
      </p>
    </div>
  );
};
const page = (props: Props) => {
  const tags = ["Grant Writing", "Rejection Tips", "2025"];
  return (
    <div className="px-16 py-4">
      <div className="flex items-center w-full mt-8 pb-10">
        <p className="text-textColor"> Home </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Blogs/Articles </p>
        <p className="text-textColor mx-3">{">>"}</p>
        <p className="text-textColor">Read More </p>
      </div>

      <div className="flex w-full justify-between items-center md:items-start flex-col md:flex-row">
        <div className="w-full md:w-[60%] bg-white shadow-read-more-shadow rounded-[5px] p-5 relative">
          <div className="mb-32">
            <h4 className="text-secondaryColor text-[30px] font-bold leading-[40px] w-[80%]">
              Overcoming Rejection in Grant Writing Applications: Effective Tips
              to Prepare for the Next Opportunity in 2025
            </h4>
            <div className="flex items-center my-4">
              <img src="/articleImage.svg" alt="" />
              <div className="ml-2">
                <p className="text-primary leading-[14px] text-[12px] font-semibold">
                  Genevieve Aningo 
                </p>
                <p className="font-normal text-[10px] leading-[13px] text-textColor">
                  Published Dec 31, 2024.
                </p>
              </div>
            </div>
            <div className="flex items-center ">
              {tags.map((data) => (
                <button className="bg-tagsBackground py-1 px-2 m-1 rounded-[5px] ">
                  <p className="text-secondaryColor font-medium text-[14px] leading-[21px] ">
                    {data}
                  </p>
                </button>
              ))}
            </div>
            {/* Image */}
            <div className="w-full h-[321px] my-4">
              <img
                src="/imageMore.svg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <ArticleContent paragraph="Grant writing is an art and science, requiring skill, precision, and persistence. Facing rejection can be disheartening but also a necessary deed to help you bounce back better. It is a stepping stone toward refining your approach and increasing your success rate in future applications.  With the New Year still fresh, we have prepared this piece to help you overcome rejection that you must have encountered in previous years and we added some effective tips to help you prepare for grant writing opportunities in 2025. We believe that 2025 presents better opportunities and you should be equipped to grab them all." />
            {/* <div className="my-2">
            <p className="font-bold text-[20px] leading-[61px] text-primary">
              Reflect on Feedback
            </p>
            <p className="font-medium text-[13px] leading-[29px]">
              Grant writing is an art and science, requiring skill, precision,
              and persistence. Facing rejection can be disheartening but also a
              necessary deed to help you bounce back better. It is a stepping
              stone toward refining your approach and increasing your success
              rate in future applications.  With the New Year still fresh, we
              have prepared this piece to help you overcome rejection that you
              must have encountered in previous years and we added some
              effective tips to help you prepare for grant writing opportunities
              in 2025. We believe that 2025 presents better opportunities and
              you should be equipped to grab them all.
            </p>
          </div> */}
            <ArticleContent
              header="Reflect on Feedback"
              paragraph="Rejection offers a learning opportunity. Review the feedback provided by the grant committee, if available. Analyze the critique to understand where your proposal fell short—be it in aligning with the funder’s priorities, budget clarity, or demonstrating the project's impact. If feedback isn’t provided, consider reaching out to the funder for insights, as many are willing to offer constructive advice. Grant committees offer their feedback objectively, thus getting a rejection is an indication your application falls below a mandatory requirement. You are to pinpoint these omissions so that your next application is complaint with all requirements "
            />
            <ArticleContent
              header="Remain Positive"
              paragraph="Nobody likes to receive a ‘no’ but life cannot happen without you hearing that word. Always remember it is not you that received a ‘no’, but your application, thus do not wallow or fall into depression. A rejected application is not the end of the world, rather it's a redirection to better applications. Rejection is part of the process, not a reflection of your project’s worth or your abilities. The best spirit to wear is an undefeated mood laced with optimism that your ‘yes’ will surely happen soon! So, stay positive, keep honing your skills  and remember that persistence pays off."
            />
            <ArticleContent
              header="Going Forward: Conduct Thorough Research"
              paragraph="Before embarking on your next application, invest time in identifying suitable grant opportunities. Study the objectives, values, and past funding patterns of the organization. Tailor your proposal to align with their goals, ensuring your project resonates with their mission. Use resources like GrantsConsult to streamline your research and find grants that best fit your project’s scope."
            />
            <ArticleContent
              header="Refine Your Proposal Element"
              paragraph="Before embarking on your next application, invest time in identifying suitable grant opportunities. Study the objectives, values, and past funding patterns of the organization. Tailor your proposal to align with their goals, ensuring your project resonates with their mission. Use resources like GrantsConsult to streamline your research and find grants that best fit your project’s scope."
            />

            <ArticleContent
              header="Improve Clarity and Professionalism"
              paragraph="Grant reviewers appreciate proposals that are clear, concise, and professionally presented. Avoid jargon and overly technical language unless essential. Use simple yet impactful words to communicate your ideas effectively. Formatting matters too—make sure your proposal is visually appealing and easy to navigate."
            />
            <ArticleContent
              header="Build Relationships"
              paragraph="Engaging with funding organizations before submitting your proposal can provide invaluable insights. Attend webinars, workshops, or networking events hosted by funders to understand their expectations better. Building rapport with grant officers can also make your application more memorable."
            />
            <ArticleContent
              header="Strengthen Your Supporting Materials"
              paragraph="Supporting documents, such as letters of endorsement, project timelines, and case studies, add depth to your application. Ensure these materials complement your proposal by reinforcing its feasibility and potential impact."
            />

            <ArticleContent
              header="Seek Peer Review"
              paragraph="Before submission, have your proposal reviewed by colleagues or mentors experienced in grant writing. Fresh eyes can catch errors, provide feedback, and suggest improvements you might have overlooked."
            />

            <ArticleContent
              header="Leverage Learning Resources"
              paragraph="Consider utilizing comprehensive guides on grant writing, like the one available on GrantsConsult. These resources provide step-by-step instructions on crafting compelling proposals, conducting effective research, and presenting your work professionally."
            />
            <ArticleContent
              header="Plan Ahead for 2025"
              paragraph="Start preparing early for 2025 grant cycles. Set a schedule for researching opportunities, drafting proposals, and gathering necessary documentation. Early preparation ensures you have ample time to refine your work and address potential challenges."
            />

            <ArticleContent paragraph="By embracing these strategies, you can turn rejection into a stepping stone for success. Grant writing is a journey of continuous improvement, and each attempt brings you closer to your goals. Let 2025 be the year your persistence and preparation yield transformative outcomes." />
          </div>
          <div className="absolute bottom-0 border-t border-t-borderColor w-[95%] py-4 flex items-center justify-between px-4 md:px-0">
            <div className="flex items-center justify-between w-[25%]">
              <CustomButton
                IconLeft="/likeArticle.svg"
                title="Like"
                height="h-[37px]"
                width="w-[80px]"
                backgrounColor="bg-transparent"
                borderColor="border-borderColor"
                textStyle="text-textColor "
              />
              <CustomButton
                IconLeft="/loveArticle.svg"
                title="Save"
                height="h-[37px]"
                width="w-[80px]"
                backgrounColor="bg-transparent"
                borderColor="border-secondaryColor"
                textStyle="text-secondaryColor "
              />
            </div>
            <div className="flex items-center justify-between w-[12%]">
              <div className="w-[24px] h-[24px]">
                <img
                  src="/facebookArticle.svg"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div className="w-[24px] h-[24px]">
                <img
                  src="/twitterArticle.svg"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div className="w-[24px] h-[24px]">
                <img
                  src="/linkedInArticle.svg"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[35%] mt-4 md:mt-0">
          <div className="shadow-article-shadow w-full rounded-[5px] bg-[#FFFFFF] h-full p-4">
            <p className="text-primary font-semibold text-[14px] leading-[21px] pb-4">
              Related Articles
            </p>
            <div className="flex items-center my-2">
              <div className="w-[80px] h-[70px] mr-5">
                <img
                  src="/relatedArticle1.svg"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>

              <div>
                <p className="text-primary font-semibold text-[14px] leading-[21px]">
                  Essential Grant Writing Tips for 2025
                </p>
                <p className="text-textColor text-[12px] leading-[15px] ">
                  Dec 28, 2024.
                </p>
              </div>
            </div>
            <div className="flex items-center my-2">
              <div className="w-[80px] h-[70px] mr-5">
                <img
                  src="/relatedArticle2.svg"
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>

              <div>
                <p className="text-primary font-semibold text-[14px] leading-[21px]">
                  Building Strong Grant Partnerships
                </p>
                <p className="text-textColor text-[12px] leading-[15px] ">
                  Dec 15, 2024.
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-article-shadow w-full rounded-[5px] bg-[#FFFFFF] h-full p-4 my-4">
            <p className="text-primary font-semibold text-[14px] leading-[21px]">
              Newsletter
            </p>

            <p className="font-normal text-[12px] leading-[18px]">
              Stay updated with the latest grant writing tips and resources
            </p>

            <LabelInput
              placeholder="Enter your email"
              value=""
              height="h-[36px]"
              width="w-full"
            />
            <CustomButton
              title="Subscribe"
              textStyle="text-white font-semibold text-[14px] leading-[21px] text-center"
              height="h-[22px]"
              width="w-full"
              backgrounColor="bg-secondaryColor"
            />
          </div>
          <div className="shadow-article-shadow w-full rounded-[5px] bg-[#FFFFFF] h-[150px] p-4 my-4">
            <p className="text-primary font-semibold text-[14px] leading-[21px]">
              Popular Tags
            </p>
            <div className="w-full flex justify-between flex-wrap">
              {[
                "Grant Writings",
                "Education",
                "Healthcare",
                "Research",
                "Nonprofit",
                "Tips",
                "Success Stories",
              ].map((data) => (
                <button className="bg-backgroundColor p-1 m-1  rounded-[5px]">
                  <p className="font-normal text-[12px] leading-[18px]">
                    {data}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
