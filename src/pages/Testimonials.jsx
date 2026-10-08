import ButtonLink from "../components/ButtonLink";
import { PAGE_LINKS } from "../constants/app.constants";
import sevenNewsImg from "/assets/7news.png";
import courierMailImg from "/assets/courier-mail.png";
import tenImg from "/assets/ten.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anonymous US cop",
      feedback: "“I came in not knowing what to expect and absolutely loved it, thank you”",
    },
    {
      name: "Anonymous US cop",
      feedback:
        "“Great for Police to listen to. Very honest and engaging!. Keep up the great work”",
    },
    {
      name: "Anonymous US cop",
      feedback: "“Well delivered…Raw material: how it should be delivered for the police”",
    },
    {
      name: "Anonymous US cop",
      feedback:
        "“Awesome... Delivered direct, straight to the point. Enjoyed it and have learnt so much from it”",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
          Don't just take our word for it.
          <br />
          <span className="text-2xl md:text-4xl text-primary font-bold">
            Hear what participants are saying &nbsp;
          </span>
          <br />
          about working with Shaun:
        </h2>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-5 rounded-lg shadow-md border border-primary"
            >
              <p className="text-black text-lg italic mb-2">{testimonial.feedback}</p>
              <p className="text-black font-bold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <h6 className="my-4 text-xl text-center font-bold text-primary">
          Shaun has been covered in:
        </h6>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4">
          <img src={sevenNewsImg} alt="7 News" className="h-18 md:h-22 object-contain" />
          <img src={courierMailImg} alt="Courier Mail" className="h-18 md:h-22 object-contain" />
          <img src={tenImg} alt="Ten Logo" className="h-18 md:h-22 object-contain" />
        </div>
      </div>
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        <ButtonLink text="Back" to={PAGE_LINKS.testimonials.previous} isSecondary={true} />

        <ButtonLink text="Next" to={PAGE_LINKS.testimonials.next} />
      </div>
    </div>
  );
};

export default Testimonials;
