import ButtonLink from "../components/ButtonLink";
import { PAGE_LINKS } from "../constants/app.constants";

const CourseIntro = () => {
  const actions = [
    "You’ll learn how to regulate hypervigilance, improve sleep, and stop living in constant fight or flight.",
    "You’ll rebuild emotional control, clarity, and resilience under pressure.",
    "You’ll reconnect with your family and feel like yourself again.",
    "This is not therapy.",
    "This is training to deal with the impact of the job.",
  ];

  return (
    <div className="flex flex-col justify-start items-center relative">
      <div>
        <div className="flex items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
            Say hello to your personalized
            <br />
            <span className="text-3xl md:text-4xl font-bold text-primary text-center">
              &nbsp;Police Stress & Recovery Pathway.&nbsp;
            </span>
          </h3>
        </div>

        <p className="text-md md:text-lg text-center my-4 font-semibold">
          Built by a former K9 cop who has lived the job and rebuilt from the edge, this course
          targets the real impact policing has on your brain, nervous system, and relationships.
        </p>
        <ol className="space-y-5 text-body list-inside">
          {actions.map((action, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary me-1.5 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-md md:text-lg font-normal">{action}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex gap-4 justify-center fixed bottom-0 w-full py-2 px-8 bg-accent md:max-w-5xl">
        <ButtonLink text="Back" to={PAGE_LINKS.courseIntro.previous} isSecondary={true} />

        <ButtonLink text="Next" to={PAGE_LINKS.courseIntro.next} />
      </div>
    </div>
  );
};

export default CourseIntro;
