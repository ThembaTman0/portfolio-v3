import Image from "next/image";

interface ProjectProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const ProjectCard = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: ProjectProps) => {
  return (
    <div
      className={`h-full w-full ${backgroundImage} bg-cover bg-no-repeat rounded-5xl`}
    ></div>
  );
};

const Project = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto h-[400px] xl:h-[640px]">
        <ProjectCard
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Project"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <ProjectCard
          backgroundImage="bg-bg-img-2"
          title="Mountain View Project"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 ">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize bg-gradient-to-r from-blue-500 via-purple-700 to-orange-400 inline-block text-transparent bg-clip-text text-6xl">
            Brain-Tumor-Segmentation
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Automated supervised learning MRI tumor diagnosis system
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
